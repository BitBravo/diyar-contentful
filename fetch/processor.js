import {findComponent} from "../lib/parser";

export const pageProcessor = (content, page) => {
    return {
        id: page.id,
        title: page.title.en,
        displayTitle: page.displayTitle,
        description: page.description,
        components: page.components.map(y => mapComponent(content, y))
    }
};

const isAsset = (value)     => (value.en && value.en.sys && value.en.sys.linkType && value.en.sys.linkType === 'Asset');
const isContent = (value)   => (value.en && value.en.sys && value.en.sys.linkType && value.en.sys.linkType === 'Entry');

export const componentProcessor = (content, component, position) => {
    if (component.sys && component.sys.contentType && component.sys.contentType.sys && component.sys.contentType.sys.id === 'page') {
        return null;
    }

    const fields = component.fields;
    let currPosition = position + '/' + fields.title.en;
    let result = {};
    for (let key in fields) {
        if (fields.hasOwnProperty(key)) {
            const propValue = fields[key];
            if (typeof propValue === 'object') {
                if (propValue.en && propValue.en instanceof Array) {
                    const sc = propValue.en
                        .filter(x => (x.sys && x.sys.linkType && x.sys.linkType === 'Entry'))
                        .map(x => findComponent(content, x.sys.id));
                    result[key] = sc.map(x => componentProcessor(content, x, currPosition));
                }
                else {
                    if (isAsset(propValue)) {
                        // NOOP
                    } else if (isContent(propValue)) {
                        let subcomp = findComponent(content, propValue.en.sys.id);
                        let mappedComponent= componentProcessor(content, subcomp, currPosition);
                        if (mappedComponent) result[key] = mappedComponent; // Because linked content can be a page.
                    } else {
                        result[key]=propValue;
                    }
                }
            }
        }
    }
    return result;
};

const mapComponent = (content, id) => componentProcessor(content, findComponent(content, id));


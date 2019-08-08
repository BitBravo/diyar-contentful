import fs from 'fs';

export const emit = (content) => {
    fs.writeFileSync('./dist/output.md', content);
};

export const mapToMd = (content) => {
    const mapped = content.map(page => {
        const componentsOutput = page.components.map(c => mapComponent(c)).join('\n');
        const pageOutput = mapPage(page);
        return `${pageOutput}\n${componentsOutput}`;
    });
    return mapped.join('\n');
};

const mapPage = (page) => `# title: ${page.title}
## displayTitle (en): ${page.displayTitle.en}
## displayTitle (ar): ${page.displayTitle.ar}
description (en): ${page.description.en}

description (ar): ${page.description.ar}
`;

const isPrimitivType = (val) =>
    (
        (typeof val === 'string') ||
        (typeof val === 'number') ||
        (typeof val === 'boolean')
    );

const isLastLeaf = (lf) => Object.keys(lf).every(x => isPrimitivType(lf[x]));

const serializeLastLeaf = (obj) =>  {
    let ret = '';
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            ret = `${ret}\n\n${key}: ${obj[key]}\n`;
        }
    }
    return ret;
};

const addPrefixWhenLastLeaf = (prefix, key, rest) => (`\n${addPrefix(prefix, key, rest)}`);
const addPrefix = (prefix, key, rest) => (prefix ? `- ### ${prefix} -> ${key}${rest}\n` : `- ### ${key}${rest}\n`);

const traverseLowerNodes = (prefix, key, propValue) => {
    let nextPrefix = prefix ? `${prefix} -> ${key}` : key;
    let next = mapComponentHelper(`${nextPrefix}`, propValue);
    return next ? `\n${next}` : '';
};

const mapSubsection = (subsection) => subsection.map(x => mapComponent(x)).join('\n');

const mapComponentHelper = (prefix, cwt) => {
    let parentNode = '';

    for (let key in cwt) {
        if (cwt.hasOwnProperty(key)) {
            let childNode = '';
            const pValue = cwt[key];
            if (pValue instanceof Array) {
                childNode = childNode + `\n### Subsection ${key}` + mapSubsection(pValue);
            } else if (typeof pValue === 'object') {
                if (isLastLeaf(pValue)) {
                    const node = serializeLastLeaf(pValue);
                    childNode = addPrefixWhenLastLeaf(prefix, key, node);
                    childNode = `${childNode}\n`;
                } else {
                    const rest = traverseLowerNodes(prefix, key, pValue);
                    childNode = addPrefix(prefix, key, rest);
                }
            }
            parentNode += childNode;
        }
    }
    return parentNode;
};

const mapComponent = (c) => {
    const title = c.title.en;
    delete c.title;
    const cwtOut = mapComponentHelper('', c);

    return `
### title: ${title}
${cwtOut}
`
};


import assert from 'assert';


export const findPages = (data) => {
    return data.entries
        .filter(x => x.sys.contentType.sys.linkType === 'ContentType' && x.sys.contentType.sys.id === 'page')
        .map(x => {
            return  {
                id: x.sys.contentType.sys.id,
                title: x.fields.title,
                displayTitle: x.fields.displayTitle,
                description: x.fields.description,
                components: x.fields.components.en
                    .filter(y => y.sys.type === 'Link')
                    .map(y => y.sys.id)
            }
        });
};

export const findComponent = (content, id) => {
    const components = content.entries.filter(x => x.sys.id === id);
    assert.strictEqual(components.length, 1);
    return components[0];
};



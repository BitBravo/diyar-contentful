import fs from 'fs';

export const loadContent = (file) => {
    let content = fs.readFileSync(`${__dirname}/${file}`);
    return JSON.parse(content);
};

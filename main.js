import {findPages} from "./parser";
import {loadContent} from './utils'
import {pageProcessor} from "./processor";
import {emit, mapToMd} from "./emitter";

export const mainProcessor = (file) => {
    const content = loadContent(file);
    let allPages = findPages(content);
    let mappedToObj = allPages.map(x => pageProcessor(content, x));
    let md = mapToMd(mappedToObj);
    emit(md);
};


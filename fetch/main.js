import {findPages} from "../lib/parser";
import {loadContent} from '../lib/utils'
import {pageProcessor} from "./processor";
import {emit, mapToMd} from "../lib/emitter";

export const mainProcessor = (file) => {
    const content = loadContent(file);
    let allPages = findPages(content);
    let mappedToObj = allPages.map(x => pageProcessor(content, x));
    let md = mapToMd(mappedToObj);
    emit(md);
};


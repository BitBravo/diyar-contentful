import {findPages, findComponent} from '../parser';
import {componentProcessor, pageProcessor} from '../processor';
import { constants } from './constants';
import chFieldsSample from './component.cardhero.fields.sample';
import chProcessedSample from './component.cardhero.processed.sample';
import content from '../export-01';

describe('Main parser: ', () => {
    beforeEach(() => {
    });

    afterEach(() => {
    });

    // test('read pages and generate markdown', () => {
    //     const content = loadContent('export-01.json');
    //     let pages = findPages(content);
    //     pages = pages.map(x => {
    //         return pageProcessor(content, x)
    //     });
    //     expect(pages.length).toBe(26);
    //     let mapped = mapContent(pages);
    //     emit(mapped)
    // });

    test('read pages', () => {
        let pages = findPages(content);
        pages = pages.map(x => {
            return pageProcessor(content, x)
        });
        expect(pages.length).toBe(26);
        //console.log(util.inspect(pages, false, null, true));
    });

    test('find media block main component', () => {
        const component = findComponent(content, constants.components.cardHero.id);
        expect(component).toBeDefined();
        expect(component.sys.id).toBe(constants.components.cardHero.id);
        expect(component.fields.title.en).toBe('Component - Media Block Main - The Project Page - Diyar Location');
    });

    test('process media block main component', () => {
        const component = findComponent(content, constants.components.cardHero.id);
        const proc = componentProcessor(content, component);
        expect(proc).toBeDefined();
        expect(proc.displayTitle.en).toBe(constants.components.cardHero.displayTitle.en);
        expect(proc.subtitle.ar).toBe(constants.components.cardHero.subtitle.ar);
    });

    test('generic component field processor', () => {
        const component = {
            fields: chFieldsSample
        };
        const result = componentProcessor(content, component);

        expect(result).toStrictEqual(chProcessedSample);
    });

});

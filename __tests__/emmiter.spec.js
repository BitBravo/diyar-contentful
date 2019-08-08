import {mapToMd, emit} from '../emitter';
import content from './contentful.processed.sample';


describe('Emitter: ', () => {
    beforeEach(() => {
    });

    afterEach(() => {
    });

    test('will output content as received', () => {
        let mapped = mapToMd(content);
        emit(mapped);
    });

    test('remove title from object', () => {
        const component = {
            "title": {
                "en": "Component - Media Block Main - The Project Page - Diyar Location"
            },
            "displayTitle": {
                "ar": "موقع ديار",
                "en": "Diyar Location"
            },
            "subtitle": {
                "ar": "متألّقاً على مقربة من المياه المتلألئة للخليج العربي",
                "en": "Rising from the pristine waters of the Arabian Gulf"
            },
            "body": {
                "ar": "يشكّل ديار المحرّق إضافة بارزة مميّزة إلى الساحل الشمالي الشرقي لمملكة البحرين. فهذا الأرخبيل الشاسع المكوّن من 7 جزر مستصلحة تقع قبالة ساحل المحرّق التي كانت تاريخياً العاصمة المزدهرة للبحرين.\n\nومن خلال تاريخها العريق الذي يمتد إلى أيام حضارة دلمون القديمة، تشتهر المحرّق بتراثها المتجذّر وتقاليد الضيافة الأصيلة السائدة فيها – ولا عجب بهذا فهي كانت في الماضي محور الحياة الاجتماعية والاقتصادية للبحرين وشهدت فترات مهمّة جداً في العديد من المجالات بدءً من التجارة التقليدية للؤلؤ وصولاً إلى كونها محطّة بارزة على طريق الحرير.",
                "en": "Diyar Al Muharraq is an iconic addition to Bahrain’s north-eastern coastline. This vast archipelago of 7 man-made islands is located off the shores of Muharraq, the Kingdom’s historic former capital.\n\nWith a past that stretches back as far as the ancient Dilmun civilisation, Muharraq is renowned for its rich culture and warm hospitality – and was once the thriving epicentre of Bahrain’s society and economy, from the traditional pearling industry to the Silk Route.\n\n"
            },
            "bottomSection": [
                {
                    "title": {
                        "en": "Component - CTA - Register Interest"
                    },
                    "link": {
                        "title": {
                            "en": "Link - Register Interest"
                        },
                        "linkText": {
                            "ar": "سجل اهتمامك",
                            "en": "Register Your Interest"
                        }
                    },
                    "type": {
                        "en": "Primary"
                    }
                }
            ]
        };
        const compWithoutTitleExpected = {
            "displayTitle": {
                "ar": "موقع ديار",
                "en": "Diyar Location"
            },
            "subtitle": {
                "ar": "متألّقاً على مقربة من المياه المتلألئة للخليج العربي",
                "en": "Rising from the pristine waters of the Arabian Gulf"
            },
            "body": {
                "ar": "يشكّل ديار المحرّق إضافة بارزة مميّزة إلى الساحل الشمالي الشرقي لمملكة البحرين. فهذا الأرخبيل الشاسع المكوّن من 7 جزر مستصلحة تقع قبالة ساحل المحرّق التي كانت تاريخياً العاصمة المزدهرة للبحرين.\n\nومن خلال تاريخها العريق الذي يمتد إلى أيام حضارة دلمون القديمة، تشتهر المحرّق بتراثها المتجذّر وتقاليد الضيافة الأصيلة السائدة فيها – ولا عجب بهذا فهي كانت في الماضي محور الحياة الاجتماعية والاقتصادية للبحرين وشهدت فترات مهمّة جداً في العديد من المجالات بدءً من التجارة التقليدية للؤلؤ وصولاً إلى كونها محطّة بارزة على طريق الحرير.",
                "en": "Diyar Al Muharraq is an iconic addition to Bahrain’s north-eastern coastline. This vast archipelago of 7 man-made islands is located off the shores of Muharraq, the Kingdom’s historic former capital.\n\nWith a past that stretches back as far as the ancient Dilmun civilisation, Muharraq is renowned for its rich culture and warm hospitality – and was once the thriving epicentre of Bahrain’s society and economy, from the traditional pearling industry to the Silk Route.\n\n"
            },
            "bottomSection": [
                {
                    "title": {
                        "en": "Component - CTA - Register Interest"
                    },
                    "link": {
                        "title": {
                            "en": "Link - Register Interest"
                        },
                        "linkText": {
                            "ar": "سجل اهتمامك",
                            "en": "Register Your Interest"
                        }
                    },
                    "type": {
                        "en": "Primary"
                    }
                }
            ]
        };

        let componentWithoutTitle = {...component};
        delete componentWithoutTitle.title;
        expect(componentWithoutTitle).toStrictEqual(compWithoutTitleExpected);
    })
});


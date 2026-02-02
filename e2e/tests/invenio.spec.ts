import { homepageTests, test, loginTests, depositionTests, i18nValidationTests, i18nPOTTests } from '@inveniosoftware/invenio-e2e';

homepageTests(test);
loginTests(test);
depositionTests(test);
i18nPOTTests(test);
i18nValidationTests(test);

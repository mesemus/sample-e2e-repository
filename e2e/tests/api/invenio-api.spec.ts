import { test, recordsApiTests } from '@inveniosoftware/invenio-e2e';

import { readFileSync } from 'fs';
import path from 'path';

const authUserFilePath = process.env.AUTH_USER_FILE || path.join(__dirname, '../../playwright/.auth/user.json');
const authUserFile = JSON.parse(readFileSync(authUserFilePath, 'utf-8'));

test.use({
  storageState: authUserFilePath,
  extraHTTPHeaders: {
    'X-CSRFToken': authUserFile.cookies.find((cookie: { name: string, value?: string }) => cookie.name === 'csrftoken')?.value || '',
    'Referer': process.env.BASE_URL || 'https://127.0.0.1:5000',
  },
});

// Run all API tests by calling the function with the test instance

recordsApiTests(test, "/api/records");

/*
 * To skip some tests inside the default test suite, you can use the `skipTests` method:
 * 
 *
 * test.skipTests(['Should display the homepage logo'], () => {
 *   // This will skip the test with the title 'Should display the homepage logo'
 *   homepageTests(test);
 *   loginTests(test);
 * })
 *  
 */

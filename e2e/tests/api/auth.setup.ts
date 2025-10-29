import { setupApiTesting } from "@inveniosoftware/invenio-e2e";

import path from 'path';

const authFilePath = path.join(__dirname, '../../playwright/.auth/user.json');

setupApiTesting(authFilePath);

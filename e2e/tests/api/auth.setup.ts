import { appConfig, setupApiTesting } from "@inveniosoftware/invenio-e2e";

import path from 'path';

const authFileAbsolutePath = path.resolve(__dirname, '../../', appConfig.authUserFilePath);

setupApiTesting(authFileAbsolutePath);

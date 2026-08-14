import {test as base} from '@playwright/test'

export type EnvConfig = {
    envName: String;
    appURL: String;
    nopCommerceAppURL: String;
    dbConfig: {};
};

export const test = base.extend<EnvConfig>({
    envName: ["test",{option: true}],
    appURL: ["<provideURL>>",{option: true}],
    nopCommerceAppURL: ["<provideURL>>",{option: true}],
    dbConfig: ["",{option: true}]
});
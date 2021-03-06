// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  apiUrl: 'http://localhost:8091/api/v1',
  importApiUrl: 'http://localhost:8044/api/v1',
  imageSetUrl: 'http://skutinizerapi.cloud.jdplc.com/api/pim/test/asset/dev',
  imagesSetUrl: 'http://skutinizerapi.cloud.jdplc.com/api/pim/test/assets/dev',
  fluent: {
    JA: {
      clientId: 'JDS',
      clientSecret: '22239161-971c-4566-ba30-cb29b1f4e7e8',
      fluentApiUrl: 'https://jds.sandbox.api.fluentretail.com/api/v4.1',
      fluentOAuthUrl: 'https://jds.sandbox.api.fluentretail.com/oauth/token',
      password: 'O2QNIE',
      scope: 'api',
      username: 'jdsports_admin'
    },
    JC: {
      clientId: 'JDS',
      clientSecret: '22239161-971c-4566-ba30-cb29b1f4e7e8',
      fluentApiUrl: 'https://jds.sandbox.api.fluentretail.com/api/v4.1',
      fluentOAuthUrl: 'https://jds.sandbox.api.fluentretail.com/oauth/token',
      password: 'ZGCMPZ',
      scope: 'api',
      username: 'jdsportssingapore_admin'
    },
    JD: {
      clientId: 'JDUK',
      clientSecret: 'df28b7d7-09eb-4a10-ba86-c60973aadbb6',
      fluentApiUrl: 'https://jduk.sandbox.api.fluentretail.com/api/v4.1',
      fluentOAuthUrl: 'https://jduk.sandbox.api.fluentretail.com/oauth/token',
      password: 'JBTQUS',
      scope: 'api',
      username: 'jdsports3_admin'
    },
    GO: {
      clientId: 'JDPLCEUIE',
      clientSecret: '1fa1970e-b83f-4f11-b1ae-fcc9295cee60',
      fluentApiUrl: 'https://jduk.sandbox.api.fluentretail.com/api/v4.1',
      fluentOAuthUrl: 'https://jduk.sandbox.api.fluentretail.com/oauth/token',
      password: 'LLM4BC',
      scope: 'api',
      username: 'gooutdoorsuk_admin'
    },
    JY: {
      clientId: 'JDS',
      clientSecret: '22239161-971c-4566-ba30-cb29b1f4e7e8',
      fluentApiUrl: 'https://jds.sandbox.api.fluentretail.com/api/v4.1',
      fluentOAuthUrl: 'https://jds.sandbox.api.fluentretail.com/oauth/token',
      password: 'QSXGH8',
      scope: 'api',
      username: 'jdsportsmy_admin'
    }
  },
  fredhoppperProductUrl:
    'https://uat-uatmesh-jdsportsuk-desktop.nonprod.jdmesh.co/',
  production: false,
  log: true,
  flags: {
    useNewHeader: true
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

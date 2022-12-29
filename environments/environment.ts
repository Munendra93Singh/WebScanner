// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  clientId: '68f7dbed-6f6e-4c8e-ba02-012fd8df98a8',
  authority: 'https://login.microsoftonline.com/{8f6bd982-92c3-4de0-985d-0e287c55e379}/',
  redirectUri: 'http://localhost:4200',
  scopes:['User.Read','user.read', 'mail.read','User.ReadBasic.All']
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

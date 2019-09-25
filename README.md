# Angular calls Azure Function protected by Azure AD 

Demo Angular calls Azure Function protected by Azure AD.

Build on top of Angular [Tour of Heroes App and Tutorial](https://angular.io/tutorial)

To configure
 
1. Update ```angular-azure-function-aad\angular-sample\src\app\app.module.ts```
as per [microsoft-adal-angular6](https://www.npmjs.com/package/microsoft-adal-angular6)


	```typescript
	  imports: [
	    BrowserModule,
	    AppRoutingModule,
	    FormsModule,
	    HttpClientModule,
	    MsAdalAngular6Module.forRoot({
	      tenant: '<tbd-tenant>',
	      clientId: '<tbd-clientId>',
	      redirectUri: window.location.origin,
	      endpoints: { 
	        "<called-azure-fuction-url>": "<azue-function-clientId>",
	      },
	
	```   

2. Update ```angular-azure-function-aad\angular-sample\src\app\hero.service.ts```


	```javascript
	export class HeroService {
	  private heroesUrl = '<called-azure-fuction-url>';  // URL to Azure function 
	
	
	```   

3. Create app registration in Azure
4. Use created app registration to configure Azure AD authentication for both Angular App and Azure function.     

Note: Even though Azure function is protected by Azure AD keeping Function-level authentication codes.
Just in case someone makes a mistake and removes AD protection with a single click in Azure portal. 

TBD: load settings from config file


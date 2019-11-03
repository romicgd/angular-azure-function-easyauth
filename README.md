# Azure Angular Athentication and Integration - easyAuth
## Angular Azure App Service calls Azure Function: both App Services  protected by easyAuth.  


Built on top of Angular [Tour of Heroes App and Tutorial](https://angular.io/tutorial)

To configure
 
1. Deploy Angular app and Azure function into App Services in Azure.
2. Create App registration in Azure AD.
3. Configure Azure App Service Authentication for both Angular and Azure Function App Services using App Registration created in #2. (e.g. Use Azure portal or PowerShell)
4. Configure secret Angular App Service Authentication.
5. Update ```additionalLoginParams``` in ```authsettings``` section of Angular Website config in [Azure Resource Explorer](https://resources.azure.com/) to include


```json
"properties": {
	...
    "additionalLoginParams": [
      "response_type=code id_token",
      "resource=%YOUR-APP-REGISTRATION-CLIENT-ID%"
    ]
	...
}		
```   

6. Enjoy your secure application. :)


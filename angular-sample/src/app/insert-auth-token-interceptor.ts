import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpClient } from '@angular/common/http';
import { mergeMap } from 'rxjs/operators';
import { HeroService } from './hero.service';
import { catchError, map, tap, switchMap } from 'rxjs/operators';

@Injectable()
export class InsertAuthTokenInterceptor implements HttpInterceptor {

    constructor(
            private http: HttpClient) { } 

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // get api url from adal config
        if(req.url.match(".*func.*")) {
            return this.http.get("https://testgrd02.azure.ontario-cloud.ca/.auth/me", {
                    withCredentials: true }).pipe(switchMap((response) => {
                      console.log(".auth/me = ", response); 
                      console.log(`Interceptor Bearer ${response[0].access_token}`);
                    req = req.clone({
                        setHeaders: {
                            Authorization: `Bearer ${response[0].access_token}`
                        }
                        });                
                    return next.handle(req);
            }));
        } else {
            return next.handle(req);
        }
    }
}
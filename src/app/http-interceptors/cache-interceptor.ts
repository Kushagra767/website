import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!isCacheable(req)) {
            return next.handle(req);
        }
    }
}

function isCacheable(req: HttpRequest<any>) {
    return req.method !== 'GET';
}

function sendRequest() {

}
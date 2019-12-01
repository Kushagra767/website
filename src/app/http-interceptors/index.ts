import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { CacheInterceptor } from './cache-interceptor';

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, mutli: true}
];

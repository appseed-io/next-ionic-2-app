import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import 'rxjs/add/operator/map';

import 'chart.js/src/chart';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

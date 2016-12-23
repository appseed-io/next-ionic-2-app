import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import '../../../node_modules/chart.js/dist/Chart.bundle.min.js';

import { ChartPage } from './chart.page';

@NgModule({
	imports: [IonicModule, ChartsModule],
	declarations: [
		ChartPage
	],
	entryComponents: [
		ChartPage
	]
})
export class ChartPageModule {

}

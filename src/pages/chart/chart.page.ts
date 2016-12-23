import { Component } from '@angular/core';


@Component({
	templateUrl: 'chart.html'
})
export class ChartPage {

	constructor() {
	}

	pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
	pieChartData: number[] = [300, 500, 100];
	pieChartType: string = 'pie';

	// events
	chartClicked(e: any): void {
		console.log(e);
	}

	chartHovered(e: any): void {
		console.log(e);
	}
}

import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: Label[] = ['Aprobados', 'Pendientes', 'Rechazados'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    this.doughnutChartData = [
      [Math.round((Math.random() * 350) + 1 ) , Math.round((Math.random() * 450) + 1 ), Math.round((Math.random() * 100) + 1)],
      [Math.round((Math.random() * 50) + 1 ) , Math.round((Math.random() * 150) + 1 ), Math.round((Math.random() * 120) + 1)],
      [Math.round((Math.random() * 250) + 1 ) , Math.round((Math.random() * 130) + 1 ), Math.round((Math.random() * 70) + 1)],
    ];
  }

}

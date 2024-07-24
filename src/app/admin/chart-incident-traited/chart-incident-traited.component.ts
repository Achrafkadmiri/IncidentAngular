import {Component, OnInit} from '@angular/core';
import {CountIncident} from "../../models/Incident.module";
import {ApiService} from "../../services/api.service";
import {Chart} from "chart.js";

@Component({
  selector: 'app-chart-incident-traited',
  templateUrl: './chart-incident-traited.component.html',
  styleUrls: ['./chart-incident-traited.component.css']
})
export class ChartIncidentTraitedComponent implements OnInit{
  chartBar2: any = [];
private CountStageArray!: Array<CountIncident>;
  year!:number[]
  count!:number[]
public barChartData!:any ;
private month!:number[];
private countMonthMap: any;
private monthCountsVIS!: any[];
  private monthCountsWMI!: any[];
  private monthCountsVDS!: any[];
  private monthCountsStx!: any[];

  selectedYear: string = '2024';
  constructor(private api:ApiService) {}

  ngOnInit() {
    this.getCountErrorVIS(Number(this.selectedYear),"Invalid VIS")



  }
  createChart(){
    this.chartBar2 = new Chart('canvas2', {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'Mai', 'June','July','August','September','October','November','December'],
        datasets: [
          {
            label: 'VIS',
            data: this.monthCountsVIS,
            borderWidth: 1,
            backgroundColor: 'rgba(126, 20, 145, 0.2)'
          },
          {
            label: 'VDS',
            data: this.monthCountsVDS,
            borderWidth: 1,
            backgroundColor: 'rgba(25, 20, 60, 0.2)'
          },
          {
            label: 'WMI',
            data: this.monthCountsWMI,
            borderWidth: 1,
            backgroundColor: 'rgba(255, 230, 0, 0.2)'
          },
          {
            label: 'XML Syntax',
            data: this.monthCountsStx,
            borderWidth: 1,
            backgroundColor: 'rgba(20, 126, 242, 0.2)'
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                stepSize:10
              }
            }
          ]
        },
      },
    });
  }
  getCountErrorVIS(year:number,error:String){
    this.countMonthMap = new Map();
    this.api.getCountByError(year,error).subscribe({
      next:value => {
        this.CountStageArray =value
        this.CountStageArray?.forEach(value1 => {
          this.countMonthMap.set( value1.month,value1.count);
        });
        this.monthCountsVIS = Array(12).fill(0);
        const monthNames = [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
        ];
        monthNames.forEach((month, index) => {
          if (this.countMonthMap.has(month)) {
            this.monthCountsVIS[index] = this.countMonthMap.get(month)?this.countMonthMap.get(month):0;
          }
        });
        this.getCountErrorVDS(Number(this.selectedYear),"Invalid VDS")
      }
    })

  }
  getCountErrorVDS(year:number,error:String){
    this.countMonthMap = new Map();
    this.api.getCountByError(year,error).subscribe({
      next:value => {
        this.CountStageArray =value
        this.CountStageArray?.forEach(value1 => {
          this.countMonthMap.set( value1.month,value1.count);
        });
        this.monthCountsVDS = Array(12).fill(0);
        const monthNames = [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
        ];
        monthNames.forEach((month, index) => {
          if (this.countMonthMap.has(month)) {
            this.monthCountsVDS[index] = this.countMonthMap.get(month)?this.countMonthMap.get(month):0;
          }
        });
        this.getCountErrorWMI(Number(this.selectedYear),"Invalid WMI")
      }
    })

  }
  getCountErrorWMI(year:number,error:String){
    this.countMonthMap = new Map();
    this.api.getCountByError(year,error).subscribe({
      next:value => {
        this.CountStageArray =value
        this.CountStageArray?.forEach(value1 => {
          this.countMonthMap.set( value1.month,value1.count);
        });
        this.monthCountsWMI = Array(12).fill(0);
        const monthNames = [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
        ];
        monthNames.forEach((month, index) => {
          if (this.countMonthMap.has(month)) {
            this.monthCountsWMI[index] = this.countMonthMap.get(month)?this.countMonthMap.get(month):0;
          }
        });
        this.getCountErrorSTX(Number(this.selectedYear),"XML")
      }
    })

  }
  getCountErrorSTX(year:number,error:String){
    this.countMonthMap = new Map();
    this.api.getCountByError(year,error).subscribe({
      next:value => {
        this.CountStageArray =value
        this.CountStageArray?.forEach(value1 => {
          this.countMonthMap.set( value1.month,value1.count);
        });
        this.monthCountsStx = Array(12).fill(0);
        const monthNames = [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
        ];
        monthNames.forEach((month, index) => {
          if (this.countMonthMap.has(month)) {
            this.monthCountsStx[index] = this.countMonthMap.get(month)?this.countMonthMap.get(month):0;
          }
        });
        this.createChart()
      }
    })

  }
  onYearChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedYear = selectElement.value;
    this.getCountErrorVIS(Number(this.selectedYear),"Invalid VIS");
  }

}

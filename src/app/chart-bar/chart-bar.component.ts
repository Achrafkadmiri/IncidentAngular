import {Component, OnInit} from '@angular/core';
import {Chart} from "chart.js";
import {ApiAnnonceEmpService} from "../services/api-annonce-emp.service";
import {CountPrive} from "../models/AnnonceEmp.module";

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.css']
})
export class ChartBarComponent implements OnInit{
  chartBar: any;
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  CountPriveArray!:CountPrive[]
  CountStageArray!:CountPrive[]
  CountDemandeArray!:CountPrive[]

  year!:number[]
  count!:number[]
  count1!:number[]
  count2!:number[]
  public barChartLabels1!:number[];
  public barChartLabels!:number[];
  public barChartData!:any ;


  constructor(public api:ApiAnnonceEmpService) {
  }
  ngOnInit(): void {
    this.getCountPrive()


  }
  getCountPrive(){
    this.api.getCountPrive().subscribe({
      next:value => {
        this.CountPriveArray =value
        console.log(this.CountPriveArray)
        this.year = this.CountPriveArray?.map((value1, index) => value1.year
       );
        this.barChartLabels1=this.year
        this.count = this.CountPriveArray?.map((value1, index) => value1.count
        );
        console.log(this.year)
        this.getCountStage()
      }
    })
  }
  getCountStage(){
    this.api.getCountStage().subscribe({
      next:value => {
        this.CountStageArray =value
        console.log(this.CountStageArray)
        this.count1 = this.CountStageArray?.map((value1, index) => value1.count
        );

        console.log(this.year)
        this.getCountDemande()
      }
    })

  }
  getCountDemande(){
    this.api.getCountDemande().subscribe({
      next:value => {
        this.CountDemandeArray =value
        console.log(this.CountDemandeArray)
        this.year = this.CountDemandeArray?.map((value1, index) => value1.year
        );
        this.barChartLabels= [2023,2024,2025]
        this.count2 = this.CountDemandeArray?.map((value1, index) => value1.count
        );
        this.barChartData= [
          {data: this.count, label: 'AnnoncePrivée' ,backgroundColor: 'rgba(245, 39, 145, 0.2)'},
          {data: this.count1, label: 'AnnonceStage' ,backgroundColor:'rgba(37, 255, 3, 0.2)'},
          {data: this.count2, label: 'DemandeStage' ,backgroundColor:'rgba(0, 8, 255, 0.2)'}
        ]

        this.areaChart()
      }
    })

  }


  areaChart(){

    this.chartBar=new Chart("myBarChart", {
      type: 'bar',
      data: {
        labels: this.barChartLabels,
        datasets: this.barChartData
      },
      options:{
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart'
          }
        },
        scales:{
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                stepSize:10
              }
            }
          ]
        }
      }

    });
  }

}

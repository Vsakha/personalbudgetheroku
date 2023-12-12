import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from '../data.service';
import { Chart } from 'chart.js'

@Component({
  selector: 'pb-maxbudgetchart',
  templateUrl: './maxbudgetchart.component.html',
  styleUrls: ['./maxbudgetchart.component.scss']
})
export class MaxbudgetchartComponent implements OnInit {

  public dataSource = {
    datasets: [{
        label:"Maximum Budget",
        data: [],
        backgroundColor : [           
        ]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        
    ],
    color : [
      { 
        backgroundColor: 'rgb(128, 0, 0)'
      }]
  }

  public options = {
    responsive: true,
    title: {
      display: true,
      position: "top",
      text: "Maximum Budget Distirbution",
      fontSize: 18,
      fontColor: "#111"
    },
    legend: {
      display: true,
      position: "top",
      labels: {
        fontColor: "#333",
        fontSize: 16
      }
    }
  };

  public loggedInUserName:any;
  constructor(private _dataService : DataService) { }

  ngOnInit(): void {
    this.loggedInUserName = this._dataService.loggedInUserName;
    this._dataService.getBudgetData(this.loggedInUserName)
  .subscribe((res: any) => {
    console.log(res);
    for (let i = 0; i < res.length; i++) {
     this.dataSource.datasets[0].data[i] = res[i].maxbudget;
     this.dataSource.labels[i] = res[i].title;
     this.dataSource.datasets[0].backgroundColor[i] = res[i].color;
     this.createChart();
    }
  });
  }

  createChart(){
    var ctx : any = document.getElementById("myMaxBudgetChart")
    var myPieChart = new Chart(ctx,{
        type: 'line',
        data : this.dataSource
    })
}

}

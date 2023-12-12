import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js'
import * as D3 from 'd3';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

// interface BudgetSchema{
//   id: string;
//   budget: number;
//   maxbudget: number;
//   color: string;
// }

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  // budgetCollection : AngularFirestoreCollection<BudgetSchema>;
  // budgetData: Observable<BudgetSchema[]>;
  
  public dataSource = {
    datasets: [{
        data: [],
        backgroundColor : [           
        ]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        
    ]
};

  public loggedInUserName:any;

  constructor(private _dataService : DataService,private router:Router) { }

  ngOnInit(): void {
  // Making the subscribe call for the first pie chart. Here the value is fetched from data source. 
  // The data.service file has the handling for the API call.
  this.loggedInUserName = this._dataService.loggedInUserName;
  this._dataService.getBudgetData(this.loggedInUserName)
  .subscribe((res: any) => {
    console.log(res);
    for (let i = 0; i < res.length; i++) {
     this.dataSource.datasets[0].data[i] = res[i].budget;
     this.dataSource.labels[i] = res[i].title;
     this.dataSource.datasets[0].backgroundColor[i] = res[i].color;
     this.createChart();
    }
  });
    // this._dataService.getData()
    // .subscribe(res =>{
    //   console.log(res);
    // })

    // this.budgetCollection = this.afs.collection('budget');
    // this.budgetData = this.budgetCollection.valueChanges();



  }
  
  createChart(){
    var ctx : any = document.getElementById("myChart")
    var myPieChart = new Chart(ctx,{
        type: 'pie',
        data : this.dataSource
    })
}

  navigateToAddBudget(){
    this.router.navigate(['/addbudget']);
  }

  callNgOnInit(){
    this.ngOnInit();
  }

}

import { Component, NgZone, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'pb-addbudget',
  templateUrl: './addbudget.component.html',
  styleUrls: ['./addbudget.component.scss']
})
export class AddbudgetComponent implements OnInit {

  budget:number;
  maxbudget:number;
  title:string

  constructor(private _dataService:DataService,private toastr: ToastrService,private router:Router,private ngZone:NgZone) { }

  ngOnInit(): void {
  }

  expenseAddToast(){
    this.toastr.success('Expense Successfully Added. Check you homepage','Success');
  }

  duplicateExpenseTitle(){
    this.toastr.error('Expense already exists. Please add one with a new name','Error');
  }

  incompleteDetails(){
    this.toastr.warning('Please enter all the fields','Warning');
  }

  randomColorGen(){
    let randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    console.log(randomColor)
    return randomColor;    
  }

  sendExpense(){
    let record = {};

    record['budget'] = this.budget;
    record['maxbudget'] = this.maxbudget;
    record['title'] = this.title.charAt(0).toUpperCase()+this.title.slice(1);
    record['color'] = this.randomColorGen();
    record['username'] = this._dataService.loggedInUserName;

    if(!this.budget || !this.maxbudget || !this.title){
      this.incompleteDetails();
      return;
    }
    else{
    this._dataService.addBudgetdata(record)
      .subscribe(data =>{
        console.log(data);
        this.budget = null;
        this.maxbudget = null;
        this.title = "";   
        //this.locationreload();
        this.expenseAddToast(); 
        this.ngZone.run(() => {
          console.log("Running ngZone")
          this.router.navigate(['/homepage']);
        });
        //this.router.navigate(['/homepage']);                        
      },
      err => {
        console.log("Same title already exists");
        this.duplicateExpenseTitle();
        this.title = "";
      })             
  }
}  

}

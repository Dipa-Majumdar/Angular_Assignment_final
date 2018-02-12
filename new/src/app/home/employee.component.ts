import {Component, OnInit} from '@angular/core';
import {Employee} from '../models/employee.model';
import { SharedServiceComponent } from '../shared.services';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';
// import 'rxjs/add/operator/switchMap';

@Component({
  //selector: 'home',
  styleUrls: ['./employee.component.css'],
  templateUrl: './employee.component.html'
})
export class HomeComponent implements OnInit  {
   e: any;
 	experiences : number[];
  qualifications: string[];
  
  route: ActivatedRoute;
  emp: SharedServiceComponent;
  router: Router;
   emp_array: Array<Employee> =new Array<Employee>();
  i: any;
 
  coding_languages=
      [{Name:"C/C++",isEnabled:true},
      {Name:"Java",isEnabled:true},
      {Name:"C#",isEnabled:false},
      {Name:"Python",isEnabled:false},
      {Name:"Ruby",isEnabled:false}]; 
  
  constructor(public _messageService: SharedServiceComponent  ,public _route:ActivatedRoute, public _router: Router)  {

   }
 model = new Employee('','','','','','','', '','',this.coding_languages);

 ngOnInit(): void{

  this.qualifications=['Graduation','under-graduation','post-graduation'];
  this.experiences=[1,2,3,4,5];
  this.e=this._route.snapshot.params['some'];
  this.emp_array=this._messageService.get();


  for(this.i=0;this.i<this.emp_array.length;this.i++)
      {
            if(this.e==this.emp_array[this.i].FirstName)
            {
              this.coding_languages=
                  [{Name:"C/C++",isEnabled:false},
                  {Name:"Java",isEnabled:false},
                  {Name:"C#",isEnabled:false},
                  {Name:"Python",isEnabled:false},
                  {Name:"Ruby",isEnabled:false}]; 
              this.model=this.emp_array[this.i];
              this.model.coding_languages=this.coding_languages;
             break;
            }
        }
      }

  
chk(lang: any)
{
  
  for(var i=0;i<this.coding_languages.length;i++)
  { 
    if(this.coding_languages[i]==lang)
      {
       if(this.coding_languages[i].isEnabled==true)
       {this.coding_languages[i].isEnabled==false;
         this.model.coding_languages[i] = this.coding_languages[i];
         break;}
        else{this.coding_languages[i].isEnabled==true;
          this.model.coding_languages[i] = this.coding_languages[i];
         break;}
      } 
  }
}

  onSubmit(model)
  {
      console.log(this.model);
      this._messageService.add_employee(model);
      this._router.navigate(['/employee_list_folder']);
  }
}





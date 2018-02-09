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
 	experiences : number[];
  qualifications: string[];
  coding_languages: string[];  
  new_coding_languages= [];
  route: ActivatedRoute;
  emp: SharedServiceComponent;
  router: Router;
   emp_array: Array<Employee> =new Array<Employee>();
i: any;
e: any;
  constructor(public _messageService: SharedServiceComponent ,public _route:ActivatedRoute, public _router: Router) { 

  
  }
 model = new Employee('','','','','','','', '',this.new_coding_languages);

 ngOnInit(): void{
  this.qualifications=['Graduation','under-graduation','post-graduation'];
  this.experiences=[1,2,3,4,5];
  this.coding_languages=['C/C++','Java','C#','Python','Ruby'];
  this.e=this._route.snapshot.params['some'];


  this.emp_array=this._messageService.get();
for(this.i=0;this.i<this.emp_array.length;this.i++)
{
  if(this.e==this.emp_array[this.i].FirstName)
  {
    this.model=this.emp_array[this.i];
  }
}
}
 

 
   chk_lang(lang: string)
            { 
              var flag=0;
                for(var i=0;i<5;i++)
                {
                      if(this.new_coding_languages[i]==lang)
                         {
                         flag=1;
                         break;
                         }
                }
                if(flag==1)
                {
                  this.new_coding_languages.splice(i,1);
                }
                else
                {this.new_coding_languages.push(lang);}
           
            }

onSubmit(model)
{
     console.log(this.model);
    this._messageService.add_employee(model);
     this._router.navigate(['/employee_list_folder']);
    // window.location.href['/employee_list_folder'];
     
}
}





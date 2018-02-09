import {Component, OnInit} from '@angular/core';
import {HomeComponent} from '../home/employee.component';
import {Employee} from '../models/employee.model';
import {SharedServiceComponent} from '../shared.services';
import {Router, NavigationExtras} from '@angular/router';
//import {HomeComponent} from '../home/employee.component';
@Component({
  // selector: 'table',
  styleUrls: ['./employee_list_folder.component.css'],
  templateUrl: './employee_list_folder.component.html'
})
export class Employee_list_Component implements OnInit {
  constructor(public _messageService: SharedServiceComponent, public _router: Router) {}
emp_array: Array<Employee> =new Array<Employee>();
i: any;
  ele: any;
  ngOnInit() {
    this.ele = this._messageService.get();
    console.log(this.emp_array[this.i]);
  }

  onEdit(e) {
    // let navigationExtras: NavgationExtras = {

    // }
    this._router.navigate(['home', e.FirstName]);

  }
  onDelete(e)
  {
          this.emp_array=this._messageService.get();
              for(this.i=0;this.i<this.emp_array.length;this.i++)
              {
                if(e==this.emp_array[this.i].FirstName)
                {
                delete this.emp_array[this.i];
                
                }
              }
  }

}
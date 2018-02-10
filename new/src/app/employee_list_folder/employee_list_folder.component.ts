import {Component, OnInit} from '@angular/core';
import {HomeComponent} from '../home/employee.component';
import {Employee} from '../models/employee.model';
import {SharedServiceComponent} from '../shared.services';
import {Router, NavigationExtras} from '@angular/router';

@Component({
  
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
    this._router.navigate(['home', e.FirstName]);

  }
  onDelete(a)
  {
          this.emp_array=this._messageService.get();
          this.emp_array.splice(this.i,1);
          console.log(this.emp_array);  
  }

}
import { Injectable } from '@angular/core';
import {Employee} from './models/employee.model';
@Injectable()
export class SharedServiceComponent {
  emp_array: Array<Employee> =new Array<Employee>();
  add_employee(data: Array<Employee>) {
    this.emp_array.concat(data);
  }

  clear() {
    this.emp_array = [];
  }
}
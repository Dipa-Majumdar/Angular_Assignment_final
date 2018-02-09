import { Injectable } from '@angular/core';
import {Employee} from './models/employee.model';
@Injectable()
export class SharedServiceComponent {
  emp_array: Array<Employee> =new Array<Employee>();
  add_employee(data: Employee) {
    this.emp_array.push(data);
  }

   get() {
    return this.emp_array;
   }
}
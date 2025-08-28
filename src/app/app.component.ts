import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from './employee.service';
import { FormGroup } from '@angular/forms';
import { fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title="equet"
 employeeDetailform!:FormGroup;

    searchText: string = '';
    filteredResults: any[] = [];
    allEmployees: any[] = [];
      invalidSearch: boolean = false;

    constructor(private _empservice: EmployeeService) {}

    ngOnInit(): void {
      // Fetch all employees for search
      this._empservice.getEmployeeData().subscribe((data: any[]) => {
        this.allEmployees = data;
        this.filteredResults = data;
      });
    }

    onSearchChange(event: any): void {
      const value = event.target.value;
      // Disallow spaces and negative characters
        this.invalidSearch = /\s|-/g.test(value);
        if (this.invalidSearch) {
          this.searchText = value;
          this.filteredResults = [];
          return;
        }
      this.searchText = value;
      this.filteredResults = this.allEmployees.filter(emp =>
        emp.name.toLowerCase().includes(value.toLowerCase())
      );
    }
 

 
 
   
  


}

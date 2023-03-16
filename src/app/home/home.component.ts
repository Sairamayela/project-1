import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public studentform: FormGroup = new FormGroup({
    name: new FormControl(),
    class: new FormControl(),
    fatherName: new FormControl(),
    email: new FormControl(),
    dob: new FormControl(),
    
    address: new FormGroup(
      {
        addressLine: new FormControl(),
        city: new FormControl(),
        state: new FormControl(),
        pincode: new FormControl()
       

      }
    ),
    type: new FormControl(),
    busFee: new FormControl(),
    hostalFee: new FormControl(),
    marks: new FormArray([]),

  })
  get marksFormArray() {
    return this.studentform.get('marks') as FormArray;
  }
  add(){
    this.marksFormArray.push(
      new FormGroup(
        {
          class:new FormControl(),
          year:new FormControl(),
          percentage:new FormControl()
        }
      )
    )
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
  delete(i:number){
    this.marksFormArray.removeAt(i);
  }
  submit(){

  }
  
  
}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];



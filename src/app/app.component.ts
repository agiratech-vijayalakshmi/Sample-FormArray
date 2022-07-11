import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormArray, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm = FormGroup;
  arr = FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void{
  myForm = this.fb.group({
      arr: this.fb.array([this.createItem()])
    })
  }
  createItem() {
    return this.fb.group({
      taskList: [''],
    })
  }
   addTodo(){
    this.arr = this.myForm.get('arr') as FormArray;
    this.arr.push(this.createItem());
    
      
}
}

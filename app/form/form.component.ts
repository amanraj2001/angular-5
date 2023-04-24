import { Component } from '@angular/core';
import { FormBuilder,FormArray } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private fb:FormBuilder){}


  profileform=this.fb.group({
      firstname:[''],
      lastname:[''],
      address:this.fb.group({
        state:[''],
        city:[''],
        pin:['']
      }),
      relation:this.fb.array([this.fb.group({
        relation:this.fb.control(''),
        relation2:this.fb.control('')
      })])
  })


  get rel(){
    return this.profileform.get('relation') as FormArray
  }

  addfield(){
    this.rel.push(this.fb.group({
      relation:this.fb.control(''), 
      relation2:this.fb.control('')
    }))
  }


}

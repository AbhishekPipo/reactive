import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'reactive';

  reactiveForm: FormGroup;

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      personalProp: new FormGroup({
        fname: new FormControl(null, Validators.required),
        lname: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      gender: new FormControl('male'),
      hobbies: new FormControl(null),
      country: new FormControl('india'),
      skills: new FormArray([
        new FormControl(null,Validators.required),


      ])
    });
  }

  onSubmit() {
    console.log(this.reactiveForm);
  }

  addSkills(){
   (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null))
  }
}

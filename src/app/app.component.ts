import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  form: FormGroup;

  title = 'app';

  constructor(public formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({

        firstname: ['', [ Validators.required, Validators.maxLength(12)] ],
        lastname: ['', Validators.required],
        email: ['', Validators.required]

    });

  }

  onFormSubmit() {

    if(this.form.value.email == 'ng@gmail.com') {
      console.log('Yup');
    } else {
      console.log('Nah...');
    }

    console.log(this.form.value);

  }



}

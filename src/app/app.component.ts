import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    //nothing to be done here
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      subject: ['', Validators.required],
      duration: [0, [Validators.required, Validators.pattern('[0-9]+')]]
    });

  }

  submit() {
    console.log(this.form.value);
    this.form.reset();
  }
}

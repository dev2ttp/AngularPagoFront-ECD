import { Component, OnInit } from '@angular/core';
import {MustMatch} from '../../services/match/validatorMatch'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-datos-telefono',
  templateUrl: './datos-telefono.component.html',
  styleUrls: ['./datos-telefono.component.css']
})
export class DatosTelefonoComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  identificador1 = '';
  identificador2 = '';
  monto = '';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      identificador1: ['', [Validators.required]],
      identificador2: ['', Validators.required],
      monto: ['',[Validators.required, Validators.minLength(3)]],
    }, {
      validator: MustMatch('identificador1', 'identificador2')
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    this.registerForm.value.identificador1;
    console.log("dm"+this.registerForm.value.identificador1); 
  }
  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }
}

import { NgForm } from '@angular/forms';
import { IUserRegister } from './../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  userForm: IUserRegister = {
    email: '',
    password: '',
    name: '',
  };
  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    //TODO handle register logic
  }
}

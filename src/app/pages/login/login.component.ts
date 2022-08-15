import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {IUserLogin} from "../../models/user"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // @ViewChild('f', { static: true }) form: NgForm;
  userForm: IUserLogin = {
    email: '',
    password: '',
  };
  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    //TODO handle login logic
  }
}

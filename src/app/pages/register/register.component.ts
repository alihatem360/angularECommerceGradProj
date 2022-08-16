import { UserService } from './../../services/user.service';
import { NgForm } from '@angular/forms';
import { IUserRegister } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

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
  error = '';
  isLoading = false;
  registrationObservable: Subscription | undefined;
  constructor(private _userService: UserService) {}

  ngOnInit(): void {}

  OnDestroy(): void {
    this.registrationObservable?.unsubscribe();
  }
  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;

    this.registrationObservable = this._userService
      .postRegisteredUser(this.userForm)
      .subscribe({
        next: (data) => {
          this.isLoading = true;
        },
        error: (error) => {
          this.isLoading = false;
          this.error = '';
          this.error = error.message;
        },
        complete: () => {
          this.isLoading = false;
        },
      });
  }
}

import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { UserService } from './../../services/user.service';
import { NgForm } from '@angular/forms';
import { IUserRegister } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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
  faBackward = faBackward;
  constructor(private _userService: UserService, private _router: Router) {}

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
          this._router.navigate(['login']);
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

import { LoginLogoutService } from './../../services/login-logout.service';
import {
  faCartShopping,
  faDoorOpen,
  faDoorClosed,
  faUser,
  faVest,
} from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  faCartShopping = faCartShopping;
  faDoorOpen = faDoorOpen;
  faUser = faUser;
  faVest = faVest;
  faDoorClosed = faDoorClosed;
  isLogin = false;
  constructor(private loginLogoutService: LoginLogoutService) {
    this.loginLogoutService.userChange.subscribe((value) => {
      this.isLogin = !!value;
    });
  }
  ngOnInit(): void {}
  logout() {
    this.loginLogoutService.logoutUser();
  }
}

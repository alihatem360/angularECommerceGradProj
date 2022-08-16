import {
  faCartShopping,
  faDoorOpen,
  faUser,
  faVest
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
  constructor() {}

  ngOnInit(): void {}
}

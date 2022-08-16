import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  //TODO handle why toast doesn't show after first error
  @Input()
  errorMessage: string = '';
  constructor() {}

  ngOnInit(): void {}
  hideToast() {
    this.errorMessage = '';
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { faWarning } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  //TODO handle why toast doesn't show after first error
  @Input()
  errorMessage: string = '';
  faWarning = faWarning;
  constructor() {}

  ngOnInit(): void {}
  hideToast() {
    this.errorMessage = '';
  }
}

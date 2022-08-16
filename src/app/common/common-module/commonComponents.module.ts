import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { ToastComponent } from '../../components/toast/toast.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ToastComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [ToastComponent],
})
export class CommonComponentsModule {}

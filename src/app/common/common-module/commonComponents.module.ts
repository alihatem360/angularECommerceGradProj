import { CommonModule } from '@angular/common';
import { ToastComponent } from '../../components/toast/toast.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ToastComponent],
  imports: [CommonModule],
  exports: [ToastComponent],
})
export class CommonComponentsModule {}

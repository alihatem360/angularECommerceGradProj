import { ErrorModule } from './pages/error/error.module';
import { HomeModule } from './pages/home/home.module';
import { RegisterModule } from './pages/register/register.module';
import { LoginModule } from './pages/login/login.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => LoginModule },
  { path: 'register', loadChildren: () => RegisterModule },
  { path: 'home', loadChildren: () => HomeModule },
  { path: 'error', loadChildren: () => ErrorModule },
  { path: '**', redirectTo: 'error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

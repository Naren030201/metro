import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeductWalletComponent } from './deduct-wallet/deduct-wallet.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path:"signup", component: SignupComponent },
  { path:"deduct-wallet", component: DeductWalletComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

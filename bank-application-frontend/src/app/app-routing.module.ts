import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AllAccountsComponent} from "./all-accounts/all-accounts.component";
import {AddAccountComponent} from "./add-account/add-account.component";


const routes: Routes = [
  {path: 'all-accounts', component: AllAccountsComponent},
  {path: 'add-account', component: AddAccountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

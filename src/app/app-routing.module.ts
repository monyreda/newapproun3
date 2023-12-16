import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListusersComponent } from './listusers/listusers.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ErrorComponent } from './error/error.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { EdituserComponent } from './edituser/edituser.component';

const routes: Routes = [
  {
    path: '',
    component: ListusersComponent,
    title: 'list page'
  },
  {
    path: 'add',
    component: AdduserComponent,
    title: 'add details'
  },
  {
    path: 'view',
    component: ViewuserComponent,
    title: 'view details'
  },
  {
    path: 'edit',
    component: EdituserComponent,
    title: 'edit details'
  },
  {
    path: '**',
    component: ErrorComponent,
    title: 'error details'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {NgModule} from '@angular/core';
import {ProductEditComponent} from './product/edit-product.component';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from './product/product.component';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {RoleGuard} from './model/role-guard.model';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [RoleGuard],
    data: { roles: ['ROLE_ADMIN'] }
  },
  { path: 'products', component: ProductComponent },
  {
    path: 'products/new',
    component: ProductEditComponent,
    canActivate: [RoleGuard],
    data: { roles: ['ROLE_USER', 'ROLE_MODERATOR', 'ROLE_ADMIN'] }
  },
  {
    path: 'products/:id/edit',
    component: ProductEditComponent,
    canActivate: [RoleGuard],
    data: { roles: ['ROLE_MODERATOR', 'ROLE_ADMIN'] }
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


import {NgModule} from '@angular/core';
import {ProductEditComponent} from './product/edit-product.component';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from './product/product.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products',     component: ProductComponent },
  { path: 'products/new', component: ProductEditComponent },
  { path: 'products/:id/edit', component: ProductEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


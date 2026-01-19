import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavComponent} from './nav/nav.component';
import {AppRoutingModule} from './app-routing.module';
import {AboutComponent} from './about/about.component';
import {FooterComponent} from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {HomeComponent} from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {ChatComponent} from './chat/chat.component';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ProductComponent} from './product/product.component';
import {ProductEditComponent} from './product/edit-product.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { AdminComponent } from './admin/admin.component';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AboutComponent,
    FooterComponent,
    ProductDetailsComponent,
    ProductComponent,
    ProductEditComponent,
    ChatComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularMultiSelectModule,
    ToastrModule.forRoot(),
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatToolbarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatTooltipModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    BrowserAnimationsModule,
    RouterModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    NavComponent
  ]
})
export class AppModule { }

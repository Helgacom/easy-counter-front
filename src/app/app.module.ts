import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavComponent} from './nav/nav.component';
import {AppRoutingModule} from './app-routing.module';
import {AboutComponent} from './about/about.component';
import {ServicesComponent} from './services/services.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AboutComponent,
    ServicesComponent,
    FooterComponent,
    ProductDetailsComponent,
    ProductComponent,
    ProductEditComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularMultiSelectModule,
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatTooltipModule,
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

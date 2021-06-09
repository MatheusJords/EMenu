import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EMenuMaterialModule } from './material/material.module';
import { ClientInfoComponent } from './client-info/client-info.component';
import { OrderInfoComponent } from './order-info/order-info.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientInfoComponent,
    OrderInfoComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EMenuMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

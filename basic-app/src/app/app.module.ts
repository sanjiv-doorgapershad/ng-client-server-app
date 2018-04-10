import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { InventoryListComponent } from './components/inventory-list/inventory-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';

import { ShoppingListFilterPipe } from './components/shopping-list/shopping-list-filter.pipe';

import { InventoryService } from './services/inventory.service';
import { ProductService } from './services/product.service';


const appRoutes: Routes = [
  { path: 'inventory', component: InventoryListComponent},
  { path: 'shopping', component: ShoppingListComponent},
  { path: 'product', component: ProductListComponent},
  { path: 'productdetail/:id', component: ProductDetailComponent},
  { path: 'newproduct', component: ProductDetailComponent},
  { path: 'home', redirectTo: '/shopping', pathMatch: 'full'},
  { path: '', redirectTo: '/shopping', pathMatch: 'full'}
];

@NgModule({
  declarations: [
      AppComponent,
      InventoryListComponent,
      ProductDetailComponent,
      ShoppingListComponent,
      ShoppingListFilterPipe,
      ProductListComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      NgbModule.forRoot(),
      RouterModule.forRoot(appRoutes)
  ],
  providers: [
      InventoryService,
      ProductService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

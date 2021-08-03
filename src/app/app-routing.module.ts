import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AddProductGuard } from './add-product/add-product.guard';
import { EditComponent } from './edit/edit.component';
import { EditGuard } from './edit/edit.guard';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductComponent },
  { path: 'details/:id', component: ProductDetailsComponent },
  { path: 'edit/:id', component: EditComponent, canDeactivate: [EditGuard] },
  { path: 'add-product', component: AddProductComponent, canDeactivate: [AddProductGuard] },
  { path: 'feedback', component: FeedbackComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, ProductComponent, FeedbackComponent, AddProductComponent, PageNotFoundComponent, ProductDetailsComponent, EditComponent]

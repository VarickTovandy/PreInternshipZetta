import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './main/card-list/card-list.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: CardListComponent },
  { 
    path: 'laptop-form', 
    loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
  },
  { path: 'laptop-detail/:id', component: ItemDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

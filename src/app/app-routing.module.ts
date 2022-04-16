import { AddContactComponent } from './pages/add-contact/add-contact.component';
import { UpdateContactComponent } from './pages/update-contact/update-contact.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'update-contact/:contactId', component: UpdateContactComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'add-contact', component: AddContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

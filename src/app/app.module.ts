import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateContactComponent } from './pages/update-contact/update-contact.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactsWrapperComponent } from './components/contacts-wrapper/contacts-wrapper.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactFillComponent } from './components/contact-fill/contact-fill.component';

import { FormsModule } from '@angular/forms';
import { WeatherPipe } from './pipes/weather.pipe';
import { AddContactComponent } from './pages/add-contact/add-contact.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    UpdateContactComponent,
    HomePageComponent,
    ContactComponent,
    ContactsWrapperComponent,
    HeaderComponent,
    FooterComponent,
    ContactFillComponent,
    WeatherPipe,
    AddContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, provideFirebaseApp(() => initializeApp(environment.firebase)), provideFirestore(() => getFirestore())],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { AuthService } from './services/auth.service';
import { AppareilService } from './services/appareils.services';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppareilComponent } from './appareil/appareil.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemComponentComponent } from './post-list-item-component/post-list-item-component.component';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { RouterModule, Routes } from '@angular/router';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';

const appRoutes: Routes = [
  { path: 'appareils', component: AppareilViewComponent },
  { path: 'appareils/:id', component: SingleAppareilComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AppareilViewComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppareilComponent,
    PostListComponentComponent,
    PostListItemComponentComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [AppareilService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HttpModule }    from '@angular/http';
import 'rxjs/Rx';

import { AppComponent } from './app.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

import { BooksService } from './books.service';
import { LoginService } from './login.service';
import { MyTradesComponent } from './my-trades/my-trades.component';
import { LoginComponent } from './login/login.component';



const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'all-books',      component: AllBooksComponent },
  {path: 'profile', component: MyProfileComponent},
  {path: 'my-books', component: MyBooksComponent},
  {path: 'my-trades', component: MyTradesComponent},
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AllBooksComponent,
    MyBooksComponent,
    MyProfileComponent,
    PageNotFoundComponent,
    HomeComponent,
    MyTradesComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forRoot(
      appRoutes, 
    //  { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpModule
  ],
  providers: [
    BooksService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

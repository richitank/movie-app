import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './shared/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { ShowsComponent } from './shows/shows.component';
import { MatListModule } from '@angular/material/list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieDetailsComponent } from './details/movie-details/movie-details.component';
import { AppRoutingModule } from './app-routing.module';
import { ShowDetailsComponent } from './details/show-details/show-details.component';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CarouselModule } from 'primeng/carousel';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from "primeng/button"; 
import { ImageModule } from "primeng/image"; 
import {GalleriaModule} from "primeng/galleria";
//const routes: Routes = [
  // { path: '', redirectTo: '/movies', pathMatch: 'full'},
  // { path: 'movies', component: MoviesComponent, children: [
  //   {path: ':id', component: MovieDetailsComponent},
  //   //{path: '', component: MovieDetailsComponent}
  // ]},
  // { path: 'shows', component: ShowsComponent },
  //{ path: 'movieDetails', component: MovieDetailsComponent },
//]

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HeaderComponent,
    ShowsComponent,
    MovieDetailsComponent,
    ShowDetailsComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    MatPaginatorModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    NgbModule,
    MatTabsModule,
    MatButtonModule,
    MatMenuModule,
    CarouselModule,
    SidebarModule,
    ImageModule,
    ButtonModule,
    GalleriaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

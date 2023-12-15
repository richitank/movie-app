import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { MoviesComponent } from "./movies/movies.component";
import { ShowsComponent } from "./shows/shows.component";
import { MovieDetailsComponent } from "./details/movie-details/movie-details.component";
import { ShowDetailsComponent } from "./details/show-details/show-details.component";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/movies', pathMatch: 'full'},
    {path: 'movies', component: MoviesComponent},
    {path: 'movies/:id', component: MovieDetailsComponent },
    {path: 'shows', component: ShowsComponent},
    {path: 'shows/:id', component: ShowDetailsComponent},
    {path: 'home', component: HomeComponent},
    // {path: 'movies', component: MoviesComponent, children: [
    //     { path: ':id', component: MovieDetailsComponent }
    // ]},
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}
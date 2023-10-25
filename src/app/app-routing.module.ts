import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { MoviesComponent } from "./movies/movies.component";
import { ShowsComponent } from "./shows/shows.component";
import { MovieDetailsComponent } from "./details/movie-details/movie-details.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/movies', pathMatch: 'full'},
    {path: 'movies', component: MoviesComponent},
    {path: 'movies/:id', component: MovieDetailsComponent },
    {path: 'shows', component: ShowsComponent},
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
export class MovieDetails {
    public backdrop_path: string;
    public genres: [] = [];
    public id: string;
    public original_title: string;
    public overview: string;
    public poster_path: string;
    public release_date: string;
    public revenue: number;
    public runtime: number;
    public status: string;
    public title: string;
    public tagline: string;
    public vote_average: number;
    public vote_count: number;
    public budget: number;


    constructor(backdrop_path: string, id: string, original_title: string, overview: string, poster_path: string, release_date: string, revenue: number, runtime: number,
        status: string, title: string, tagline: string, vote_average: number, vote_count: number, budget: number) {
            this.backdrop_path = backdrop_path;
            this.id = id;
            this.original_title = original_title;
            this.overview = overview;
            this.poster_path = poster_path;
            this.release_date = release_date;
            this.revenue = revenue;
            this.runtime = runtime;
            this.status = status;
            this.title = title;
            this.tagline = tagline;
            this.vote_average = vote_average;
            this.vote_count = vote_count;
            this.budget = budget;
            
    }

}
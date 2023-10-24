export class MovieDetails {
    public backdrop_path: string;
    public id: string;
    public original_title: string;
    public overview: string;
    public poster_path: string;
    public release_date: string;
    public run_time: number;
    public title: string;
    public tagline: string;
    public vote_average: number;
    public vote_count: number;


    constructor(backdrop_path: string, id: string, original_title: string, overview: string, poster_path: string, release_date: string,  run_time: number,
        title: string, tagline: string, vote_average: number, vote_count: number) {
            this.backdrop_path = backdrop_path;
            this.id = id;
            this.original_title = original_title;
            this.overview = overview;
            this.poster_path = poster_path;
            this.release_date = release_date;
            this.run_time = run_time;
            this.title = title;
            this.tagline = tagline;
            this.vote_average = vote_average;
            this.vote_count = vote_count;
            
    }

}
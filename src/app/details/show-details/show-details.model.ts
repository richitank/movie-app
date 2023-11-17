export class ShowDetails {
    public backdrop_path: string;
    public genres: [];
    public id: number;
    public overview: string;
    public home_page: string;
    public first_air_date: string;
    public revenue: number;
    public episode_run_time: number [];
    public status: string;
    public title: string;
    public tagline: string;
    public vote_average: number;
    public vote_count: number;
    public budget: number;
    public in_production: boolean;
    public last_episode_to_air: {};
    public name: string;
    public number_of_episodes: number;
    public number_of_seasons: number;
    public original_name: string;
    public poster_path: string;
    public seasons: [];
 


    constructor(backdrop_path: string, id: number, original_name: string, overview: string, home_page: string, first_air_date: string, revenue: number, episode_run_time: number [],
        status: string, title: string, tagline: string, vote_average: number, vote_count: number, budget: number, genres: [], inprod: boolean,
        last_episode_to_air: {}, name: string, number_of_episodes: number, number_of_seasons: number, poster_path: string, seasons: []) {
            this.backdrop_path = backdrop_path;
            this.id = id;
            this.original_name = original_name;
            this.overview = overview;
            this.home_page = home_page;
            this.first_air_date = first_air_date;
            this.revenue = revenue;
            this.episode_run_time = episode_run_time;
            this.status = status;
            this.title = title;
            this.tagline = tagline;
            this.vote_average = vote_average;
            this.vote_count = vote_count;
            this.budget = budget;
            this.genres = genres;
            this.in_production = inprod;
            this.last_episode_to_air = last_episode_to_air;
            this.name = name;
            this.number_of_episodes = number_of_episodes;
            this.number_of_seasons = number_of_seasons;
            this.poster_path = poster_path;
            this.seasons = seasons;
            
    }

}
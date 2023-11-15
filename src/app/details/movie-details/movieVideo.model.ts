export class MovieVideo {
    public results: Video[];
    public id: number;
    
    constructor (results: Video [], id: number) {
        this.results = results;
        this.id = id;
    }
}

class Video {
    public name: string;
    public key: string;
    public site: string;
    public type: string;
    public id: string;

    constructor (name: string, key: string, site: string, type: string, id: string) {
        this.id = id;
        this.type = type;
        this.site = site;
        this.key = key;
        this.name = name;
    }

}
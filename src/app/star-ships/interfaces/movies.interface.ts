export interface Films {
    count:    number;
    next:     null;
    previous: null;
    results:  Film[];
   }
   
   export interface Film {
    characters:    string[];
    created:       Date;
    director:      string;
    edited:        Date;
    episode_id:    number;
    opening_crawl: string;
    planets:       string[];
    producer:      string;
    release_date:  Date;
    species:       string[];
    starships:     string[];
    title:         string;
    url:           string;
    vehicles:      string[];
   }
   
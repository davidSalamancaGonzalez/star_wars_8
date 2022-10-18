export interface StarShips {
    count:    number;
    next:     string;
    previous: null;
    results:  Ships[];
   }
   
   export interface Ships {
    MGLT:                   string;
    cargo_capacity:         string;
    consumables:            string;
    cost_in_credits:        string;
    created:                Date;
    crew:                   string;
    edited:                 Date;
    films:                  string[];
    hyperdrive_rating:      string;
    length:                 string;
    manufacturer:           string;
    max_atmosphering_speed: string;
    model:                  string;
    name:                   string;
    passengers:             string;
    pilots:                 string[];
    starship_class:         string;
    url:                    string;
    alt_img?:               string;
    id?:                    string;
   }
   
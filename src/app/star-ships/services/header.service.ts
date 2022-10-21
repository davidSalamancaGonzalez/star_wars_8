import { Injectable } from '@angular/core';
import { Logos } from '../interfaces/header.interface';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

logos : Logos[] = [

  { link: "https://www.facebook.com/StarWars", 
    source: "https://static-mh.content.disney.io/starwars/assets/shared/icon_facebook-aec3b685b1a1.svg"
  },
  { link: "https://www.instagram.com/starwars/", 
    source: "https://static-mh.content.disney.io/starwars/assets/shared/icon_instagram-be8807d03d5f.svg"
  },
  { link: "https://twitter.com/starwars", 
    source: "https://static-mh.content.disney.io/starwars/assets/shared/icon_twitter-bde9a7f5abaa.svg"
  },
  { link: "https://www.youtube.com/user/starwars", 
    source: "https://static-mh.content.disney.io/starwars/assets/shared/icon_youtube-ed78c6ee1c7d.svg"
  },

]


}

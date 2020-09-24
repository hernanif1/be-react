
import {axios} from "../shared/axios";

export type Beer = {
    id: number;
    name: string;
    tagline: string;
    first_brewed: string;
    description: string;
    image_url: string;
    abv: number;
    ibu: number;
    target_fg: number;
    target_og: number;
    ebc: number;
    srm: number;
    ph: number;
    attenuation_level: number;
}


export const beers = axios.get<Beer[]>("/beers")
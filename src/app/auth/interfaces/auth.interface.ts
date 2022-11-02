export interface Auth {
    id        : string,
    first_name: string,
    last_name : string,
    email     : string,
    password? : string,

}

export interface AuthResponse {

    accesToken?: string, 
    user : {
        id        : string,
        first_name: string,
        last_name : string,
        email     : string,
    }
   
}
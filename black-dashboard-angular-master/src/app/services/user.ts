import { last } from 'rxjs/operators';

export class User {

    constructor(email: string, id: string, firstname: string, lastname: string, accessToken: string, exp: number){
        this.email = email;
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.accessToken = accessToken;
        var tempDate = new Date(0);
        tempDate.setUTCSeconds(exp);
        this.expirationTimeInUtc = tempDate;
    }

    email: string;
    id: string;
    firstname: string;
    lastname: string;
    roles: string[];
    expirationTimeInUtc: Date;
    accessToken: string;
}
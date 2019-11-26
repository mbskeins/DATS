export class User {
    email: string;
    id: string;
    firstname: string;
    lastname: string;
    roles: string[];
    expirationTimeInUtc: Date;
    accessToken: string;
}
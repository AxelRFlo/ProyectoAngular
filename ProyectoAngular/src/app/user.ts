export class User {
    // user values
    name: string;
    email: string;
    password: string;

    constructor(values: Object = {}) {
        // Constructor initialization
        Object.assign(this, values);
    }

}
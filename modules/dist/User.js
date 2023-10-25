export default class User {
    constructor(username, email, color) {
        this.username = username;
        this.email = email;
        this.color = color;
    }
    logOut() {
        console.log(`${this.username} is logged out`);
    }
}
export function userHelper() {
    console.log("I've just helped you! What else do you want me to do?");
}

export class UserPayload {

    static createUser(name: string, email: string) {
        return {
            name: name,
            email: email,
            gender: "male", 
            status: "active"
        };
    }
}

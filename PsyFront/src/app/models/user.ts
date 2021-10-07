export interface User {
    userType: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    address: {
        town: string,
        zipCode: Number,
        street: string,
        streetNumber: Number,
    }
}
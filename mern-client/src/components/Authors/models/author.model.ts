export class AuthorModel {

    public id: string;
    public lastName: string;
    public firstName: string;

    public constructor({id, firstName, lastName}: {id: string, firstName: string, lastName: string}) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
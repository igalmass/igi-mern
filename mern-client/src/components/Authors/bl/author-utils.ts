import faker from "@faker-js/faker";
import * as _ from "lodash";
import {AuthorModel} from "../models/author.model";


export class AuthorUtils {
    public createFakedAuthor(): AuthorModel {
        const firstName = faker.name.findName();
        const lastName = faker.name.lastName();
        return new AuthorModel(
            {
                id: "" + _.random(5, 100000),
                firstName,
                lastName
            });
    }
}

const authorUtilsInstance = new AuthorUtils();
export default authorUtilsInstance;
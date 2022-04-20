import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

class BaseSchema extends Schema {
    constructor(sche: any) {
        super(sche);
        this.set('toJSON', {
            virtuals: true,
            transform: (doc, converted) => {
                delete converted._id;
                delete converted.__v;
            }
        });
    }
}

const authorSchema = new BaseSchema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true}
        // username: {
        //     type: String,
        //     required: true,
        //     unique: true,
        //     trim: true,
        //     minlength: 3
        // }
    }
);

// export interface IAuthor {
//     firstName: String,
//     lstName: String
// }
//
// interface IPlanModel extends IAuthor, mongoose.Document {}

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;
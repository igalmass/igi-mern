import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export class BaseSchema extends Schema {
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

const userSchema = new BaseSchema({
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: 3
        }
    }
);

const User = mongoose.model('Userim', userSchema);

module.exports = User;
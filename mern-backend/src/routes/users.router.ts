

const User = require('../models/user.model');

class UsersRouter {
    public constructor() {
    }

    public init(app: any) {


        const USERS_URL = '/users';
        app.get(USERS_URL, (req: any, res: any) => {
            User.find()
                .then((users: any) => res.json(users))
                .catch((err: any) => res.status(400).json(`Error: ${err}`));
        });

        app.post(USERS_URL, (req: any, res: any) => {
            const username = req.body.username;
            const newUser = new User({username});

            newUser.save()
                .then((user: any) => res.status(200).body({
                    message: 'User added',
                    user
                })
                .catch((err: any) => res.status(400).json('Error: ' + err)));
        });


        app.get(`${USERS_URL}/:id`, (req: any, res: any) => {
            const id = req.body.id;
            User.findById(id)
                .then((user: any) => {
                    return res.json(user)
                })
                .catch((err: any) => res.status(400).json(`Error: ${err}`))
        })
    }
}


export default new UsersRouter();
// module.exports = UsersRouter;
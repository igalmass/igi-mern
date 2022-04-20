

const Author = require('../models/author.model');

class AuthorsRouter {
    public constructor() {
    }

    public init(app: any) {

        const AUTHORS_URL = '/authors';
        app.get(AUTHORS_URL, (req: any, res: any) => {
            Author.find()
                .then((users: any) => res.json(users))
                .catch((err: any) => res.status(400).json(`Error: ${err}`));
        });

        app.post(AUTHORS_URL, (req: any, res: any) => {
            const firstName = req.body.firstName;
            const lastName = req.body.lastName;
            const newAuthor = new Author({firstName, lastName});

            newAuthor.save()
                .then((author: any) => res.json({
                    message: 'Author added',
                    author
                }))
                .catch((err: any) => {
                    res.status(400).json('Error: ' + err)
                });
        });

        app.delete(AUTHORS_URL, (req: any, res: any) => {
            Author.deleteMany()
                .then(() => res.json({message: 'deleted successfully'}))
                .catch((error: any) => res.status(400).json(`Failed to delete All: ${error}`));
        });

        app.get(`${AUTHORS_URL}/:id`, (req: any, res: any) => {
            const id = req.body.id;
            Author.findById(id)
                .then((user: any) => {
                    return res.json(user)
                })
                .catch((err: any) => res.status(400).json(`Error: ${err}`))
        });

        app.delete(`${AUTHORS_URL}/:id`, (req: any, res: any): void => {
            const id = req.params.id;
            Author.findByIdAndDelete(id)
                .then(() => res.json({message: "Single Was Successfully Deleted!"}))
                .catch((err: any) => res.status(400).json(`Failed to delete Single: ${err}`))
        });
    }
}

const authorsRouterInstance = new AuthorsRouter();

export default authorsRouterInstance;
// module.exports = UsersRouter;
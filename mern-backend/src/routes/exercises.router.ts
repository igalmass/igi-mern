const exercise = require('../models/exercise.model');

class ExercisesRouter {
    public constructor() {
    }

    public init(app: any) {

        app.route('/test')
            .get((req: any, res: any) => {
            })
            .post((req: any, res: any) => {
        });

        app.get('/exercises/', (req: any, res: any) => {
            exercise.find()
                .then((exercises: any) => res.json(exercises))
                .catch((err: any) => res.status(400).json(`Error: ${err}`));
        });

        app.post('/exercises/add', (req: any, res: any) => {
            const userName = req.body.userName;
            const description = req.body.description;
            const duration = Number(req.body.duration);
            const date = Date.parse(req.body.date);
            const newExercise = new exercise({userName, description, duration, date});

            newExercise.save()
                .then(() => res.json('Exercise added!'))
                .catch((err: any) => res.status(400).json('Error: ' + err));
        });
    }
}

export default ExercisesRouter;
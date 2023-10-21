    import express from 'express';

    const app = express();

    app.get('/', (req, res) => {
        res.send('Server is ready');
    });

    // get a list of 5 sports

    app.get('/sports', (req, res) => {
        const sports = [
            {
                id: 1,
                title: 'Badminton',
                content: 'Badminton page'
            },
            {
                id: 2,
                title: 'Cricket',
                content: 'Cricket page'
            },
            {
                id: 3,
                title: 'Football',
                content: 'Football page'
            },
            {
                id: 4,
                title: 'Tennis',
                content: 'Lawn Tennis page'
            },
            {
                id: 5,
                title: 'Squash',
                content: 'Squash page'
            }
        ];
        res.send(sports);
    });

    const port = process.env.PORT || 3000;

    app.listen(port, () => {
        console.log(`Server at http://localhost:${port}`);
        }
    );

    
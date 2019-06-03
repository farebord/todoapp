import express from 'express';
import bodyParser from 'body-parser';
import store from '../app/store';
import renderContent from './render';

var app = express();

var tasks = [
    {id: 1, description: "Do something.", done: false},
    {id: 2, description: "Do something 2.", done: false},
    {id: 3, description: "Something done.", done: true},
    {id: 4, description: "Do something 3.", done: false},
    {id: 5, description: "Do something else.", done: false}
];

var id_counter = tasks.length + 1;

app.use(bodyParser.json());

app.use('/dist', express.static('dist'))

app.get('/', (req, res) => {
    const content = renderContent(store)

    res.send(content);
})

app.get('/task/:id', (req, res) => {
    res.json(tasks.filter(task => task.id === parseInt(req.params.id)));
});

app.get('/task', (req, res) => {
    res.json(tasks.sort((a,b) => (a.id <= b.id) ? -1 : 1));
});

app.post('/task', (req, res) => {
    if(req.body.description !== undefined && req.body.description !== ''){
        let new_task = {
            id: id_counter,
            description: req.body.description,
            done: req.body.done !== undefined ? req.body.done : false
        };
        id_counter += 1;
        tasks.push(new_task);
        res.json(new_task);
    }
    else {
        res.sendStatus(400)
    }
});

app.patch('/task/:id', (req, res) => {
    let task = tasks.filter(task => task.id === parseInt(req.params.id))[0];
    if(!task) res.sendStatus(404)
    else {
        if(req.body.description !== undefined) task.description = req.body.description
        if(req.body.done !== undefined) task.done = req.body.done
        tasks = tasks.filter(task => task.id !== parseInt(req.params.id))
        tasks.push(task)
        res.json(task)
    }
});

app.delete('/task/:id', (req, res) => {
    let task = tasks.filter(task => task.id === parseInt(req.params.id))[0];
    if(!task) res.sendStatus(404)
    else {
        tasks = tasks.filter(task => task.id !== parseInt(req.params.id))
        res.json(task)
    }
});

app.listen('3000', function () {
    console.log('Interview ToDo app running...');
})



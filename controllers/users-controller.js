import people from './users/users.js';
let users = people;

const usersController = (app) => {
    app.get('/api/users', findAllUsers);
    app.get('/api/users/:uid', findUserById);
}

const findAllUsers = (req, res) => {
    const type = req.query.type;
    if(type) {
        res.json(users.filter(user => user.type === type));
        return;
    }
    res.json(users);
}

const findUserById = (req, res) => {
    const userId = req.params.uid;
    const user = users.find(u => u._id === userId);
    res.json(user);
}



export default usersController;
const axios = require('axios');
var http = require('http');

axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        console.log('Status Code:', res.status);
        const users = res.data;
        // console.log(users);
        users[1].name = "Laila"
        http.createServer(function (req, res) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            for (user of users) {
                res.write('<li>Got user with id: ' + user.id + 'name : ' + user.name + '</li>')
            }
            res.end();

        }).listen(8080);
    })
    .catch(err => {
        console.log('Eror: ', err.message)
    })


console.log('server running in localhost:8080')


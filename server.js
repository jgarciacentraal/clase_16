const express = require('express');
const app = express();
const router = express.Router();

// app.get('/handler1', (req, res) =>{
//     res.send('handler 1')
//     console.dir(req.baseUrl)
//     console.dir(req.body)
//     console.dir(req.hostname)
//     console.dir(req.method)
//     console.dir(req.originalUrl)
//     console.dir(req.path)
//     console.dir(req.protocol)
//     console.dir(req.query)
// });


// app.get('/handler2', (req,res) =>{
//     res.send('handler 2')
// })

// app.get('/handler1', (req, res) => {
//      res.status(200)
//      res.set('Content-Type', 'text/plain')
//      res.send('<h1> Hola <h1>')
// }); 


// app.use( (req, res, next) => {
//     //console.log('Soy un middleware');
//     res.send('Soy un middleware');
//     next();
// });

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/file.txt');
});

app.use('/asset',router);

app.listen(9000, () => {
    console.log('El servidor esta corriendo en el puerto 9000')
});
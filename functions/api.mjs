import  express  from "express";
import bodyParser from 'body-parser';
import serverlessHtttp from 'serverless-http';
const app = express();


const port = 9000;
const data =[
    {name:'user1', surname:'John'},
    {name:'user2', surname:'Don'}
]

app.use(bodyParser.json());
app.get('/getAllUser', (req, res)=>{
    res.json(data);

});

app.post('/addNewUser', (req, res)=>{
    data.push(req.body);
    res.send('Successfully added');
});


export const heandler = serverlessHtttp(app);


/*
agar  import serverlessHtttp from 'serverless-http'; ustanovka qilingan bolsa 
app.listen(port keregi yoq ishlatishni
*/

// app.listen(port, () =>{
//     console.log('App is running on port' , port);
// })
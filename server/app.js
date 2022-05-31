require('dotenv').config();
const expres = require('express');
const mongoose = require('mongoose');
const Crud = require('./Crud');

const app = expres();
app.use(expres.json());

mongoose.connect(`${process.env.MONGO_URL}`,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(console.log('Connected to MongoDB'))
.catch((err)=>console.log(err));


app.get('/api/all', async(req,res)=>{
    try{
        const allCrud = await Crud.find();
        res.status(200).json(allCrud);
        console.log(allCrud);
    }catch(err){
        res.status(500).json(err);
    }
});

app.post('/api/new', async(req,res)=>{
    try{
        const newCrud = new Crud({
            name: req.body.name,
            email: req.body.email,
            address: req.body.address,
            phone: req.body.phone,
        });
        newCrud.save();
        res.status(200).json(newCrud);
    }catch(err){
        res.status(500).json(err);
    }
});

app.put('/api/:id', async(req,res)=>{

});

app.delete('/api/:id', async(req,res)=>{

});

app.listen(8000, ()=>{
    console.log("Server is active at port 8000");
});
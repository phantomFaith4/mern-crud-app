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
    }catch(err){
        res.status(500).json(err);
    }
});
app.get('/api/:id', async(req,res)=>{
    try{
        const id = req.params.id;
        const result = await Crud.findById(id);
        res.status(200).json(result); 
    }   
    catch(err){
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
        const crud = await newCrud.save();
        res.status(200).json(crud);
    }catch(err){
        res.status(500).json(err);
    }
});

app.put('/api/:id', async(req,res)=>{
    try{
        const update = {
            name:req.body.name,
            email:req.body.email,
            address:req.body.address,
            phone:req.body.phone,
        }
        const updateRecord = await Crud.findByIdAndUpdate(req.params.id,update,{
            new:true,
        });
        res.status(200).json(updateRecord);
    }
    catch(err){
        res.status(500).json(err);
    }
});

app.delete('/api/delete/:id', async(req,res)=>{
    try{
        const del = await Crud.findByIdAndDelete(req.params.id);
        res.status(200).json("Entry has been deleted")
    }catch(err){
        res.status(500).json(err);
    }
});

app.listen(8000, ()=>{
    console.log("Server is active at port 8000");
});
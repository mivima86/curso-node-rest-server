const {response, request} = require('express');


const userGet = (req = request, res = response)=>{

    const {name, surname, location="Barcelona", company="webhell"} = req.query;


    res.json({

        "status":"Success",
        "hello":"moto",
        "action":"GET",
        name,
        surname,
        location,
        company,
    });
}
const userPut = (req, res = response)=>{
    const id = req.params.id;
    res.status(400).json({
        "status":"Success",
        "hello":"moto",
        "action":"PUT",
        id
    });
}
const userPost = (req, res = response)=>{
    const {nombre, edad} = req.body;
    res.status(405).json({
        "status":"Success",
        "hello":"moto",
        "action":"POST",
        nombre,
        edad,
    });
}
const userDelete = (req, res = response)=>{
    res.json({
        "status":"Success",
        "hello":"moto",
        "action":"DELETE",
    });
}
module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete,
}
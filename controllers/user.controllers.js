const { request,response } = require('express');

const usuariosGet = (req= request,res=response, next) => {
    const {saludo,nombre}= req.query;
    console.log({saludo,nombre})
    res.json({msg:'Get api- controlador'});
}
const usuariosPost = (req= request,res=response, next) => {
    const {nombre,edad}= req.body;
    res.json({msg:'Post api- controlador',nombre, edad});
}
const usuariosPut = (req= request,res=response, next) => {
    res.json({msg:'Put api- controlador'});
}
const usuariosPatch = (req= request,res=response, next) => {
    res.json({msg:'Patch api- controlador'});
}
const usuariosDelete = (req= request,res=response, next) => {
    res.json({msg:'Delete api- controlador'});
}

module.exports = {
    usuariosDelete,
    usuariosGet,
    usuariosPatch,
    usuariosPost,
    usuariosPut
}










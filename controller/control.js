const mongoose = require('mongoose')
const db = require("../db/staff")
const employee = mongoose.model("employee")

module.exports = {
    createEmployee(req, res){
        employee.create({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email
    }).then(() => {
        res.json('O funcionario foi registrado com sucesso!')
    })
    },

    requestList(req, res){
        employee.find().lean().then((list) => {
            res.json(list)
    })
    },
    deleteEmployee(req, res){
        employee.findOne({email: req.params.email}).then((Employee) => {
            if(Employee){
                employee.deleteOne(Employee).then(() => {
                    res.json('Registro do funcionario foi deletado com sucesso')
                })
            }else{
                res.status(404).json('Houve um erro')
            }
        })
    },
    editEmployee(req, res){
        employee.findOne({email: req.params.email}).then((Employee) => {
            if(Employee){
                Employee.name = req.body.name,
                Employee.age = req.body.age,
                Employee.email = req.body.email

                Employee.save().then(() => {
                    res.json('Registro do funcionario foi editado')
                })

            }else{
                res.status(404).json('Houve um erro')
            }
        })        
    }
}
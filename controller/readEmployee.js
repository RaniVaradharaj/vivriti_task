const Employees = require('../models/employeeSchema');

//getting data

const readEmployee = async (req, res) => {
    
    try {
        const employee = await Employees.find({});
        //getting employees
        res.status(200).send(employee);
    } catch (error) {
        res.status(500).send("Error :",error);
    }
}


module.exports = readEmployee;
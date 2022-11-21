const Employee = require('../models/employeeSchema');

//Updating a Employee

const updateEmployee = async (req, res)=>{
    try {
        const user_id = req.params.id;

        const updateEmp = await Employee.findByIdAndUpdate(
            { user_id: user_id },
            req.body,
            { new: true }
        );

        if (updateEmp) res.status(200).json(updateEmp)
        else res.send(404).json('Invalid user_id')
    } catch (er) {
        res.status(500).json(er);  
    }
}


module.exports = updateEmployee;
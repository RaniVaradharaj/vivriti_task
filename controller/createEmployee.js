const employee = require('../models/employeeSchema');

const createEmployee = async (req, res) => {

    try {
        const createdEmployee = new employee(req.body) ;                //creating employee

        await createdEmployee.save(function (err, data) {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.status(200).send(data);
            }
        });
    }
    catch (error) {
        console.log("Error :", error);
    }
    
}

module.exports = createEmployee;
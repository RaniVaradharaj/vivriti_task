const Employee = require('../models/employeeSchema');

//Delete Employee

const deleteEmployee = async (req, res) => {
    const user_id = req.params.id;

    try {
            
        const deletedData= await Employee.findByIdAndDelete(user_id);            //data remove query
        
        if (deletedData) res.status(200).send('successfully deleted');
        // if (!user_id) {
        //     res.status(400).send(req.params.user_id + 'was not found');
        // }
        // else{
        //     res.status(200).send(req.params.user_id + 'was deleted');
        // }
        
    } catch (error) {
        console.error(error);
        res.status(500).json("Error :", error);
    }

}


module.exports = deleteEmployee;
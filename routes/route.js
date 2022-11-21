const express = require('express');
const router = express.Router();

const postEmployeeData = require('../controller/createEmployee');

const getEmployeeData = require('../controller/readEmployee');

const putEmployeeData = require('../controller/updateEmployee');

const deleteEmployeeData = require('../controller/deleteEmployee');

router.post('/', postEmployeeData);
router.get('/', getEmployeeData);
router.put('/:id', putEmployeeData);
router.delete('/:id', deleteEmployeeData); 


module.exports = router;
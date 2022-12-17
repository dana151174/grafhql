import express from 'express';
import {getStudents,addStudents,updateStudents,deleteStudents,getCustomers,addCustomers,updateCustomers,deleteCustomers,getEmployees,addEmployees,updateEmplyees,deleteEmplyees} from '../controllers/posts.js';
const router = express.Router();

//Students Module
router.get('/students',getStudents);
router.post('/students',addStudents);
router.put('/students',updateStudents);
router.delete('/students/',deleteStudents);

//Customers module
router.get('/customers/',getCustomers);
router.post('/customers',addCustomers);
router.put('/customers',updateCustomers);
router.delete('/customers/',deleteCustomers);

//Emplyees module
router.get('/employees/',getEmployees);
router.post('/employees',addEmployees);
router.put('/employees',updateEmplyees);
router.delete('/employees/',deleteEmplyees);

export default router;
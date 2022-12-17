import { createRequire } from "module";
const require = createRequire(import.meta.url);
import employees from './../modules/employees.js'
import students from './../modules/students.js'
import customers from './../modules/customers.js'

//students module
export const getStudents = async (req,res) => {
    try {
        let response = await students.get(req);
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({"success":false,message:error.message});
    }
}

export const addStudents = async (req,res) => {
    try {
        let response = await students.add(req.body)
        res.status(200).json({"success":true , response});
    } catch (error) {
        res.status(404).json({"success":false,message:error.message});
    }
}

export const updateStudents = async (req,res) => {
    try {
        let id = req.query.id;
        if (id){
            let response = await students.update(id, req.body);
            res.status(200).json({"success":true});
        }else{
            res.status(200).json({"success":false, "message":"There is no parameter named id, please verify your query parameters" });
        }
    } catch (error) {
        res.status(404).json({"success":false,message:error.message});
    }
}

export const deleteStudents = async (req,res) => {
    try {
        let id = req.query.id;
        if (id){
            let response = await students.delete(id);
            res.status(200).json({"success":true});
        }else{
            res.status(200).json({"success":false, "message":"There is no parameter named id, please verify your query parameters" });
        }
    } catch (error) {
        res.status(404).json({"success":false,message:error.message});
    }
}

//Customers module
export const getCustomers = async (req,res) => {
    try {
        let response = await customers.get(req);
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({"success":false,message:error.message});
    }
}

export const addCustomers = async (req,res) => {
    try {
        let response = await customers.add(req.body)
        res.status(200).json({"success":true , response});
    } catch (error) {
        res.status(404).json({"success":false,message:error.message});
    }
}

export const updateCustomers = async (req,res) => {
    try {
        let id = req.query.id;
        if (id){
            let response = await customers.update(id, req.body);
            res.status(200).json({"success":true});
        }else{
            res.status(200).json({"success":false, "message":"There is no parameter named id, please verify your query parameters" });
        }
    } catch (error) {
        res.status(404).json({"success":false,message:error.message});
    }
}

export const deleteCustomers = async (req,res) => {
    try {
        let id = req.query.id;
        if (id){
            let response = await customers.delete(id);
            res.status(200).json({"success":true});
        }else{
            res.status(200).json({"success":false, "message":"There is no parameter named id, please verify your query parameters" });
        }
    } catch (error) {
        res.status(404).json({"success":false,message:error.message});
    }
}

//Emplyees module
export const getEmployees = async (req,res) => {
    try {
        let response = await employees.get(req);
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({"success":false,message:error.message});
    }
}

export const addEmployees = async (req,res) => {
    try {
        let response = await employees.add(req.body);
        res.status(200).json({"success":true , response});
    } catch (error) {
        res.status(404).json({"success":false,message:error.message});
    }
}

export const updateEmplyees = async (req,res) => {
    try {
        let id = req.query.id;
        if (id){
            let response = await employees.update(id, req.body);
            res.status(200).json({"success":true});
        }else{
            res.status(200).json({"success":false, "message":"There is no parameter named id, please verify your query parameters" });
        }
    } catch (error) {
        res.status(404).json({"success":false,message:error.message});
    }
}

export const deleteEmplyees = async (req,res) => {
    try {
        let id = req.query.id;
        if (id){
            let response = await employees.delete(id);
            res.status(200).json({"success":true});
        }else{
            res.status(200).json({"success":false, "message":"There is no parameter named id, please verify your query parameters" });
        }
    } catch (error) {
        res.status(404).json({"success":false,message:error.message});
    }
}
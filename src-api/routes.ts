//API ROUTES
import {NextFunction,Response,Request} from "express";

import {sequelize} from "./database";
import {TaxiUser} from "./models/user";
import {TaxiRequest} from "./models/request";

sequelize.addModels([TaxiRequest,TaxiUser]);
//GENERATE DB:
sequelize.sync({ force: true});



export const routes = {
    getDrivers  :  (req:Request, res:Response, next:NextFunction) => {


        TaxiUser.findAll().then(
            (drivers:any) => res.json(drivers),
            (error:any) => console.log(error)
        )

    },

    getRequests :   (req:Request, res:Response, next:NextFunction) => {

        TaxiRequest.findAll().then(
            (request:any) => res.json(request),
            (error:any) => console.log(error)
        )

    },

    populate : ()=>{
        TaxiUser.create({
            firstName: "David",
            lastName: "Cohen",
            tz: 44566546,
            license: 46654645,
            phone1: "0578451245",
            phone2: "0578497852",
            address: "Kg George st Jerusalem",
            email: "cohen@gmail.com",
            username: "dcohen",
            password: '7c222fb2927d828af22f592134e8932480637c0d',
            shomerShabat: true,
            category: 'DRIVER',
            type: 'TAXI'
        });


        TaxiUser.create({
            firstName: "Moshe",
            lastName: "Levy",
            tz: 44566546,
            license: 46654645,
            phone1: "0578451245",
            phone2: "0578497852",
            address: "Kg George st Jerusalem",
            email: "levy@gmail.com",
            username: "mlevy",
            password: '7c222fb2927d828af22f592134e8932480637c0d',
            shomerShabat: true,
            category: 'DRIVER',
            type: 'TAXI'
        });


        TaxiUser.create({
            firstName: "Roni",
            lastName: "Golan",
            tz: 44566546,
            license: 46654645,
            phone1: "0578451245",
            phone2: "0578497852",
            address: "Kg George st Jerusalem",
            email: "roni@gmail.com",
            username: "rgolan",
            password: '7c222fb2927d828af22f592134e8932480637c0d',
            shomerShabat: true,
            category: 'SADRAN',
            type: ''
        })
    }
};



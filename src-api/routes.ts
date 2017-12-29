//API ROUTES
import {NextFunction,Response,Request} from "express";

import {sequelize} from "./database";
import {TaxiUser} from "./models/user";
import {TaxiRequest} from "./models/request";
import {TaxiHistory} from "./models/history";

sequelize.addModels([TaxiRequest,TaxiUser,TaxiHistory]);
//GENERATE DB:
//sequelize.sync({ force: true});
sequelize.sync({alter:true});

export const routes = {
    getDrivers  :  (req:Request, res:Response, next:NextFunction) => {

        TaxiUser.findAll().then(
            (drivers:TaxiUser[]) => res.json(drivers),
            (error:any) => res.json(error)
        )

    },

    getRequests :   (req:Request, res:Response, next:NextFunction) => {

        TaxiRequest.findAll().then(
            (request:TaxiRequest[]) => res.json(request),
            (error:any) => res.json(error)
        )

    },

    getHistory :   (req:Request, res:Response, next:NextFunction) => {

        TaxiHistory.findAll().then(
            (request:TaxiHistory[]) => res.json(request),
            (error:any) => res.json(error)
        )

    },

    setHistory :   (req:Request, res:Response, next:NextFunction) => {

        TaxiHistory.bulkCreate([req])

    },

    populate : (req:Request, res:Response, next:NextFunction) =>{
        TaxiUser.bulkCreate(
            [{
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
            },{
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
            },{
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
            }
        ]).then(()=>{
            next();
        })
    }
};



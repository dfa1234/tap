//API ROUTES
import {NextFunction,Response,Request} from "express";

import {sequelize} from "./database";
import {Driver} from "./models/driver";
import {TaxiRequest} from "./models/request";
import {TaxiHistory} from "./models/history";
import {User} from "./models/user";

sequelize.addModels([TaxiRequest,Driver,TaxiHistory,User]);
//GENERATE DB:
//sequelize.sync({ force: true});
sequelize.sync({alter:true});

export const routes = {


    getLogin  :  (req:Request, res:Response, next:NextFunction) => {

        User.findOne({
            where: {username: req.query.username}
        })
            .then(
                user => res.json(user),
                (error:any) => res.json(error)
            )

    },


    getUsers  :  (req:Request, res:Response, next:NextFunction) => {

        User.findAll()
            .then((users:User[]) => res.json(users),
                (error:any) => res.json(error)
            )

    },

    setUsers  :   (req:Request, res:Response, next:NextFunction) => {

        User.bulkCreate([req.body], { individualHooks: true }).then(() => {
            return User.findAll();
        }).then(
            (users:User[]) => res.json(users),
            (error:any) => res.json(error)
        )

    },

    getDrivers  :  (req:Request, res:Response, next:NextFunction) => {

        Driver.findAll({include: [User]})
            .then((drivers:Driver[]) => res.json(drivers),
                (error:any) => res.json(error)
            )


    },

    setDrivers :   (req:Request, res:Response, next:NextFunction) => {

        Driver.create(req.body, {
            include: [ User ]
        }).then(() => {
            return Driver.findAll({include: [User]});
        }).then(
            (drivers:Driver[]) => res.json(drivers),
            (error:any) => res.json(error)
        )
    },

    getRequests :   (req:Request, res:Response, next:NextFunction) => {

        TaxiRequest.findAll().then(
            (request:TaxiRequest[]) => res.json(request),
            (error:any) => res.json(error)
        )

    },

    setRequests :   (req:Request, res:Response, next:NextFunction) => {

        TaxiRequest.bulkCreate([req.body], { individualHooks: true }).then(() => {
            return TaxiRequest.findAll();
        }).then(
            (request:TaxiRequest[]) => res.json(request),
            (error:any) => res.json(error)
        )

    },

    getHistory :   (req:Request, res:Response, next:NextFunction) => {

        TaxiHistory.findAll().then(
            (history:TaxiHistory[]) => res.json(history),
            (error:any) => res.json(error)
        )

    },

    setHistory :   (req:Request, res:Response, next:NextFunction) => {

        TaxiHistory.bulkCreate([req.body], { individualHooks: true }).then(() => {
            return TaxiHistory.findAll();
        }).then(
            (history:TaxiHistory[]) => res.json(history),
            (error:any) => res.json(error)
        )
    }
};



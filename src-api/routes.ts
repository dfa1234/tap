//API ROUTES
import {NextFunction,Response,Request} from "express";

import {sequelize} from "./database";
import {Driver} from "./models/driver";
import {TaxiRequest} from "./models/request";
import {Ride} from "./models/ride";
import {User} from "./models/user";
import {Car} from "./models/car";

sequelize.addModels([TaxiRequest,Driver,Ride,User,Car]);
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

    getUser  :  (req:Request, res:Response, next:NextFunction) => {

        User.findOne({
            where: {id: req.query.id}
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

    setUser  :   (req:Request, res:Response, next:NextFunction) => {

        User.create( req.body ).then((user) => {
            return  User.findOne({
                where: {id: user.id}
            })
        }).then(
            (user) => res.json(user),
            (error:any) => res.json(error)
        )
    },

    getDriver  :  (req:Request, res:Response, next:NextFunction) => {

        Driver.findOne({
            include: [User],
            where: {idUser: req.query.idUser}
        })
            .then(
                driver => res.json(driver),
                (error:any) => res.json(error)
            )
    },

    getDrivers  :  (req:Request, res:Response, next:NextFunction) => {

        Driver.findAll({include: [User]})
            .then((drivers:Driver[]) => res.json(drivers),
                (error:any) => res.json(error)
            )


    },

    setDriver :   (req:Request, res:Response, next:NextFunction) => {


        Driver.create( req.body, {
            include: [ User ]
        }).then((driver) => {
            return  Driver.findOne({
                include: [User],
                where: {idUser: driver.idUser}
            })
        }).then(
            (driver) => res.json(driver),
            (error:any) => res.json(error)
        )
    },

    getRequest :   (req:Request, res:Response, next:NextFunction) => {

        TaxiRequest.findOne({
            where: {id: req.query.id}
        }).then(
                request => res.json(request),
                (error:any) => res.json(error)
            )
    },

    getRequests :   (req:Request, res:Response, next:NextFunction) => {

        TaxiRequest.findAll().then(
            (request:TaxiRequest[]) => res.json(request),
            (error:any) => res.json(error)
        )

    },

    setRequest :   (req:Request, res:Response, next:NextFunction) => {


        TaxiRequest.create( req.body ).then((request) => {
            return  TaxiRequest.findOne({
                where: {id: request.id}
            })
        }).then(
            (request) => res.json(request),
            (error:any) => res.json(error)
        )
    },

    getRide :   (req:Request, res:Response, next:NextFunction) => {

        Ride.findOne({
            where: {id: req.query.id}
        }).then(
            ride => res.json(ride),
            (error:any) => res.json(error)
        )
    },

    getRides :   (req:Request, res:Response, next:NextFunction) => {

        Ride.findAll().then(
            (rides:Ride[]) => res.json(rides),
            (error:any) => res.json(error)
        )

    },

    setRide :   (req:Request, res:Response, next:NextFunction) => {

        Ride.create( req.body ).then((ride) => {
            return  Ride.findOne({
                where: {id: ride.id}
            })
        }).then(
            (ride) => res.json(ride),
            (error:any) => res.json(error)
        )
    },

    getCar :   (req:Request, res:Response, next:NextFunction) => {

        Car.findOne({
            include: [Driver],
            where: {idDriver: req.query.idDriver}
        }).then(
            car => res.json(car),
            (error:any) => res.json(error)
        )
    },

    getCars :   (req:Request, res:Response, next:NextFunction) => {

        Car.findAll({
            include: [
                {model: Driver, include: [
                    {model: User}
                ]}
            ]
         }).then(
            (cars:Car[]) => res.json(cars),
            (error:any) => res.json(error)
        )

    },

    setCar :   (req:Request, res:Response, next:NextFunction) => {

        Car.create( req.body ).then((car) => {
            return  Car.findOne({
                //include: [Driver],
                where: {license_plate: car.license_plate}
            })
        }).then(
            (car) => res.json(car),
            (error:any) => res.json(error)
        )
    },

    setCarDriver :   (req:Request, res:Response, next:NextFunction) => {

        Car.update({
            idDriver: req.query.driver.idUser,
        }, {
            where: {id: req.query.id}
        }).then(() => {
            return Car.findOne({
                include: [Driver],
                where: {id: req.query.id}
            })
        }).then(
            (car) => res.json(car),
            (error:any) => res.json(error)
        )
    }
};



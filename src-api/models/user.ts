
import {
    Table, Column, Model, Default, HasOne, Unique
} from 'sequelize-typescript';
import {Driver} from "./driver";

@Table({
    timestamps: true
})
export class User extends Model<User> {

    @Column
    firstName: string;

    @Column
    lastName: string;

    @Column
    birthday: string;

    @Column
    phone1: string;

    @Column
    phone2: string;

    @Column
    address: string;

    //@Unique
    @Column
    email: string;

    @Column
    tz:string;

    //@Unique
    @Column
    username: string;


    @Default('7c222fb2927d828af22f592134e8932480637c0d')
    @Column
    password: string;

    @Default('client')
    @Column
    category: string;

    @HasOne(() => Driver, {foreignKey: 'idUser'})
    driver: Driver;

}

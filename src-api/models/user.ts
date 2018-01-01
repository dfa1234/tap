
import {
    Table, Column, Model, Default, HasOne, ForeignKey
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

    @Column
    email: string;

    @Column
    username: string;


    @Default('7c222fb2927d828af22f592134e8932480637c0d')
    @Column
    password: string;

    @Default('DRIVER')
    @Column
    category: string;

    @HasOne(() => Driver, {foreignKey: 'idUser'})
    driver: Driver;

}

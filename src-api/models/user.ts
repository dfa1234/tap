
import {
    Table, Column, Model, Default
} from 'sequelize-typescript';

@Table({
    timestamps: true
})
export class TaxiUser extends Model<TaxiUser> {

    @Column
    firstName: string;

    @Column
    lastName: string;

    @Column
    birthday: string;

    @Column
    tz:number;

    @Column
    license:number;

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

    @Column
    shomerShabat: boolean;


    @Default('DRIVER')
    @Column
    category: string;

    @Default('')
    @Column
    type: string;

    //@HasMany(() => Hobby)
    //hobbies: Hobby[];

}

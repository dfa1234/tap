
import {
    Table, Column, Model, Default, BelongsTo, ForeignKey
} from 'sequelize-typescript';
import {User} from "./user";

@Table({
    timestamps: true
})
export class Driver extends Model<Driver> {


    @ForeignKey(() => User)
    @Column
    idUser:number;

    @Column
    tz:number;

    @Column
    license:number;

    @Column
    shomerShabat: boolean;


    @Default('')
    @Column
    type: string;


    @BelongsTo(() => User,{foreignKey: 'idUser'})
    user: User;

}

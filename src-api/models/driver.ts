
import {
    Table, Column, Model, Default, BelongsTo, ForeignKey, HasOne, PrimaryKey
} from 'sequelize-typescript';
import {User} from "./user";
import {Car} from "./car";

@Table({
    timestamps: true
})
export class Driver extends Model<Driver> {

    @ForeignKey(() => User)
    @PrimaryKey
    @Column
    idUser:number;

    @Column
    license:string;

    @Column
    shomerShabat: boolean;


    @Default('DRIVER')
    @Column
    type: string;

    @Column
    availability:string;

    @Column
    status: string;


    @BelongsTo(() => User, { foreignKey: 'idUser'} )
    user: User;

    @HasOne(() => Car, { foreignKey: 'idDriver' })
    car: Car;

}

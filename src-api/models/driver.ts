
import {
    Table, Column, Model, Default, BelongsTo, ForeignKey, PrimaryKey, HasMany
} from 'sequelize-typescript';
import {User} from "./user";
import {Car} from "./car";

@Table({
    timestamps: true
})
export class Driver extends Model<Driver> {

    @PrimaryKey
    @ForeignKey(() => User)
    @Column
    idUser:number;

    @Column
    tz:string;

    @Column
    license:string;

    @Column
    shomerShabat: boolean;


    @Default('DRIVER')
    @Column
    type: string;

    @Column
    status: string;


    @BelongsTo(() => User, { foreignKey: 'idUser'} )
    user: User;

    @HasMany(() => Car, { foreignKey: 'idDriver' })
    driver: Driver;

}

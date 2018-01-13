
import {
    Table, Column, Model, BelongsTo, ForeignKey, PrimaryKey
} from 'sequelize-typescript';
import {Driver} from "./driver";

@Table({
    timestamps: true
})
export class Car extends Model<Car> {


    @Column
    idDriver:number;

    //@Unique
    @Column
    license_plate: string;

    @Column
    brand: string;

    @Column
    place_number: string;

    @Column
    equipment: string;

    @Column
    hardware_version: string;

    @Column
    availability:string;

    @Column
    location:string;

    @Column
    status: string;

    @BelongsTo(() => Driver, { foreignKey: 'idDriver'} )
    driver: Driver;
}

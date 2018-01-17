
import {
    Table, Column, Model, BelongsTo, ForeignKey
} from 'sequelize-typescript';
import {Driver} from "./driver";

@Table({
    timestamps: true
})
export class Car extends Model<Car> {

    @ForeignKey(() => Driver)
    @Column
    idDriver:number;

    @Column
    car_license: string;

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

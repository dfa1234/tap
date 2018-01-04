
import {
    Table, Column, Model, BelongsTo, ForeignKey, PrimaryKey
} from 'sequelize-typescript';
import {Driver} from "./driver";

@Table({
    timestamps: true
})
export class Car extends Model<Car> {

    @PrimaryKey
    @Column
    id:number;

    @ForeignKey(() => Driver)
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

    @BelongsTo(() => Driver, { foreignKey: 'idDriver'} )
    driver: Driver;
}

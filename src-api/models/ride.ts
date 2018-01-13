import {Table, Column, Model} from 'sequelize-typescript';

@Table({
    timestamps: true
})
export class Ride extends Model<Ride> {

    @Column
    car: number;

    @Column
    driver_name: string;

    @Column
    client_name: string;

    @Column
    driver_phone: string;

    @Column
    client_phone: string;

    @Column
    address_from: string;

    @Column
    address_to: string;

    @Column
    date: string;

    @Column
    start: string;

    @Column
    end: string;

    @Column
    status: string;

}


import {Table, Column, Model} from 'sequelize-typescript';

@Table({
    timestamps: true
})
export class Ride extends Model<Ride> {

    @Column
    driver_name: string;

    @Column
    client_name: string;

    @Column
    driver_phone: number;

    @Column
    client_phone: number;

    @Column
    address_from: string;

    @Column
    address_to: string;

    @Column
    date: string;

    @Column
    status: string;

}


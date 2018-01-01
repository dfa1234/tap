import {Table, Column, Model} from 'sequelize-typescript';

@Table({
    timestamps: true
})
export class TaxiHistory extends Model<TaxiHistory> {

    @Column
    driver_name: string;

    @Column
    client_name: string;

    @Column
    driver_phone: number;

    @Column
    client_phone: number;

    @Column
    address: string;

    @Column
    date: string;

}


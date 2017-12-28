import {Table, Column, Model} from 'sequelize-typescript';

@Table({
    timestamps: true
})
export class TaxiHistory extends Model<TaxiHistory> {

    @Column
    driver_name: string;

    @Column
    license: string;

    @Column
    phone1: number;

    @Column
    date: string;

}


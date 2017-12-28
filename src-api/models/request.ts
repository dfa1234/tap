import {Table, Column, Model} from 'sequelize-typescript';

@Table({
    timestamps: true
})
export class TaxiRequest extends Model<TaxiRequest> {

    @Column
    firstName: string;

    @Column
    lastName: string;

    @Column
    phone: string;

    @Column
    street: string;

    @Column
    street_num: number;

    @Column
    city: string;

    @Column
    country : string;

    @Column
    zipcode : number;

}


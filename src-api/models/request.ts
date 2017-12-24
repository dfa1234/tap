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

}


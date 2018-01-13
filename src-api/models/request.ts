import {Table, Column, Model} from 'sequelize-typescript';

@Table({
    timestamps: true
})
export class RideRequest extends Model<RideRequest> {

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

    @Column
    status: string;

    @Column
    notice: string;

}


import {Table, Column, Model, Default} from 'sequelize-typescript';

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

    @Default('0')
    @Column
    baggage: string;

    @Default('0')
    @Column
    places: string;

    @Column
    notice: string;

}


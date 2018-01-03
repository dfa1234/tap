
import {
    Table, Column, Model, Default, BelongsTo, ForeignKey, PrimaryKey
} from 'sequelize-typescript';
import {User} from "./user";

@Table({
    timestamps: true
})
export class Driver extends Model<Driver> {

    @PrimaryKey
    @ForeignKey(() => User)
    @Column
    idUser:number;

    @Column
    tz:number;

    @Column
    license:number;

    @Column
    shomerShabat: boolean;


    @Default('DRIVER')
    @Column
    type: string;

    @Column
    status: string;


    @BelongsTo(() => User, { foreignKey: 'idUser', targetKey: 'id'} )

    user: User;

}

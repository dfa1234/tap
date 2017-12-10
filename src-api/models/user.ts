
import {
    Table, Column, Model, HasMany, DeletedAt, UpdatedAt, CreatedAt, Unique,
    AutoIncrement, AllowNull, PrimaryKey, Default
} from 'sequelize-typescript';

@Table({
    timestamps: true
})
export class TaxiUser extends Model<TaxiUser> {

    /*
    @AllowNull(false)
    @AutoIncrement
    @Unique
    @PrimaryKey
    @Column
    id:number;
*/
    @Column
    firstName: string;

    @Column
    lastName: string;

    @Column
    birthday: Date;

    @Column
    tz:number;

    @Column
    license:number;

    @Column
    phone1: string;

    @Column
    phone2: string;

    @Column
    address: string;

    @Column
    email: string;

    @Column
    username: string;


    @Default('7c222fb2927d828af22f592134e8932480637c0d')
    @Column
    password: string;

    @Column
    shomerShabat: boolean;


    @Default('DRIVER')
    @Column
    category: string;

    @Default('')
    @Column
    type: string;

    @CreatedAt
    creationDate: Date;

    @UpdatedAt
    updatedOn: Date;

    @DeletedAt
    deletionDate: Date;

    //@HasMany(() => Hobby)
    //hobbies: Hobby[];

}


/*


 module.exports = function (sequelize, DataTypes) {
    return sequelize.define('drivers', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        tz: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        license: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        phone1: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phone2: {
            type: DataTypes.STRING,
            allowNull: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '7c222fb2927d828af22f592134e8932480637c0d'//=12345678 en sha1
        },
        shomerShabat: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        category: {
            type: DataTypes.STRING,
            allowNull: true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        tableName: 'drivers',
        freezeTableName: true
    });
};


 */
import {Table, Column, Model, HasMany, DeletedAt, UpdatedAt, CreatedAt} from 'sequelize-typescript';

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

    //@HasMany(() => Hobby)
    //hobbies: Hobby[];
    @CreatedAt
    creationDate: Date;

    @UpdatedAt
    updatedOn: Date;

    @DeletedAt
    deletionDate: Date;
}


/*


module.exports = function (sequelize, DataTypes) {
    return sequelize.define('requests', {
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
        phone: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phone2: {
            type: DataTypes.STRING,
            allowNull: true
        },
        street: {
            type: DataTypes.STRING,
            allowNull: true
        },
        number: {
            type: DataTypes.INTEGER(5),
            allowNull: true
        },
        zipCode: {
            type: DataTypes.INTEGER(10),
            allowNull: true
        },
        apartNumber: {
            type: DataTypes.STRING,
            allowNull: true
        },
        city: {
            type: DataTypes.STRING,
            allowNull: true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        tableName: 'users',
        freezeTableName: true
    });
};


 */
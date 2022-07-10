const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connections')



class Users extends Model {}
Users.init(

    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
            
        },
        username: {
            type: DataTypes.STRING,
            allowNull:false
        },
        email: {
            type:DataTypes.STRING,
            allowNull: false
        }

    },

    {
        sequelize,
        modelName: "users"
    }



)


module.exports = Users
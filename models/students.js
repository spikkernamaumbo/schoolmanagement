'use strict';
const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
const connection = require("../dbConnection");

const student = connection.define('student', {
id:{
  type: DataTypes.INTEGER,
  primaryKey:true,
  autoIncrement:true
},
  firstName: {
    type: DataTypes.STRING,

  },
  lastName: {
    type: DataTypes.STRING,
  },
  sex:{
    type: DataTypes.STRING,
 
  },
  perfomanceTrend:{
    type: DataTypes.JSON,

  },
  address:{
     type:DataTypes.STRING,
      unique:true
   
  },
  dateOfBirth:{
      type:DataTypes.DATE, 
  },
  studentResults:{
    type: DataTypes.JSON,
    
  }
},

{
  timestamps:true
});
module.exports = student


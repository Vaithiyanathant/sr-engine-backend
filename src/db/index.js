const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('nshades', 'admin', 'awspassword', {
  host: 'nshades-db.cmmkohbr79bs.ap-southeast-2.rds.amazonaws.com',
  dialect: 'mysql',
});

const Student = sequelize.define('Student', {
    Name: {
      type: DataTypes.STRING,
    },
    "Regn Num": {
      type: DataTypes.STRING,
    },
    Branch: {
      type: DataTypes.STRING,
    },
    "Total Submissions": {
      type: DataTypes.STRING,
    },
    "Solved Count": {
      type: DataTypes.STRING,
    },
    Score: {
      type: DataTypes.STRING,
    },
    Login: {
      type: DataTypes.STRING,
    },
    Email: {
      type: DataTypes.STRING,
    },
    Phone: {
      type: DataTypes.STRING,
    },
    Mentor: {
      type: DataTypes.STRING,
    },
    "Batch/Section": {
      type: DataTypes.STRING,
    },
    Batch: {
      type: DataTypes.STRING,
    },
    College: {
      type: DataTypes.STRING,
    },
    TestName: {
      type: DataTypes.STRING,
    }
  });

const Moderators  = sequelize.define('Moderators',{
    Name:{
        type:DataTypes.STRING
    },
    Email:{
        type:DataTypes.STRING
    },
    Password:{
        type:DataTypes.STRING
    }

})
sequelize.sync()
  .then(() => {
    console.log('Database and table have been synchronized.');
  })
  .catch((err) => {
    console.error('Error synchronizing the database:', err);
  });

module.exports = {
  sequelize,
  Student,
  Moderators,
  
};

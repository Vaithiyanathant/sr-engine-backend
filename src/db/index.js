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
    "Resume Count":{
      type:DataTypes.STRING
    },
    "Usage Time":{
      type:DataTypes.STRING
    },
    "Active Utilization":
    {
      type:DataTypes.STRING
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

  const StudentAbsent = sequelize.define('StudentAbsent', {
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



  const Users = sequelize.define('Users', {
    Name: {
      type: DataTypes.STRING,
    },
    "Regn Num": {
      type: DataTypes.STRING,
    },
    Branch: {
      type: DataTypes.STRING,
    },

    Score: {
      type: DataTypes.NUMBER,
    },
    Email: {
      type: DataTypes.STRING,
    },


    "Batch/Section": {
      type: DataTypes.STRING,
    },
    Batch: {
      type: DataTypes.STRING,
    },

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
const Tests  = sequelize.define('Tests',{
  Name:{
      type:DataTypes.STRING
  },
  Url:{
      type:DataTypes.STRING
  },
  Questions:{
      type:DataTypes.JSON,
      allowNull:true
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
  StudentAbsent,
  Users,
  Tests,
  
};

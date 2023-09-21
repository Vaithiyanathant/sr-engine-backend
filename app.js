const express = require('express');
const app = express();
const fs = require('fs');
const xlsx = require('xlsx');
const mysql = require('mysql2');
const path = require('path');


// app.get('/', function(req, res){
//     res.send("Welcome")
// })
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('nshades', 'admin', 'awspassword', {
  host: 'nshades-db.cmmkohbr79bs.ap-southeast-2.rds.amazonaws.com', // Replace with your database host.
  dialect: 'mysql',
});

// Define your Sequelize model.
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

// Synchronize the model with the database (create the table).
sequelize.sync()
  .then(() => {
    console.log('Database and table have been synchronized.');
  })
  .catch((err) => {
    console.error('Error synchronizing the database:', err);
  });





// Load the Excel file
const workbook = xlsx.readFile('ProgrammingTestfor2025BatchStudents(CSE,IT,AIDS,CSBS)07-09-2023Absent.xlsx');
const test= "textname";
// Select the sheet you want to convert (e.g., the first sheet)
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const jsonData = xlsx.utils.sheet_to_json(sheet);
console.log("Inserting data")
 try {
Student.bulkCreate(jsonData)
  .then((students) => {
    console.log('Bulk insert successful');
  })
  .catch((err) => {
    console.error('Error inserting data:',err);
  });

  } catch (error) {
    console.error('Error inserting data:0',error);
  } finally {
  }






// app.listen(8000,()=>{
//     console.log("listening")
// })

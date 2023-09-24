const {Student,StudentAbsent,Tests}  = require('../db/index')
const fs = require('fs');
const xlsx = require('xlsx');
const path = require('path');

exports.PostTest = async (req, res) => {
  try {
    const { test_name, url } = req.body;
    console.log(test_name, url);

    const existingTest = await Tests.findOne({
      where: { Name: test_name },
    });

    if (existingTest) {
      console.log("alred")
      return res.json({ message: 'Test name already exists' });
    }

    const codersFile = req.files['codersfile'][0].filename;
    console.log(codersFile, 'enax  ');
    const absentFile = req.files['absentfile'][0].filename;

    const filePath = path.join(__dirname, '../../uploads', codersFile);
    const filepath2 = path.join(__dirname, '../../uploads', absentFile);

    await Tests.create({ Name: test_name, Url: url });

    const workbook = xlsx.readFile(filePath);
    const absentbook = xlsx.readFile(filepath2);

    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    const AsheetName = absentbook.SheetNames[0];
    const Asheet = absentbook.Sheets[AsheetName];

    let jsonData = xlsx.utils.sheet_to_json(sheet);
    jsonData = jsonData.map((item) => ({
      ...item,
      TestName: test_name,
    }));

    let AjsonData = xlsx.utils.sheet_to_json(Asheet);
    AjsonData = AjsonData.map((item) => ({
      ...item,
      TestName: test_name,
    }));

    try {
      await Student.bulkCreate(jsonData);
      console.log('\nBulk insert successful for present \n\n\n');

      await StudentAbsent.bulkCreate(AjsonData);
      console.log('\nBulk insert successful for absent\n\n');
    } catch (error) {
      console.error('Error inserting data:', error);
      res.status(500).json({ message: 'Internal server error' });
      return;
    }

    res.status(201).json({ message: 'Test added successfully' });
  } catch (error) {
    console.error('PostTest error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



exports.TopPerformers = (req,res)=>{
    
    
}

exports.TestPerformance = async (req, res) => {
  const { test_name } = req.body;

  try {
    const students = await Student.findAll({
      where: {
        TestName: test_name,
      },
    });

    const studentAbsents = await StudentAbsent.findAll({
      where: {
        TestName: test_name,
      },
    });

    res.status(200).json({
      students,
      studentAbsents,
    });
  } catch (error) {
    console.error('TestPerformance error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.ALLTests = async(req,res)=>{
  const data = await Tests.findAll()
  res.send(data)
}
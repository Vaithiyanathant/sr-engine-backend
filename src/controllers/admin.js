exports.PostTest = (req, res) => {
    try {
      const { test_name, url } = req.body;
      console.log(test_name,url)
  
      const codersFile = req.files['codersfile'][0].filename; 
      const absentFile = req.files['absentfile'][0].filename; 
  
      
// Load the Excel file
const workbook = codersFile
const test= test_name;
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
  
      res.status(201).json({ message: 'Test added successfully' });
    } catch (error) {
      console.error('PostTest error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
exports.TopPerformers = (req,res)=>{
    
}

exports.TestPerformance = (req,res)=>{
    const {test_name} = req.body;
    
    
}
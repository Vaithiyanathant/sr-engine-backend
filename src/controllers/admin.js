exports.PostTest = (req, res) => {
    try {
      const { test_name, url } = req.body;
      console.log(test_name,url)
  
      const codersFile = req.files['codersfile'][0].filename; 
      const absentFile = req.files['absentfile'][0].filename; 
  
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
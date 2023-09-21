const express  = require('express')
const authentication = require('./src/controllers/authentication')
const admin = require('./src/controllers/admin')
const router = express.Router()
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
  
const upload = multer({ storage: storage });


router.post('/login',authentication.login)
router.post('/change-password',authentication.changePassword)
router.post('/create-admin',authentication.CreateModerator)
router.post('/form-data', upload.fields([{ name: 'codersfile' }, { name: 'absentfile' }]), admin.PostTest);

module.exports = router

const express = require('express');
const app = express();
const fs = require('fs');
const xlsx = require('xlsx');
const mysql = require('mysql2');
const path = require('path');
const routes  = require('./routes')
const cors = require('cors')
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());


app.use('/',routes)


app.listen(8000,()=>{
    console.log(`🚀:listening in port 8000`)
})


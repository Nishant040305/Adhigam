const connectToMonogo = require("./mongo");
const express = require('express')
const app = express()
const router = express.Router();

const multer = require("multer")
const fs = require('fs');
const path = require('path');

// Ensure uploads directory exists
const dir = './uploads';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, dir)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix+ '-' +file.originalname  )
  }
})
const upload = multer({storage})

const cors = require("cors")
app.use(cors({ credentials: true }))
const port = 5000
connectToMonogo();
app.use(express.json())
//Available Routes
app.use('/',require('./routes/credential'))
app.use('/homepage/',require('./routes/data'))
app.use('/profile',require("./routes/profile"))
app.use(express.urlencoded({extended:false}));

router.post('/upload',upload.single("avatar"),(req,res)=>{
  console.log(req.file);
  return res.redirect("/");
})

app.use('/api', router); // Use the router

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})

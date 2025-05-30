const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());

app.get('/download', (req, res) => {
 const fileName = path.join(__dirname, 'file.txt');
 console.log(fileName);
 res.download(fileName, 'file.txt', (err) => {
   if (err) {
     console.log(err);
   } else {
     console.log('File downloaded successfully');
   }
 });
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
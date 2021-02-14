const multer = require('multer');
const path = require('path');

// multer config
module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, callback) => {
    let extension = path.extname(file.originalname);
    if (extension !== ".jpg" && extension !== ".jpeg" && extension !== ".png") {
      callback(new Error("File type not supported."), false);
      return;
    }
    callback(null, true);
  }
});

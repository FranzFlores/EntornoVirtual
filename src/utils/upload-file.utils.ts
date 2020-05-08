import * as multer from "multer";
import { v4 as uuidv4  } from "uuid";

export const imageFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return callback(new Error('Solo se permiten imagenes'), false);
    }
    callback(null, true);
  };

export const storageImage = multer.diskStorage({
    destination: './uploads/person/images',
    filename: function (req, file, cb) {   
        let aux = file.originalname.split('.');
        let extension = aux[aux.length - 1];        
        cb(null, uuidv4() + '.' + extension);
    }
});

export const pdfFileFilter = (req,file,cb)=>{
  if (!file.originalname.match(/\.(pdf)$/)) {
    return cb(new Error('Solo se permiten archivos PDF'), false);
  }
  cb(null, true);
}

export const storageFileStudent = multer.diskStorage({
  destination: './uploads/person/files/students',
  filename: function (req, file, cb) {        
      cb(null, uuidv4() + '.' + 'pdf');
  }
});

export const storageFileAdministrative = multer.diskStorage({
  destination: './uploads/person/files/administratives',
  filename: function (req, file, cb) {        
      cb(null, uuidv4() + '.' + 'pdf');
  }
});





//   export const editFileName = (req, file, callback) => {
//     const name = file.originalname.split('.')[0];
//     const fileExtName = extname(file.originalname);
//     const randomName = Array(4)
//       .fill(null)
//       .map(() => Math.round(Math.random() * 16).toString(16))
//       .join('');
//     callback(null, `${name}-${randomName}${fileExtName}`);
//   };
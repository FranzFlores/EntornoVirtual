import * as multer from "multer";
import { v4 as uuidv4  } from "uuid";

export const imageFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      return callback(new Error('Solo se permiten imagenes'), false);
    }
    callback(null, true);
  };



export const storage = multer.diskStorage({
    destination: './uploads/person',
    filename: function (req, file, cb) {   
        let aux = file.originalname.split('.');
        let extension = aux[aux.length - 1];        
        cb(null, uuidv4() + '.' + extension);
    }
})

//   export const editFileName = (req, file, callback) => {
//     const name = file.originalname.split('.')[0];
//     const fileExtName = extname(file.originalname);
//     const randomName = Array(4)
//       .fill(null)
//       .map(() => Math.round(Math.random() * 16).toString(16))
//       .join('');
//     callback(null, `${name}-${randomName}${fileExtName}`);
//   };
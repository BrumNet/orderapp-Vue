const readXlsxFile = require("read-excel-file/node");

const upload = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload an excel file!");
    }

    let path =
      __basedir + "/resources/static/assets/uploads/" + req.file.filename;
    const connection = await mysqlPromise.DATABASE.getConnection();
    var res = [{}];

    readXlsxFile(path).then((rows) => {
      // skip header
      rows.shift();

      // let tutorials = [];
      rows.forEach( async (row) => {
        id = row[0];
        location_name = row[1]; 
        catalog_name = row[2];
        color =  row[3];
        size =  row[4];
        quantity = row[5];
        del_flag =  row[6];
        try {
          res = await connection.execute('INSERT INTO products (id, location_name, catalog_name, color, size, quantity, del_flag ) VALUES ?', [id, location_name, catalog_name, color, size, quantity, del_flag]);
        }
        catch (err) {
          console.error(err)
          connection.release();
          return false
        }
    }
      )});
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};

module.exports = {
  upload
};
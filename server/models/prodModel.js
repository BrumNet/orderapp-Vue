const mysqlPromise = require('../config/database');

const productModel = {
  prodList: async function(params) {
    const connection = await mysqlPromise.DATABASE.getConnection();
    var res = [{}];

    try {
      res = await connection.execute(`SELECT * FROM products`, [params.offset, params.limit]);
      connection.release();
    }
    catch (err) {
      console.error(err)
      connection.release();
      return false
    }
    return res.length > 0 ? res : null;
  },
  
  prodlocListExt: async function(location_name,type,type_query) {
    const connection = await mysqlPromise.DATABASE.getConnection();
    var res = [{}];
    var StringQuery = ''
    try {
      res = await connection.execute('SELECT * FROM products WHERE location_name = ? && '+type+' = ?',[location_name,type_query]);
      connection.release();
    }
    catch (err) {
      console.error(err)
      connection.release();
      return false
    }
    return res.length > 0 ? res[0] : null;
  },

  prodlocList: async function(location_name) {
    const connection = await mysqlPromise.DATABASE.getConnection();
    var res = [{}];
    try {
      res = await connection.execute('SELECT * FROM products WHERE location_name = ?', [location_name] );
      connection.release();
    }
    catch (err) {
      console.error(err)
      connection.release();
      return false
    }
    return res.length > 0 ? res[0] : null;
  },
}




module.exports = productModel

const mysql = require('mysql')

const pool = mysql.createPool({
  user: 'root',
  password: '12345678',
  database: 'helloworld',
  host: 'localhost',
  port: '3306',
})

const query = (sql, val) => {
  return new Promise( (resolve, reject) => {
    pool.getConnection((err, connection) => {
      if(err) reject(err)
      else {
        connection.query(sql, val, (err, fields) => {
          if(err) reject(err)
          else resolve(fields)

          connection.release()
        })
      }
    })
  })
}

module.exports = {
  query
}
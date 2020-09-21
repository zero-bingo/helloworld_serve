const CREATE_TABLE = `CREATE TABLE IF NOT EXISTS user(
  user_id INT(10) NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(20) NOT NULL,
  user_password VARCHAR(20) NOT NULL
);`.replace(/[\r\n]/g, '')

const QUERY_TABLE = (tableName) => `SELECT * FROM ${tableName};`

const INSERT_TABLE = (tableName, { key, value}) => `INSERT INTO ${tableName}(${key}) VALUES (${value});`

const UPDATE_TABLE = (tableName, { primaryKey, primaryValue}, { key, value}) => `UPDATE ${tableName} SET ${key}=${value} WHERE(${primaryKey}=${primaryValue});`

const DELETE_TABLE = (tableName, { primaryKey, primaryValue}) => `DELETE FROM ${tableName} WHERE(${primaryKey}=${primaryValue});`

module.exports = {
  CREATE_TABLE,
  QUERY_TABLE,
  INSERT_TABLE,
  UPDATE_TABLE,
  DELETE_TABLE,
}
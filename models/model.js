//todo: add a flag to remove columns that are null, empty or undefined
const db = require('../db/database')

const {
        prepareInsertStmt,
        prepareSelectStmt,
        prepareUpdateStmt,
        prepareDeleteStmt
      } = require('../db/queries')


class Model {
  constructor (id) {
    // purpose of data is to avoid conflict
    // with this.constructor.name
    // @data {id:1, name:'something"}
    this._data = {}
    this._data.id = id
  }

  get data () {
    return this._data
  }

  set data (data) {
    this._data = data
  }

  get id () {
    return this.data.id
  }

  set id (id) {
    this.data.id = id
  }

  static async selectAll (fieldsToSelect="*", tableName) {
    return this.select(fieldsToSelect)
  }


  static async execute(statement, values) {
    return await db.execute(statement, values)
  }


  static async select (fieldsToSelect, whereParams,
    tableName = this.name.toLowerCase()) {
    let data, values
    const statement = prepareSelectStmt(tableName, fieldsToSelect, whereParams)
    if (whereParams) {
      values = Object.values(whereParams)
    }
    data = await db.execute(statement, values)
    return this.deSerialize(data.rows)
  }

  static deSerialize (data) {
    return data.map(item => {
      const newObj = new this()
      newObj.data = item
      return newObj
    })
  }

  save () {
    const tableName = this.constructor.name.toLowerCase()
    // assume that pk is 'id' for simplicity
    const {id,...data} = this.data
    const columns = Object.keys(data)
    const values = Object.values(data)
    let statement = prepareInsertStmt(tableName, columns, values)
    console.log(statement)
    console.log(values)
    return db.execute(statement, values)
  }


}

module.exports = Model
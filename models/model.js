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
    return db.execute(statement, values)
  }

}

module.exports = Model
exports.up = (knex, Promise) => {
    return knex.schema.createTable('books', table => {
      table.increments('id').primary()
      table.string('title')
      table.string('photo')
      table.string('link')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('timetable')
  }
  
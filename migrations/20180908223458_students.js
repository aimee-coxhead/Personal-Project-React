

exports.up = (knex, Promise) => {
    return knex.schema.createTable('students', table => {
      table.increments('id').primary()
      table.string('name')
      table.string('profile_photo')
      table.integer('timetable_Id')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('students')
  }
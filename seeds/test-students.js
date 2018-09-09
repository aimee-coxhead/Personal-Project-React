
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {id: 88801, name: 'Bob', profile_photo: 'images/Puppy1.jpg', timetable_Id: 99901},
        {id: 88802, name: 'Grace', profile_photo: 'images/Puppy2.jpg', timetable_Id: 99902},
        {id: 88803, name: 'Sally', profile_photo: 'images/Puppy3.jpg', timetable_Id: 99903}
      ])
    })
}
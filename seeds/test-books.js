
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {id: 77701, title: 'sdfsdFsdf', photo: '/images/Students/Puppy1.jpg', link: 'sdfsfmnabsjhdfu'},
        {id: 77702, title: 'aSDad', photo: '/images/Students/Puppy2.jpg', link: 'sehshfiusfgnsighaisf'},
        {id: 77703, title: 'sggE', photo: '/images/Students/Puppy3.jpg', link: 'ajsdfghsaidrfguia'}
      ])
    })
}

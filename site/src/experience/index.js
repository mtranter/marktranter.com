const headerService = require('./../header')

headerService.registerHeaderItem({title:'Experience', elId: 'experience'})

module.exports = {
  experience: [{
      from: new Date(2016,8,1),
      to: 'Present',
      role:'Senior Engineer and Architect',
      where: 'Judopay',
      blurb: 'Lorem Ipsum'
    }
  ]
}

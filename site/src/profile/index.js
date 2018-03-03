const headerService = require('./../header')

headerService.registerHeaderItem({title:'Profile', elId: 'profile'})

module.exports = {
  heading: "About Me",
  personalDetails: {
    name: "Mark Tranter",
    dob: '1979-12-01',
    address: 'Newcastle, NSW, Australia',
    phone: '0499 769 278',
    email: 'mark.a.tranter@gmail.com',
    nationality: 'Australian'
  }
}

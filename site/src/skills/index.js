const headerService = require('./../header')

headerService.registerHeaderItem({title:'Skills', elId: 'skills'})

module.exports = {
  heading: "Skills",
  skills: [{
    name: "Making Sick Static Websites",
    skillLevel: 100
  }]
}

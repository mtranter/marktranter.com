
const header = require('./header')
header.registerHeaderItem({title:'Home'})
const profile = require('./profile')
const experience = require('./experience')
const skills = require('./skills')

const model = {
  profile: profile,
  skills: skills,
  header: header,
  experience: experience
}

module.exports = model

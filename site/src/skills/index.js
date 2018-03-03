  const headerService = require('./../header')

headerService.registerHeaderItem({title:'Skills', elId: 'skills'})

module.exports = {
  heading: "Skills",
  langagues: [{
    name: "Scala",
    level: 100
  },{
    name: "C#",
    level: 100
  },{
    name: "Java",
    level: 95
  },{
    name: "JavaScript",
    level: 100
  },{
    name: "Kotlin",
    level: 75
  },{
    name: "Golang",
    level: 60
  },{
    name: "Python",
    level: 60
  },{
    name: "Haskell",
    level: 40
  }],
  otherSkills: [,{
    name: "Docker",
    level: 90
  },{
    name: "SQL",
    level: 85
  },{
    name: "NoSQL",
    level: 80
  },{
    name: "CI/CD",
    level: 90
  },{
    name: "Kafka & Confluent Stack",
    level: 95
  },{
    name: "AWS",
    level: 95
  }]
}

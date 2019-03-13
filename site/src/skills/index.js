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
    level: 100
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
    level: 60
  }],
  otherSkills: [{
    name: "Microservices",
    level: 100
  },{
    name: "Docker",
    level: 100
  },{
    name: "Kubernetes",
    level: 90
  },{
    name: "SQL",
    level: 90
  },{
    name: "Terraform",
    level: 100
  },{
    name: "NoSQL",
    level: 100
  },{
    name: "CI/CD",
    level: 90
  },{
    name: "Kafka & Confluent Stack",
    level: 100
  },{
    name: "AWS",
    level: 95
  },{
    name: "TDD/BDD/XP",
    level: 95
  },{
    name: "Security",
    level: 85
  },{
    name: "Typed Functional Programming",
    level: 95
  }]
}

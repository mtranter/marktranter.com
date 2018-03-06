const headerService = require('./../header')

headerService.registerHeaderItem({title:'Experience', elId: 'experience'})

module.exports = {
  experience: [{
      from: 'Aug 2016',
      to: 'Present',
      role:'Senior Engineer',
      where: 'Judopay, London',
      website: `https://www.judopay.com`,
      blurb: `
      Mobile First Payments</br>
      Responsible for the design and build of real time fraud detection and prevention system using Scala, Dotnet Core, Kafka & Cassandra.</br>
      Scala, C#, Java, AWS, Docker, Terraform
       `
    },{
      from: 'Feb 2016',
      to: 'Aug 2016',
      role:'Contract Engineer',
      where: 'Universal Music Group, London',
      website:`https://www.universalmusic.com/`,
      blurb: `Building the UMG contract management system.</br>
      A microserviced, event driven, cloud native application with an Angular front end</br>
      C#, AWS, Angular, NService Bus, RavenDB
      `
    },{
      from: 'Oct 2015',
      to: 'Jan 2016',
      role:'Estudiante de idioma español',
      website:`http://clic.es/seville/`,
      where: 'Sevilla, España y Sudamerica',
      blurb: 'Pasé 4 semanas estudiando español en una escuela de español en Sevilla. Despues escuela, viajé por 3 meses en Sudamerica para practicar mas'
    },{
      from: 'Sep 2014',
      to: 'Oct 2015',
      role:'Contract Engineer',
      where: 'ATG Media, London',
      website: `https://www.auctiontechnologygroup.com/`,
      blurb: `
      Auction Technology Group</br>
      Senior engineer on a live, high throughput auction bidding system servicing 20,000+ lots per day.</br>
      C#, CQRS, Angular, AWS, SQS & SNS
      `
    },{
      from: 'Jan 2014',
      to: 'Sep 2014',
      role:'Head of Software Engineering',
      website:`http://priocept.com/`,
      where: 'Priocept, London',
      blurb: `Engineering Consultants. Clients such as GSK, Lloyds of London & London Stock Exchange</br>
Responsible for overseeing all development across all client projects including all technical decisions, resourcing and recruitment.
      `
    },{
      from: 'Jan 2013',
      to: 'Jan 2014',
      role:'Senior Software Engineer',
      website:`http://priocept.com/`,
      where: 'Priocept, London',
      blurb: `Engineering Consultancy. Clients such as GSK, Lloyds of London & London Stock Exchange</br>
Senior Polyglot Engineer involved in design and architecture across all client projects.</br>
C#, Java, Python
      `
    },{
      from: 'May 2010',
      to: 'Jan 2013',
      role:'Software Engineer',
      website:`https://www.northdoor.co.uk/`,
      where: 'Northdoor, London',
      blurb: `Engineering Consultancy specialising in the London Insurance Market.</br>
Responsible for the flagship underwriting system, and an array of other applications.</br>
C#, SQL Server, WCF
      `
    },{
      from: 'Jan 2007',
      to: 'Dec 2009',
      role:'Contract Analyst/Developer',
      where: 'Dept of Lands, Newcastle, NSW',
      blurb: 'GIS Systems developer and Data Analust</br>GIS, C#, VBA, Oracle'
    },{
      from: 'Jan 2002',
      to: 'Jan 2007',
      role:'Land Surveyor',
      where: 'Various Roles'
    }
  ]
}

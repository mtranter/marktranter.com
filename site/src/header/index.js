class HeaderService {
  constructor(){
    this.items = []
  }
  registerHeaderItem({title, elId}) {
    this.items.push({title, elId})
  }
}

const service = new HeaderService();

module.exports = service;

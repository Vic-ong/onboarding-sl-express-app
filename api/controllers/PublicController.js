class PublicContoller {

    async index(req, res) {
  
      return res.send('Hello world')
  
    }

    async helloworld(req, res) {
  
      return res.send('helloworld')
  
    }
  
  }
  
  module.exports = PublicContoller
  
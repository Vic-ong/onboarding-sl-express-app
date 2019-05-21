class Product extends MongooseModel {

    static schema() {
  
      return {
  
        name: { type: String },
        price: { type: Number },
  
      }
  
    }
  
  }
  
  module.exports = Product
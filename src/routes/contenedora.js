
const config = require('../config/config.js');
const knex =require('knex');

class Contenedora {
  constructor() {
    
    this.datos = [];
  }

  async save(object) {
    try {
      const Knex = await knex(config)('articulos').insert(object);
      
      return await knex(config)('articulos').where(object).select('*')
    } catch (err) {
      
      throw new Error(err);
    }
  }

  async updateById(producto) {
    try {
      
      
      return await knex(config)('articulos').where(producto.id).update(producto);
    } catch (err) {
     
      throw new Error(err);
    }
  }
  async getById(id) {
    try {
      

      return await knex(config)('articulos').where({id}).select('*');
    } catch (err) {
      //object.id = 1;
      //await fs.promises.writeFile(this.nombre,JSON.stringify([object],null,2))
      //fs.writeFileSync(this.nombre, JSON.stringify([object], null, 2)) /
      console.log(err);
      throw new Error(err);
    }
  }

  async idValidRandom() {
    try {
      let i = Math.ceil(Math.random() * key);
      

      let valid = await this.getById(i)

      if (valid.id === undefined) {
        return await this.idValidRandom();
      } else {
        return valid;
      }
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }

  async getByIdRandom() {
    try {
      

      this.Random = this.idValidRandom();

      console.log(this.Random);
      return this.Random;
    } catch (err) {
      //object.id = 1;
      //await fs.promises.writeFile(this.nombre,JSON.stringify([object],null,2))
      //fs.writeFileSync(this.nombre, JSON.stringify([object], null, 2)) /
      console.log("El archivo esta vacio");
      throw new Error(err);
    }
  }

  async getAll() {
    try {
    return await knex(config)('articulos').select('*');
  } catch (err) {
    throw new Error(err);
    
  } }// end  getAll

  async deleteById(id) {
    try {
      await knex(config)('articulos').where({id}).del();
    } catch (err) {
      throw new Error(err);
      //console.log(err)
    }
  } //end deleteById

  async deleteAll() {
    try {
      await knex(config)('articulos').del();
    } catch (err) {
      throw new Error(err);
    }
  } //end deleteAll
}

module.exports = Contenedora;

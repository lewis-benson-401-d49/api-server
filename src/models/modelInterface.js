'use strict';

class ModelInterface {
  constructor(model) {
    this.model = model;
  }
  async create(json) {
    try {
      const record = await this.model.create(json);
      return record;
    } catch (err) {
      console.error('This error is on ModelInterface ', err.message);
      return err;
    }
  }

  async read(id = null) {
    try {
      let record;
      if (id) {
        record = await this.model.findOne({ where: { id } });
      } else {
        record = await this.model.findAll();
      }
      return record;
    } catch (err) {
      console.error('This error is on ModelInterface ', err.message);
      return err;
    }
  }

  async update(body, id) {
    try {
      await this.model.update(body, { where: { id } });
      let record = await this.model.findOne({ where: { id } });
      return record;
    } catch (err) {
      console.error('This error is on ModelInterface ', err.message);
      return err;
    }
  }

}
module.exports = ModelInterface;


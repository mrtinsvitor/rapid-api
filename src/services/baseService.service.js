const baseService = {
  findAll: async (model) => {
    return await model.findAll({
      include: [],
    });
  },
  findOne: async (model, id) => {
    return await model.findByPk(id);
  },
  insert: async (model, reqBody) => {
    return model.create(reqBody);
  },
  update: async (model, id, reqBody) => {
    return model.update({ reqBody }, { where: { id } });
  },
  remove: async (model, id) => {
    const data = await model.findByPk(id);
    return await data.destroy();
  },
};

export default baseService;
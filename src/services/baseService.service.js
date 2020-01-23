const baseService = {
  findAll: (model) => {
    return model.findAll({
      include: [],
    })
      .then(data => data)
  },
  findOne: (model, id) => {
    return model.findByPk(id)
      .then(data => data)
  },
  insert: (model, reqBody) => {
    return model.create(reqBody)
      .then(data => data);
  },
  update: (model, id, reqBody) => {
    return model.update({ reqBody }, { where: { id } })
      .then(data => data)
  },
  remove: (model, id) => {
    return model.findByPk(id).then(data =>
      data.destroy()
    );
  },
};

export default baseService;
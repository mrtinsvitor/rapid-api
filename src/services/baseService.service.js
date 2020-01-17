const baseService = {
  findAll: (model) => {
    return model.findAll({
      include: [],
    })
      .then(content => content)
  },
  findOne: (model, id) => {
    return model.findByPk(id)
      .then(content => content)
  },
  insert: (model) => {
    return model.create(req.body)
      .then(content => content);
  },
  update: (model, id) => {
    return model.update({ where: { id } })
      .then(content => res.status(httpStatus.OK).json(content))
  },
  remove: (model, id) => {
    return model.findByPk(id).then(content =>
      content.destroy()
    );
  },
};

export default baseService;
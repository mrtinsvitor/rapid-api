const baseService = {
  findAll: (model) => {
    return model.findAll({
      include: [],
    })
      .then(content => content)
  },
  findOne: (model) => {
    return model.findByPk(req.params.id)
      .then(content => content)
  },
  insert: (model) => {
    return model.create(req.body)
      .then(content => content);
  },
  update: (model) => {
    return model.update({ where: { id: req.params.id } })
      .then(content => res.status(httpStatus.OK).json(content))
  },
  remove: (router, model) => {
    router.delete('/', (req, res, next) => {
      model.findByPk(req.params.id).then(content =>
        content.destroy()
          .then(() =>
            res.status(httpStatus.OK).json({ success: 1, message: 'Operation succeed' })
          )
          .catch(err =>
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: 0, error: err })
          )
      );
    });
  },
};

export default baseService;
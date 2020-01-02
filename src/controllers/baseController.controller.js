import httpStatus from "http-status";

const crudMethods = {
  findAll: (router, model) => {
    router.get('/', (req, res, next) => {
      return model.findAll({
        include: [],
      })
        .then(content => res.status(httpStatus.OK).json(content))
        .catch(err =>
          res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ sucess: 0, error: err })
        );
    });
  },
  findOne: (router, model) => {
    router.get('/:id', (req, res, next) => {
      return model.findByPk(req.params.id)
        .then(content => res.status(httpStatus.OK).json(content))
        .catch(err =>
          res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: 0, error: err })
        );
    });
  },
  insert: (router, model) => {
    router.post('/', (req, res, next) => {
      model.create(req.body)
        .then(content => res.status(httpStatus.OK).json({ success: 1, message: 'Operation succeed', content }))
        .catch(err =>
          res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: 0, message: err })
        );
    });
  },
  update: (router, model) => {
    router.put('/:id', (req, res, next) => {
      return model.update({ where: { id: req.params.id } })
        .then(content => res.status(httpStatus.OK).json(content))
        .catch(err =>
          res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: 0, error: err })
        );
    });
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
  setAllCrudMethods: (router, model) => {
    crudMethods.findAll(router, model);
    crudMethods.findOne(router, model);
    crudMethods.insert(router, model);
    crudMethods.update(router, model);
    crudMethods.remove(router, model);
  }
}

export default crudMethods;
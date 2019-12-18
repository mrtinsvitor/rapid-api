import httpStatus from "http-status";

export default {
  findAll: (router, model) => {
    router.get('/', (req, res, next) => {
      return model.findAll({
        raw: true,
        include: [{ all: true, nested: false }],
        attributes: { exclude: ['insertionUserId', 'dh_insertion'] }
      })
        .then(content => res.status(httpStatus.OK).json(content))
        .catch(err =>
          res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ sucess: 0, error: err })
        );
    });
  },
  findByPk: (router, model) => {
    router.get('/:id', (req, res, next) => {
      return model.findByPk(req.params.id, {
        include: [{ all: true, nested: true }],
        attributes: { exclude: ['insertionUserId', 'dh_insertion'] }
      })
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
  delete: (router, model) => {
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
  }
}
export default {
  findAll: (router, model) => {
    router.get('/', (req, res, next) => {
      return model.findAll({
        raw: true,
        include: [{ all: true, nested: false }],
        attributes: { exclude: ['insertionUserId', 'dh_insertion'] }
      })
        .then(content => res.status(200).json(content))
        .catch(err => res.status(500).json({ sucess: 0, error: err }));
    });
  },
  findByPk: (router, model) => {
    router.get('/:id', (req, res, next) => {
      return model.findByPk(req.params.id, {
        include: [{ all: true, nested: true }],
        attributes: { exclude: ['insertionUserId', 'dh_insertion'] }
      })
        .then(content => res.status(200).json(content))
        .catch(err => res.status(500).json({ success: 0, error: err }));
    });
  },
  insert: (router, model) => {
    router.post('/', (req, res, next) => {
      model.create(req.body)
        .then(content => res.status(200).json({ success: 1, message: 'Operation succeed', content }))
        .catch(err => res.status(500).json({ success: 0, message: err }));
    });
  },
  update: (router, model) => {
    router.put('/:id', (req, res, next) => {
      return model.update({ where: { id: req.params.id } })
        .then(content => res.status(200).json(content))
        .catch(err => res.status(500).json({ success: 0, error: err }));
    });
  },
  delete: (router, model) => {
    router.delete('/', (req, res, next) => {
      model.findByPk(req.params.id).then(content =>
        content.destroy()
          .then(() => res.status(200).json({ success: 1, message: 'Operation succeed' }))
          .catch(err => res.status(500).json({ success: 0, error: err }))
      );
    });
  }
}
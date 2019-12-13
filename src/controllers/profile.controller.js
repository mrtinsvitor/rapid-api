import express from 'express';

import { Profile as model } from '../models';

const router = express.Router();

router.get('/', (req, res, next) => {
  return model.findAll({ raw: true, include: [{ all: true, nested: false }] })
    .then(content => res.status(200).json(content))
    .catch(err => res.status(500).json({ sucess: 0, error: err }));
});

router.get('/:id', (req, res, next) => {
  return model.findByPk(req.params.id, { include: [{ all: true, nested: true }] })
    .then(content => res.status(200).json(content))
    .catch(err => res.status(500).json({ success: 0, error: err }));
});

router.post('/', (req, res, next) => {
  model.create(req.body)
    .then(content => res.status(200).json({ success: 1, message: 'Operation succeed', content }))
    .catch(err => res.status(500).json({ success: 0, message: err }));
});

router.delete('/', (req, res, next) => {
  model.findByPk(req.params.id).then(content =>
    content.destroy()
      .then(() => res.status(200).json({ success: 1, message: 'Operation succeed' }))
      .catch(err => res.status(500).json({ success: 0, error: err }))
  );
});

export default router;
import httpStatus from 'http-status';

import baseService from '../services/baseService.service';

const crudMethods = {
  findAll: (router, model) => {
    router.get('/', async (req, res, next) => {
      try {
        const data = await baseService.findAll(model);

        return res.status(httpStatus.OK).json(data);
      } catch (e) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR)
          .json({ error: true, message: e });
      }
    });
  },
  findOne: (router, model) => {
    router.get('/:id', async (req, res, next) => {
      try {
        const data = await baseService.findOne(model, req.params.id);

        return res.status(httpStatus.OK).json(data);
      } catch (e) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR)
          .json({ error: true, message: e });
      }
    });
  },
  insert: (router, model) => {
    router.post('/', async (req, res, next) => {
      try {
        const data = await baseService.insert(model, req.body);

        return res.status(httpStatus.OK).json({ success: 1, data });
      } catch (e) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR)
          .json({ error: true, message: e });
      }
    });
  },
  update: (router, model) => {
    router.put('/:id', async (req, res, next) => {
      try {
        const data = await baseService.update(model, req.params.id, req.body);

        return res.status(httpStatus.OK).json(data);
      } catch (e) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR)
          .json({ error: true, message: e });
      }
    });
  },
  remove: (router, model) => {
    router.delete('/', async (req, res, next) => {
      try {
        await baseService.remove(model, req.params.id);

        return res.status(httpStatus.OK)
      } catch (e) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR)
          .json({ error: 0, message: e });
      }
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
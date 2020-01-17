import httpStatus from 'http-status';

import baseService from '../services/baseService.service';

const crudMethods = {
  findAll: (router, model) => {
    router.get('/', async (req, res, next) => {
      try {
        const content = await baseService.findAll(model);

        return res.status(httpStatus.OK).json(content);
      } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: 0, error: err })
      }
    });
  },
  findOne: (router, model) => {
    router.get('/:id', (req, res, next) => {
      try {
        const content = await baseService.findOne(model, req.params.id);

        return res.status(httpStatus.OK).json(content);
      } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: 0, error: err });
      }
    });
  },
  insert: (router, model) => {
    router.post('/', (req, res, next) => {
      try {
        const content = await baseService.insert(model);

        return res.status(httpStatus.OK).json({ success: 1, message: 'Operation succeed', content });
      } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: 0, message: err });
      }
    });
  },
  update: (router, model) => {
    router.put('/:id', (req, res, next) => {
      try {
        const content = await baseService.update(model, req.params.id);

        return res.status(httpStatus.OK).json(content);
      } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: 0, error: err });
      }
    });
  },
  remove: (router, model) => {
    router.delete('/', (req, res, next) => {
      try {
        await baseService.remove(model, req.params.id);

        return res.status(httpStatus.OK).json({ success: 1, message: 'Operation succeed' });
      } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: 0, error: err });
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
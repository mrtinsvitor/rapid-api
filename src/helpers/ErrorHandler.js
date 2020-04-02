import httpStatus from 'http-status';

import { handleValidationError } from './SequelizeValidationError';

class ErrorHandler extends Error {
  constructor(
    type = 'unknow_error',
    message = 'An error has occurred. Try again later.',
    statusCode = httpStatus.INTERNAL_SERVER_ERROR
  ) {
    super();
    this.type = type;
    this.message = message;
    this.statusCode = statusCode;
    this.status = httpStatus['500_NAME'];
  }
}

export const handleError = (err, res) => {
  if (err instanceof ErrorHandler) {
    const { message, statusCode } = err;

    return res.status(statusCode).json({
      message,
      statusCode,
      status: httpStatus[`${statusCode}_NAME`]
    });
  } else if (err.name === 'SequelizeValidationError') {
    return handleSequelizeValidationError(err, res);
  }

  console.log(`[${new Date()}][Internal Error]: ${err}`);
  return res.status(httpStatus.INTERNAL_SERVER_ERROR)
    .json(new ErrorHandler());

};

export default ErrorHandler;
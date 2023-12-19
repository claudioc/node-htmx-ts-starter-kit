import { Request, Response, NextFunction } from 'express';

export const handleClientError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.header('HX-Request')) {
    // If the request is a HTMX request, we send the error message as
    // a normal response, and we don't call next(err) to avoid the default
    // error handler to kick in.
    res.render('partials/serverTime', {
      error: 'An unexpected error occurred',
      currentTime: 'N/A',
    });
  } else {
    return next(err);
  }
};

export const handleUnhandledError = (
  err: Error,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(500);
  res.render('error', { error: err });
  return next();
};

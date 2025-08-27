const loggerMiddleware = (req: any, res: any, next: any) => {
  console.log(`${req.method} ${req.url}`);
  return next();
};

export default loggerMiddleware;

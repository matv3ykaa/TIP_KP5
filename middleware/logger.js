const requestLogger = (req, res, next) => {
  const startTime = Date.now();
  
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  
  res.on('finish', () => {
    const duration = Date.now() - startTime;
    console.log(
      `[${new Date().toISOString()}] ${req.method} ${req.path} - ` +
      `Статус: ${res.statusCode} - Время: ${duration}ms`
    );
  });
  
  next();
};

module.exports = requestLogger;
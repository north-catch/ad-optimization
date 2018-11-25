const rendertron = require('rendertron-middleware');

module.exports = (rendertronEndpoint, host) => {
  const rendertronMiddleware = rendertron.makeMiddleware({
    proxyUrl: rendertronEndpoint,
    injectShadyDom: true,
  });

  return (req, res, next) => {
    req.headers['host'] = host;
    return rendertronMiddleware(req, res, next);
  };
};

const getMessage = require('./ask').getMessage;

exports.ask = async(req, res, next) => {
  const output = await getMessage(req.body);
  return res.status(200).send(output);
};
const myLogger = function (req, res, next) {
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    console.log('LOGGED');
    console.log(date)
    next()
  }

  module.exports = myLogger;
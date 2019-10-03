route = require("./routes");

module.exports = (app, router) => {
  console.log("Hiii");
  route.appRoute(router);
};
const meals = [{ name: "MilkShake", type: "breakfast", price: 8 }, { name: "Lazanya", type: "lunch", price: 20 }];
//Allow the Controller to access and fetch the meals meanu
exports.getProfile = () => {
  return meals;
};
function makePizza(toppings = []) {
  const pizzaPromise = new Promise(function (resolve, reject) {
    const amountOfTimeToBake = 500 + toppings.length * 200;
    // wait 1 second for the pizza to cook
    setTimeout(function () {
      resolve(`Here is your pizza 🍕 with the toppings ${toppings.join(" ")}`);
    }, amountOfTimeToBake);
    // if something went wrong, we can reject this promise
  });
  return pizzaPromise;
}
console.log("First");
makePizza(["pepperoni", "ham"])
  .then(function (pizza) {
    console.log(pizza);
    return makePizza(["ham", "cheese", "some", "ore", "inputs"]);
  })
  .then(function (pizza) {
    console.log(pizza);
    return makePizza(["hot peppers", "onion", "feta"]);
  })
  .then(function (pizza) {
    console.log(pizza);
    return makePizza();
  })
  .then(function (pizza) {
    console.log(pizza);
    return makePizza([
      "one",
      "two",
      "three",
      "four",
      "one",
      "two",
      "three",
      "four",
      "one",
      "two",
      "three",
      "four",
    ]);
  })
  .then((pizza) => {
    console.log("All done! here is your last pizza");
    console.log(pizza);
  });
console.log("Right after");

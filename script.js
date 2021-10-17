const pizza = ["Pizza", 40, 450, "bake", 10]
const sushi = ["Sushi", 120, 200, "cook", 15]

function cook (foodName, prepTime, ovenSetting, cookOrBake, cookTime) {
    console.log("We are making " + foodName + "!");
    console.log("Preheat the oven, set at " + ovenSetting + " degrees");
    console.log("Then, we'll start by cutting all the ingredients.")
    console.log("This will take about " + prepTime + " minutes");
    console.log("When ready, " + cookOrBake + " for " + cookTime + " minutes");
}

cook(...sushi);
cook(...pizza);
cook(...sushi);
cook(...sushi);
cook(...pizza);
/*function assert(input, output, testFunction) {
    return output === testFunction(input);
}
function firstDay(week){
    return week[0];
}
console.log("first test " + assert(["monday", "tuesday", "wednesday"], "monday", firstDay)); //true

console.log("second test " + assert(["thursday", "friday", "saturday"], "thursday", firstDay)); //true */



function assert(input, output, testFunction) {
    return output === testFunction(input);

    function lastDay(week){
        return week[week.length-1];
      }

        console.log("first test " + assert(["monday", "tuesday", "wednesday"], "wednesday", lastDay));

        console.log("second test " + assert(["thursday", "friday", "saturday"], "saturday", lastDay));

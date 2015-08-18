//week 2 Array Challenges

//Challenge 1
/*var customers = ['Justin', 'Ilias', 'Nathan', 'Camilo', 'Vikash', 'Adam', 'Brianna', 'Sarah', 'Ali', 'Jessie', 'Cameron'];
var time = 2;

customers.forEach(function callback(element, index) {
    console.log(index + ": " + time);
    time = time + 2;
});*/
/* Justin: 2 minutes
   Ilias: 4 minutes
   Nathan: 6 minutes
   Camilo: 8 minutes
   Vikash: 10 minutes
   ...
   Cameron: 22 minutes
*/

//Challenge 2
  /*var prices = [3.00, 4.00, 10.00, 2.25, 3.01];

    prices.map(function (element){
      return element - 0.01
    });

    //[2.99, 3.99, 9.99, 2.24, 3.00] */
    var prices = [3.00, 4.00, 10.00, 2.25, 3.01];
    var reduced =[];

    prices.map(function (element){
      reduced.push(element - 0.01);
    });

    console.log(prices)

    for(i = 0; i < prices.length; i++){
      var priceString = prices[i].toString();
      var reducedString = reduced[i].toString();
      if (priceString.length > reducedString.length){
        console.log(reduced[1]);
      }
    }

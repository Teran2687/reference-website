function example() {
  var topStudents = ["Christian", "Kristian", "Shakka", "Jaime", "AJ"]
  var  name = topStudents[0];
  console.log(name);
  topStudents[0] = "Mauricio";
  console.log(topStudents);
  topStudents = "Mauricio";
  console.log(topStudents);
}

function problem1() {
  var travelList = ["Germany", "France", "Poland", "United Kingdom", "Ireland"];
  var country = travelList[2];
  alert(country);  
}


function problem2(){
  var numList = ["2", "5", "7","11", "13"];
  var prime = numList[0, 2, 4];
  alert(prime);
}
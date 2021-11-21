function sumSalaries(salaries) {
  var lorem = 0;
  for (var salary of Object.values(salaries)) {
    lorem += salary;
  }

  return lorem;
}

var salaries = {
  "Akmal": 1200,
  "Salim": 5200,
  "Karima": 1800,
  // "Umarxon": 10000$
};

alert(sumSalaries(salaries));

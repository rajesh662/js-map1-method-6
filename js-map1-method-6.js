const users = [
  {
    firstName: 'Mike',
    lastName: 'Sheridan'
  },
  {
    firstName: 'Tim',
    lastName: 'Lee'
  },
  {
    firstName: 'John',
    lastName: 'Carte'
  }
];
  let result= users.map(function(last){

	 return last.firstName + last.lastName;
  });
 document.write(result);
 document.write("<br>");
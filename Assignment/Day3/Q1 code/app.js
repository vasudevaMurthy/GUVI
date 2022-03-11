var obj = [
    { person: "RAHUL0", age: "2", company: "GUVI" },
    { person: "RAHUL1", age: "4", company: "GUVI geek" },
    { person: "RAHUL2", age: "6", company: "GUVI geek network" },
  ];

  //for loop
  
  for (var i = 0; i < obj.length; i++){
      console.log('person name : '+obj[i].person);
      console.log('age : '+obj[i].age);
      console.log('company : '+obj[i].company);
  }

  //for-in loop

  for (const key in obj) {
   console.log('person name : '+ obj[key].person);
   console.log('age : '+ obj[key].age);
   console.log('company : '+ obj[key].company);
  }

 // for-of loop

 for (const itr of obj) {
     console.log('person name : '+itr.person);
     console.log('age : '+itr.age);
     console.log('company : '+itr.company);
 }

 //for-each loop

 obj.forEach((ele)=>{
     console.log('person name : '+ ele.person);
     console.log('age : '+ ele.age);
     console.log('company : '+ ele.company);
 })

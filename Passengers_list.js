var passengers = [{name: "Rick", paid: true},
                  {name: "Ostin", paid: true},
                  {name: "Jaycob", paid: false},
                  {name: "Kriss", paid: false},
                  {name: "Po", paid: true},
                  {name: "Clark", paid: false},
                  {name: "Mariya", paid: true},
                  {name: "Jessus", paid: true},
                  {name: "Gitler", paid: false},
                  {name: "Lara", paid: true},
                  {name: "Camila", paid:true}]

function processCreatList (passengers, testNoFlyList) {
  for (var i = 0; i < passengers.length; i++) {
    if (testNoFlyList(passengers[i])) {
      return false;
    }
  }
  return true;
}

function blackList (passenger) {
  return (passenger.name === "Dr.Evel");
}

function noPaidPlace (passenger) {
  return (!passenger.paid);
}

var blackListChecking = processCreatList(passengers, blackList); 
if (!blackListChecking) {
  console.log ("We have passengers with black list so we wont flying-of!");
}

var noPaidPlaceChecking = processCreatList(passengers, noPaidPlace);

if (!noPaidPlaceChecking) {
  console.log ("We have passengers whith didnt buy theyself places!")
}



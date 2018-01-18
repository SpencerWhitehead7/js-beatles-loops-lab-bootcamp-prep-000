function theBeatlesPlay(musicians, instruments){
  var theBeatlesPlayArray = [];
  var i = 0;
  for (i=0; i<musicians.length; i++){
    theBeatlesPlayArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return theBeatlesPlayArray;
}

function johnLennonFacts(facts){
  var i = 0
  while(i<facts.length){
    facts[i] = `${facts[i]}`+"!!!";
    i++
  }
  return facts
}

function iLoveTheBeatles(n){
  var iLoveTheBeatlesArray = [];
  var i = 0;
  do{
    iLoveTheBeatlesArray.push("I love the Beatles!")
    i++
  }
  while (i<15)
}
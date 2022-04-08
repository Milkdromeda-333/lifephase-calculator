const lifePhase = age => {
  switch (true){
    case age < 0:
      return 'This is not a valid age';
      break;
      case age > 140 :
      return 'This is not a valid age';
      break;
    case age < 3:
      return 'baby';
      break;
    case age < 13:
      return 'child';
      break;
    case age < 20: 
      return 'teen';
      break;
    case age < 65:
      return 'adult';
      break;
    case age < 140:
      return 'senior citizen';
      break;
  }
}

console.log(lifePhase(22));

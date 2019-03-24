class Player {
  playTurn(warrior) {
    // Cool code goes here.
    // warrior.think();
   if (warrior.feel().isUnit()) {
      warrior.attack()
    } else if(warrior.health()<15){
      warrior.rest()
    }else{
      warrior.walk()
    }

  }
}


//document.WriteIn u okviru brauzera!!!

Time();
t();
isAvailableToWatch();
Seasons();
Letter();
chanseToBeIll();

function t() {


    var temperature = 105;
    var rain = false;

    if((temperature>100) && (rain == false)){
        console.log("It's pretty hot!");
    }else {
        console.log("It's gona be cold!");
       
    }

}

function isAvailableToWatch(){

    var available = 10;

    if( available< 18){
        console.log("Gledalac ima manje od 18 godina");
    }else{
        console.log("Sadrzaj je dostupan gledaocu");
    }
    
}



function Time (){
    var time = new Date().getHours();
    if (time > 7 && time < 12){
        console.log('Good morning, be pretty ! ♠☻◘•♥☺♦')
    }
    else if( time < 14){
        console.log("Good day");
    }else if(time > 19){
        conosle.log("This is the right time for good movie!")

    }else
    {
        console.log("It's time for coffe");
    }

}

function Seasons(){

    var date = new Date().getMonth();
    //getMonth()	Get the month (0-11)

  if( date >= 2  || date <=4){
      console.log("It's spring");
  }
  else if( date >= 5 || date <= 8){
       console.log("It's summer!");

  }else if( date >=9 || date <=11){
      console.log("It's autumn!");

  }else if( date >=1 || date < 2){
    console.log("It's winter!");
  }
  
}

function Letter ()
{
    var letter ='/' ;
    
    if(letter == 'c'){
        console.log("Spote on, good job")
    }else if(letter =='d' || letter == 'b ')
    {
        console.log('Close, but not close enough')

    }else{
        console.log("Waay off ...")
    }
}

function  chanseToBeIll()
{
    var weather = 'winter';
    var wayOfDressing = 'TooMuchClothes';
    var stateOfMind = 'good';

    if( weather =='winter' && wayOfDressing == 'fewLayersOfClothes'&& stateOfMind == 'bad')
    {
        console.log('You have chance to be ill :S, better stay at home !');

    }else if( weather = 'winter' && wayOfDressing =='TooMuchClothes'&& stateOfMind == 'good'){
        console.log( 'WARNING, it is winter outside !!')

    }else if(weather == 'summer' && wayOfDressing == 'fewLayersOfClothes' && stateOfMind =='good')
    {
        console.log("Let's have a party at beach");
    }
    else if(weather == 'summer' && wayOfDressing == 'TooMuchClothes' && stateOfMind =='bad')
    {
        console.log('Better stay at home,you are sick!')
    }
    
    else{
        console.log("You can go enywhere!");
    }


}
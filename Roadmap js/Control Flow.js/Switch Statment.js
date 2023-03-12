//Switch Statments

/* Cleaner Way of writing if else staments when there are to many options */

const variable = "rainy";

switch (
  variable //the param that could have diffrend cases
) {
  case "cloudy": {
    //define each possible state
    console.log("cloudy");
    break; //you need to write a break operator or th rest of your switch runs
  }
  case "rainy": {
    console.log("rainy");
    break;
  }
  default: {
    //its like else in a if statment
    console.log("this works like else");
    break;
  }
}


//if you have mutliple cases that matches you can do

switch(animal){
    case "cow":
    case "milkcow":
    case "greencow":{ //when its the last that matches 
        console.log("its coww")
    }
}

function bodyMass(w,h){
    var bmi=w/(h*h);
      if (bmi<18.5){
        console.log("underweight");
      }
         else if(bmi>=18.5 && bmi<25){
          console.log("Healthy Weight");
      }
      else if(bmi>=25.0 && bmi<29.9){
          console.log("Overweight");
  }
   else if(bmi>=30){
          console.log("obesity");
  }
  }
  bodyMass(70,1.9);
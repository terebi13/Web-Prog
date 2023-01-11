(function () {
    let today = new Date();
    document.getElementById("bday").max = today.getFullYear() + "-" + 
    (today.getMonth() + 1) + "-" + (today.getDate() < 10 ? ("0" + (today.getDate()-1)) 
    : (today.getDate()-1));
  })();

  function zodiac_sign(day, month) {
    let bday = new Date(document.getElementById("bday").value); 
    let day = bday.getDate();
    let month = bday.getMonth();
    let astro_sign =  " ";
    zodiac_sign (month, day);

    if (month == "december") {
        if (day<22)
        astro_sign="Sagittarius";
        else 
        astro_sign = "Capricorn";
    }
    else if (month == "january"){
    if (day < 20)
    astro_sign = "Capricorn";
    else
    astro_sign = "aquarius";
}
    else if (month == "february"){
    if (day < 19)
    astro_sign = "Aquarius";
    else
    astro_sign = "pisces";
}
    else if(month == "march"){
    if (day < 21)
    astro_sign = "Pisces";
    else
    astro_sign = "aries";
}
    else if (month == "april"){
    if (day < 20)
    astro_sign = "Aries";
    else
    astro_sign = "taurus";
}
       
    else if (month == "may"){
    if (day < 21)
    astro_sign = "Taurus";
    else
    astro_sign = "gemini";
}
       
    else if( month == "june"){
    if (day < 21)
    astro_sign = "Gemini";
    else
    astro_sign = "cancer";
}
       
    else if (month == "july"){
    if (day < 23)
    astro_sign = "Cancer";
    else
    astro_sign = "leo";
}
       
    else if( month == "august"){
    if (day < 23)
    astro_sign = "Leo";
    else
    astro_sign = "virgo";
}
       
    else if (month == "september"){
    if (day < 23)
    astro_sign = "Virgo";
    else
    astro_sign = "libra";
}
       
    else if (month == "october"){
    if (day < 23)
    astro_sign = "Libra";
    else
    astro_sign = "scorpio";
}
       
    else if (month == "november"){
    if (day < 22)
    astro_sign = "scorpio";
    else
    astro_sign = "sagittarius";
}
   }
  
  function calculateDays() {
    let today = new Date();
    let name = document.getElementById("myName").value;
    let bday = new Date(document.getElementById("bday").value); 
    let age = today.getFullYear() - bday.getFullYear();
    let astro_sign = " ";

    let upcomingBday = new Date(today.getFullYear(), bday.getMonth(), bday.getDate());
    
    if(today > upcomingBday) {
      upcomingBday.setFullYear(today.getFullYear() + 1);
    }
    
    var one_day = 24 * 60 * 60 * 1000;
    
    let daysLeft = Math.ceil((upcomingBday.getTime() - today.getTime()) / (one_day));
       
    if (daysLeft && age < 200) {
      document.getElementById("result").innerText = `Hi ${name} ! In ${daysLeft} day(s),
      you will be ${age}! and your zodiac sign is ${astro_sign}`;  
    } else {
      document.getElementById("result").innerText = "Please enter a valid birtday.";
    }
    
    
  }


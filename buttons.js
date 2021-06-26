
let whatLan=0;
let s=null;
let pos = navigator.geolocation.getCurrentPosition(success);
var crd=null;
let apiKey = "205bdc5c36e9eace581b28340ed63e31";
let city = "Minsk";
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;
let k=null;
var d=new Date();
var day=d.getDate();
let ss=null;


var weekdayEn=new Array(7);
weekdayEn[0]="Monday";
weekdayEn[1]="Tuesday";
weekdayEn[2]="Wednesday";
weekdayEn[3]="Thursday";
weekdayEn[4]="Friday";
weekdayEn[5]="Saturday";
weekdayEn[6]="Sunday ";

var weekdayRus=new Array(7);
weekdayRus[0]="Понедельник";
weekdayRus[1]="Вторник";
weekdayRus[2]="Среда";
weekdayRus[3]="Четверг";
weekdayRus[4]="Пятница";
weekdayRus[5]="Суббота";
weekdayRus[6]="Воскресенье ";


var monthesEn=new Array(12);
monthesEn[0]="January";
monthesEn[1]="February";
monthesEn[2]="March";
monthesEn[3]="April";
monthesEn[4]="May";
monthesEn[5]="June";
monthesEn[6]="July";
monthesEn[7]="August";
monthesEn[8]="September";
monthesEn[9]="October";
monthesEn[10]="November";
monthesEn[11]="December";

var monthesRus=new Array(12);
monthesRus[0]="Январь";
monthesRus[1]="Февраль";
monthesRus[2]="Март";
monthesRus[3]="Апрель";
monthesRus[4]="Май";
monthesRus[5]="Июнь";
monthesRus[6]="Июль";
monthesRus[7]="Август";
monthesRus[8]="Сентябрь";
monthesRus[9]="Октябрь";
monthesRus[10]="Ноябрь";
monthesRus[11]="Декабрь";

document.getElementsByClassName("location")[0].innerHTML="Belarus Minsk";

function success(pos) {
    crd = pos.coords;
    s='Your current location:'+'<br>'+`latitude: ${crd.latitude}`+
    " </br>"+`longitude: ${crd.longitude}`;

   
    document.getElementsByClassName("loc")[0].innerHTML=s;
 };


axios.get(url).then(res => {
  k="<br>temperature: "+`${res.data.main.temp}`+"</br>"+
  "humidity: "+`${res.data.main.humidity}`+"<br>"+
  "wind speed: "+`${res.data.wind.speed}`+"</br>";
  document.getElementsByClassName("weather")[0].innerHTML=k;
 })

document.getElementsByClassName("button1")[0].onclick=function(){

   if(whatLan===0) {
   whatLan=1;
   document.getElementsByClassName("button1")[0].innerHTML="En";
   s='Ваше нынешнее положение:'+'<br>'+`широта: ${crd.latitude}`+
   " </br>"+`долгота: ${crd.longitude}`;
   axios.get(url).then(res => {
      k="<br>температура: "+`${res.data.main.temp}`+"</br>"+
      "влажность: "+`${res.data.main.humidity}`+"<br>"+
      "скорость ветра: "+`${res.data.wind.speed}`+"</br>";
      document.getElementsByClassName("weather")[0].innerHTML=k;
     })
    

     if(day<=7){
      ss=weekdayRus[day-1];
      }else{
       ss=weekdayRus[day%7];
   }
   var month=d.getMonth();
   ss+=" "+day+" "+monthesRus[month]+" "+d.getHours()+":";
   if(d.getMinutes()<10){
       ss+='0';
   }
   ss+=d.getMinutes();
 
   document.getElementsByClassName("location")[0].innerHTML="Беларусь Минск";
    }

   else{
        whatLan=0;
        document.getElementsByClassName("button1")[0].innerHTML="Rus";
        s='Your current location:'+'<br>'+`latitude: ${crd.latitude}`+
        " </br>"+`longitude: ${crd.longitude}`;
        axios.get(url).then(res => {
         k="<br>temperature: "+`${res.data.main.temp}`+"</br>"+
         "humidity: "+`${res.data.main.humidity}`+"<br>"+
         "wind speed: "+`${res.data.wind.speed}`+"</br>";
         document.getElementsByClassName("weather")[0].innerHTML=k;
        })
        if(day<=7){
         ss=weekdayEn[day-1];
      }else{
          ss=weekdayEn[day%7];
      }
      var month=d.getMonth();
      ss+=" "+day+" "+monthesEn[month]+" "+d.getHours()+":";
      if(d.getMinutes()<10){
          ss+='0';
      }
      ss+=d.getMinutes();
      document.getElementsByClassName("location")[0].innerHTML="Belarus Minsk";
   }
   console.log(whatLan);
   document.getElementsByClassName("loc")[0].innerHTML=s;
   document.getElementsByClassName("year")[0].innerHTML=ss;
  
}

 GetDate();
 function GetDate(){
    
     if(day<=7){
        ss=weekdayEn[day-1];
     }else{
         ss=weekdayEn[day%7];
     }
     var month=d.getMonth();
     ss+=" "+day+" "+monthesEn[month]+" "+d.getHours()+":";
     if(d.getMinutes()<10){
         ss+='0';
     }
     ss+=d.getMinutes();
    document.getElementsByClassName("year")[0].innerHTML=ss;
 }

//console.log(pos);



 
   
   

  
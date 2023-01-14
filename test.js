function dateTime(){
    var date = new Date();
    //information times
    var hour=date.getHours();
    var minute=date.getMinutes();
    var second=date.getSeconds();
    // information days
    var day=date.getDay();
    var dates=String(date.getDate());
    var month=String(date.getMonth()+1);
    var year=date.getFullYear();
    var time;
    if(dates.length<2) dates="0"+dates;
    if(month.length<2) month="0"+month;
    
    //analysis
    
    var listDays=["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if(hour>=12){
        
        hour-=12;
        if(hour<=9) hour="0" + String(hour);
       time="PM";
    }
    else{
        if(hour<=0) hour="0" + String(hour);
        time="AM";
    }
    if(second<10){
        second="0" + String(second);
    }
    if(minute<10){
        minute="0" + String(minute);
    }
    
    document.getElementById("hour").innerHTML=hour;
    document.getElementById("minutes").innerHTML=minute;
    document.getElementById("second").innerHTML=second;
    document.getElementById("time").innerHTML=time;
    document.getElementById("day").innerHTML=listDays[day];
    document.getElementById("date").innerHTML=dates;
    document.getElementById("month").innerHTML=month;
    document.getElementById("year").innerHTML=year;
}
setInterval(dateTime,100);
// color_change
var change=document.querySelector(".change_bg");
var main=document.querySelector(".main");
var nutTim=document.querySelector(".img");
var nutXanh=document.querySelector(".img2");
change.addEventListener("click",()=>{
    main.classList.toggle("change_color_bg");
    nutTim.classList.toggle("none");
    nutXanh.classList.toggle("none");
    
})
// button print
var p=document.querySelector(".print");
p.addEventListener("click",()=>{
    window.print();
})
var input=document.querySelector(".icon_search");
var search=document.querySelector(".inputsearch");
var clickbutton;



// icon_search
var clickInformation=document.querySelector(".text");
var listInformation=document.querySelectorAll('.information_text')
clickInformation.addEventListener("click",()=>{
    for(let i of listInformation){
        i.classList.toggle("block");
    }
    document.querySelector(".up").classList.toggle("up2");

    
  
})
// function
// function 1
var valueButton;
var searchInput=document.querySelector(".input");
var arrayValueButton
function norm(){
    valueButton= searchInput.value.trim();
        let check =0;
        for(let i =0;i<valueButton.length;i++){
            
            valueButton=valueButton.replace('/',' ')
            if(valueButton[i]==' ') check++;
            
        }
        if(check===0) {
            alert("Input error, please try again!");
             return 0
        }
         arrayValueButton=valueButton.split(" ");
         
        
    [arrayValueButton[0],arrayValueButton[1]] =[arrayValueButton[1], arrayValueButton[0]];
    let x =Number( arrayValueButton[0]);
    let y = Number(arrayValueButton[1]);
       arrayValueButton=arrayValueButton.toString();
    
    if(x>12 || y>31||x<=0||y<=0){
        alert("Input error, please try again!!");
        return 0
    }
    
    return arrayValueButton;
    

}
// check leap year
function CheckLeapYear(resultDay){
    let date = new Date(resultDay);
    let year =date.getFullYear();
    
    if((year%400===0)||(year%100 !== 0&& year%4===0)){
        return "Is Leap Year"
    }
    return "Is Not Leap Year"

}
//Countdown
function Countdown(resultDay){
    var end=new Date(resultDay);
    
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;
    
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
           

            return 'EXPIRED!';
        }
       
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);
        return `${days} day, ${hours} hours `;   
    

    
         
}
//set ValueMorder
function print(resultDay){
    
    var listDays=["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let date = new Date(resultDay);
    //value SearchDay
    document.querySelector('.SearchDay').innerHTML=listDays[date.getDay()]
    //value CheckLeapYear
    document.querySelector('.CheckLeapYear').innerHTML=CheckLeapYear(resultDay);
    //value Countdown
    document.querySelector('.Countdown').innerHTML= Countdown(resultDay);
   
    // show morder
    document.querySelector(".morder").classList.toggle("show")
    
   
     
    
   
}
searchInput.addEventListener("keyup",function(e){
    
   switch(e.which){
    case 13:
        if(searchInput.value.length===0){
            alert("Please write a search!!");
        }
        else{
            var resultDay = norm();
            
            if(resultDay!== 0){
                print(resultDay);
            } // 
            
        }
        
   }
   
})
let closeMorder = document.querySelector(".bx-x-circle");
let morder=document.querySelector(".morder")
closeMorder.addEventListener("click",()=>{
    
    morder.classList.remove("show")    
})

document.querySelector(".morder").addEventListener("click",function(){
    morder.classList.remove("show")    
})
//search icon
input.addEventListener("click",(e)=>{
    search.classList.add("open");
     clickbutton= document.querySelector("input").focus();
    setTimeout(function(){
        var searchMobie =document.querySelector(".icon_search")
        searchMobie.addEventListener("click",function(e){
            
            if(searchInput.value.length===0){
                alert("Please write a search!!");
            }
            else{
               
                var resultDay = norm();
                
                if(resultDay!== 0){
                    print(resultDay);
                    e.defaultPrevented();
                } // 
                
            }
        },5000)
    }) 
    
})

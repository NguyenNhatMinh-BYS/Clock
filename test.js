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
    // alert(hour);
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
change=document.querySelector(".change_bg");
main=document.querySelector(".main");
nutTim=document.querySelector(".img");
nutXanh=document.querySelector(".img2");
change.addEventListener("click",()=>{
    main.classList.toggle("change_color_bg");
    nutTim.classList.toggle("none");
    nutXanh.classList.toggle("none");
    
})
//music button


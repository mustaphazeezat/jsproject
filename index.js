//variables

var mediaTimeContainer = document.querySelector(".media-time-container");
    mediacontainer = mediaTimeContainer.querySelector(".media-container");
    alarmImg = mediacontainer.querySelector(".alarm-img");
    tellTime = mediaTimeContainer.querySelector(".tell-time");
    alarmListView = document.querySelector(".view2");
    setAlarmView = document.querySelector( ".view3" );
    addAlarmBtn = alarmListView.querySelector(".add-alarm-btn");
    setAlarmForm = setAlarmView.querySelector("#set-alarm-form");
    setAlarmBtn = setAlarmForm.querySelector(".set-alarm-btn");
    alarmLists = alarmListView.querySelector(".alarm-lists");
    
    // console.log(alarmListView, setAlarmView, addAlarmBtn, setAlarmBtn, setAlarmForm, alarmLists, mediaTimeContainer, tellTime, mediacontainer, alarmImg);

settingTime(function (exactTime) {
    tellTime.appendChild(exactTime);
})
    
function settingTime (callback) {
    var exactTime = document.createElement("span");
    exactTime.classList.add(".time");

    currenTime = new Date;
    hours = currenTime.getHours();
    minutes = currenTime.getMinutes();
    meridian = "AM";

    if (hours >= 12) {
        meridian = "PM";
    }

    // if (hours > 12) {
    //     hours = hours - 12
    // }

    // if (minutes < 10) {
    //     minutes = "0" + minutes;
    // }

    var clockTime = " " + hours + ":" + minutes;
        exactTime.innerText = clockTime 
    callback(exactTime) 
};

addAlarmBtn.addEventListener('click', function () {
    alarmListView.classList.remove("active");
    setAlarmView.classList.add("active");
})

setAlarmForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var title = setAlarmForm.querySelector(".title").value;
    var setAlarm = setAlarmForm.querySelector(".set-alarm").value;
    this.reset();
    setAlarmView.classList.remove("active");
    alarmListView.classList.add("active");

    createAlarm(title, setAlarm)
    
})

function createAlarm(title, setAlarm) {
    var alarmList = document.createElement("li");
    alarmList.classList.add("alarm-list");
    alarmList.classList.add("d-flx");
    alarmList.classList.add("b-b");
    alarmLists.appendChild(alarmList)

    var alarmTitle = document.createElement("p");
    alarmTitle.classList.add("alarm-title");
    alarmTitle.innerText = title;
    alarmList.appendChild(alarmTitle); 
   
    var alarmTime = document.createElement("p");
    alarmTime.classList.add("alarm-time");
    alarmTime.innerText = setAlarm.toString() ;
    alarmList.appendChild(alarmTime);
}

// Alarm setting
var setAlarm = setAlarmForm.querySelector(".set-alarm").value;

var presentTime = new Date();
presentTime = presentTime.getHours() + ":" + presentTime.getMinutes();
console.log(presentTime)
function animation(setAlarm, presentTime) {

    if (setAlarm === presentTime) {
        alarmImg.classList.add("anime");
        mediacontainer.classList.add("animation");
    }   
}

animation(setAlarm, presentTime)

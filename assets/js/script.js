var currentP = document.getElementById('currentDay');

var plannerDay = [
    {
        planNum: "0",
        planHour: "01",
        planTime: "01",
        ampm: "AM",
        planText: ""
    },
    {
        planNum: "1",
        planHour: "02",
        planTime: "02",
        ampm: "AM",
        planText: ""
    },
    {
        planNum: "2",
        planHour: "03",
        planTime: "03",
        ampm: "AM",
        planText: ""
    },
    {
        planNum: "3",
        planHour: "04",
        planTime: "04",
        ampm: "AM",
        planText: ""
    },
    {
        planNum: "4",
        planHour: "05",
        planTime: "05",
        ampm: "AM",
        planText: ""
    },
    {
        planNum: "5",
        planHour: "06",
        planTime: "06",
        ampm: "AM",
        planText: ""
    },
    {
        planNum: "6",
        planHour: "07",
        planTime: "07",
        ampm: "AM",
        planText: ""
    },
    {
        planNum: "7",
        planHour: "08",
        planTime: "08",
        ampm: "AM",
        planText: ""
    },
    {
        planNum: "8",
        planHour: "09",
        planTime: "09",
        ampm: "AM",
        planText: ""
    },
    {
        planNum: "9",
        planHour: "10",
        planTime: "10",
        ampm: "AM",
        planText: ""
    },
    {
        planNum: "10",
        planHour: "11",
        planTime: "11",
        ampm: "AM",
        planText: ""
    },
    {
        planNum: "11",
        planHour: "12",
        planTime: "12",
        ampm: "PM",
        planText: ""
    },
    {
        planNum: "12",
        planHour: "01",
        planTime: "13",
        ampm: "PM",
        planText: ""
    },
    {
        planNum: "13",
        planHour: "02",
        planTime: "14",
        ampm: "PM",
        planText: ""
    },
    {
        planNum: "14",
        planHour: "03",
        planTime: "15",
        ampm: "PM",
        planText: ""
    },
    {
        planNum: "15",
        planHour: "04",
        planTime: "16",
        ampm: "PM",
        planText: ""
    },
    {
        planNum: "16",
        planHour: "05",
        planTime: "17",
        ampm: "PM",
        planText: ""
    },
    {
        planNum: "17",
        planHour: "06",
        planTime: "18",
        ampm: "PM",
        planText: ""
    },
    {
        planNum: "18",
        planHour: "07",
        planTime: "19",
        ampm: "PM",
        planText: ""
    },
    {
        planNum: "19",
        planHour: "08",
        planTime: "20",
        ampm: "PM",
        planText: ""
    },
    {
        planNum: "20",
        planHour: "09",
        planTime: "21",
        ampm: "PM",
        planText: ""
    },
    {
        planNum: "21",
        planHour: "10",
        planTime: "22",
        ampm: "PM",
        planText: ""
    },
    {
        planNum: "22",
        planHour: "11",
        planTime: "23",
        ampm: "PM",
        planText: ""
    },
    {
        planNum: "23",
        planHour: "12",
        planTime: "24",
        ampm: "AM",
        planText: ""
    },
]
// Deploys dynamic structure of plannerDay
plannerDay.forEach(function(planElm) {
    var planHourEach = $("<form>").attr({"class": "row"});
    $(".container").append(planHourEach);
    var hourField = $("<div>").text(`${planElm.planHour}${planElm.ampm}`).attr({"class": "col-md-2 hour"});
    var planHourCont = $("<div>").attr({"class": "col-md-9 description p-0"});
    var planData = $("<textarea>");
    planHourCont.append(planData);
    planData.attr("planNum", planElm.planNum);
    if (planElm.planTime < moment().format("HH")) {
        planData.attr ({"class": "past",});
    } else if (planElm.planTime === moment().format("HH")) {
        planData.attr({"class": "present"});
    } else if (planElm.planTime > moment().format("HH")) {
        planData.attr({"class": "future"});
    }
    var saveBtn = $("<i class='far fa-save fa-lg'></i>");
    var planSaveBtn = $("<button>").attr({"class": "col-md-1 saveBtn"});
    planSaveBtn.append(saveBtn);
    planHourEach.append(hourField, planHourCont, planSaveBtn);
})
// Local storage SET
function savePlanText() {
    localStorage.setItem("plannerDay", JSON.stringify(plannerDay));
}
function insertPlanText() {
    plannerDay.forEach(function (plannerHour) {
        $(`#${plannerHour.id}`).val(plannerHour.reminder);
    })
}
// header date
function getCurrentDay() {
    var currentDay = moment().format('dddd, MMMM Do');
    currentP.textContent = currentDay;
}
getCurrentDay();
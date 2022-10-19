var currentP = document.getElementById('currentDay');

var plannerDay = [
    {
        id: "0",
        hour: "01",
        time: "01",
        ampm: "AM",
        reminder: ""
    },
    {
        id: "1",
        hour: "02",
        time: "02",
        meridiem: "AM",
        reminder: ""
    },
    {
        id: "2",
        hour: "03",
        time: "03",
        meridiem: "AM",
        reminder: ""
    },
    {
        id: "3",
        hour: "04",
        time: "04",
        meridiem: "AM",
        reminder: ""
    },
    {
        id: "4",
        hour: "05",
        time: "05",
        meridiem: "AM",
        reminder: ""
    },
    {
        id: "5",
        hour: "06",
        time: "06",
        meridiem: "AM",
        reminder: ""
    },
    {
        id: "6",
        hour: "07",
        time: "07",
        meridiem: "AM",
        reminder: ""
    },
    {
        id: "7",
        hour: "08",
        time: "08",
        meridiem: "AM",
        reminder: ""
    },
    {
        id: "8",
        hour: "09",
        time: "09",
        meridiem: "AM",
        reminder: ""
    },
    {
        id: "9",
        hour: "10",
        time: "10",
        meridiem: "AM",
        reminder: ""
    },
    {
        id: "10",
        hour: "11",
        time: "11",
        meridiem: "AM",
        reminder: ""
    },
    {
        id: "11",
        hour: "12",
        time: "12",
        meridiem: "PM",
        reminder: ""
    },
    {
        id: "12",
        hour: "01",
        time: "13",
        meridiem: "PM",
        reminder: ""
    },
    {
        id: "13",
        hour: "02",
        time: "14",
        meridiem: "PM",
        reminder: ""
    },
    {
        id: "14",
        hour: "03",
        time: "15",
        meridiem: "PM",
        reminder: ""
    },
    {
        id: "15",
        hour: "04",
        time: "16",
        meridiem: "PM",
        reminder: ""
    },
    {
        id: "16",
        hour: "05",
        time: "17",
        meridiem: "PM",
        reminder: ""
    },
    {
        id: "17",
        hour: "06",
        time: "18",
        meridiem: "PM",
        reminder: ""
    },
    {
        id: "18",
        hour: "07",
        time: "19",
        meridiem: "PM",
        reminder: ""
    },
    {
        id: "19",
        hour: "08",
        time: "20",
        meridiem: "PM",
        reminder: ""
    },
    {
        id: "20",
        hour: "09",
        time: "21",
        meridiem: "PM",
        reminder: ""
    },
    {
        id: "21",
        hour: "10",
        time: "22",
        meridiem: "PM",
        reminder: ""
    },
    {
        id: "22",
        hour: "11",
        time: "23",
        meridiem: "PM",
        reminder: ""
    },
    {
        id: "23",
        hour: "12",
        time: "24",
        meridiem: "PM",
        reminder: ""
    },
    {
        id: "24",
        hour: "04",
        time: "16",
        meridiem: "AM",
        reminder: ""
    },
    
]
// sets date for header
const getCurrentDay = () => {
    var currentDay = moment().format('dddd, MMMM Do');
    currentP.textContent = currentDay;
}
getCurrentDay();
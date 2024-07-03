// DATE METHODS
// Assignment # 31-34
// JAVASCRIPT

// 1. Write a program that displays current date and time in
// your browser.

// let today = new Date("4,july,2024");
// document.write(today);

// 2. Write a program that alerts the current month in words.
// For example December.

// let month = ["january","february","march","april","may","june","july","august","september","october","november","december"]; 
// let currentMonth = new Date().getMonth();
// alert("current month is : " +(month[currentMonth]));

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// let days = ["sun","mon","tue","wed","thu","fri","sat"];
// let currentDay = new Date().getDay();
// // console.log(currentDay);
// alert("Today is " + days[currentDay]);

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// let days = ["sun","mon","tue","wed","thu","fri","sat"];
// let day = new Date().getDay();
// if(day === 0 || day === 6){
//     alert("its fun day");
// }else{
//     alert("today is " + days[day]);
// }

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// let frstDate = new Date().getDate();
// if(frstDate < 16){
//    console.log(`First fiften days of the month`);

// }else{
//     console.log(`Last days of the month`);
// }

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// let currentDate = new Date();
//  console.log("Current Date: " +currentDate );

// let milliSec = currentDate.getTime();
//  console.log("Elapsed milliseconds since jan 1 1970: " +milliSec);
// let minuts = Math.floor(milliSec / 1000 /60);
// // console.log(minuts);
// let resSince1970 = minuts;
// console.log(`Minutes since midnight jan 1, 1970, ${minuts}`);

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// let currentDate = new Date();
// let currHours = currentDate.getHours();
// // console.log(currHours);
// if(currHours < 12){
//     alert("its AM");
// }else{
//     alert("its PM")
// }

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// let currentDate = new Date();
// let laterDate = new Date(2020,11,31);
// console.log("Later Date: " + laterDate);

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015








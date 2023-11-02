// Calculate total hours passed between two time
// Accepted input format example "9:00 AM"
// Ex: calculateTotalHoursElapsed("9:00 AM", "10:00 AM") //Output 1 Hour
// Ex: calculateTotalHoursElapsed("9:00 AM", "3:12 PM") // Output 6 Hour 12 minutes

//*******************************************************************************************************/

function calculateTotalHoursElapsed(startTime,endTime){

    if(typeof startTime !== "string" || typeof endTime !== "string"){
        return "Invalid Datatype";
    }
  
    startTime = startTime.replace(/(\d) (\d)/ , '$1$2');
    endTime = endTime.replace(/(\d) (\d)/, '$1$2');

    const [start, startPeriod] = startTime.split(' '); // start = "9:00", startPeriod = "AM"
    const [end, endPeriod] = endTime.split(' ');       // end = "3:12", endPeriod = "PM"


    
    const startHour = (parseInt(start.split(':')[0]) % 12) + (startPeriod.toUpperCase() === 'PM' ? 12 : 0); // startHour = (9 % 12) + (AM ? 0 : 0) = 9 + 0 = 9
    const endHour = (parseInt(end.split(':')[0]) % 12) + (endPeriod.toUpperCase() === 'PM' ? 12 : 0); // endHour = (3 % 12) + (PM ? 12 : 0) = 3 + 12 = 15
    

    const startMinute = parseInt(start.split(':')[1]); // startMinute = 0
    const endMinute = parseInt(end.split(':')[1]);     // endMinute = 12

    
    
    let totalMinutes = (endHour * 60 + endMinute) - (startHour * 60 + startMinute); // totalMinutes = (15 * 60 + 12) - (9 * 60 + 0) = (912) - (540) = 372
    
    
    if (totalMinutes < 0) {
        totalMinutes += 24 * 60; // Add 24 hours (1440 minutes)
    }
    

    const hours = Math.floor(totalMinutes / 60); // hours = 6
    const minutes = totalMinutes % 60;           // minutes = 12
    
      return `${hours} hours ${minutes} Minutes`;
    }
    
    console.log(calculateTotalHoursElapsed("1 2:00 PM", "2:00 PM"));
    console.log(calculateTotalHoursElapsed("9:00 AM", "3:12 PM"));
    console.log(calculateTotalHoursElapsed(true, "3:12 PM"));
    console.log(calculateTotalHoursElapsed("9:00 AM", 5));
    console.log(calculateTotalHoursElapsed("-9:00 AM", 5));




  
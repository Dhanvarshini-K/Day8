// Calculate total hours passed between two time
// Accepted input format example "9:00 AM"
// Ex: calculateTotalHoursElapsed("9:00 AM", "10:00 AM") //Output 1 Hour
// Ex: calculateTotalHoursElapsed("9:00 AM", "3:12 PM") // Output 6 Hour 12 minutes

function calculateTotalHoursElapsed(startTime, endTime) {

   
    const startParts = startTime.split(' ');
    const endParts = endTime.split(' ');

    
    const start = startParts[0].split(':');
    const end = endParts[0].split(':');

    if (startParts.length !== 2 || endParts.length !== 2) {
        return "Invalid time format";
    }
  
    if (start.length !== 2 || end.length !== 2) {
        return "Invalid time format";
    }

   
    const startHour = parseInt(start[0]);
    const startMinute = parseInt(start[1]);
    const endHour = parseInt(end[0]);
    const endMinute = parseInt(end[1]);

    const totalStartMinutes = (startParts[1].toLowerCase() === 'am' ? 0 : 12 * 60 ) + startHour * 60 + startMinute;
    const totalEndMinutes = (endParts[1].toLowerCase() === 'am' ? 0 : 12 * 60 ) + endHour * 60  + endMinute;

    const minutesElapsed = Math.abs(totalEndMinutes - totalStartMinutes);

    if (minutesElapsed <= 0) {
      return "0 minutes";
    }

    const hours = Math.floor(minutesElapsed / 60);
    const minutes = minutesElapsed % 60;

    if (hours > 0) {
        return `${hours} Hour${hours > 1 ? 's' : ''} ${minutes} Minute${minutes > 1 ? 's' : ''}`;
    } else {
        return `${minutes} Minute${minutes > 1 ? 's' : ''}`;
    }
}


console.log(calculateTotalHoursElapsed("9:00 AM", "10:00 AM"));  
console.log(calculateTotalHoursElapsed("9:00 PM", "3:12 AM")); 




  
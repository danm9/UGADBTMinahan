//Velocity Calculator

function calculateVelocity(velocity, teamMembers, sprintLength, daysOut, averageInjections, injectionEffort, additionalHours, rolloverPoints) {
    let hoursPerDay = 6;
    additionalHours = additionalHours * 1;
    rolloverPoints = rolloverPoints * 1;
    
    let sprintHours = sprintLength * hoursPerDay * teamMembers;
    console.log("Total Sprint Hours: " + sprintHours);
    
    let hoursPerPoint = sprintHours / velocity;
    console.log("Hours Per Point: " + hoursPerPoint);

    let injectionPoints = averageInjections * injectionEffort;
    console.log("Injection Points: " + injectionPoints);

    let totalHoursOutPerSprint = daysOut * hoursPerDay + additionalHours;
    console.log("Total Hours Out Per Sprint: " + totalHoursOutPerSprint);

    let daysOutPerSprint = totalHoursOutPerSprint / hoursPerDay;
    console.log("Total Days Out Per Sprint...with a 6 hour day: " + daysOutPerSprint);
    
    let velocityPerPersonPerDay = velocity / (sprintLength * teamMembers);
    console.log("Velocity Per Person Per Day: " + velocityPerPersonPerDay);
    
    let planFor = velocity - (daysOutPerSprint * velocityPerPersonPerDay) - injectionPoints - rolloverPoints;
    console.log("Plan For " + Math.round(planFor));
    
    let planForTotal = planFor + injectionPoints + rolloverPoints;
    console.log("Plan For Total " + Math.round(planForTotal));
    
    const x = document.getElementById("planFor").innerHTML = "Plan For " + Math.round(planFor) + ", Total Would be " + Math.round(planForTotal);
};


function teamVelocityCalc(currentVelocity, oldTeamCount, newTeamCount) {
 
    let determineVelocity = currentVelocity / oldTeamCount;
    console.log(determineVelocity);
    let newVelocity = determineVelocity * newTeamCount
    console.log("Use " + Math.round(newVelocity) + " for your Velocity");
    
    const x = document.getElementById("newVelocity").innerHTML = "Use " + Math.round(newVelocity) + " for your Velocity";

};

function sprintVelocityCalc(currentSprintVelocity, teamCount, oldSprintLength, newSprintLength) {
    
    let velocityPerDayPerTeamMember = currentSprintVelocity / teamCount / oldSprintLength;
    console.log(velocityPerDayPerTeamMember);
    let newSprintVelocity = velocityPerDayPerTeamMember * teamCount * newSprintLength;
    console.log("Use " + Math.round(newSprintVelocity) + " for your Velocity");
    
    const x = document.getElementById("newSprintVelocity").innerHTML = "Use " + Math.round(newSprintVelocity) + " for your Velocity";

};
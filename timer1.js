var myAlarms = process.argv.slice(2);
console.log('myAlarms: ', myAlarms);


const alarmClock = function(myAlarms) {
  
setTimeout(() => { process.stdout.write('ding\n');}, myAlarms[0] * 1000);  
setTimeout(() => { process.stdout.write('ding\n');}, myAlarms[1] * 1000);
setTimeout(() => { process.stdout.write('ding\n');}, myAlarms[2] * 1000);
setTimeout(() => { process.stdout.write('ding\n');}, myAlarms[3] * 1000);
setTimeout(() => { process.stdout.write('ding\n');}, myAlarms[4] * 1000);
}
 alarmClock(myAlarms)

const seconds = [10, 3, 5, 9,];

const alarmClock = function(seconds) {
  for (const second of seconds) {
    setTimeout(() => { process.stdout.write('ding\n');}, second * 1000);
  }
};

alarmClock(seconds)

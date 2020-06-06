let STORE = { tasks: [], commitments: [] }
let greatest_task_id = 0;

STORE.tasks = [
  new Task('eat the rich'),
  new Task('overthrow the system'),
  new Task('emmanetize the eschaton')
];
STORE.commitments = [
  new TimeCommitment(60, STORE.tasks[0]),
  new TimeCommitment(10, STORE.tasks[1]),
];


const TASK_SIZES = [
  'minutes',
  'hours',
  'days'
];

function Effort(startTime, endTime) {
  this.startTime = startTime || Date.now();
  this.endTime   = endTime;
}

function isSameDay(ts1, ts2) {
  // get start timestamp of calender day for ts1
  // get end of day
  // is ts2 > start && < end
  return true;
}

// YYYY-MM-DD
function getCommitmentsByDate(date) {
  const d1 = date ? Date.parse(date) : Date.now();
  return STORE.commitments.filter(comm => isSameDay(d1, comm.startDay) )
}

function TimeCommitment(minutes, task, startDay, notes){
  this.minutes = minutes;
  this.task = task;
  this.startDay = startDay || Date.now();
  this.notes = notes || '';
  this.efforts = [];

  // Time Commitment methods
  this.start = function(){
    this.efforts.push( new Effort() );
  }
  this.pause = function(){
    this.efforts[this.efforts.length - 1].endTime = Date.now(); 
  }
}

function Task(name, id, taskSize, dueDate, isComplete){
  // Task properties
  this.name = name;
  this.id = id || ++greatest_task_id;
  this.completed = isComplete || false;

  // Derived properties
  this.getMinutesSpent = function(){
    return this.efforts.reduce((last, cur) => last + cur.minutes, 0);
  }

  // Task instance constructor finishes
  return this;
}

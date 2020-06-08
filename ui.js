function HTMLforCommitmentList(comms){
  let commitmentViews = comms.map(HTMLforCommitment).join('\n');
  
  return `<table class="commitments">
    <tr><th>Minutes</th><th>Task</th><th>Action</th></tr>
    ${commitmentViews}
  </table>`;
}

function HTMLforCommitment(comm) {
  let minutes = comm && comm.minutes || 0;
  let name = comm && comm.task && comm.task.name || 'An Unknown Task';

  return `<tr>
    <td>${minutes}</td>
    <td>${name}</td>
    <td><button class="play-pause" onClick="startTimer(${comm.id})">Start</button></td>
  </tr>`;
}

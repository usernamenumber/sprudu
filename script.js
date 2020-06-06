

function showTodayView(){

  let commitmentViews = HTMLforCommitmentList( getCommitmentsByDate() )
  $('section.today').html(commitmentViews)
}




function main(){
  showTodayView();
}

$(main);
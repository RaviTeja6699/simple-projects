console.log('hello!')
var runs=0;
var wicket=0;
var livescore=runs+'/'+wicket;
function score(val){
  if (val==='w'){
    wicket++;
    var livescore=runs+'/'+wicket;
    document.getElementById('d1').innerHTML=livescore;
    
  }
  else{
    runs=runs+val;
    var livescore=runs+'/'+wicket;
    document.getElementById('d1').innerHTML=livescore;
    


  }
}
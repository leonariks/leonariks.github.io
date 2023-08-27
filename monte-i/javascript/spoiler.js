function first(){
  document.getElementById('first').style.display='block';
  document.getElementById('second').style.display='none';
  document.getElementById('arrow_second').style.display='none';
  document.getElementById('arrow').style.display='block';
}

function second(){
  document.getElementById('second').style.display='block';
  document.getElementById('first').style.display='none';
  document.getElementById('arrow').style.display='none';
  document.getElementById('arrow_second').style.display='block';
}
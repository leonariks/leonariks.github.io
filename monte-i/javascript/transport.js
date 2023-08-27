function bus(){
  document.getElementById('avia').style.display='none';
  document.getElementById('avias').style.borderBottom='none';
  document.getElementById('bus').style.display='block';
  document.getElementById('buses').style.borderBottom='2px solid #f35e49';
}

function avia(){
  document.getElementById('bus').style.display='none';
  document.getElementById('buses').style.borderBottom='none';
  document.getElementById('avia').style.display='block';
  document.getElementById('avias').style.borderBottom='2px solid #f35e49';
}

/** onclick Moto
 * ====================================
*/
function motoc(){
  document.getElementById('car').style.display='none';
  document.getElementById('cars').style.borderBottom='none';
  document.getElementById('spares').style.display='none';
  document.getElementById('spar').style.borderBottom='none';
  document.getElementById('moto').style.display='block';
  document.getElementById('motob').style.borderBottom='2px solid #f35e49';
}

/** onclick Car
 * ====================================
*/
function cars(){
  document.getElementById('moto').style.display='none';
  document.getElementById('motob').style.borderBottom='none';
  document.getElementById('spares').style.display='none';
  document.getElementById('spar').style.borderBottom='none';
  document.getElementById('car').style.display='block';
  document.getElementById('cars').style.borderBottom='2px solid #f35e49';
}

/** onclick Spares
 * ====================================
*/

function spares(){
  document.getElementById('moto').style.display='none';
  document.getElementById('motob').style.borderBottom='none';
  document.getElementById('car').style.display='none';
  document.getElementById('cars').style.borderBottom='none';
  document.getElementById('spares').style.display='block';
  document.getElementById('spar').style.borderBottom='2px solid #f35e49';
}
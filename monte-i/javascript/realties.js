
/** onclick Rent
 * ====================================
*/
function rent(){
  document.getElementById('sell').style.display='none';
  document.getElementById('sells').style.borderBottom='none';
  document.getElementById('pushare').style.display='none';
  document.getElementById('pushares').style.borderBottom='none';
  document.getElementById('rent').style.display='block';
  document.getElementById('rents').style.borderBottom='2px solid #f35e49';
}

/** onclick Pushare
 * ====================================
*/
function pushare(){
  document.getElementById('sell').style.display='none';
  document.getElementById('sells').style.borderBottom='none';
  document.getElementById('rent').style.display='none';
  document.getElementById('rents').style.borderBottom='none';
  document.getElementById('pushare').style.display='block';
  document.getElementById('pushares').style.borderBottom='2px solid #f35e49';
}

/** onclick Spares
 * ====================================
*/

function sell(){
  document.getElementById('rent').style.display='none';
  document.getElementById('rents').style.borderBottom='none';
  document.getElementById('pushare').style.display='none';
  document.getElementById('pushares').style.borderBottom='none';
  document.getElementById('sell').style.display='block';
  document.getElementById('sells').style.borderBottom='2px solid #f35e49';
}
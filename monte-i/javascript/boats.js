
/** onclick Launch
 * ====================================
*/
function launch(){
  document.getElementById('yacht').style.display='none';
  document.getElementById('yachts').style.borderBottom='none';
  document.getElementById('boat_spare').style.display='none';
  document.getElementById('boat_spares').style.borderBottom='none';
  document.getElementById('launch').style.display='block';
  document.getElementById('launchs').style.borderBottom='2px solid #f35e49';
}

/** onclick Car
 * ====================================
*/
function yacht(){
  document.getElementById('launch').style.display='none';
  document.getElementById('launchs').style.borderBottom='none';
  document.getElementById('boat_spare').style.display='none';
  document.getElementById('boat_spares').style.borderBottom='none';
  document.getElementById('yacht').style.display='block';
  document.getElementById('yachts').style.borderBottom='2px solid #f35e49';
}

/** onclick Spares
 * ====================================
*/

function boat_spare(){
  document.getElementById('launch').style.display='none';
  document.getElementById('launchs').style.borderBottom='none';
  document.getElementById('yacht').style.display='none';
  document.getElementById('yachts').style.borderBottom='none';
  document.getElementById('boat_spare').style.display='block';
  document.getElementById('boat_spares').style.borderBottom='2px solid #f35e49';
}
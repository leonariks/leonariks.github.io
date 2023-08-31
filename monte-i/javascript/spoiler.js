/**Transport
 * ================================
 */
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



/**Medicine
 * ================================
 */

function med__first(){
  document.getElementById('med__first').style.display='block';
  document.getElementById('med__second').style.display='none';
  document.getElementById('medarrow_second').style.display='none';
  document.getElementById('medarrow').style.display='block';
}

function med__second(){
  document.getElementById('med__second').style.display='block';
  document.getElementById('med__first').style.display='none';
  document.getElementById('medarrow').style.display='none';
  document.getElementById('medarrow_second').style.display='block';
}
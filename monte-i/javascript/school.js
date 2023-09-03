
/** onclick Moto
 * ====================================
*/
function state(){
  document.getElementById('lang__disp').style.display='none';
  document.getElementById('school_lang').style.borderBottom='none';
  document.getElementById('private__disp').style.display='none';
  document.getElementById('school_private').style.borderBottom='none';
  document.getElementById('state__disp').style.display='block';
  document.getElementById('school_state').style.borderBottom='2px solid #f35e49';
}


function private(){
  document.getElementById('state__disp').style.display='none';
  document.getElementById('school_state').style.borderBottom='none';
  document.getElementById('lang__disp').style.display='none';
  document.getElementById('school_lang').style.borderBottom='none';
  document.getElementById('private__disp').style.display='block';
  document.getElementById('school_private').style.borderBottom='2px solid #f35e49';
}

/** onclick Spares
 * ====================================
*/

function langua(){
  document.getElementById('private__disp').style.display='none';
  document.getElementById('school_private').style.borderBottom='none';
  document.getElementById('state__disp').style.display='none';
  document.getElementById('school_state').style.borderBottom='none';
  document.getElementById('lang__disp').style.display='block';
  document.getElementById('school_lang').style.borderBottom='2px solid #f35e49';
}
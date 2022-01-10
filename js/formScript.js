
function initialize() { 
    initEvents(); 
} 
window.onload = initialize;

function initEvents()
{
	var reset_button = document.getElementById("reset-button-link");
	reset_button.onclick = function () { document.getElementById("cjsm_form").reset();return false; }
}







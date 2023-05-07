var displayHoras = document.querySelector(".horas");
var displayMinutos = document.querySelector(".minutos");
var displaySegundos = document.querySelector(".segundos");

setInterval(function(){

	var tempo = new Date();
	var hr = tempo.getHours();
	var mn = tempo.getMinutes();
	var sd = tempo.getSeconds();

	displayHoras.textContent = hr;
	displayMinutos.textContent = mn;
	displaySegundos.textContent = sd;
});
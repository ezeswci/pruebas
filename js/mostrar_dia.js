function mostrar_dia()
{
var iDiv = document.createElement('div');

var fecha = document.getElementById("fecha").value;
var tipo = document.getElementById("tipo").value;
var tipo_vehiculo = document.getElementById("tipo_vehiculo").value;
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {	//alert('xmlhttp.readyState = '+xmlhttp.readyState+' xmlhttp.status='+xmlhttp.status);

  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
		var respuesta=xmlhttp.responseText;
		//alert('Respuesta '+respuesta+' Largo = '+respuesta.length);
		//alert(3);
		obj = JSON.parse(respuesta);
		var cantidad = obj.turno.length;
		var pantalla = '<table width="100%">';
		for(var i=0; i<cantidad; i++){
		if(obj.turno[i].estado == 0)
			{pantalla = pantalla +'<tr><td width="100%" class="boton_celular"><a href="#" onClick="reservar_turno(\''+obj.turno[i].hora+'\')" >'+obj.turno[i].hora+'</a></td></tr>'}
		else
			{pantalla = pantalla +'<tr><td width="100%" class="boton_ocupado">' +obj.turno[i].hora+' Ocupado </td></tr>'};
		}
		pantalla = pantalla + '</table>';
		//alert(obj.turno[0].hora + " " + obj.turno[0].estado);
		document.getElementById("mostrar_turnos").innerHTML = pantalla;
		//alert(4);
    }
  }
	//alert('Fecha '+fecha+' Turno ='+tipo);
	xmlhttp.open("POST","http://localhost/wgts/celular_controlar_fecha.php",false);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("fecha="+fecha+"&tipo="+tipo+"&tipo_vehiculo="+tipo_vehiculo);

}
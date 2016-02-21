<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" media="all" href="css/celular.css">
<!-- **************************** Calendario ********************************* -->
<link type="text/css" rel="stylesheet" href="calendario/dhtmlgoodies_calendar/dhtmlgoodies_calendar.css?random=20051112" media="screen"></LINK>
<SCRIPT type="text/javascript" src="calendario/dhtmlgoodies_calendar/dhtmlgoodies_calendar.js?random=20060118"></script>
<?php
$fecha_desde = date('d-m-Y');
?>
<title>WGTS</title>
</head>

<body>
<form method="post" name="stock" id="stock" class="form" >

	<table border="0" cellpadding="0" align="center" width="100%" style="font-size:14px" >
		<tr>
		<td><input type="text" name="fecha_desde" id="fecha_desde" value="" size="6" onChange="muestra(8)"></td>
        <td>
        	<img src="img/calendario.png" width="23" height="23" onClick="displayCalendar(document.forms[0].fecha_desde,'dd/mm/yyyy',this)">
        </td>

        </tr>
	</table>
</form>    
</body>
</html>

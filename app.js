$(document).ready(function(){
	$('#form_anmeldung').submit(function() {

	var data = {'vorname': $('#vorname').val(), 'nachname': $('#nachname').val(), 'email': $('#email').val(), 'erfahrung': $('#erfahrung').val(), 'schlagzeug': $('#schlagzeug').val(), 'anmerkungen': $('#anmerkungen').val(), 'agb': $('#agb').val()};

    $.ajax({
           type: "POST",
           url: '/gruppen',
           contentType: "application/json; charset=utf-8",
           dataType: "json",
           data: JSON.stringify(data),
           success: function(data)
           {
               alert(data.message);
           }
         });

    return false; //Um zu verhindern, dass der normale Submit ausgeführt wird
});
});
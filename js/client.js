 $(function() {
     function setDate() {
         $('#clock').html(moment().format("HH:mm"));
     };

     function setWeather() {
         var url = "https://api.openweathermap.org/data/2.5/weather?q=Heidelberg,de&APPID=cbc315d164e0c209dbe1131fa817870f&units=metric";
         $.get(url, (data, textStatus, jqXHR) => {
             $('#weather').html(data.main.temp + "°"  + data.name);
         });
     }
     setWeather();
     setDate();

     setInterval(function() {
         setDate();
         setWeather();
     }, 20 * 1000);
 });

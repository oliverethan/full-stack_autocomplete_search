

function suggestion(val){

        console.log("Hello");
        document.getElementById("demo").innerHTML = val; 

        var url = "http://localhost:3000/suggestions";
        var params = "suggestion=" + val;

        
        var http = new XMLHttpRequest();

        http.open("GET", url+"?"+params, true);
        http.onreadystatechange = function()
        {
        if(http.readyState == 4 && http.status == 200) {

         var e = document.getElementById("demo");
                e.innerHTML=http.responseText;
        }
        }
        http.send(null);



}
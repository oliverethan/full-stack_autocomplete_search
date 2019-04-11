



function suggestion(val){

        console.log("Hello");
        //document.getElementById("demo").innerHTML = val; 

        var url = "http://localhost:3000/suggestions";
        var params = "suggestion=" + val;

        
        var http = new XMLHttpRequest();

        http.open("GET", url+"?"+params, true);
        http.onreadystatechange = function()
        {
        if(http.readyState == 4 && http.status == 200) {

               var suggestions = JSON.parse(http.responseText);
               generatelist(suggestions);


        }
        }
        http.send(null);



}

function generatelist(suggestions){

        $('#list').empty()

        for(var i = 0; i < suggestions.length; i++ ){
                $('<li>'+ suggestions[i].name + '</li>').appendTo('#list');
        }


}


var suggestions;

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

              suggestions  = JSON.parse(http.responseText);
               generatelist();


        }
        }
        http.send(null);



}

function generatelist(){

        $('li').unbind("click");
        $('#list').empty();

        for(var i = 0; i < suggestions.length; i++ ){
                $('<li>'+ suggestions[i].name + ' (' + suggestions[i].type +  ')</li>').appendTo('#list');
        }

         $(document).on("click", "li" , function() {
           var item = suggestions[$(this).index()];
           console.log(item);
           if(item.type == "drug"){
                window.location = 'http://localhost:3000/drug.html?d_id=' + item.suggestion_id;
           }
           else{
                  window.location = 'http://localhost:3000/druglist.html?m_id=' + item.suggestion_id;

           }

        });

}
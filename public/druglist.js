

 $(document).ready(function() { 

        var dlist;

        console.log("Cello");
        var m_id = getUrlVars()["m_id"];
        console.log(m_id);


        var url = "http://localhost:3000/dlist";
        var params = "m_id=" + m_id;

        
        var http = new XMLHttpRequest();

        http.open("GET", url+"?"+params, true);
        http.onreadystatechange = function()
        {
        if(http.readyState == 4 && http.status == 200) {

              dlist  = JSON.parse(http.responseText);
              console.log(dlist);
              displaydlist(dlist);


        }
        }
        http.send(null);


});

function displaydlist(dlist){


    
        for(var i = 0; i < dlist.length; i++){
              document.getElementById("Drugs").innerHTML+= dlist[i].name + " ";
        }


}



 function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
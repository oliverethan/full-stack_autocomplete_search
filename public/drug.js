

 $(document).ready(function() { 

        var drug;

        console.log("Yello");
        var d_id = getUrlVars()["d_id"];
        console.log(d_id);


        var url = "http://localhost:3000/drug";
        var params = "d_id=" + d_id;

        
        var http = new XMLHttpRequest();

        http.open("GET", url+"?"+params, true);
        http.onreadystatechange = function()
        {
        if(http.readyState == 4 && http.status == 200) {

              drug  = JSON.parse(http.responseText);
              console.log(drug);
              displayDrug(drug);


        }
        }
        http.send(null);


});

function displayDrug(drug){


        document.getElementById("name").innerHTML = drug[0].name;
        document.getElementById("code").innerHTML = drug[0].name_code;
        document.getElementById("generic").innerHTML = drug[0].name_generic;
        document.getElementById("brand").innerHTML = drug[0].name_brand;

        for(var i = 0; i < drug.length; i++){
              document.getElementById("mech").innerHTML+= drug[i].m_name + " ";
        }



        console.log(drug[0].name);

}



 function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
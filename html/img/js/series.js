$(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: 'series.json',
        dataType: 'json',
        async: true,
        success: (data) => {
            data.forEach(serie => {
                renderSerie(serie);
            });
        }
    });

    function renderSerie(data) {
        let card = $('<div></div>');
        card.addClass('card');

        let img = $('<img>');
        img.attr('src', data.img);

        let titulo = $('<h3></h3>');
        titulo.append(data.title)

        let direcion = $('<h3></h3>');
        direcion.append(data.director);

        let year = $('<p></p>');
        year.append(data["release_date"]);

        
        let descripcion = $('<p></p>');
        descripcion.append(data.description);

          
       

        card.append(img);
        card.append(titulo);
        card.append(direcion);
        card.append(descripcion);
        card.append(year);
       

        $('.grupo1').append(card);
    }
});

/*//console.log("hola consola");

var app={};
var miCallback=datos=>{
    console.log(datos);
    app.muñecas=datos;
    var html = ""
    html+="<h2>muñecas</h2>"
    app.muñecas.map(muñeca=>{
        html+="<img src='"+muñeca.img+"'></img>";
        for(let propiedad of Object.keys(muñeca)){
            html+="<li>"+propiedad+": "+muñeca[propiedad]
        }
        html


    })

    document.getElementById("results").innerHTML=html;
}

*/

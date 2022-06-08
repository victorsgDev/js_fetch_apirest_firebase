

function llenarDatos(data){
    let datos=data
    let textJson=JSON.parse(datos)
    //console.log(textJson)
    let alumnos=textJson.notas_alumnos

    //let infoAlumno=`<h3><strong>ID Alumno:</strong> ${alumnos[0].id} - <strong>Nombre:</strong>  ${alumnos[0].nombre} ${alumnos[0].apellidos}</h3>`
    let table="<th>ID ALUMNO</th><th>Nombre</th><th>Apellidos</th><th>BASES DE DATOS</th><th>PROGRAMACION</th><th>LENGUAJES DE MARCAS</th><th>SISTEMAS INFORMATICOS</th><th>FOL</th><th>ENTORNOS DE DESARROLLO</th><th>NOTA MEDIA</th>"
    for (let i=0;i<alumnos.length;i++){
        let notas=new Array(alumnos[i].bases_de_datos,alumnos[i].programacion,alumnos[i].lenguajes_de_marcas,alumnos[i].sistemas_informaticos,alumnos[i].fol,alumnos[i].entornos_de_desarrollo)
        let media=calcular_media(notas)


        table+="<tr><td scope=\"row\">" +
            alumnos[i].id + "</td><td scope=\"row\"><strong>" +
            alumnos[i].nombre + "</strong></td><td scope=\"row\"><strong>" +
            alumnos[i].apellidos + "</td><td scope=\"row\"></strong>" +
            calificacion(alumnos[i].bases_de_datos) + " ("+alumnos[i].bases_de_datos +")"+"</td><td scope=\"row\">" +
            calificacion(alumnos[i].programacion) + " ("+alumnos[i].programacion +")"+"</td><td scope=\"row\">" +
            calificacion(alumnos[i].lenguajes_de_marcas) + " ("+alumnos[i].lenguajes_de_marcas +")"+"</td><td scope=\"row\">" +
            calificacion(alumnos[i].sistemas_informaticos) + " ("+alumnos[i].sistemas_informaticos +")"+"</td><td scope=\"row\">" +
            calificacion(alumnos[i].fol) + " ("+alumnos[i].fol +")"+"</td><td scope=\"row\">" +
            calificacion(alumnos[i].entornos_de_desarrollo) + " ("+alumnos[i].entornos_de_desarrollo +")"+"</td><td scope=\"row\">" +
            media[0] +" - "+calificacion(media[1])+ "</td><td scope=\"row\">"
    }

    document.getElementById("boletin1").innerHTML=table
    //document.getElementById("infoAlumno1").innerHTML=infoAlumno

}

function loadDatos() {
    const options = {method: "GET"}

    fetch("alumnos.json", options)
        .then(response => {
            if (response.ok){
                //console.log("correcto")
                return response.text()}
            else
                throw new Error(response.status)
        })
        .then(data => llenarDatos(data))
}

function calcular_media(notas){
    let total=0.0;
    notas.forEach (function(nota){
        total += nota;
    });

    let media=total/notas.length
    return [Math.round(media*100)/100, Math.round(media)]
}

function calificacion(calificacion){
    switch (true){

        case calificacion<3:
            return "Muy deficiente"

        case calificacion<5:
            return "Insuficiente"

        case calificacion<6:
            return "Suficiente"

        case calificacion<7:
            return "Bien"

        case calificacion<9:
            return "Notable"

        case calificacion<11:
            return "Sobresaliente"

        default: return "No evaluado"
    }

}



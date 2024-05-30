//funcion modal para manipular elementos

const miVentanaEmergente = document.getElementById('saludando')
// agregar observador sobre el modal

miVentanaEmergente.addEventListener('show.bs.modal', function(event){
    console.log('se esta abriendo el modal');
        
    // reconocer el elemento que habilita el evento modal
    let boton = event.relatedTarget // etiquetado relacionado al evento owo


    let mensaje = boton.getAttribute('data-titulo')
    let contenido = boton.getAttribute('data-contenido')
    
    
    document.getElementById('tituloModal').innerText = mensaje
    document.querySelector('.modal-body').innerHTML = contenido

})
miVentanaEmergente.addEventListener('shown.bs.modal', function(){
    console.log('esta abierto el modal');
})
miVentanaEmergente.addEventListener('hide.bs.modal', function(){
    console.log('se esta esta cerrando el modal');
})
miVentanaEmergente.addEventListener('hidden.bs.modal', function(){
    console.log('esta cerrado el modal');
})
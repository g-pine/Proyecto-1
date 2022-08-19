import * as UI from './interfaz.js'
import API from './api.js'

UI.formularioBuscar.addEventListener('submit', buscarCancion);

function buscarCancion(e) {
    e.preventDefault();

    //Obtener datos del formulario
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;
    
    if(artista == '' || cancion === '' ) {
        // El usuario dejo al menos un espacio vacío, mostrar error
        UI.divMensajes.textContent = 'Error, se deben rellenar todos los campos';
        UI.divMensajes.classList.add('error');

        setTimeout(() => {
            UI.divMensajes.textContent = '';
            UI.divMensajes.classList.remove('error');
        }, 3000);  
        
        return;
    }

    // Consultar la API
    const busqueda = new API(artista, cancion);
    busqueda.consultarAPI();

}
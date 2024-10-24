
    // Función para obtener los parámetros de la URL
    function obtenerParametrosDeURL() {
        const parametros = new URLSearchParams(window.location.search);
        
        // Decodificar los parámetros que han sido codificados doblemente
        const nombre = decodeURIComponent(parametros.get('n') || 'La invitación no tiene nombre');
        const pases = decodeURIComponent(parametros.get('p') || 'No tiene pases disponibles');
        const frase = decodeURIComponent(parametros.get('f') || '');
        const link = decodeURIComponent(parametros.get('l') || '#');
        const colorH1 = decodeURIComponent(parametros.get('colorH1') || '#f39c12'); // Color para el H1
        const colorP = decodeURIComponent(parametros.get('colorP') || '#2c3e50');   // Color para el párrafo
        const colorA = decodeURIComponent(parametros.get('colorA') || '#e67e22');   // Color para el enlace
        const bgColor = decodeURIComponent(parametros.get('bgColor') || '#ffecd1'); // Color de fondo
        const fontFamily = decodeURIComponent(parametros.get('fontFamily') || 'Roboto, sans-serif'); // Fuente

        // Devolver los datos en un objeto
        return { nombre, pases, frase, link, colorH1, colorP, colorA, bgColor, fontFamily };
    }

    // Función para generar la tarjeta con estilos dinámicos
    function generarTarjeta() {
        const datos = obtenerParametrosDeURL();

        // Aplicar los estilos dinámicos en el cuerpo de la página
        document.body.style.backgroundColor = datos.bgColor;
        document.body.style.fontFamily = datos.fontFamily;

        // Estructura de la tarjeta usando los datos obtenidos de la URL
        const tarjetaHTML = `
            <div>
                <h1 style="color: ${datos.colorH1};">${datos.nombre}</h1>
                <p style="color: ${datos.colorP};"><strong>Tenés</strong><br>${datos.pases}</p>
                <p style="color: ${datos.colorP};"><strong>${datos.frase}</strong></p>
                <a href="${datos.link}" class="button" target="_blank" style="color: ${datos.colorA};">Mirá el Evento</a>
            </div>
        `;

        // Insertar la tarjeta en el contenedor
        const contenedor = document.getElementById('tarjeta-container');
        contenedor.innerHTML = tarjetaHTML;
    }

    // Llamar a la función para generar la tarjeta cuando cargue la página
    window.onload = generarTarjeta;
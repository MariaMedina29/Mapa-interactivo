//Muestra cuadro de información al seleccionar una localidad de la lista 
function mostrarInfoDesdeLista(zona, contenido) {
    const infoBox = document.getElementById('info-box');

    infoBox.innerHTML = contenido;
    infoBox.style.display = 'block';

    const zonas = document.querySelectorAll('.zona');
    zonas.forEach(z => {
        const imagen = z.querySelector('img');
        if (z.id === 'zona' + zona) {
            imagen.style.filter = 'none';
            imagen.style.opacity = '1';
            imagen.classList.add('seleccionada');
        } else {
            const opacidadOriginal = imagen.getAttribute('data-opacidad') || '1';
            imagen.style.filter = 'grayscale(80%)';
            imagen.style.opacity = opacidadOriginal;
            imagen.classList.remove('seleccionada');
        }
    });

    const zonaElement = document.getElementById('zona' + zona);
    if (zonaElement) {
        const rect = zonaElement.getBoundingClientRect();
        const top = rect.top + window.scrollY + (rect.height / 2) - 150;
        const left = rect.left + window.scrollX + (rect.width / 2);

        infoBox.style.position = 'absolute';
        infoBox.style.top = `${top}px`;
        infoBox.style.left = `${left}px`;
    }
}



//Mostrar información del mapa al seleccionar desde la lista 
document.addEventListener("DOMContentLoaded", function () {
    const zonasInfo = ZONAS_INFO;
  
    document.querySelectorAll('.zona-lista').forEach(item => {
      item.addEventListener('click', function (e) {
        // Quitar clase seleccionada de todas
        document.querySelectorAll('.zona-lista').forEach(el => {
          el.classList.remove('seleccionada');
        });
  
        // Agregar clase seleccionada al actual
        this.classList.add('seleccionada');
  
        // Obtener zona
        const zona = this.getAttribute('data-zona');
  
        // Verificar si existe información para esa zona
        if (zonasInfo[zona]) {
          mostrarInfoDesdeLista(zona, zonasInfo[zona]);
        }
  
        e.stopPropagation();
      });
    });

    document.querySelectorAll('.zona-lista').forEach(item => {
        item.addEventListener('click', function (e) {
          // Quitar clase seleccionada de todas
          document.querySelectorAll('.zona-lista').forEach(el => {
            el.classList.remove('seleccionada');
          });
    
          // Agregar clase seleccionada al actual
          this.classList.add('seleccionada');
    
          // Obtener zona
          const zona = this.getAttribute('data-zona');
    
          // Verificar si existe información para esa zona
          if (zonasInfo[zona]) {
            mostrarInfoDesdeLista(zona, zonasInfo[zona]);
          }
    
          e.stopPropagation();
        });
      });
  });

  
  

//Mostrar cuadro de información en el mapa 
function mostrarInfo(event, contenido) {
    const infoBox = document.getElementById('info-box');
    const card = document.querySelector('.card'); // contenedor principal

    document.getElementById('tooltip').style.display = 'none';

    infoBox.innerHTML = contenido;
    infoBox.style.display = 'block';

    requestAnimationFrame(() => {
        const boxHeight = infoBox.offsetHeight;
        const boxWidth = infoBox.offsetWidth;
    
        let top = event.clientY - boxHeight / 2;
        let left = event.clientX + 10;
    
        // Si se desborda por abajo de la pantalla
        if (top + boxHeight > window.innerHeight) {
            top = window.innerHeight - boxHeight - 10;
        }
    
        // Si se desborda por arriba de la pantalla
        if (top < 0) {
            top = 10;
        }
    
        // Si se desborda por la derecha de la pantalla
        if (left + boxWidth > window.innerWidth) {
            left = window.innerWidth - boxWidth - 10;
        }
    
        // Si se desborda por la izquierda (por precaución)
        if (left < 0) {
            left = 10;
        }
    
        infoBox.style.top = `${top}px`;
        infoBox.style.left = `${left}px`;
    });    

    // Limpia selección anterior
    document.querySelectorAll('.zona-lista').forEach(el => el.classList.remove('seleccionada'));

    // Mapeo de zonas
    for (let zonaTexto in MAPEO_ZONAS) {
        if (contenido.includes(zonaTexto)) {
            const item = document.querySelector(`.zona-lista[data-zona="${MAPEO_ZONAS[zonaTexto]}"]`);
            if (item) {
                item.classList.add('seleccionada');
                item.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            break;
        }
    }

}


//Hover del mapa
function cambiarOpacidad(id, opacidad) {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.style.opacity = opacidad;
    }
}

//Cambiar el filtro visual si tiene blanco y negro
function cambiarColor(id, nuevoFiltro) {
    const elemento = document.getElementById(id);
    if (elemento) {
        const filtroActual = getComputedStyle(elemento).filter;
        
        // Verifica si el filtro actual contiene "grayscale"
        if (filtroActual.includes("grayscale")) {
            elemento.style.filter = nuevoFiltro;
        }
    }
}

//Aplicar escala de grises al seleccionar el mapa
function seleccionarZona(idZonaSeleccionada) {
    // Obtener todas las imágenes con la clase "zona"
    const zonas = document.querySelectorAll('.zona');

    zonas.forEach(zona => {
        const imagen = zona.querySelector('img');
        if (zona.id === idZonaSeleccionada) {
            // Remover filtro en la zona seleccionada
            imagen.style.filter = 'none';
        } else {
            // Aplicar escala de grises a las otras zonas
            imagen.style.filter = 'grayscale(80%)';
            opacity = 0.5;
        } 
    });
}

//Quitar la selección del mapa al darle click afuera del mapa 
function resetearZonas() {
    const zonas = document.querySelectorAll('.zona');
    zonas.forEach(zona => {
        const imagen = zona.querySelector('img');
        const opacidadOriginal = imagen.getAttribute('data-opacidad');
        imagen.style.filter = 'none';
        imagen.style.opacity = opacidadOriginal;
    });
}

//Quitar la selección del mapa al darle click afuera del mapa 
document.addEventListener('click', function(event) {
    const infoBox = document.getElementById('info-box');

    // Ocultar los cuadros si se hace clic fuera de los polygons
    if (event.target.tagName.toLowerCase() !== 'polygon') {
        infoBox.style.display = 'none';

        // También quitar selección de la lista si se hace clic fuera del mapa o lista
        const clickedInsideLista = event.target.closest('.lista');
        const clickedInsideMapa = event.target.closest('.mapa');

        if (!clickedInsideLista && !clickedInsideMapa) {
            document.querySelectorAll('.zona-lista').forEach(el => {
                el.classList.remove('seleccionada');
            });
        }
    }

    if (!event.target.closest('polygon') && !event.target.closest('.zona')) {
        resetearZonas();
    }
});

//Mostrar que zona es al pasar el mouse 
function mostrarTooltip(event) {
    const nombreZona = event.target.getAttribute('data-nombre');
    const tooltip = document.getElementById('tooltip');
    tooltip.textContent = nombreZona;
    tooltip.style.display = 'block';
    moverTooltip(event); 
}

//Mostrar que zona es al pasar el mouse 
function ocultarTooltip() {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'none';
}

//Mostrar que zona es al pasar el mouse 
function moverTooltip(event) {
    const tooltip = document.getElementById('tooltip');
    const offset = 10;
    tooltip.style.left = (event.pageX + offset) + 'px';
    tooltip.style.top = (event.pageY + offset) + 'px';
}
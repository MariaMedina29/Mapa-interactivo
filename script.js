document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".btn");
    const returnButton = document.querySelector(".return");
    const circle = document.querySelector(".circle");
    const card = document.querySelector(".card");
    const cardContent = document.querySelector(".card-content");
    const bottomContainer = document.querySelector(".bottom-container");
    const returnCol = document.querySelector(".returnCol");
    const info = document.querySelector(".info");
    const infoModal = document.querySelector(".info-modal");
    const chatbot = document.querySelector(".Chatbot");
    const arrow = document.getElementById("arrow");

    const ButtonBogota = document.querySelector(".btnBogota");
    const ButtonAntioquia = document.querySelector(".btnAntioquia");
    const ButtonAtlantico = document.querySelector(".btnAtlantico");
    const ButtonBolivar = document.querySelector(".btnBolivar");

    const newCard = document.querySelector('.newCard');
    const newCircle = document.querySelector('.newcircle');
    

    function fadeOutContent() {
        if (cardContent) {
            cardContent.style.transition = "opacity 1s ease-in-out";
            cardContent.style.opacity = "0";
            setTimeout(() => {
                cardContent.style.display = "none";
            }, 1000);
        }

        if (bottomContainer) {
            bottomContainer.style.transition = "opacity 1s ease-in-out";
            bottomContainer.style.opacity = "0";
            setTimeout(() => {
                bottomContainer.style.display = "none";
            }, 1000);
        }
    }

    function fadeOutContent2() {
        if (card) {
            card.style.transition = "opacity 1s ease-in-out";
            card.style.opacity = "0";
            setTimeout(() => {
                card.style.display = "none";
            }, 1000);
        }

        if (bottomContainer) {
            bottomContainer.style.transition = "opacity 1s ease-in-out";
            bottomContainer.style.opacity = "0";
            setTimeout(() => {
                bottomContainer.style.display = "none";
            }, 1000);
        }
    }

    if (button) {
        button.addEventListener("click", () => {
            fadeOutContent();

            if (circle) {
                circle.style.transition = "bottom 1s ease-in-out, width 1s ease-in-out, height 1s ease-in-out"; 
                circle.style.bottom = "50%"; 
                circle.style.width = "150%";
                circle.style.height= "100%";
            }

            if (card) {
                card.style.transition = "width 1s ease-in-out, height 1s ease-in-out";
                card.style.width = "50%";
                card.style.height = "60%";
            }

            setTimeout(() => {
                window.location.href = "Colombia.html"; 
            }, 1000);
        });
    }

    if (returnButton) {
        returnButton.addEventListener("click", () => {
            arrow.classList.add("expand"); // animación de la flecha
    
           
            setTimeout(() => {
                fadeOutContent(); // desvanecer el resto del contenido
    
                if (circle) {
                    circle.style.transition = "bottom 1s ease-in-out, width 1s ease-in-out, height 1s ease-in-out"; 
                    circle.style.bottom = "-50%"; 
                    circle.style.width = "150%";
                    circle.style.height = "100%";
                }
                
                if (card) {
                    card.style.transition = "width 1s ease-in-out, height 1s ease-in-out";
                    card.style.width = "50%";
                
                    if (window.innerWidth < 940) {
                        card.style.height = "60%";
                    } else {
                        card.style.height = "75%";
                    }
                }
    
                // Desvanecer el botón completo (texto + flecha)
                returnButton.classList.add("fade-out");
    
                // Cambio de pantalla luego de la animación fade-out
                setTimeout(() => {
                    window.location.href = "index.html";
                }, 1000); // mismo tiempo que dura fade-out
    
            }, 800); // espera de la animación expand
        });
    }    
    

    if (returnCol) {
        returnCol.addEventListener("click", () => {
            arrow.classList.add("expand"); // animación de la flecha
    
            setTimeout(() => {
                
                fadeOutContent2(); 
    
                
                setTimeout(() => {
                    
                    if (newCircle) {
                        newCircle.style.transition = "bottom 1s ease-in-out, width 1s ease-in-out, height 1s ease-in-out"; 
                        newCircle.style.bottom = "50%"; 
                        newCircle.style.width = "150%";
                        newCircle.style.height = "100%";
                    }
    
                    if (newCard) {
                        newCard.style.transition = "width 1s ease-in-out, height 1s ease-in-out";
                        newCard.style.width = "50%";
                        newCard.style.height = "60%";
                    }
                    
                    returnCol.classList.add("fade-out");
    
                    
                    setTimeout(() => {
                        window.location.href = "Colombia.html";
                    }, 1200); // este tiempo debe coincidir con la duración de las animaciones de newCard/newCircle
    
                }, 1200); 
    
            }, 1000); // duración de la animación expand
        });
    }

    if (ButtonAntioquia) {
        ButtonAntioquia.addEventListener("click", () => {
            // Solo desaparecer el contenido interno
            const cardContent = document.querySelector('.card').innerHTML;
            fadeOutContent(); 
    
            setTimeout(() => {
                window.location.href = "MapaAntioquia.html"; 
            }, 1000);
        });
    }

    if (ButtonAtlantico) {
        ButtonAtlantico.addEventListener("click", () => {
            // Solo desaparecer el contenido interno
            const cardContent = document.querySelector('.card').innerHTML;
            fadeOutContent(); 
    
            setTimeout(() => {
                window.location.href = "MapaAtlantico.html"; 
            }, 1000);
        });
    }

    if (ButtonBogota) {
        ButtonBogota.addEventListener("click", () => {
            // Solo desaparecer el contenido interno
            const cardContent = document.querySelector('.card').innerHTML;
            fadeOutContent(); 
    
            setTimeout(() => {
                window.location.href = "MapaBogota.html";
            }, 500); 
        });
    }

    if (ButtonBolivar) {
        ButtonBolivar.addEventListener("click", () => {
            // Solo desaparecer el contenido interno
            const cardContent = document.querySelector('.card').innerHTML;
            fadeOutContent(); 
    
            setTimeout(() => {
                window.location.href = "MapaBolivar.html";
            }, 500); 
        });
    }

    if (chatbot) {
        chatbot.addEventListener("click", () => {
            setTimeout(() => {
                //Misma pantalla
                //window.location.href = "https://casadelcolaborador.homecenter.co/login"; 
                
                //Otra pantalla
                window.open("https://casadelcolaborador.homecenter.co/login", "_blank");
            }, 1000);
        });
    }

    if (info) {
        info.addEventListener("click", () => {
            const modal = document.getElementById("info-modal");
            const closeBtn = modal.querySelector(".close-btn");
    
            // Mostrar el modal
            modal.style.display = "block";
    
            // Cerrar al hacer clic en la X
            closeBtn.onclick = () => {
                modal.style.display = "none";
            };
    
            // Cerrar si se hace clic fuera del contenido del modal
            window.onclick = (event) => {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            };
        });
    }

    // Mostrar el modal automáticamente si estamos en MapaBogota.html
    const modalAuto = document.getElementById("info-modal");

    if (modalAuto) {
        // Verificar si el modal ya fue mostrado en esta sesión
        const modalShown = sessionStorage.getItem("modalShownBogota");

        // Si no se ha mostrado en esta sesión, mostrar el modal
        if (!modalShown) {
            modalAuto.style.display = "block"; // Mostrar el modal

            const closeBtn = modalAuto.querySelector(".close-btn");

            // Cerrar al hacer clic en la X
            if (closeBtn) {
                closeBtn.addEventListener("click", () => {
                    modalAuto.style.display = "none";
                    sessionStorage.setItem("modalShownBogota", "true"); // Marcar como mostrado en esta sesión
                    setTimeout(() => {
                        if (typeof window.reproducirAnimacion === "function") {
                            window.reproducirAnimacion();
                        }
                    }, 200);
                });
            }

            // Cerrar si se hace clic fuera del contenido del modal
            window.addEventListener("click", (event) => {
                if (event.target === modalAuto) {
                    modalAuto.style.display = "none";
                    sessionStorage.setItem("modalShownBogota", "true"); // Marcar como mostrado en esta sesión
                    setTimeout(() => {
                        if (typeof window.reproducirAnimacion === "function") {
                            window.reproducirAnimacion();
                        }
                    }, 200);
                }
            });
        }
    }

    //No se realizo ciudad
    function aviso() {
        alert("¡Estamos trabajando para que pronto puedas ver la información de esta ciudad! 🛠️✨");
    }


});

//No se realizo ciudad
function aviso() {
    alert("¡Estamos trabajando para que pronto puedas ver la información de esta ciudad! 🛠️✨");
}

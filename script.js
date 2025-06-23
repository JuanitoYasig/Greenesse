function openModal1(){
    $("#modalPrimero").modal("show");
}
function openModal2(){
    $("#modalSegundo").modal("show");
}
function openModal3(){
    $("#modalTercero").modal("show");
}


function navigateToSection() {
    const select = document.getElementById('topicSelect');
    
    if (select.value) {
        const targetSection = document.getElementById(select.value);
        if (targetSection) {
            targetSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}

function sendEmail(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const tema = document.getElementById('tema').value;
    const mensaje = document.getElementById('mensaje').value;
    
    const subject = `Consulta sobre ${tema} - ${nombre}`;
    const body = `
        Nombre: ${nombre}
        Email: ${email}
        Teléfono: ${telefono || 'No proporcionado'}
        Tema: ${tema}

        Mensaje:
        ${mensaje}

        ---
        Enviado desde el formulario de contacto de Greenesse
    `;
    
    const mailtoLink = `mailto:jcyasig2@espe.edu.ec?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    // Mostrar mensaje de confirmación
    alert('Se abrirá tu cliente de correo para enviar el mensaje. Si no se abre automáticamente, copia la información y envíala manualmente a jcyasig2@espe.edu.ec');
    
    // Opcional: limpiar el formulario
    document.getElementById('contactForm').reset();
}

// Smooth scrolling para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efecto de fade-in para las secciones
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.content-section, .developer-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

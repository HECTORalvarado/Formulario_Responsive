/* Variables del formulario con las que se interactuan */

const primer_formulario = document.getElementById('inicio_sesion');
const segundo_formulario = document.getElementById('loging');
const ir_primer_form = document.getElementById('ir_formulario_1');
const ir_segundo_form = document.getElementById('ir_formulario_2');
const checkbox = document.getElementById('mostrar');

/* Función para mostrar contraseña */

checkbox.onclick = () => {

    const contra = document.getElementById('contraseña_regis');
    if (contra.type == "password") {
        contra.type = "text";
    }
    else {
        contra.type = "password";
    }
}

/* Cambiar entre formulario de registro e inicio de Sesión */

ir_primer_form.onclick = (e) => {
    segundo_formulario.style.display = 'none';
    ir_segundo_form.style.background = '#164d72';
    ir_segundo_form.style.transform = "scale(1)";
    primer_formulario.style.display = 'block';
    ir_primer_form.style.background = '#1f6594';
    ir_primer_form.style.transform = "scale(1.1)";
}

ir_segundo_form.onclick = (e) => {
    primer_formulario.style.display = 'none';
    ir_primer_form.style.background = '#164d72';
    ir_primer_form.style.transform = "scale(1)";
    segundo_formulario.style.display = 'block';
    ir_segundo_form.style.background = '#1f6594';
    ir_segundo_form.style.transform = "scale(1.1)";
}

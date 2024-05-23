const nombres = ["eva", "luis", "sergio", "sandra", "eduardo", "ernesto", "sofia", "elena", "pablo"];
const notas = [10, 5, 7, 3, 2, 7, 8, 5, 1];
const cursos = [1, 2, 1, 2, 3, 3, 1, 2, 2];

/**
 * Muestra todos los alumnos en la sección alumnos
 * @param {[String]} nombres - array con los nombres a mostrar
 * @param {[Number]} notas - array con las notas a mostrar
 * @param {[Number]} cursos - array con los cursos a mostrar
 */
function mostrarAlumnos(nombres, notas, cursos) {
    const alumnos = document.getElementById('alumnos');
    // Recorremos todos los arrays. Ponemos nombres.length porque todos los arrays
    // tienen la misma longitud (podríamos poner notas.length o cursos.length)
    for (let i = 0; i < nombres.length; i++) {
        const div = document.createElement("div");
        div.classList.add("alumno");
        if(notas[i] >= 5) {
            div.classList.add("aprobado");
        } else {
            div.classList.add("suspenso");
        }
        // div.classList.add(notas[i] >= 5 ? "aprobado" : "suspenso");

        const spanNombre = document.createElement("span");
        spanNombre.textContent = nombres[i];
        div.appendChild(spanNombre);
        const spanNota = document.createElement("span");
        spanNota.textContent = notas[i];
        div.appendChild(spanNota);
        const spanCurso = document.createElement("span");
        spanCurso.textContent = cursos[i];
        div.appendChild(spanCurso);
        alumnos.appendChild(div);
    }
}

function mostrarAprobados() {
    const alumnos = document.getElementsByClassName('alumno');
    const cursoElegido = document.getElementById('curso').value;
    for(let i = 0; i < alumnos.length; i++) {
        if (notas[i] >= 5 && (cursos[i] == cursoElegido || cursoElegido == "")) {
            alumnos[i].style.display = "flex";
        } else {
            alumnos[i].style.display = "none";
        }
    }
}

function mostrarSuspensos() {
    const alumnos = document.getElementsByClassName('alumno');
    const cursoElegido = document.getElementById('curso').value;
    for(let i = 0; i < alumnos.length; i++) {
        if (notas[i] < 5 && (cursos[i] == cursoElegido || cursoElegido == "")) {
            alumnos[i].style.display = "flex";
        } else {
            alumnos[i].style.display = "none";
        }
    }
}

function mostrarPorCurso() {
    const cursoElegido = document.getElementById('curso').value;
    const alumnos = document.getElementsByClassName('alumno');
    for(let i = 0; i < alumnos.length; i++) {
        if (cursos[i] == cursoElegido || cursoElegido == "") {
            alumnos[i].style.display = "flex";
        } else {
            alumnos[i].style.display = "none";
        }
    }
}

function mostrarPorNombre() {
    const cursoElegido = document.getElementById('curso').value;
    const alumnos = document.getElementsByClassName('alumno');
    const nombreElegido = document.getElementById('nombre').value.trim();
    for(let i = 0; i < alumnos.length; i++) {
        if (nombres[i].startsWith(nombreElegido)  && (cursos[i] == cursoElegido || cursoElegido == "")) {
            alumnos[i].style.display = "flex";
        } else {
            alumnos[i].style.display = "none";
        }
    }
}

document.getElementById('aprobados').addEventListener("click", mostrarAprobados);
document.getElementById('suspensos').addEventListener("click", mostrarSuspensos);
document.getElementById('curso').addEventListener("change", mostrarPorCurso);
document.getElementById('nombre').addEventListener("keyup", mostrarPorNombre);

mostrarAlumnos(nombres, notas, cursos);



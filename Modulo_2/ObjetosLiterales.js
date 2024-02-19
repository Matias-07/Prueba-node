let curso = {
    cantidadDeAlunos: 32, 
    Docentes: ["nacho", "matias"],
    horario: "de 19 a 21 hs",
    notificaciones: function (){
        return "El horario de la cursada es: " + this.horario 
    } 
} 

console.log(curso.notificaciones());

function Curso (cantidadDeAlunos, Docentes, horario){
    this.cantidadDeAlunos = cantidadDeAlunos;
    this.Docentes = Docentes;
    this.Horario = horario; 
}

let NuevosCursos = new Curso (50, ["Gabriel", "Silvana"], "de 17 a 19 hs"); 
console.log(NuevosCursos);
let NuevosCursosProgramacion = new Curso (32, ["Diego", "Walter"], "de 20 a 22 hs"); 
console.log(NuevosCursosProgramacion);


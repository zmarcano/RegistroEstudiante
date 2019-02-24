window.onload=function(){
    document.getElementById("btnAdd").addEventListener("click", function(){
      registrarEstudiante();
    },false);

    document.getElementById("btnProm").addEventListener("click", function(){
      mostrarPromedio();
    },false);

    document.getElementById("btnNMax").addEventListener("click", function(){
      mostrarNotaMax();
    },false);

    document.getElementById("btnNMin").addEventListener("click", function(){
      mostrarNotaMin();
    },false);
}

//Funcion que retorna el promedio de notas obtenido del curso
function mostrarPromedio()
{

   var promedio="";
   var suma = 0;
	for (i=0;i<jsonText.length;i++)
	{
	    suma += parseInt(jsonText[i].nota);	
	}
	//Calculo promedio
	var prom = suma/jsonText.length;
	prom = Math.round(prom);

  alert("El promedio es " + prom.toString());
   //document.getElementById("promedio").innerHTML = prom.toString();
}

//Funcion que permite mostrar el alumno con la maxima nota adquirida del curso
function mostrarNotaMax()
{
   var maxNota ="";
   var valor = getMaxOfJson(jsonText,"nota");

   for (i=0;i<jsonText.length;i++){
	 if(valor == jsonText[i].nota)
	   maxNota += "Codigo: "+jsonText[i].codigo+" "+" Nombre: "+jsonText[i].nombre+" "+" Nota: "+jsonText[i].nota.toString(); 	
   }
   alert(maxNota);
   //document.getElementById("maxNota").innerHTML = maxNota;
}

//Funcion que permite mostrar el alumno con la minima nota adquirida del curso
function mostrarNotaMin()
{
   var minNota ="";
   var valor = getMinOfJson(jsonText,"nota");

   for (i=0;i<jsonText.length;i++){
	if(valor == jsonText[i].nota)
	  minNota += "Codigo: "+jsonText[i].codigo+" "+" Nombre: "+jsonText[i].nombre+" "+" Nota: "+jsonText[i].nota.toString(); 	
   }
   alert(minNota);
   //document.getElementById("minNota").innerHTML = minNota;
}

//Funcion que permite seleccionar el valor maximo de alguna propiedad del JSON
function getMaxOfJson(jsonalreadyparsed, property) {
    var max = null;
    for (var i=0 ; i<jsonalreadyparsed.length ; i++) {

            if(max == null){

                max = jsonalreadyparsed[i][property];

            } else {

            if (parseFloat(jsonalreadyparsed[i][property]) > max){

                max = jsonalreadyparsed[i][property];

            }

        }

    }
    return max;
}

//Funcion que permite seleccionar el valor minima de alguna propiedad del JSON
function getMinOfJson(jsonalreadyparsed, property) {
    var min = null;
    for (var i=0 ; i<jsonalreadyparsed.length ; i++) {

            if(min == null){

                min = jsonalreadyparsed[i][property];

            } else {

            if (parseFloat(jsonalreadyparsed[i][property]) < min){

                min = jsonalreadyparsed[i][property];

            }

        }

    }
    return min;
}

function Estudiante(codigo,nombre,nota){
    this.codigo = codigo;
    this.nombre = nombre;
    this.nota = nota;
}

var jsonText = [];

function registrarEstudiante()
{
  var codigo = document.getElementById("codigo").value;
  var nombre = document.getElementById("nombre").value;
  var nota = document.getElementById("nota").value; 
  var estudiante = new Estudiante(codigo,nombre,nota);

  jsonText.push(estudiante);

  var json =JSON.stringify(jsonText);

  var table = document.getElementById("listaEstudiantes");

  var row = table.insertRow(1);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);

  cell1.innerHTML= codigo;
  cell2.innerHTML= nombre;
  cell3.innerHTML= nota;

  document.getElementById("codigo").value = "";
  document.getElementById("nombre").value ="";
  document.getElementById("nota").value = "";
}
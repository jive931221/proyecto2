let ingresos = [
  new Ingreso('trabajo extra', 1),
  new Ingreso('venta de mi riñon', 10)
];
const egresos = [
  new Egreso('Renta', 1),
  new Egreso('Ropa', 10)
];

function cargarapp() {
  cargarCabecero();
  cargarIngresos();
  cargarEgreso();
}
//cabecero carga los valores 
const cargarCabecero = () => {
  let presupuesto = totalIngreso() - totalEgresos();
  let porcetajeEgreso = totalEgresos() / totalIngreso();
  document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
  document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcetajeEgreso);
  document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngreso());
  document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());

  //al final se tiene que ir estas consolas
  console.log(formatoMoneda(presupuesto))
  console.log(formatoPorcentaje(porcetajeEgreso));
  console.log(formatoMoneda(totalIngreso()));
  console.log(formatoMoneda(totalEgresos()));
}

const totalIngreso = () => {
  let totalIngreso = 0
  for (let ingreso of ingresos) {
    totalIngreso += ingreso.valor
  }
  return totalIngreso
}

const totalEgresos = () => {
  let totalEgresos = 0
  for (let egreso of egresos) {
    totalEgresos += egreso.valor
  }
  return totalEgresos
}

const formatoMoneda = (value) => {
  return value.toLocaleString('es-mx', {
    style: "currency",
    currency: "MXN"
  });
}
const formatoPorcentaje = (value) => {
  return value.toLocaleString('es-mx', {
    style: "percent", minimumFractionDigits: 2
  });
}

//Ingreso
const cargarIngresos = () => {
  let ingresosHTML = '';
  for (let ingreso of ingresos) {
    ingresosHTML += crearIngresoHTML(ingreso);
  }
  document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}

const crearIngresoHTML = (ingreso) => {
  let ingresosHTML = ` 
  <div class="elemento limpiarEstilos">
  <div class="elemento_descripcion">${ingreso.descripcion}</div>
  <div class="derecha limparEstilos">
      <div class="elemento_valor">+${formatoMoneda(ingreso.valor)}</div>
      <div class="elemento_eliminar">
          <button class="elemento_eliminar--btn">
            <ion-icon name="close-circle-outline"
            onclick='eliminarIngreso(${ingreso.id})' ></ion-icon>
          </button>
      </div>
  </div>
</div>
`
  return ingresosHTML
}

//Eliminar datos de ingreso
const eliminarIngreso = (id) => {
  var indiceEliminar = ingresos.findIndex(indice => indice.valor === id)
  console.log(ingresos[indiceEliminar])
  ingresos.splice(indiceEliminar, 1)
  cargarCabecero()
  cargarIngresos()
}

//Egresos
const cargarEgreso = () => {
  let egresosHTML = '';
  for (let egreso of egresos) {
    egresosHTML += crearEgresosHTML(egreso)
  }
  document.getElementById('lista-egresos').innerHTML = egresosHTML;
}

const crearEgresosHTML = (egreso) => {

  let egresosHTML = `
<div class="elemento limpiarEstilos">
<div class="elemento_descripcion">${egreso.descripcion}</div>
<div class="derecha limpiarEstilos">
    <div class="elemento_valor">-${formatoMoneda(egreso.valor)}</div>
    <div class="elemento_porcentaje">21%</div>
    <div class="elemento_eliminar">
        <button class="elemento_eliminar--btn">
            <ion-icon name="close-circle-outline" 
            onclick='elimiarEgreso(${egreso.id})'></ion-icon>
        </button>
    </div>
  </div>
</div>
`
  return egresosHTML
}
//Eliminar datos de egreso
const elimiarEgreso=(id)=>{
  var indiceEliminar = egresos.findIndex(indice => indice.valor === id)
  console.log(egresos[indiceEliminar])
  egresos.splice(indiceEliminar, 1)
  cargarEgreso();
  cargarCabecero();
 
}


//Agregar datos
const agregarDatos=()=>{
var forma= document.getElementById("forma");
var tipo=document.querySelector ("#tipo").value;
var descripcion= document.getElementById("descripcion").value;
var valor=Number(document.getElementById("valor").value);

if(tipo==="ingresos"){
agregar= new Ingreso(descripcion,valor)
baseDato()
cargarCabecero()
cargarIngresos()
console.log(tipo)
}
else{
agregaregresos=new Egreso(descripcion,valor)
baseDatoegresos()
cargarCabecero()
cargarEgreso()
}

}
function baseDato(){
  ingresos.push(agregar)
  
}
function baseDatoegresos(){
  egresos.push(agregaregresos)
  
}





























/*
let totalIngreso = () => {
  totalIngreso = 0
  for (igre in ingresos) {
    totalIngreso += ingresos[igre];
  }
  return totalIngreso.toLocaleString('es-mx', {
    style: "currency",
    currency: "MXN"
  })
}
let totalEgresos = () => {
  totalEgresos = 0
  for (egre in egresos) {
    totalEgresos += egresos[egre];
  }
  return totalEgresos.toLocaleString('es-mx', {
    style: "currency",
    currency: "MXN"
  })
}

let cargarCabecero = () => {
  console.log(totalIngreso());
  console.log(totalEgresos());
  let presupuesto = Number(totalIngreso - totalEgresos).toLocaleString('es-mx', {
    style: "currency",
    currency: "MXN"
  })
  let porcetajeEgreso = Number(totalEgresos / totalIngreso).toLocaleString('es-mx', {
    style: "percent", minimumFractionDigits: 2
  });
  console.log(presupuesto)
  console.log(porcetajeEgreso)
}
*/





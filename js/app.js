const ingresos = [
  new Ingreso('salario', 10000),
  new Ingreso('venta de auto', 50000)
];
const egresos = [
  new Egreso('renta', 4000),
  new Egreso('Ropa', 800)
];

function cargarapp() {
  cargarCabecero();
  cargarIngresos();
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
  document.getElementById('lista-ingreso').innerHTML =ingresosHTML;
}

const crearIngresoHTML = (ingreso) => {
  let ingresosHTML = ` 
  <div class="elemento limpiarEstilos">
      <div class="elemento_descripcion">${ingreso.descripcion}</div>
      <div class="derecha limparEstilos">
          <div class="elemento_valor">+2,000.00</div>
          <div class="elemento_eliminar">
              <button class="elemento_eliminar--btn">
                  <ion-icon name="close-circle-outline"></ion-icon>
              </button>
          </div>
      </div>
  </div>
  <div class="elemento limpiarEstilos">
      <div class="elemento_descripcion">Venta de coche</div>
      <div class="derecha limparEstilos">
          <div class="elemento_valor">+1,000.00</div>
          <div class="elemento_eliminar">
              <button class="elemento_eliminar--btn">
                  <ion-icon name="close-circle-outline"></ion-icon>
              </button>
          </div>
      </div>

  </div>
`
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





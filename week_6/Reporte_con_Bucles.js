// ============================================
// PROYECTO SEMANA 06: Reporte con Bucles
// Dominio: Kraken / Criptoactivos 
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

const portafolioCripto = [
  { nombre: "Bitcoin", categoria: "Moneda", valor: 64200.50 },
  { nombre: "Ethereum", categoria: "Contrato Inteligente", valor: 3450.20 },
  { nombre: "Solana", categoria: "Contrato Inteligente", valor: 145.80 },
  { nombre: "USDT", categoria: "Moneda Estable", valor: 1.00 },
  { nombre: "Cardano", categoria: "Contrato Inteligente", valor: 0.45 },
  { nombre: "Ripple", categoria: "Moneda", valor: 0.62 },
  { nombre: "USDC", categoria: "Moneda Estable", valor: 1.01 }
];

const categorias = ["Moneda", "Contrato Inteligente", "Moneda Estable"];

const etiquetaValor = "Precio (USD)"; 

// ============================================
// SECCIÓN 2: Listado completo con for...of
// ============================================
console.log("=== LISTADO DE ACTIVOS EN KRAKEN ===");

let numeroLinea = 0;

for (const cripto of portafolioCripto) {
  numeroLinea++;
  console.log(`${numeroLinea}. ${cripto.nombre} — [${cripto.categoria}] — ${etiquetaValor}: $${cripto.valor.toLocaleString()}`);
}

console.log("");

// ============================================
// SECCIÓN 3: Contadores por categoría
// ============================================
console.log("=== CONTEO POR CATEGORÍA ===");

for (const categoria of categorias) {
  let contador = 0;

  for (const cripto of portafolioCripto) {
    if (cripto.categoria === categoria) {
        contador++;
    }
  }

  console.log(`${categoria}: ${contador} activo(s)`);
}

console.log("");

// ============================================
// SECCIÓN 4: Totales y promedio (acumulador)
// ============================================
console.log("=== ESTADÍSTICAS DEL PORTAFOLIO ===");

let valorTotal = 0;

for (const cripto of portafolioCripto) {
  valorTotal += cripto.valor;
}

const promedioValor = portafolioCripto.length > 0 ? valorTotal / portafolioCripto.length : 0;

console.log(`Valor Total Acumulado: $${valorTotal.toLocaleString()}`);
console.log(`Precio Promedio: $${promedioValor.toFixed(2)}`);

console.log("");

// ============================================
// SECCIÓN 5: Máximo y mínimo
// ============================================
console.log("=== ACTIVOS EXTREMOS ===");

let criptoMax = portafolioCripto[0] ?? null;
let criptoMin = portafolioCripto[0] ?? null;

if (portafolioCripto.length > 0) {
  for (const cripto of portafolioCripto) {
    // Lógica para encontrar el precio más alto
    if (cripto.valor > criptoMax.valor) {
        criptoMax = cripto;
    }
    // Lógica para encontrar el precio más bajo
    if (cripto.valor < criptoMin.valor) {
        criptoMin = cripto;
    }
  }

  console.log(`🚀 Mayor ${etiquetaValor}: ${criptoMax?.nombre} ($${criptoMax?.valor.toLocaleString()})`);
  console.log(`📉 Menor ${etiquetaValor}: ${criptoMin?.nombre} ($${criptoMin?.valor.toLocaleString()})`);
}

console.log("");

// ============================================
// SECCIÓN 6: Reporte numerado con for clásico
// ============================================
console.log("=== REPORTE DE RENDIMIENTO VS PROMEDIO ===");

for (let i = 0; i < portafolioCripto.length; i++) {
  const cripto = portafolioCripto[i];

  // Comparación usando operador ternario
  const comparacion = cripto.valor >= promedioValor 
    ? "POR ENCIMA del promedio" 
    : "POR DEBAJO del promedio";

  console.log(`${i + 1}. ${cripto.nombre.padEnd(12)} — ${comparacion}`);
}

console.log("");
console.log("=== FIN DEL REPORTE KRAKEN ===");

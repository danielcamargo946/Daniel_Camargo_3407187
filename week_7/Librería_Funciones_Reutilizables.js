"use strict"; // Activa el modo estricto para un desarrollo más profesional

// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================

const NOMBRE_DOMINIO = "KRAKEN TRADING HUB";
const ETIQUETA_VALOR = "Precio Mercado";
const TASA_COMISION = 0.0026; // Comisión estándar de Kraken (0.26%)
const MONEDA_BASE = "USD";

const criptoActivos = [
  { id: 1, nombre: "Bitcoin",   sigla: "BTC", categoria: "Currency", valor: 64200.50, activo: true },
  { id: 2, nombre: "Ethereum",  sigla: "ETH", categoria: "Smart Contract", valor: 3450.20, activo: true },
  { id: 3, nombre: "Solana",    sigla: "SOL", categoria: "Smart Contract", valor: 145.80, activo: true },
  { id: 4, nombre: "USDT",      sigla: "USDT", categoria: "Stablecoin", valor: 1.00, activo: true },
  { id: 5, nombre: "Cardano",   sigla: "ADA", categoria: "Smart Contract", valor: 0.45, activo: false }, // Inactivo para trading
  { id: 6, nombre: "Ripple",    sigla: "XRP", categoria: "Currency", valor: 0.62, activo: true }
];

// ============================================
// SECCIÓN 2: Función de formato (Arrow Function)
// ============================================

// Devuelve una línea visual atractiva del activo
const formatearActivo = (cripto) => 
  `🪙 [${cripto.sigla}] ${cripto.nombre.padEnd(10)} | Cat: ${cripto.categoria.padEnd(15)} | Valor: $${cripto.valor.toLocaleString()}`;

// ============================================
// SECCIÓN 3: Función de cálculo (Pura)
// ============================================

// Calcula el costo total incluyendo la comisión de Kraken
const calcularCostoTotal = (precio, cantidad, comision = TASA_COMISION) => {
  const subtotal = precio * cantidad;
  const costoComision = subtotal * comision;
  return +(subtotal + costoComision).toFixed(2);
};

// ============================================
// SECCIÓN 4: Función de validación
// ============================================

// Verifica si el activo está habilitado para operar en la plataforma
const esOperable = (cripto) => cripto.activo === true && cripto.valor > 0;

// ============================================
// SECCIÓN 5: Función con parámetro por defecto
// ============================================

// Formatea el precio con la moneda y un indicador de tendencia opcional
const formatearPrecio = (valor, moneda = MONEDA_BASE, tendencia = "稳定") => {
  const simbolo = tendencia === "subida" ? "📈" : tendencia === "bajada" ? "📉" : "📊";
  return `${simbolo} ${valor.toLocaleString()} ${moneda}`;
};

// ============================================
// SECCIÓN 6: Reporte usando las funciones
// ============================================

console.log(`\n${"═".repeat(55)}`);
console.log(`       SISTEMA DE GESTIÓN — ${NOMBRE_DOMINIO}`);
console.log(`${"═".repeat(55)}`);

if (criptoActivos.length === 0) {
  console.log("\n⚠️  No hay activos registrados en el portafolio.");
} else {
  // --- Listado de Mercado ---
  console.log("\n📋 MONITOR DE MERCADO:");
  let indice = 1;
  for (const cripto of criptoActivos) {
    console.log(`  ${indice}. ${formatearActivo(cripto)}`);
    indice++;
  }

  // --- Validación de Operatividad ---
  let activosListos = 0;
  for (const cripto of criptoActivos) {
    if (esOperable(cripto)) {
      activosListos++;
    }
  }
  console.log(`\n✅ Activos disponibles para trading: ${activosListos} / ${criptoActivos.length}`);

  // --- Resumen Financiero ---
  console.log(`\n💰 RESUMEN DE CARTERA:`);
  
  let valorCapitalizado = 0;
  for (const cripto of criptoActivos) {
    // Simulamos que tenemos 1 unidad de cada activo
    valorCapitalizado += calcularCostoTotal(cripto.valor, 1);
  }

  // Uso de la función con parámetros por defecto
  console.log(`  Total Capitalizado (con comisiones): ${formatearPrecio(valorCapitalizado)}`);
  
  // Ejemplo de cálculo individual para una compra de 0.5 BTC
  const compraEjemplo = calcularCostoTotal(criptoActivos[0].valor, 0.5);
  console.log(`  Simulación compra 0.5 BTC: ${formatearPrecio(compraEjemplo, "USD", "subida")}`);
}

console.log(`\n${"═".repeat(55)}\n`);
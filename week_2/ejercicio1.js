// ============================================
// EJERCICIO 01: const y let — KRAKEN EDITION
// Semana 02 — Variables y tipos de datos
// ============================================

// ============================================
// PASO 1: Declarar con const (Datos estáticos)
// ============================================
console.log("--- Paso 1: Configuración de Cuenta ---");

const exchangeName = "Kraken";
const assetPair = "BTC/USD"; 
// Estos valores no cambian durante la ejecución del script
console.log("Exchange:", exchangeName);
console.log("Par de trading:", assetPair);

console.log("");

// ============================================
// PASO 2: Declarar con let (Datos dinámicos)
// ============================================
console.log("--- Paso 2: Saldo de la Cartera ---");

let btcBalance = 0.05; // Saldo inicial en Bitcoin
console.log("Saldo inicial BTC:", btcBalance);

// El usuario realiza una compra de 0.015 BTC
btcBalance = btcBalance + 0.015;
console.log("Compra realizada (+0.015). Nuevo saldo:", btcBalance);

// El precio de mercado fluctúa y el usuario vende 0.010 BTC
btcBalance = btcBalance - 0.010;
console.log("Venta realizada (-0.010). Saldo final:", btcBalance);

console.log("");

// ============================================
// PASO 3: const protege contra errores críticos
// ============================================
console.log("--- Paso 3: Seguridad de la API ---");

const API_KEY = "k-12345-abcde";

console.log("Tu API Key está protegida y no puede ser reasignada.");
console.log("");

// ============================================
// PASO 4: var vs let en transacciones
// ============================================
console.log("--- Paso 4: Evitando duplicados ---");

var orderID = "TX-900";
var orderID = "TX-999"; 

let krakenFee = 0.0026; 

console.log("Usando let evitamos registrar dos veces la misma comisión.");
console.log("");

// ============================================
// PASO 5: Alcance de bloque (Scope)
// ============================================
console.log("--- Paso 5: Ciclo de una Orden ---");

if (btcBalance > 0.01) {
  let tradeStatus = "Orden Ejecutada"; 
  console.log("Estado interno:", tradeStatus);
}
console.log("Fuera del trade: el estado ya no está en memoria.");
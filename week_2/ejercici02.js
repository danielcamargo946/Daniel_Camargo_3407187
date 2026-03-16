// ============================================
// EJERCICIO 02: Tipos Primitivos en Kraken — SOLUCIÓN
// Semana 02 — Variables y tipos de datos
// ============================================

// ============================================
// PASO 1: string y number (Datos del Mercado)
// ============================================
console.log("--- Paso 1: Market Data (string & number) ---");

const cryptoTicker = "ETH";           // string
const ethPrice = 2450.75;             // number (float)
const volume24h = 150_000_000;        // number (integer con separadores visuales)

console.log("Activo:", cryptoTicker, "| tipo:", typeof cryptoTicker);
console.log("Precio USD:", ethPrice, "| tipo:", typeof ethPrice);
console.log("Volumen 24h:", volume24h, "| tipo:", typeof volume24h);

console.log("");

// ============================================
// PASO 2: boolean (Estados de Validación)
// ============================================
console.log("--- Paso 2: Validaciones (boolean) ---");

const isKycVerified = true;      // El usuario completó su verificación
const hasInsufficentFunds = false; // ¿Tiene fondos suficientes para la orden?

console.log("¿Usuario verificado?", isKycVerified, "| tipo:", typeof isKycVerified);
console.log("¿Fondos insuficientes?", hasInsufficentFunds, "| tipo:", typeof hasInsufficentFunds);

console.log("");

// ============================================
// PASO 3: undefined (Campos Opcionales)
// ============================================
console.log("--- Paso 3: Datos no recibidos (undefined) ---");

let stopLossPrice; 
console.log("Precio Stop Loss:", stopLossPrice);
console.log("Tipo:", typeof stopLossPrice);

console.log("");

// ============================================
// PASO 4: null (Ausencia Intencional)
// ============================================
console.log("--- Paso 4: Sin Orden Activa (null) ---");

const activeOrder = null; 
console.log("Orden activa actual:", activeOrder);
console.log("typeof null:", typeof activeOrder); // "object" (Bug histórico de JS)
console.log("¿Realmente está vacío?", activeOrder === null); // true (La forma correcta de validar)

console.log("");

// ============================================
// PASO 5: Resumen de Tipos en el Exchange
// ============================================
console.log("--- Paso 5: Auditoría de tipos en Kraken ---");

console.log(typeof "Solana");           // "string" (Nombre del activo)
console.log(typeof 0.0001);             // "number" (Mínimo de orden)
console.log(typeof 500);                // "number" (Apalancamiento/Leverage)
console.log(typeof false);              // "boolean" (¿Es cuenta corporativa?)
console.log(typeof undefined);          // "undefined" (Campo de comentario vacío)
console.log(typeof null);               // "object" (Referencia a objeto inexistente)
console.log(typeof {id: "TX123"});      // "object" (Objeto de Transacción)
console.log(typeof ["BTC", "ETH"]);     // "object" (Lista de favoritos/Array)
console.log(typeof function buy() {});  // "function" (Lógica de ejecución)

console.log("");
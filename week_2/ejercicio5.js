// ============================================
// EJERCICIO 05: Numeric Separators en Kraken
// Semana 02 — Variables y tipos de datos
// ============================================

// ============================================
// PASO 1: Sin separadores (Difícil de leer)
// ============================================
console.log("--- Paso 1: Sin separadores ---");

const btcMarketCapRaw = 1284560000000; // ¿Son 1.2 billones o 128 mil millones?
const krakenDailyVolumeRaw = 850300450;
const satoshisPerBtcRaw = 100000000;

console.log("Market Cap BTC (crudo):", btcMarketCapRaw);
console.log("Volumen Kraken (crudo):", krakenDailyVolumeRaw);

console.log("");

// ============================================
// PASO 2: Con separadores ES2021 (Claridad total)
// ============================================
console.log("--- Paso 2: Con separadores ---");

// Ahora es evidente: 1.28 Trillones (escala corta)
const btcMarketCap = 1_284_560_000_000; 
const krakenDailyVolume = 850_300_450;
const satoshisPerBtc = 100_000_000;

console.log("Market Cap BTC:", btcMarketCap);
console.log("Volumen 24h Kraken:", krakenDailyVolume);
console.log("Satoshis por BTC:", satoshisPerBtc);

console.log("");

// ============================================
// PASO 3: El valor es idéntico para el motor de JS
// ============================================
console.log("--- Paso 3: Validación de valor ---");

console.log("¿1_000_000 es igual a 1000000?", 1_000_000 === 1000000); // true
console.log("Tipo de dato:", typeof 1_500_000.50);                 // "number"

console.log("");

// ============================================
// PASO 4: En decimales y micro-precios
// ============================================
console.log("--- Paso 4: Decimales y Altcoins ---");

// Precio de una moneda muy barata (ej. SHIB o PEPE)
const microAssetPrice = 0.000_000_015_42; 
const largeTransaction = 1_250_400.99_95; // Separando decimales para precisión

console.log("Precio Micro-Activo:", microAssetPrice);
console.log("Transacción grande:", largeTransaction);

console.log("");

// ============================================
// PASO 5: Cifras de infraestructura Kraken
// ============================================
console.log("--- Paso 5: Reescritos con separadores ---");

const totalUserBase = 10_000_000;
const coldWalletStorageSats = 500_000_000_000;
const apiRequestsPerSecond = 50_000;
const maxSupplyBitcoin = 21_000_000;

console.log("Usuarios totales:", totalUserBase);
console.log("Sats en Cold Wallet:", coldWalletStorageSats);
console.log("Supply máximo BTC:", maxSupplyBitcoin);

console.log("");
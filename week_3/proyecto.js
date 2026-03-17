// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// DOMINIO: Kraken Crypto Analytics & AutoSave
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

const BTC_PRICE_USD = 65000;          // Precio de referencia
const KRAKEN_FEE_PERCENT = 0.0026;   // Comisión del 0.26%
const MAX_MONTHLY_SAVING = 1000;     // Límite de ahorro en AutoSave
const MIN_PURCHASE_USD = 10;         // Compra mínima permitida

// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Análisis de Inversión ===");

const userInvestment = 500;
const feeAmount = userInvestment * KRAKEN_FEE_PERCENT;
const netInvestment = userInvestment - feeAmount;

// Cálculo de satoshis adquiridos (Aproximación)
const btcAcquired = netInvestment / BTC_PRICE_USD;

console.log(`Inversión bruta: $${userInvestment} USD`);
console.log(`Comisión Kraken: $${feeAmount.toFixed(2)} USD`);
console.log(`Inversión neta:  $${netInvestment} USD`);
console.log(`BTC Adquirido:   ${btcAcquired.toFixed(8)} BTC`);

console.log("");

// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Acumulado de Cartera (AutoSave) ===");

let portfolioBalance = 0;
console.log("Balance inicial: $", portfolioBalance);

portfolioBalance += netInvestment; // Primer depósito
console.log("Tras primera compra: $", portfolioBalance);

portfolioBalance += 200; // Segundo depósito manual
console.log("Tras abono extra:    $", portfolioBalance);

portfolioBalance *= 1.05; // Simulación de subida del 5% del mercado
console.log("Balance tras profit (5%): $", portfolioBalance.toFixed(2));

console.log("");

// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones de Seguridad ===");

const currentOrderSize = 5;
// Validación de monto mínimo
const isValidOrder = currentOrderSize >= MIN_PURCHASE_USD;
console.log("¿Supera el mínimo de compra?:", isValidOrder);

// Validación de tipo de activo (BTC)
const assetSymbol = "BTC";
const isTargetAsset = assetSymbol === "BTC";
console.log("¿Es el activo correcto?:", isTargetAsset);

console.log("");

// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones de Ejecución ===");

const hasFunds = portfolioBalance > 0;
const marketIsStable = true;
const userVerified = true;

// Solo opera si hay fondos Y el usuario está verificado
const canTrade = hasFunds && userVerified;
console.log("¿Puede operar en Kraken?:", canTrade);

// Alerta si el precio es muy alto O el mercado está inestable
const priceTooHigh = BTC_PRICE_USD > 80000;
const sendAlert = priceTooHigh || !marketIsStable;
console.log("¿Activar alerta de riesgo?:", sendAlert);

console.log("");

// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen de Cuenta ===");

console.log(`Usuario:           Daniel Alejandro`);
console.log(`Estado de Cuenta:  ${canTrade ? "ACTIVA" : "RESTRINGIDA"}`);
console.log(`Balance Final:     $${portfolioBalance.toFixed(2)} USD`);
console.log(`Alertas activas:   ${sendAlert ? "SÍ" : "NINGUNA"}`);

console.log("");
// ============================================
// EJERCICIO 04: Nomenclatura en Kraken — SOLUCIÓN
// Semana 02 — Variables y tipos de datos
// ============================================

// ============================================
// PASO 1: camelCase para variables y funciones
// ============================================
console.log("--- Paso 1: camelCase (Variables de sesión) ---");

const walletAddress = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
const btcCurrentPrice = 64250.25;
const openOrdersCount = 5;
const preferredCurrency = "USD";

console.log("Wallet:", walletAddress);
console.log("Precio BTC:", btcCurrentPrice);
console.log("Órdenes abiertas:", openOrdersCount);

console.log("");

// ============================================
// PASO 2: UPPER_SNAKE_CASE para constantes globales
// ============================================
console.log("--- Paso 2: UPPER_SNAKE_CASE (Configuración de Red) ---");

const MAX_LEVERAGE_ALLOWED = 5;      // Apalancamiento máximo
const KRAKEN_TRADING_FEE = 0.0026;   // Comisión estándar 0.26%
const MIN_DEPOSIT_ETH = 0.01;        // Depósito mínimo en Ethereum

console.log("Apalancamiento Max:", MAX_LEVERAGE_ALLOWED);
console.log("Fee de Kraken:", KRAKEN_TRADING_FEE);

console.log("");

// ============================================
// PASO 3: Prefijos semánticos para booleanos (is / has / can)
// ============================================
console.log("--- Paso 3: Prefijos semánticos (Validaciones) ---");

const isAccountVerified = true;
const hasEnoughBalance = false;
const canWithdrawFunds = true;
const isTwoFactorEnabled = true;

console.log("¿Cuenta verificada?", isAccountVerified);
console.log("¿Saldo suficiente?", hasEnoughBalance);
console.log("¿Puede retirar?", canWithdrawFunds);

console.log("");

// ============================================
// PASO 4: Nombres descriptivos vs Abreviaturas
// ============================================
console.log("--- Paso 4: Nombres descriptivos ---");

const SECONDS_UNTIL_ORDER_EXPIRES = 3600;
const lastLoginTimestamp = "2026-03-16T13:24:00Z";
const favoriteAssetsList = ["BTC", "DOT", "ADA"];

console.log("Expiración (seg):", SECONDS_UNTIL_ORDER_EXPIRES);
console.log("Último acceso:", lastLoginTimestamp);

console.log("");

// ============================================
// PASO 5: Nombres corregidos (Refactorización)
// ============================================
console.log("--- Paso 5: Nombres corregidos (Clean Code) ---");

const tradeVolume = 1500.50;      // ← antes: v_trade
const isMarketOpen = true;        // ← antes: open_market_FLAG
const currentTierLevel = 2;       // ← antes: TIER_LVL (si cambia en el tiempo)
const WITHDRAWAL_LIMIT_USD = 5000; // ← antes: limit_with_usd (es global)

console.log("Volumen del trade:", tradeVolume);
console.log("¿Mercado abierto?", isMarketOpen);
console.log("Límite de retiro:", WITHDRAWAL_LIMIT_USD);

console.log("");
// ============================================
// PROYECTO SEMANA 02: Ficha de Datos del Dominio
// ============================================
// DOMINIO: Kraken Crypto Analytics & AutoSave
// ============================================

// ============================================
// SECCIÓN 1: DATOS PRINCIPALES
// ============================================

// Nombre del dominio técnico
const DOMAIN_NAME = "Kraken Fintech Hub";

// Activo principal del ecosistema
const itemName = "Bitcoin (BTC)";

// Categoría del activo dentro del mercado
const itemCategory = "Criptomoneda de Reserva de Valor";

// Precio actual o volumen (Número decimal)
const itemPriceUSD = 64500.50; 

// Estado del mercado (Boolean con prefijo semántico)
const isMarketBullish = true; 

// Valor no asignado (Representa una orden de compra pendiente)
const pendingOrderLimit = null; 


// ============================================
// SECCIÓN 2: MOSTRAR FICHA DE DATOS
// ============================================
console.log("===========================");
console.log(`FICHA DE DATOS: ${DOMAIN_NAME}`);
console.log("===========================");
console.log("");

console.log(`Activo:      ${itemName}`);
console.log(`Categoría:   ${itemCategory}`);
console.log(`Precio USD:  $${itemPriceUSD}`);
console.log(`¿Tendencia Alcista?: ${isMarketBullish ? "Sí" : "No"}`);
console.log("");


// ============================================
// SECCIÓN 3: VERIFICACIÓN DE TIPOS CON typeof
// ============================================
console.log("--- Tipos de datos ---");

console.log("typeof itemName:        ", typeof itemName);
console.log("typeof itemPriceUSD:    ", typeof itemPriceUSD);
console.log("typeof isMarketBullish: ", typeof isMarketBullish);
console.log("");


// ============================================
// SECCIÓN 4: CONVERSIONES EXPLÍCITAS
// ============================================
console.log("--- Conversiones ---");

// Convertimos el precio (number) a String para visualización de ticket
const priceLabel = String(itemPriceUSD);
console.log("Precio convertido a texto para reporte:", priceLabel);
console.log("Nuevo tipo de dato (convertido):", typeof priceLabel);

// Convertir un string de cantidad a número para operar
const rawQuantity = "0.0052";
const numericQuantity = Number(rawQuantity);
console.log(`Inversión mínima calculada: ${numericQuantity * itemPriceUSD} USD`);

console.log("");


// ============================================
// SECCIÓN 5: VALOR NULL
// ============================================
console.log("--- Valor nulo ---");

console.log("Orden de compra pendiente:", pendingOrderLimit);
console.log("Validación de tipo (JS Legacy):", typeof pendingOrderLimit); 
console.log("¿El valor es estrictamente nulo?:", pendingOrderLimit === null);
console.log("");


// ============================================
// CIERRE
// ============================================
console.log("===========================");
console.log("FIN DE FICHA KRAKEN");
console.log("===========================");
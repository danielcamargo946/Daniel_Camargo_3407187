// ============================================
// EJERCICIO 03: Conversión de Tipos en Kraken
// Semana 02 — Variables y tipos de datos
// ============================================

// ============================================
// PASO 1: Number() — Procesando Inputs de la API
// ============================================
console.log("--- Paso 1: De String a Precio (Number) ---");

// Los precios suelen llegar como strings desde la API de Kraken
const inputPrice = "65000.50";
const amountToBuy = "0.005";

console.log(Number(inputPrice));      // 65000.5 (Precio listo para operar)
console.log(Number(amountToBuy));     // 0.005 (Cantidad lista)
console.log(Number(""));              // 0 (Un input vacío se interpreta como 0)
console.log(Number("100 USDT"));      // NaN (No puede convertir unidades de texto)
console.log(Number(true));            // 1 (A veces usado en flags de ejecución)

console.log("");

// ============================================
// PASO 2: NaN — El terror del Trader
// ============================================
console.log("--- Paso 2: Manejo de Errores (NaN) ---");

const invalidPrice = Number("precio_invalido");
console.log("Resultado de conversión fallida:", invalidPrice); // NaN
console.log("Tipo de dato de NaN:", typeof invalidPrice);      // "number"

if (isNaN(invalidPrice)) {
    console.log("⚠️ Error: El precio recibido de Kraken no es un número válido.");
}

console.log("");

// ============================================
// PASO 3: String() — Formateando para la UI
// ============================================
console.log("--- Paso 3: De Número a Ticket Visual (String) ---");

const balance = 1.2543;
const isConfirmed = true;

console.log("Balance para mostrar en pantalla: " + String(balance)); // "1.2543"
console.log("Estado de red: " + String(isConfirmed));               // "true"
console.log("Error de sistema: " + String(NaN));                    // "NaN"

console.log("");

// ============================================
// PASO 4: Boolean() — Lógica de Ejecución (Falsy vs Truthy)
// ============================================
console.log("--- Paso 4: Validaciones de Orden (Boolean) ---");

console.log("--- Casos donde la orden NO se ejecuta (Falsy) ---");
console.log("Saldo es 0:", Boolean(0));                // false
console.log("ID de orden vacía:", Boolean(""));        // false
console.log("Referencia nula:", Boolean(null));        // false
console.log("Precio no definido:", Boolean(undefined)); // false

console.log("--- Casos donde la orden SI se ejecuta (Truthy) ---");
console.log("Tiene cualquier saldo:", Boolean(0.0001)); // true
console.log("Tiene nombre de activo:", Boolean("BTC")); // true
console.log("Lista de favoritos (Array):", Boolean([])); // true (¡Ojo! Arrays vacíos son truthy)

console.log("");

// ============================================
// PASO 5: Coerción en Kraken (Peligro vs Seguridad)
// ============================================
console.log("--- Paso 5: Evitando desastres financieros ---");

const btcPrice = "60000";
const fee = 50;

console.log("Peligro (Coerción implícita):");
console.log(btcPrice + fee); // "6000050" (¡Concatenó en lugar de sumar!)

console.log("Seguro (Conversión explícita):");
const totalPrice = Number(btcPrice) + fee;
console.log(totalPrice);     // 60050 (Suma correcta)

console.log("La multiplicación sí fuerza conversión:");
console.log("10" * "5"); 

console.log("");
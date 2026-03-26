// ============================================
// PROYECTO SEMANA 05: Clasificador Kraken Cripto
// ============================================

// ============================================
// SECCIÓN 1: Datos del activo / usuario
// ============================================

const elementName = "Bitcoin";           // Nombre del activo
const elementStatus = "activo";          // Estado del mercado o cuenta
const elementValue = 65000;              // Precio actual o balance para clasificar
const elementType = "Criptomoneda";      // Categoría
const elementInfo = {                    // Información adicional opcional
    network: "Mainnet",
    volatility: "High",
    details: "Activo digital descentralizado"
};

// ============================================
// SECCIÓN 2: Clasificación con if / else if / else
// ============================================

let classification;
// Clasificación según el valor de mercado (Market Cap / Price level)
if (elementValue >= 50000) {
    classification = "Activo Premium (High Value)";
} else if (elementValue >= 10000) {
    classification = "Activo de Rango Medio";
} else {
    classification = "Activo de Bajo Costo / Microcap";
}

// ============================================
// SECCIÓN 3: Estado binario con operador ternario
// ============================================

// Determina si el activo está disponible para trading en Kraken
const statusLabel = elementStatus === "active" ? "Trading Habilitado ✅" : "Mantenimiento / Suspendido ❌";

// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================

let typeLabel;
switch (elementType) {
    case "Criptomoneda":
        typeLabel = "Moneda Digital (PoW/PoS)";
        break;
    case "Stablecoin":
        typeLabel = "Vinculado a Fiat (USD/EUR)";
        break;
    case "NFT":
        typeLabel = "Coleccionable Digital Único";
        break;
    default:
        typeLabel = "Activo Financiero No Identificado";
}

// ============================================
// SECCIÓN 5: Valor por defecto con ?? (Nullish Coalescing)
// ============================================

// Si el nombre fuera null o undefined, usa el fallback
const displayName = elementName ?? "Activo Anónimo";

// Acceso a detalles con fallback si el objeto o la propiedad no existen
const infoDetail = elementInfo?.details ?? "Sin descripción técnica disponible";

// ============================================
// SECCIÓN 6: Acceso seguro con ?. (Optional Chaining)
// ============================================

// Intentamos acceder a la volatilidad de forma segura
const safeProperty = elementInfo?.volatility ?? "Riesgo no calculado";

// ============================================
// SECCIÓN 7: Ficha de salida (Template Literals)
// ============================================

console.log("=".repeat(45));
console.log("📊 KRAKEN CRYPTO TERMINAL - CLASIFICACIÓN");
console.log("=".repeat(45));
console.log(`Activo:         ${displayName}`);
console.log(`Estado:         ${statusLabel}`);
console.log(`Valor Ref:      $${elementValue.toLocaleString()}`);
console.log(`Clasificación:  ${classification}`);
console.log(`Categoría:      ${typeLabel}`);
console.log(`Detalles:       ${infoDetail}`);
console.log(`Nivel Riesgo:   ${safeProperty}`);
console.log("=".repeat(45));
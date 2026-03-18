// ============================================
// PROYECTO SEMANA 04: Generador de Mensajes
// ============================================
//
// 🎯 OBJETIVO: Construir un generador de mensajes
//    en consola usando métodos de string y
//    template literals.
//
// 📋 TU DOMINIO: Kraken Criptos (Exchange & Activos)
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// TODO: Define el nombre de tu dominio
const DOMAIN_NAME = "Kraken Digital Assets";

// TODO: Define el nombre de la entidad principal
const rawEntityName = "   bitcoin core network   ";

// TODO: Define una categoría o tipo (string)
const entityCategory = "Criptomoneda (PoW)";

// TODO: Define un código identificador (string)
const entityCode = "BTC-2026";

// TODO: Define una descripción corta (string)
const entityDescription = "Activo digital descentralizado líder en el mercado de criptomonedas.";

// TODO: Define un dato numérico relevante (number)
const mainValue = 65000;

// TODO: Define un estado booleano
const isActive = true;


// ============================================
// SECCIÓN 2: Transformaciones de string
// ============================================

// TODO: Limpia el nombre con trim()
const entityName = rawEntityName.trim();

// TODO: Obtén el nombre en mayúsculas para el encabezado
const entityNameUpper = entityName.toUpperCase();

// TODO: Obtén el nombre en minúsculas para el código
const entityNameLower = entityName.toLowerCase();

// TODO: Extrae las primeras letras del código con slice()
const codePrefix = entityCode.slice(0, 3);


// ============================================
// SECCIÓN 3: Validaciones con búsqueda
// ============================================

// TODO: Verifica si el código empieza con el prefijo correcto
const hasValidPrefix = entityCode.startsWith(codePrefix);

// TODO: Verifica si la descripción contiene una palabra clave
const descriptionIsRelevant = entityDescription.includes("criptomonedas");

// TODO: Verifica si el código termina con los dígitos
const hasValidSuffix = entityCode.endsWith("2026");


// ============================================
// SECCIÓN 4: Generación de la ficha principal
// ============================================

const separator = "=".repeat(45);
const subSeparator = "-".repeat(45);

// TODO: Construye la ficha multilínea usando template literals
const mainCard = `
${separator}
  ${DOMAIN_NAME.toUpperCase()} — FICHA DE ACTIVO
${separator}
Activo:       ${entityNameUpper}
Categoría:    ${entityCategory}
Ticker:       ${entityCode}
Prefijo Red:  ${codePrefix}
Precio USD:   $${mainValue}
Trading:      ${isActive ? "Habilitado" : "Suspendido"}

${subSeparator}
Resumen del Proyecto:
${entityDescription}
${separator}
`;

console.log(mainCard);


// ============================================
// SECCIÓN 5: Validaciones
// ============================================

console.log("--- Status de Seguridad ---");
// TODO: Muestra los resultados de las validaciones con template literals
console.log(`¿Prefijo de activo '${codePrefix}' es correcto?: ${hasValidPrefix}`);
console.log(`¿Descripción incluye término 'criptomonedas'?: ${descriptionIsRelevant}`);
console.log(`¿Sufijo de serie '2026' validado?: ${hasValidSuffix}`);
console.log("");


// ============================================
// SECCIÓN 6: Mensaje de notificación corto
// ============================================

console.log("--- Notificación de Mercado ---");

// TODO: Construye un mensaje corto de una línea
const notification = `⚡ Alerta Kraken: El activo ${entityName} (${entityCode}) ha sido actualizado en el listado oficial.`;
console.log(notification);
console.log("");
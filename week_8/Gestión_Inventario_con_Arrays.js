// ============================================
// SEMANA 08 — PROYECTO: Gestión de Inventario
// DOMINIO: Kraken Digital Assets
// ============================================

const DOMAIN_NAME = "Kraken Inventory Hub";
const VALUE_LABEL = "criptoactivos";

// ============================================
// 1. ARRAY INICIAL — Inventario de Criptoactivos
// ============================================

const items = [
  { id: 1, name: "Bitcoin", price: 64200, inStock: true, ticker: "BTC", type: "Coin" },
  { id: 2, name: "Ethereum", price: 3450, inStock: true, ticker: "ETH", type: "Smart Contract" },
  { id: 3, name: "Solana", price: 145, inStock: true, ticker: "SOL", type: "Smart Contract" },
  { id: 4, name: "Tether", price: 1, inStock: true, ticker: "USDT", type: "Stablecoin" },
  { id: 5, name: "Cardano", price: 0.45, inStock: false, ticker: "ADA", type: "Smart Contract" }
];

// ============================================
// 2. FUNCIONES DE GESTIÓN
// ============================================

const addItem = (newItem) => {
  items.push(newItem);
  console.log(`✅ Activo agregado al final: ${newItem.name}`);
};

const removeLastItem = () => {
  const removed = items.pop();
  console.log(`⚠️ Elemento eliminado del final: ${removed?.name}`);
  return removed;
};

const addPriorityItem = (priorityItem) => {
  items.unshift(priorityItem);
  console.log(`🚀 Activo prioritario listado al inicio: ${priorityItem.name}`);
};

const removeByIndex = (index) => {
  if (index >= 0 && index < items.length) {
    const removed = items.splice(index, 1);
    console.log(`🗑️ Eliminado por índice [${index}]: ${removed[0].name}`);
  }
};

const getActiveItems = () => {
  // Filtramos los que están en stock (inStock: true)
  return items.filter(item => item.inStock === true);
};

const findByName = (name) => {
  return items.find(item => item.name.toLowerCase() === name.toLowerCase());
};

const formatItem = (item) => {
  const status = item.inStock ? "🟢 DISPONIBLE" : "🔴 AGOTADO";
  return `[ID: ${item.id}] ${item.ticker.padEnd(5)} | ${item.name.padEnd(10)} | Precio: $${item.price.toLocaleString().padEnd(8)} | ${status}`;
};

// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"=".repeat(60)}`);
console.log(`📊 SISTEMA DE GESTIÓN — ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(60)}\n`);

// --- Estado inicial ---
console.log(`📋 Inventario inicial (${items.length} ${VALUE_LABEL}):`);
items.forEach(item => console.log(`  ${formatItem(item)}`));

console.log("\n--- Realizando operaciones de mercado ---\n");

// 1. Agregar nuevo activo
addItem({ id: 6, name: "Polkadot", price: 7, inStock: true, ticker: "DOT", type: "Interoperability" });

// 2. Agregar activo prioritario
addPriorityItem({ id: 0, name: "USD Coin", price: 1, inStock: true, ticker: "USDC", type: "Stablecoin" });

// 3. Eliminar elemento del medio (índice 3)
removeByIndex(3);

// 4. Quitar el último elemento
removeLastItem();

console.log("\n--- Inventario actualizado ---\n");
items.forEach(item => console.log(`  ${formatItem(item)}`));

console.log("\n--- Búsqueda y filtrado ---\n");

// Buscar Bitcoin
const btc = findByName("Bitcoin");
console.log(`🔍 Búsqueda 'Bitcoin':`, btc ? `Encontrado (Precio: $${btc.price})` : "No encontrado");

// Filtrar activos disponibles
const activosDisponibles = getActiveItems();
console.log(`✅ Activos listos para operar: ${activosDisponibles.length}`);

console.log("\n--- Transformación de datos (Map) ---\n");

// 1. Obtener lista de Tickers (siglas)
const tickers = items.map(item => item.ticker);
console.log(`Lista de Siglas: ${tickers.join(" | ")}`);

// 2. Aplicar un "Fee" de trading simulado (+2%) a todos los precios
const preciosConFee = items.map(item => ({
  nombre: item.name,
  precioFinal: +(item.price * 1.02).toFixed(2)
}));
console.log("Precios con comisión del 2% aplicada:");
preciosConFee.forEach(p => console.log(`  • ${p.nombre}: $${p.precioFinal}`));

console.log("\n--- Resumen final ---\n");
const totalActivos = items.length;
const totalDisponibles = activosDisponibles.length;
console.log(`Total en plataforma: ${totalActivos} ${VALUE_LABEL}`);
console.log(`Disponibilidad: ${totalDisponibles} Activos / ${totalActivos - totalDisponibles} Suspendidos`);

console.log(`\n${"=".repeat(60)}`);
console.log("✅ Proceso de gestión finalizado exitosamente");
console.log(`${"=".repeat(60)}\n`);
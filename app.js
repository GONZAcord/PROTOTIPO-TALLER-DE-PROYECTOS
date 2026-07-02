// ================= DATA Y ESTADO GLOBAL EN LOCALSTORAGE =================

// Datos iniciales por defecto extendidos (para filtros en el plan de pruebas)
const transaccionesIniciales = [
  { timestamp: "18/06/2026 09:25:12", sitio: "Sacsayhuamán", ticketId: "TKT-20260618-9182", estado: "APROBADO", sincronizacion: "Starlink", turista: "Sofía Mamani Huamán" },
  { timestamp: "18/06/2026 09:20:45", sitio: "Ollantaytambo", ticketId: "TKT-20260618-4321", estado: "BLOQUEADO", sincronizacion: "Starlink", turista: "Intento de Fraude Detectado" },
  { timestamp: "18/06/2026 09:18:22", sitio: "Písac", ticketId: "TKT-20260618-0912", estado: "APROBADO", sincronizacion: "Sincronización sin conexión", turista: "Carlos Condori Quispe" },
  { timestamp: "18/06/2026 09:12:05", sitio: "Moray", ticketId: "TKT-20260618-7743", estado: "APROBADO", sincronizacion: "Starlink", turista: "Alejandro Tupa Yupanqui" },
  { timestamp: "18/06/2026 09:05:30", sitio: "Sacsayhuamán", ticketId: "TKT-20260618-3112", estado: "APROBADO", sincronizacion: "Sincronización sin conexión", turista: "María Ccoillo Flores" },
  { timestamp: "18/06/2026 08:58:14", sitio: "Sacsayhuamán", ticketId: "TKT-20260618-5002", estado: "BLOQUEADO", sincronizacion: "Starlink", turista: "Intento de Fraude Detectado" },
  { timestamp: "18/06/2026 08:52:40", sitio: "Ollantaytambo", ticketId: "TKT-20260618-1240", estado: "APROBADO", sincronizacion: "Starlink", turista: "Diego Quispe Tito" },
  { timestamp: "18/06/2026 08:45:19", sitio: "Písac", ticketId: "TKT-20260618-3199", estado: "APROBADO", sincronizacion: "Starlink", turista: "Rosa Ccahuana Yanariko" },
  { timestamp: "18/06/2026 08:40:02", sitio: "Moray", ticketId: "TKT-20260618-8422", estado: "BLOQUEADO", sincronizacion: "Sincronización sin conexión", turista: "Intento de Fraude Detectado" },
  { timestamp: "18/06/2026 08:35:55", sitio: "Sacsayhuamán", ticketId: "TKT-20260618-9011", estado: "APROBADO", sincronizacion: "Starlink", turista: "Mateo Pumacahua Chihuantito" },
  { timestamp: "18/06/2026 08:28:12", sitio: "Ollantaytambo", ticketId: "TKT-20260618-4251", estado: "APROBADO", sincronizacion: "Sincronización sin conexión", turista: "Francisca Zubiaga y Bernales" },
  { timestamp: "18/06/2026 08:22:47", sitio: "Moray", ticketId: "TKT-20260618-6311", estado: "APROBADO", sincronizacion: "Starlink", turista: "Clorinda Matto de Turner" },
  { timestamp: "18/06/2026 08:15:30", sitio: "Písac", ticketId: "TKT-20260618-7090", estado: "APROBADO", sincronizacion: "Sincronización sin conexión", turista: "José Gabriel Condorcanqui" },
  { timestamp: "18/06/2026 08:08:11", sitio: "Sacsayhuamán", ticketId: "TKT-20260618-1122", estado: "APROBADO", sincronizacion: "Starlink", turista: "Tomasa Tito Condemayta" },
  { timestamp: "18/06/2026 08:02:00", sitio: "Písac", ticketId: "TKT-20260618-3004", estado: "BLOQUEADO", sincronizacion: "Starlink", turista: "Intento de Fraude Detectado" }
];

// Inicializar base de datos en localStorage
function initSITREDatabase() {
  // Si no existe, o si tiene menos datos de los extendidos, forzar la carga de la línea base
  const existing = localStorage.getItem('sitre_transacciones');
  if (!existing || JSON.parse(existing).length < 10) {
    localStorage.setItem('sitre_transacciones', JSON.stringify(transaccionesIniciales));
  }
  if (!localStorage.getItem('sitre_recaudado')) {
    localStorage.setItem('sitre_recaudado', '45280.00');
  }
  if (!localStorage.getItem('sitre_validados')) {
    localStorage.setItem('sitre_validados', '2450');
  }
  if (!localStorage.getItem('sitre_fraudes')) {
    localStorage.setItem('sitre_fraudes', '12');
  }
}

// Obtener datos
function getTransacciones() {
  return JSON.parse(localStorage.getItem('sitre_transacciones') || '[]');
}

function getRecaudado() {
  return parseFloat(localStorage.getItem('sitre_recaudado') || '45280.00');
}

function getValidados() {
  return parseInt(localStorage.getItem('sitre_validados') || '2450');
}

function getFraudes() {
  return parseInt(localStorage.getItem('sitre_fraudes') || '12');
}

function getUltimoTicket() {
  const ticket = localStorage.getItem('sitre_ultimo_ticket');
  return ticket ? JSON.parse(ticket) : null;
}

// Auxiliar para fechas
function obtenerFechaHoraActual() {
  const d = new Date();
  return String(d.getDate()).padStart(2, '0') + "/" + 
         String(d.getMonth() + 1).padStart(2, '0') + "/" + 
         d.getFullYear() + " " + 
         String(d.getHours()).padStart(2, '0') + ":" + 
         String(d.getMinutes()).padStart(2, '0') + ":" + 
         String(d.getSeconds()).padStart(2, '0');
}

// Ejecutar inicialización al cargar app.js
initSITREDatabase();

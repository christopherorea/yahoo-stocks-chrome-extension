const rows = Array.from(document.querySelectorAll('table tbody tr'));
const data = rows.map(row => {
  const cells = row.querySelectorAll('td');
  // Helper function to remove commas from a string
  const removeCommas = (text) => text ? text.replace(/,/g, '') : '';

  return {
    fecha: cells[0]?.innerText.trim(),
    // Remove commas from numerical fields
    apertura: removeCommas(cells[1]?.innerText.trim()),
    alto: removeCommas(cells[2]?.innerText.trim()),
    bajo: removeCommas(cells[3]?.innerText.trim()),
    cierre: removeCommas(cells[4]?.innerText.trim()),
    cierreAjustado: removeCommas(cells[5]?.innerText.trim()),
    volumen: removeCommas(cells[6]?.innerText.trim())
  };
});
const datosFiltrados = data.filter(row => row.cierre);

function exportToCSV(data) {
  const encabezados = Object.keys(data[0]).join(',');
  const filas = data.map(obj => Object.values(obj).join(','));
  const csv = [encabezados, ...filas].join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);

  // Usa el h1 como nombre de archivo
  const h1 = document.getElementsByTagName('h1')[1] || document.getElementsByTagName('h1')[0];
  const nombre = h1 ? h1.innerText.replace(/[^\w\d]/g, '_') : 'datos';
  const a = document.createElement('a');
  a.href = url;
  a.download = `precios_${nombre}.csv`;
  a.click();
}
exportToCSV(datosFiltrados);
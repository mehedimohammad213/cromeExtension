document.getElementById('formatBtn').addEventListener('click', () => {
  const input = document.getElementById('jsonInput').value;
  const output = document.getElementById('formattedOutput');
  try {
    const parsed = JSON.parse(input);
    const formatted = JSON.stringify(parsed, null, 2);
    output.textContent = formatted;
  } catch (e) {
    output.textContent = 'Invalid JSON: ' + e.message;
  }
});
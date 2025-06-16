document.getElementById('fillBtn').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: fillFormWithDummyData
  });
});

function fillFormWithDummyData() {
  const inputs = document.querySelectorAll('input, textarea, select');
  inputs.forEach(input => {
    if (input.disabled || input.readOnly) return;
    switch (input.type) {
      case 'text':
      case 'search':
      case 'url':
      case 'email':
      case 'tel':
      case 'textarea':
        input.value = 'Lorem ipsum';
        break;
      case 'number':
        input.value = '123';
        break;
      case 'checkbox':
      case 'radio':
        input.checked = true;
        break;
      case 'date':
        input.value = '2025-01-01';
        break;
      case 'color':
        input.value = '#ff0000';
        break;
      case 'select-one':
      case 'select-multiple':
        if (input.options.length > 1) {
          input.selectedIndex = 1;
        }
        break;
    }
  });
}
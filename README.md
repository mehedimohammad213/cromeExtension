# 🧩 Chrome Developer Toolkit Extensions

This repository contains two lightweight and developer-friendly Chrome Extensions:

- ✅ **JSON Formatter** – Format and view JSON with style.
- ✅ **Fake Filler** – Instantly populate form fields with dummy data for testing.

---

## 🔍 JSON Formatter Extension

A Chrome extension to **format, validate, and beautify JSON** directly in your browser popup.

### ✅ Features:
- Format and pretty-print any valid JSON.
- Display JSON with syntax highlighting.
- Includes a simple interface to paste or drop JSON data.
- Supports dark mode for better readability.


### 🚀 How to Use
1. Paste your JSON into the textarea.
2. Click **Format JSON** or **Auto Format**.
3. View the formatted result below with proper indentation and colors.

---

## 🧪 Fake Filler Extension

Tired of manually filling forms during testing? Fake Filler is here to save time.

### ✅ Features:
- Instantly fills all form inputs with dummy/test data.
- Supports various input types:
  `text`, `number`, `checkbox`, `radio`, `date`, `color`, `select`, and `textarea`.
- One-click interface – perfect for QA testers and frontend developers.



### 🚀 How to Use
1. Navigate to any web form.
2. Click the **Fill Form** button from the extension popup.
3. All fields will be auto-filled with sample data.

---

## 🛠 Installation

You can install either extension manually:

1. Clone or download this repo.
2. Go to `chrome://extensions/` in your browser.
3. Enable **Developer mode**.
4. Click **Load unpacked** and select the extension folder (`json-formatter/` or `fake-filler/`).

---

## 📂 Repository Structure

```
.
├── json-formatter/
│   ├── manifest.json
│   ├── popup.html
│   ├── popup.js
│   ├── style.css
│   └── icon.png
├── fake-filler/
│   ├── manifest.json
│   ├── popup.html
│   ├── popup.js
│   ├── background.js
│   └── icon.png
```

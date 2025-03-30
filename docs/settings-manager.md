# SettingsManager

Manažér pre správu nastavení grafov a užívateľských preferencií.

## Vlastnosti

### Settings objekt
```javascript
{
    chartType: 'line',      // Typ grafu (line, bar, area)
    colorPalette: 'default', // Farebná paleta
    useGradient: true,      // Použitie gradientov
    useSmoothing: true,     // Vyhladzovanie čiar
    showLegend: true        // Zobrazenie legendy
}
```

### Callbacks
Systém pre notifikácie o zmenách nastavení:
- `onChartTypeChange`
- `onColorPaletteChange`
- `onGradientChange`
- `onSmoothingChange`
- `onLegendChange`

## Metódy

### Constructor
```javascript
const settingsManager = new SettingsManager();
```
Inicializuje manažéra, načíta uložené nastavenia a pripraví UI kontrolky.

### initControls()
Inicializuje všetky UI kontrolky a nastaví event listeners:
- Radio buttony pre typ grafu
- Select pre farebnú paletu
- Toggle switches pre ostatné nastavenia

### initToggle(elementId, settingKey)
```javascript
initToggle('gradient-toggle', 'useGradient');
```
Inicializuje toggle switch a prepojí ho s príslušným nastavením.

### loadSettings()
Načíta nastavenia z localStorage a aplikuje ich:
- Zlúči uložené nastavenia s predvolenými hodnotami
- Notifikuje subscribers o počiatočných hodnotách
- Aktualizuje UI elementy

### saveSettings()
Uloží aktuálne nastavenia do localStorage.

### Gettery
```javascript
getChartType()      // Vráti aktuálny typ grafu
getColorPalette()   // Vráti aktuálnu paletu
getUseGradient()    // Vráti stav gradientov
getUseSmoothing()   // Vráti stav vyhladzovania
getShowLegend()     // Vráti stav legendy
```

## Použitie

### Inicializácia
```javascript
const settingsManager = new SettingsManager();
```

### Subscription na zmeny
```javascript
settingsManager.subscribe('chartType', (type) => {
    // Reakcia na zmenu typu grafu
});

settingsManager.subscribe('colorPalette', (palette) => {
    // Reakcia na zmenu palety
});
```

### Perzistencia
Nastavenia sú automaticky ukladané do localStorage v JSON formáte:
```javascript
{
    "chartType": "area",
    "colorPalette": "dark",
    "useGradient": true,
    "useSmoothing": false,
    "showLegend": true
}
```

## HTML Štruktúra
Požadované HTML elementy:
```html
<!-- Typ grafu -->
<input type="radio" name="chartType" value="line">
<input type="radio" name="chartType" value="bar">
<input type="radio" name="chartType" value="area">

<!-- Farebná paleta -->
<select id="color-palette">
    <option value="default">Default</option>
    <option value="dark">Dark</option>
    <!-- ... -->
</select>

<!-- Toggle switches -->
<input type="checkbox" id="gradient-toggle">
<input type="checkbox" id="smooth-toggle">
<input type="checkbox" id="legend-toggle">
```

## Integrácia s ostatnými manažérmi

### ThemeManager
- Synchronizácia farebnej palety s témou
- Konzistentný vzhľad UI elementov

### DataManager
- Aplikácia nastavení na dátové série
- Správne zobrazenie dát podľa typu grafu

### ChartManager
- Aplikácia nastavení na grafy
- Aktualizácia vzhľadu pri zmene nastavení
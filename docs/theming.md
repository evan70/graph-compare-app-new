# Témy a štýlovanie
Posledná aktualizácia: 2024-01-23

## Farebné palety

### Predvolené palety
- `default` - Základná paleta profesionálnych farieb
  ```javascript
  ['#4e73df', '#e74a3b', '#1cc88a', '#f6c23e', '#36b9cc',
   '#858796', '#5a5c69', '#e83e8c', '#fd7e14', '#6f42c1']
  ```
- `cool` - Studené odtiene
  ```javascript
  ['#4ECDC4', '#45B7D1', '#96CEB4', '#88D8B0', '#7FDBDA',
   '#6DC5C9', '#5FB0B7', '#519AA6', '#438594', '#357082']
  ```
- `warm` - Teplé odtiene
  ```javascript
  ['#FF6B6B', '#FFB347', '#FFEEAD', '#FFD93D', '#FF8C42',
   '#FF6B6B', '#FF4757', '#FF3E41', '#FF2E2E', '#FF1F1F']
  ```
- `pastel` - Pastelové farby (Nové)
  ```javascript
  ['#FFB3BA', '#BAFFC9', '#BAE1FF', '#FFFFBA', '#FFB3F7',
   '#B3FFEC', '#B3B3FF', '#FFE4B3', '#B3FFB3', '#FFB3B3']
  ```
- `neon` - Neónové farby (Nové)
  ```javascript
  ['#FF1E1E', '#1EFF1E', '#1E1EFF', '#FFFF1E', '#FF1EFF',
   '#1EFFFF', '#FF8B1E', '#1EFF8B', '#8B1EFF', '#FF1E8B']
  ```

### Vlastné palety
Možnosť definovať vlastné palety pomocou `ColorManager`:

```javascript
colorManager.addCustomPalette('myPalette', [
    '#FF0000', '#00FF00', '#0000FF'
]);
```

## Použitie farebných paliet

### Konzistencia medzi grafmi
Všetky grafy (Chart.js aj ApexCharts) používajú rovnaké farby z aktívnej palety:
- Farby sú aplikované konzistentne na všetky datasety
- Automatická synchronizácia pri zmene palety
- Zachovanie farieb vo fullscreen móde

### Implementácia v wrapperoch
```javascript
// ChartJSWrapper
updateColors(colors) {
    this.chart.data.datasets.forEach((dataset, index) => {
        const color = colors[index % colors.length];
        dataset.borderColor = color;
        dataset.backgroundColor = color;
    });
    this.chart.update();
}

// ApexChartsWrapper
updateColors(colors) {
    this.chart.updateOptions({
        colors: colors
    });
}
```

## Témy

### Svetlá téma
```javascript
{
    text: '#666666',
    grid: '#dddddd',
    background: '#ffffff'
}
```

### Tmavá téma
```javascript
{
    text: '#e2e5ec',
    grid: '#2d3139',
    background: '#1a1d24'
}
```

### Správa tém
```javascript
// Získanie aktuálnej témy
const currentTheme = themeManager.getCurrentTheme();

// Nastavenie konkrétnej témy
themeManager.setTheme('dark');

// Prepnutie témy
themeManager.toggleTheme();
```

### Systémové preferencie
ThemeManager automaticky detekuje systémové preferencie témy:
```javascript
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
```

## CSS premenné
Definované v root:
```css
:root {
    --primary-color: #4e73df;
    --secondary-color: #e74a3b;
    --bg-color: #ffffff;
    --text-color: #666666;
    --border-color: #dddddd;
}

[data-theme="dark"] {
    --bg-color: #1a1d24;
    --text-color: #e2e5ec;
    --border-color: #2d3139;
}
```

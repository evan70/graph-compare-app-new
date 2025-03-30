# Témy a štýlovanie

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

### Vlastné palety
Možnosť definovať vlastné palety pomocou `DataManager`:

```javascript
dataManager.addCustomPalette('myPalette', [
    '#FF0000', '#00FF00', '#0000FF'
]);
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

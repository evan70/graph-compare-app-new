# Dokumentácia komponentov

## Manažéri (Managers)

### DataManager
Trieda pre správu dát grafov.

#### Metódy
- `constructor()` - Inicializuje základné dátové štruktúry
- `getCurrentData()` - Vráti aktuálny dataset
- `updateData(newData)` - Aktualizuje celý dataset
- `addDataset(label, data, color)` - Pridá nový dataset
- `removeDataset(index)` - Odstráni dataset podľa indexu
- `updateDataset(index, newData)` - Aktualizuje konkrétny dataset

### ColorManager
Správca farebných paliet pre grafy.

#### Vlastnosti
- `colorPalettes` - Objekt obsahujúci preddefinované palety
- `currentPalette` - Aktuálne zvolená paleta

#### Metódy
- `getPalette(name)` - Získa paletu podľa názvu
- `getCurrentPalette()` - Vráti aktuálnu paletu
- `setPalette(name)` - Nastaví aktívnu paletu
- `addCustomPalette(name, colors)` - Pridá vlastnú paletu

### ThemeManager
Správca tém (svetlá/tmavá).

#### Metódy
- `toggleTheme()` - Prepne medzi svetlou a tmavou témou
- `getCurrentTheme()` - Vráti aktuálnu tému
- `setTheme(theme)` - Nastaví konkrétnu tému

## Wrappery pre grafy

### ChartJSWrapper
Wrapper pre Chart.js knižnicu.

#### Metódy
- `init()` - Inicializuje graf
- `updateData(newData)` - Aktualizuje dáta grafu
- `updateOptions(newOptions)` - Aktualizuje nastavenia grafu
- `destroy()` - Zruší graf a uvoľní resources

### ApexChartsWrapper
Wrapper pre ApexCharts knižnicu.

#### Vlastnosti
- `options` - Konfiguračné nastavenia grafu
- `chart` - Inštancia ApexCharts

#### Metódy
- `init()` - Inicializuje graf
- `getInitialConfig()` - Vráti základnú konfiguráciu
- `updateOptions(newOptions)` - Aktualizuje nastavenia
- `updateData(newData)` - Aktualizuje dáta grafu

## Použitie

```javascript
// Inicializácia manažérov
const dataManager = new DataManager();
const colorManager = new ColorManager();
const themeManager = new ThemeManager();

// Vytvorenie grafov
const chartJS = new ChartJSWrapper('chartjs', dataManager, themeManager);
const apexChart = new ApexChartsWrapper('apex', dataManager, themeManager);

// Inicializácia grafov
chartJS.init();
apexChart.init();

// Príklad aktualizácie dát
dataManager.addDataset('Nové dáta', [1,2,3,4], '#FF0000');
chartJS.updateData(dataManager.getCurrentData());
```
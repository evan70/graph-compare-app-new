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
- `container` - DOM element pre graf
- `dataManager` - Inštancia DataManager pre správu dát
- `themeManager` - Inštancia ThemeManager pre správu tém
- `chart` - Inštancia ApexCharts
- `options` - Konfiguračné nastavenia grafu

#### Metódy
- `constructor(containerId, dataManager, themeManager)` - Inicializuje wrapper
- `init()` - Inicializuje graf s predvolenými nastaveniami
- `getInitialConfig()` - Vráti základnú konfiguráciu grafu
- `updateData(newData)` - Aktualizuje dáta grafu
- `updateOptions(newOptions)` - Aktualizuje nastavenia grafu
- `destroy()` - Zruší graf a uvoľní resources

#### Konfigurácia
```javascript
{
    useGradient: false,  // Použitie gradientov vo výplni
    useSmoothing: true   // Vyhladzovanie čiar v grafe
}
```

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

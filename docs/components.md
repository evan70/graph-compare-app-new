# Dokumentácia komponentov

## Manažéri (Managers)

### DataManager
Trieda pre správu dát a farieb grafov.

#### Vlastnosti
- `data` - Objekt obsahujúci dátové sady pre grafy
  - `labels` - Popisky pre x-ovú os
  - `datasets` - Pole datasetov s vlastnosťami label, data a color
- `colors` - Pole farieb pre aktuálnu paletu
- `currentPalette` - Názov aktuálne zvolenej palety
- `listeners` - Pole callback funkcií pre notifikácie

#### Metódy
- `constructor()` - Inicializuje základné dátové štruktúry a palety
- `getCurrentData()` - Vráti aktuálny dataset
- `getColors()` - Vráti farby z aktuálnej palety
- `setPalette(name)` - Nastaví aktívnu paletu (default/dark/pastel/neon)
- `getCurrentPalette()` - Vráti názov aktuálnej palety
- `addListener(callback)` - Pridá callback pre notifikácie o zmenách
- `removeListener(callback)` - Odstráni callback
- `notifyListeners()` - Notifikuje všetky registrované callbacky
- `addDataset(label, data, color)` - Pridá nový dataset
- `removeDataset(index)` - Odstráni dataset podľa indexu
- `updateDataset(index, newData)` - Aktualizuje konkrétny dataset
- `setLabels(labels)` - Nastaví nové popisky pre x-ovú os

### ThemeManager
Správca tém (svetlá/tmavá).

#### Vlastnosti
- `themeToggle` - Referencia na DOM element pre prepínanie témy
- `currentTheme` - Aktuálna téma ('light' alebo 'dark')

#### Metódy
- `constructor()` - Inicializuje správcu tém
- `initTheme()` - Inicializuje tému podľa systémových preferencií
- `initThemeToggle()` - Inicializuje prepínač témy
- `getCurrentTheme()` - Vráti aktuálnu tému
- `setTheme(theme)` - Nastaví konkrétnu tému
- `toggleTheme()` - Prepne medzi svetlou a tmavou témou
- `applyTheme(isDark)` - Aplikuje tému a vráti príslušné farby
- `getThemeColors(theme)` - Vráti farebné nastavenia pre danú tému

### FullscreenManager
Správca fullscreen módu pre grafy.

#### Vlastnosti
- `fullscreenOverlay` - Referencia na overlay element
- `fullscreenContainer` - Container pre fullscreen obsah
- `fullscreenChart` - Aktívny fullscreen graf
- `themeManager` - Referencia na ThemeManager pre správu tém

#### Metódy
- `openFullscreen(grafType)` - Otvorí graf v fullscreen móde
- `closeFullscreen()` - Zatvorí fullscreen mód
- `isFullscreenActive()` - Kontrola aktívneho fullscreen stavu
- `activateFullscreen()` - Aktivuje fullscreen mód
- `getChartJSConfig()` - Získa konfiguráciu pre ChartJS
- `getApexConfig()` - Získa konfiguráciu pre ApexCharts

## Wrappery pre grafy

### ChartJSWrapper
Wrapper pre Chart.js knižnicu.

#### Metódy
- `init()` - Inicializuje graf
- `updateData(newData)` - Aktualizuje dáta grafu
- `updateOptions(newOptions)` - Aktualizuje nastavenia grafu
- `destroy()` - Zruší graf a uvoľní resources

#### Nové metódy
- `createGradient(color)` - Vytvorí gradient pre pozadie
- `adjustColor(color, opacity)` - Upraví priehľadnosť farby
- `updateColors(palette)` - Aktualizuje farby podľa zvolenej palety

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
- `getInitialConfig()` - Získa počiatočnú konfiguráciu

#### Vylepšené metódy
- `updateData(newData)` - Synchronizovaná aktualizácia dát a labels
- `updateColors(palette)` - Konzistentná správa farieb s Chart.js

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
const themeManager = new ThemeManager();

// Práca s dátami
dataManager.addDataset('Nové dáta', [1,2,3,4], '#FF0000');
const currentData = dataManager.getCurrentData();

// Práca s farbami
dataManager.setPalette('cool');
const colors = dataManager.getColors();

// Práca s témami
const currentTheme = themeManager.getCurrentTheme();
themeManager.toggleTheme();

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

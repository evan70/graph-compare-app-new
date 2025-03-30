# Zoznam zmien

## [Nepublikované]

### Pridané
- Implementovaný `FullscreenManager` pre lepšiu správu fullscreen módu
  - Centralizovaná logika pre fullscreen funkcionalitu
  - Podpora pre ChartJS aj ApexCharts
  - Lepšia integrácia s ThemeManager
  - Automatická adaptácia na aktuálnu tému
- Vylepšené ovládanie fullscreen módu
  - ESC klávesa pre zatvorenie
  - Lepšia responzivita v fullscreen móde
  - Zachovanie nastavení grafu pri prepnutí do fullscreen
- Nové metódy pre prácu s fullscreen
  - `openFullscreen()`
  - `closeFullscreen()`
  - `isFullscreenActive()`
  - `activateFullscreen()`
- Lepšia dokumentácia fullscreen funkcionality

### Zmenené
- Refaktoring fullscreen logiky do samostatného manažéra
- Vylepšená architektúra aplikácie s novým manažérom
- Optimalizovaná integrácia medzi manažérmi
- Presun fullscreen konfigurácie do samostatných metód

### Opravené
- Lepšie ošetrenie stavov pri prepínaní fullscreen módu
- Konzistentnejšie správanie pri zmene témy vo fullscreen móde
- Správne čistenie resources pri zatvorení fullscreen módu

## [2024-01-22]

### Pridané
- Implementovaná správa farieb v `DataManager`
  - Preddefinované farebné palety (default, cool, warm)
  - Metódy pre prácu s paletami
  - Podpora vlastných paliet
- Rozšírená funkcionalita `ThemeManager`
  - Perzistencia nastavení témy
  - Systémové preferencie témy
  - Rozšírené farebné schémy pre témy
- Aktualizovaná dokumentácia komponentov
  - Podrobný popis vlastností a metód
  - Príklady použitia
  - Dokumentácia farebných paliet

### Zmenené
- Refaktoring správy farieb a tém
- Vylepšená integrácia medzi manažérmi
- Optimalizovaná inicializácia komponentov

### Opravené
- Chýbajúce metódy v manažéroch
- Konzistencia farebných schém
- Správanie pri zmene témy

## [2024-01-21]

### Pridané
- Implementovaný `ApexChartsWrapper` pre lepšiu integráciu ApexCharts
- Rozšírená podpora pre rôzne typy grafov v ApexCharts
- Pridaná konfigurácia pre gradienty a vyhladzovanie v ApexCharts
- Lepšia synchronizácia tém medzi Chart.js a ApexCharts

### Zmenené
- Aktualizovaná štruktúra priečinkov pre lepšiu organizáciu
- Vylepšená dokumentácia wrapperov
- Optimalizované načítavanie skriptov v index.html

## [2024-01-20]

### Pridané
- Nová architektúra s Manager triedami pre lepšiu organizáciu kódu
- Implementovaný `ThemeManager` pre správu tém (svetlá/tmavá)
- Vytvorený `ColorManager` pre centralizovanú správu farebných paliet
- Lepšia modularizácia kódu s využitím `switch/case` pre prehľadnejšie podmienky
- Pridaná podpora pre vlastné farebné palety
- Error handling pre neexistujúce palety
- Rozšírená dokumentácia v `/docs`
- Podpora ESC klávesy pre ukončenie fullscreen módu
- Globálny listener pre klávesnicu na lepšie ovládanie
- Kontrola aktívneho fullscreen stavu
- Font Awesome ikony pre lepšie vizuálne zobrazenie tlačidiel
- Mobilná optimalizácia pre tabuľku a ovládacie prvky
- Vizuálny indikátor horizontálneho scrollovania na mobile
- Vylepšená dotyková interakcia pre mobilné zariadenia

### Zmenené
- Refaktoring `ChartManager` triedy pre lepšiu údržbu
- Vylepšená organizácia súborov a tried
- Optimalizovaná správa stavu aplikácie
- Prehľadnejšia štruktúra kódu
- Odstránený sticky header na mobilných zariadeniach
- Prepracovaný footer do 3 sekcií
- Optimalizované paddingy a marginy pre mobilné zariadenia
- Vylepšený fullscreen mód na mobile
- Upravená pozícia close tlačidla vo fullscreen móde
- Zjednotený vzhľad fullscreen close tlačidla
- Odstránené duplicitné CSS štýly

### Opravené
- Lepšie ošetrenie chybových stavov
- Konzistentnejšie správanie pri zmene tém
- Opravené pretekanie obsahu na pravej strane na mobile

## [2024-01-19]

### Pridané
- Základná HTML štruktúra
- Štýlovanie pomocou CSS
- Implementácia grafov (Chart.js, ApexCharts)
- Responzívny dizajn
- Svetlá/tmavá téma
- Konzistentné štýly pre generované dáta
- Zjednotené gradienty a markery
- Špecifické nastavenia pre každý typ grafu
- Vylepšené zobrazenie stĺpcových grafov
- Optimalizované rozostupy v grafoch
- Lepšia vizualizácia koláčových grafov
- Nový minimalistický prepínač témy

### Zmenené
- Pridané odkazy na dokumentácie
- Zjednodušený prepínač témy
- Odstránený nadbytočný padding
- Optimalizovaná štruktúra CSS

### Opravené
- Opravené zobrazenie na mobilných zariadeniach
- Vyriešené problémy s responzivitou
- Opravené prekrývanie elementov

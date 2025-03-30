# Changelog

## [0.1.5] - 2024-01-24

### Zmenené
- Odstránené inline CSS štýly z index.html
  - Všetky štýly presunuté do css/style.css
  - Vyčistený HTML kód
  - Lepšia organizácia CSS

### Opravené
- Odstránená duplicita CSS definícií
- Zjednotené štýlovanie v celej aplikácii

## [0.1.4] - 2024-01-24

### Opravené
- Zjednotené farby medzi všetkými grafmi
  - Chart.js na hlavnej stránke
  - Chart.js vo fullscreen móde
  - ApexCharts v oboch módoch
  - Konzistentné použitie farebných paliet
- Opravená funkcionalita fullscreen tlačidla pre ApexCharts
  - Správne exportovanie inštancie grafu
  - Lepšia integrácia s FullscreenManager

### Zmenené
- Vylepšená implementácia ChartJSWrapper
  - Zjednodušená konfigurácia farieb
  - Odstránené nadbytočné nastavenia priehľadnosti
  - Optimalizovaná metóda updateColors
- Aktualizovaná integrácia s ColorManager
  - Efektívnejšie použitie farebných paliet
  - Konzistentné mapovanie farieb na datasety

## [0.1.3] - 2024-01-24

### Opravené
- Synchronizácia dát medzi Chart.js a ApexCharts grafmi
  - Zjednotené zobrazovanie datasetov
  - Konzistentné spracovanie labels
  - Správne mapovanie farieb
- Implementácia DataManager
  - Kompletná správa datasetov a farieb
  - Systém notifikácií pre zmeny
  - Podpora pre rôzne farebné palety

### Zmenené
- Vylepšená implementácia wrapperov
  - ChartJSWrapper: lepšia podpora gradientov a štýlov
  - ApexChartsWrapper: správne mapovanie dát a kategórií
  - Zjednotené rozhranie pre oba wrappery
- Rozšírená funkcionalita DataManager
  - Pridaná metóda setLabels
  - Vylepšená správa farebných paliet
  - Lepšia integrácia s wrappermi

### Pridané
- Nové pomocné metódy v ChartJSWrapper
  - createGradient pre lepšie vizuálne efekty
  - adjustColor pre správu priehľadnosti
- Rozšírená dokumentácia
  - Aktualizovaný changelog
  - Doplnené informácie o zmenách

## [0.1.2] - 2024-01-24

### Opravené
- Opravená inicializácia ApexCharts
  - Pridaná kompletná počiatočná konfigurácia
  - Odstránená chyba "t is undefined"
  - Správne načítanie počiatočných dát
- Zjednotené farby medzi Chart.js a ApexCharts
  - Implementovaná konzistentná farebná schéma
  - Správne použitie farieb z DataManager
  - Aktualizácia farieb pri zmene dát

### Zmenené
- Vylepšená implementácia ApexChartsWrapper
  - Lepšia integrácia s DataManager
  - Optimalizovaná aktualizácia dát a farieb
  - Pridaná podpora pre dynamickú zmenu farieb

## [0.1.1] - 2024-01-24

### Pridané
- Implementovaná centrálna `App` trieda pre lepšiu organizáciu kódu
  - Centralizovaná správa všetkých manažérov
  - Systém subscriptions pre lepšiu komunikáciu medzi komponentmi
  - Globálne event listenery
  - Vylepšená inicializačná logika
- Rozšírené farebné schémy pre dark mode
  - Nové CSS premenné pre konzistentný vzhľad
  - Vylepšené tieňovanie a prechody
  - Optimalizácia pre mobilné zariadenia

### Zmenené
- Refaktoring architektúry aplikácie
  - Presun inicializačnej logiky do `App` triedy
  - Vylepšená organizácia závislostí medzi komponentmi
- Vylepšený dark mode
  - Nová implementácia v `ThemeManager`
  - Konzistentnejšie používanie CSS premenných
  - Lepšia podpora pre všetky komponenty

### Opravené
- Konzistentnejšie správanie dark mode naprieč aplikáciou
- Lepšie prepojenie medzi manažérmi a komponentmi

## [Nepublikované]

### Pridané
- Nové farebné palety: `pastel` a `neon`
- Rozšírená dokumentácia pre všetky komponenty
- Lepšia integrácia medzi manažérmi

### Zmenené
- Aktualizovaná dokumentácia v `/docs`
- Optimalizovaná štruktúra kódu
- Vylepšené error handling

## [2024-01-23]

### Pridané
- Implementovaný `NavigationManager` pre správu mobilnej navigácie
  - Responzívne menu pre mobilné zariadenia
  - Animované otvorenie/zatvorenie menu
  - Automatické zatváranie pri kliknutí mimo menu
  - Prepínanie ikon menu (hamburger/close)
- Vylepšená navigácia
  - Plynulé animácie pre hover efekty
  - Indikátor aktívnej položky menu
  - Lepšia prístupnosť s ARIA atribútmi
  - Backdrop filter pre moderný vzhľad
- Optimalizácia pre mobilné zariadenia
  - Responzívny dizajn
  - Touch-friendly interakcie
  - Plynulé animácie
  - Lepšia čitateľnosť na malých obrazovkách

### Zmenené
- Prepracovaná štruktúra navigácie
- Vylepšený mobilný UX
- Optimalizované animácie a prechody
- Lepšia integrácia s theme switcherom

### Opravené
- Správne zatváranie menu pri zmene veľkosti okna
- Konzistentné správanie na všetkých zariadeniach
- Lepšia podpora pre rôzne veľkosti obrazoviek

## [2024-01-22]

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

# Zoznam zmien

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

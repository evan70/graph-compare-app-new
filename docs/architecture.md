# Architektúra aplikácie
Posledná aktualizácia: 2024-01-24

## Hlavná aplikačná trieda (App)
```
grafy-2024-new/
├── js/
│   ├── charts/          # Wrappery pre grafové knižnice
│   │   ├── ChartJSWrapper.js
│   │   └── ApexChartsWrapper.js
│   ├── managers/        # Manažérske triedy
│   │   ├── DataManager.js
│   │   ├── ThemeManager.js
│   │   ├── ColorManager.js
│   │   ├── FullscreenManager.js
│   │   └── NavigationManager.js
│   └── main.js         # Hlavný aplikačný súbor
├── css/                # CSS súbory
│   ├── style.css      # Hlavný CSS súbor
│   ├── charts.css     # Štýly pre grafy
│   └── theme.css      # Definície tém
├── assets/
└── index.html         # Čistý HTML bez inline štýlov

## Štýlovanie
- Všetky štýly sú definované v CSS súboroch
- Žiadne inline štýly v HTML
- Konzistentné používanie CSS premenných
- Modularita a znovupoužiteľnosť CSS

## Manažérska vrstva
- Centralizovaná logika v samostatných Manager triedach
- Jednoduchá rozšíriteľnosť a údržba
- Jasne definované zodpovednosti

## Wrapper vrstva
- Abstrahuje prácu s externými knižnicami
- Poskytuje jednotné rozhranie
- Zabezpečuje konzistentnú prácu s témami a dátami

## Prezentačná vrstva
- Responzívny dizajn
- Moderná navigácia
- Optimalizácia pre mobile
- Interaktívne prvky UI

## Dátový tok
1. Užívateľská akcia
2. Spracovanie v príslušnom manažérovi
3. Aktualizácia wrapperov
4. Prekreslenie grafov

## Rozšíriteľnosť
- Možnosť pridania nových typov grafov
- Podpora pre vlastné farebné palety
- Flexibilná konfigurácia tém

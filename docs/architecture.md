# Architektúra aplikácie
Posledná aktualizácia: 2024-01-23

## Štruktúra priečinkov
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
├── css/
├── assets/
└── index.html
```

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

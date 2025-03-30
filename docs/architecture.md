# Architektúra aplikácie

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
│   │   └── ColorManager.js
│   └── main.js         # Hlavný aplikačný súbor
├── css/
├── assets/
└── index.html
```

## Wrapper vrstva
- Abstrahuje prácu s externými knižnicami (Chart.js, ApexCharts)
- Poskytuje jednotné rozhranie pre rôzne typy grafov
- Zabezpečuje konzistentnú prácu s témami a dátami
- Zjednodušuje konfiguráciu a aktualizáciu grafov

## Prezentačná vrstva
- HTML štruktúra
- CSS štýly
- Responzívny dizajn
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

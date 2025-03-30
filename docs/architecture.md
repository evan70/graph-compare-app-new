# Architektúra aplikácie

## Prehľad
Aplikácia používa modulárnu architektúru založenú na manažéroch (Managers) a wrapperoch (Wrappers) pre lepšiu organizáciu kódu a jednoduchšiu údržbu.

## Vrstvy aplikácie

### 1. Manažérska vrstva
- Zodpovedná za správu stavu aplikácie
- Obsahuje DataManager, ColorManager a ThemeManager
- Poskytuje jednotné rozhranie pre prácu s dátami a konfiguráciou

### 2. Wrapper vrstva
- Abstrahuje prácu s externými knižnicami (Chart.js, ApexCharts)
- Zjednocuje API pre rôzne typy grafov
- Zjednodušuje výmenu grafových knižníc

### 3. Prezentačná vrstva
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
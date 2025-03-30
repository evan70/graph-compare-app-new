# Témy a štýlovanie

## Farebné palety

### Predvolené palety
- `default` - Základná paleta
- `pastel` - Pastelové farby
- `dark` - Tmavé odtiene
- `neon` - Výrazné neónové farby

### Vlastné palety
Možnosť definovať vlastné palety pomocou `ColorManager`:

```javascript
colorManager.addCustomPalette('myPalette', [
    '#FF0000', '#00FF00', '#0000FF'
]);
```

## Témy

### Svetlá téma
- Svetlé pozadie
- Tmavý text
- Jemné tiene
- Svetlé mriežky grafov

### Tmavá téma
- Tmavé pozadie
- Svetlý text
- Výraznejšie tiene
- Tmavé mriežky grafov

### Prepínanie tém
```javascript
themeManager.toggleTheme(); // Prepne medzi svetlou a tmavou témou
themeManager.setTheme('dark'); // Nastaví konkrétnu tému
```
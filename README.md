# Astral Nova Icons `1.0.0`

Package optionnel, indépendant de Nova CSS. Sprite SVG + CSS de tailles.

## Installation

Copier `dist/nova-icons.css` et `dist/icons.svg` vers les assets publics de l’app
(ex. `/assets/nova/nova-icons.css` et `/assets/nova/icons/icons.svg`), ou via Composer path.

```html
<link rel="stylesheet" href="/assets/nova/nova-icons.css">
<svg class="nova-icon nova-icon--md" aria-hidden="true">
  <use href="/assets/nova/icons/icons.svg#nova-icon-user"></use>
</svg>
```

Avec Template Nova :

```php
<?= Template::partial('interface/icon', [
    'name' => 'shield',
    'size' => 'lg',      // sm | md | lg | xl
    'filled' => false,   // true → #nova-icon-{name}-fill si disponible
]) ?>
```

## Contenu

- **62** pictogrammes (dont 3 filled : `check-fill`, `heart-fill`, `star-fill`)
- Tailles CSS : `--sm` / `--md` / `--lg` / `--xl`
- Catalogue machine : `dist/icons.json` (mapping apps → icônes utiles)

### Mapping apps (indicatif)

| App | Icônes utiles |
|-----|----------------|
| Starter | `home`, `layout`, `shield`, `code`, `puzzle`, `palette` |
| Forum | `message-circle`, `users`, `search` |
| Forge | `terminal`, `package`, `layers` |
| Deploy | `cloud`, `upload`, `download` |
| Shop | `shopping-bag`, `tag` |
| Blog | `book-open`, `pencil`, `image` |
| Website | `globe`, `github`, `sparkles` |

## Sécurité

Assainir tout SVG utilisateur avant publication. Ne jamais rendre du SVG arbitraire inline.
Les illustrations Hero (`hero-default.svg`) restent remplaçables côté app.

## Scripts

```bash
npm test
```

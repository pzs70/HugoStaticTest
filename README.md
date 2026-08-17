# Saját Oldalam

Magyar nyelvű statikus weboldal és tudásbázis [Hugo](https://gohugo.io/) segítségével, a [Hextra](https://github.com/imfing/hextra) témára építve. Az oldal dokumentációs anyagokat és blogbejegyzéseket tartalmaz.

Az éles oldal: https://pzs70.github.io/HugoStaticTest/

## Technológiák

- [Hugo](https://gohugo.io/) statikusoldal-generátor
- [Hextra](https://github.com/imfing/hextra) Hugo-téma (Git almodulként)
- GitHub Actions és GitHub Pages automatikus buildhez és közzétételhez

## Előfeltételek

- Git
- Hugo Extended (a CI jelenleg a `0.161.1` verziót használja)

Klónozáskor a témát tartalmazó almodult is töltsd le:

```bash
git clone --recurse-submodules https://github.com/pzs70/HugoStaticTest.git
cd HugoStaticTest
```

Ha a tároló már le van klónozva, futtasd:

```bash
git submodule update --init --recursive
```

## Helyi fejlesztés

Indítsd el a fejlesztői szervert:

```bash
hugo server
```

Az oldal alapértelmezetten a http://localhost:1313/ címen érhető el. A szerver figyeli a fájlváltozásokat, ezért módosítás után automatikusan frissít.

## Build

Éles, tömörített verzió létrehozása:

```bash
hugo --minify
```

A generált fájlok a `public/` könyvtárba kerülnek. Ezt a mappát ne szerkeszd kézzel, mert minden build felülírja.

## Tartalom kezelése

| Tartalom | Helye | Új fájl létrehozása |
| --- | --- | --- |
| Kezdőlap | `content/_index.md` | Közvetlen szerkesztéssel |
| Dokumentáció | `content/docs/` | `hugo new docs/<név>.md` |
| Blog | `content/blog/` | `hugo new blog/<bejegyzes-neve>.md` |

Az új tartalmak alapértelmezetten piszkozatként készülnek (`draft: true`). Publikáláshoz a Markdown fájl fejlécében állítsd `draft: false` értékre, vagy távolítsd el ezt a sort.

## Fontos könyvtárak és fájlok

- `hugo.toml` – az oldal fő konfigurációja, navigációval és alap URL-lel
- `content/` – a Markdown formátumú oldalak és bejegyzések
- `archetypes/` – az új oldalakhoz, illetve blogbejegyzésekhez használt sablonok
- `layouts/_partials/custom/` – egyedi fejléc- és lábléc-kiegészítések
- `themes/hextra/` – a Hextra téma Git almodulja
- `.github/workflows/hugo.yml` – build és GitHub Pages telepítési munkafolyamat

## Telepítés

A `main` ágra történő push elindítja a GitHub Actions munkafolyamatot. Ez Hugo-val felépíti az oldalt, majd a `public/` könyvtár tartalmát GitHub Pagesre telepíti.

GitHubon a **Settings → Pages** alatt a Pages forrását **GitHub Actions** értékre kell állítani.

## Licenc

Ebben a tárolóban jelenleg nincs külön licencfájl. Újrafelhasználás előtt egyeztess a projekt tulajdonosával.

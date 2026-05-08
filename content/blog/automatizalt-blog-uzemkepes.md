---
title: "Az automatizált blog üzemképes!"
date: 2026-05-08T13:51:40+02:00
draft: false
summary: "Örömmel jelentem, hogy a blogrendszer összeállt és működik. Ebben a posztban bemutatom az ide vezető utat és a következő lépéseket."
---

Ma mérföldkőhöz érkeztünk: az automatizált blogrendszerünk hivatalosan is üzemképes. Ez a bejegyzés már az új munkafolyamat segítségével készült, és az alábbiakban összefoglalom, hogyan jutottunk el idáig.

### Az ide vezető lépések

1.  **A keretrendszer kiválasztása**: A választás a **Hugo**-ra esett, amely a világ egyik leggyorsabb statikus webhelygenerátora.
2.  **A téma beállítása**: A modern és letisztult **Hextra** témát választottuk, amely kiválóan alkalmas dokumentációk és blogok kezelésére is.
3.  **Struktúra kialakítása**: Létrehoztuk a `content/docs` és `content/blog` mappákat a tartalom elkülönítéséhez.
4.  **Automatizálás**: Beállítottuk a környezetet, hogy a tartalomgyártás és a szerkesztés gördülékeny legyen.

### Mi van még hátra a GitHub Pages-ig?

Bár a blog lokálisan már tökéletesen fut, a nagyvilág számára is elérhetővé kell tennünk a GitHub Pages segítségével. Ehhez a következő lépésekre van szükség:

1.  **GitHub Actions munkafolyamat létrehozása**: Kell egy `.github/workflows/deploy.yml` fájl, amely minden egyes feltöltéskor automatikusan buildeli a Hugo oldalt és feltölti a statikus fájlokat.
2.  **Repository beállítások**: A GitHub felületén engedélyezni kell a GitHub Pages szolgáltatást, és meg kell adni, hogy a buildelt fájlok a megfelelő branch-ből (pl. `gh-pages`) frissüljenek.
3.  **Domain beállítás (opcionális)**: Ha egyedi domain nevet szeretnénk, azt is itt kell majd rögzítenünk.

Maradjatok velünk, hamarosan élesben is látható lesz az oldal!

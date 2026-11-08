# Rythme

Un jeu de rythme sur 4 voies : les notes descendent vers une ligne, appuie sur la bonne touche au moment où elles la touchent. 200 morceaux composés et joués par le jeu lui-même, chacun en 4 difficultés, ou des niveaux créés à partir de ta propre musique.

*English version: [README.en.md](README.en.md)*

## Comment jouer

- **D**, **F**, **J**, **K** (ou les flèches **← ↓ ↑ →**) : une touche par voie.
- Appuie quand la note touche la ligne en bas ; **maintiens** la touche sur les notes longues jusqu'au bout.
- **Espace** : jouer · **P** : pause · **Plein écran** pendant la partie.

## Précision et points

Chaque note est jugée selon l'écart avec le bon moment : **Parfait** (±45 ms, 300 points), **Bien** (±90 ms, 200 points), **OK** (±140 ms, 100 points), sinon ratée.

Les points d'une note augmentent de 1 % par note de combo, jusqu'au double à 100 notes de suite ; une note ratée remet le combo à zéro. À la fin, la précision donne une note : **S** à partir de 95 %, **A** à 90 %, **B** à 80 %, **C** à 70 %, **D** en dessous. Le meilleur score et la note sont gardés pour chaque morceau et chaque difficulté.

## Chansons

L'onglet **Chansons** propose 200 morceaux composés par le jeu : chacun a son tempo, sa gamme, ses accords, sa batterie et son son de mélodie, et ses notes sont toujours les mêmes d'une partie à l'autre. Chaque morceau existe en **Facile**, **Normal**, **Difficile** et **Expert**.

Ces morceaux servent aussi aux jeux NeoTha, Prisme et Pulsar.

## Mes musiques

Dans **Mes musiques**, crée un niveau à partir d'un **fichier audio** importé ou d'une musique de ta bibliothèque **NeoMusic** : le jeu détecte son tempo et ses temps forts et en tire 4 niveaux de difficulté.

## Réglages

- **Volume** de la musique.
- **Son des clics** : le son joué à chaque note touchée, au choix parmi 10 (Doux, Clap, Bois, Grosse caisse, Cristal, Pop, Charleston, Caisse claire, Pluck, Tok) ou aucun. Perdre un combo de 10 ou plus joue un son « combo cassé ».
- **Décalage audio** (−300 à +300 ms) : il se règle tout seul après chaque partie. Si tu frappes en moyenne en retard ou en avance, le jeu corrige une bonne partie de l'écart ; tu peux aussi le changer à la main.

## Données et synchronisation

Tes scores et notes par niveau et tes réglages sont enregistrés par NeoDex, sauvegardés et synchronisés entre tes PC si la synchro est activée. Au premier lancement, le plugin reprend ce que tu avais déjà dans NeoDex.

## Installer

Dans NeoDex : **NeoStore → À découvrir → Rythme → Installer**.

Développer un plugin : voir le [SDK NeoDex](https://github.com/NDesumeur/neodex-sdk).

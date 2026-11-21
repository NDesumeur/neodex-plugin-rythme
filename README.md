# Rythme

Un jeu de rythme de 4 à 7 voies : les notes descendent vers une ligne, appuie sur la bonne touche au moment où elles la touchent. 1200 morceaux composés et joués par le jeu lui-même, chacun en 4 difficultés, des niveaux créés à partir de ta propre musique, et les maps d'osu!mania, de StepMania et de Quaver.

*English version: [README.en.md](README.en.md)*

## Comment jouer

- **D**, **F**, **J**, **K** (ou les flèches **← ↓ ↑ →**) en 4 voies ; en 5, 6 et 7 voies, d'autres touches (Espace au milieu en 5 et 7). Chaque nombre de voies garde ses touches, à changer dans les réglages.
- Appuie quand la note touche la ligne en bas ; **maintiens** la touche sur les notes longues jusqu'au bout.
- **Espace** : jouer · **P** : pause · **Plein écran** pendant la partie.

## Précision et points

Chaque note est jugée selon l'écart avec le bon moment : **Parfait** (±45 ms, 300 points), **Bien** (±90 ms, 200 points), **OK** (±140 ms, 100 points), sinon ratée. Ces fenêtres sont celles de la sévérité 5 : de 0 (plus large) à 10 (plus serré).

Les points d'une note augmentent de 1 % par note de combo, jusqu'au double à 100 notes de suite ; une note ratée remet le combo à zéro. À la fin, la précision donne une note : **S** à partir de 95 %, **A** à 90 %, **B** à 80 %, **C** à 70 %, **D** en dessous. Le meilleur score et la note sont gardés pour chaque morceau et chaque difficulté.

## Chansons

L'onglet **Chansons** propose 1200 morceaux composés par le jeu : chacun a son tempo, sa gamme, ses accords, sa batterie et son son de mélodie, et ses notes sont toujours les mêmes d'une partie à l'autre. Chaque morceau existe en **Facile**, **Normal**, **Difficile** et **Expert**.

Ces morceaux servent aussi aux jeux NeoTha, Prisme et Pulsar.

## Mes musiques

Dans **Mes musiques**, crée un niveau à partir d'un **fichier audio** importé ou d'une musique de ta bibliothèque **NeoMusic** : le jeu détecte son tempo et ses temps forts et en tire 4 niveaux de difficulté.

**Importer une map** lit les maps d'**osu!mania** (.osz, .osu), de **StepMania** (.sm, .ssc, dans un .zip ou avec leur musique) et de **Quaver** (.qp, .qua), de 4 à 7 voies, avec leur fond. Chaque difficulté a son nombre de voies et sa note de difficulté.

## Entraînement

- **Exercices** : des motifs générés pour une compétence (stream, jumpstream, handstream, jacks, chordjacks, endurance, technique), au tempo et à la durée choisis.
- **Boucle sur un passage** : après une partie, l'analyse propose tes passages les plus ratés ; le passage choisi tourne au ralenti et accélère de 5 % à chaque réussite (93 % ou plus). Échap arrête la boucle.
- **Taux de lecture** (0,5× à 2×) : le morceau entier plus lent ou plus rapide, sans changer la hauteur de la musique. Chaque taux garde ses records.

## Progrès

- **Défi du jour** : un morceau et un réglage imposé, les mêmes pour tout le monde ; les jours réussis de suite sont comptés.
- **Ceintures** : ton niveau dans chaque compétence, d'après tes 5 meilleures parties (difficulté du morceau et précision).
- **Parcours de dans** : 10 dans de 4 morceaux d'affilée, avec une vie qui baisse à chaque erreur et ne remonte jamais.

## Analyse d'après partie

Tes frappes dans le temps (en retard en haut), l'histogramme des écarts, la moyenne de chaque colonne (« ta colonne J est en retard de 12 ms »), la moyenne, l'écart-type et l'UR, et jusqu'à 3 passages à retravailler. L'écran de fin montre aussi la courbe de précision le long du morceau.

## Réglages

- **Volume** de la musique.
- **Son des clics** : le son joué à chaque note touchée, au choix parmi 10 (Doux, Clap, Bois, Grosse caisse, Cristal, Pop, Charleston, Caisse claire, Pluck, Tok) ou aucun. Perdre un combo de 10 ou plus joue un son « combo cassé ».
- **Voies** (4 à 7), **Vitesse** (auto ou 1 à 10), **Taux**, **Sévérité** (0 à 10).
- **Notes longues** : seul le début est jugé, ou le début et la fin (lâcher au bon moment).
- **Mines** : des notes à ne pas toucher ; si leur touche est tenue quand elles passent, elles coûtent 200 points et le combo.
- **Notes** en barres, flèches ou cercles ; **Couleurs** par voie ou par temps (noires, croches, doubles-croches…).
- **Écran** complet ou épuré (seulement les notes et le jugement) ; **Fond** uni ou visualiseur de la musique.
- **Décalage audio** (−300 à +300 ms) : il se règle tout seul après chaque partie. Si tu frappes en moyenne en retard ou en avance, le jeu corrige une bonne partie de l'écart ; tu peux aussi le changer à la main.

## Données et synchronisation

Tes scores et notes par niveau et tes réglages sont enregistrés par NeoDex, sauvegardés et synchronisés entre tes PC si la synchro est activée. Au premier lancement, le plugin reprend ce que tu avais déjà dans NeoDex.

## Installer

Dans NeoDex : **NeoStore → À découvrir → Rythme → Installer**.

Développer un plugin : voir le [SDK NeoDex](https://github.com/NDesumeur/neodex-sdk).

## Version 1.9.0

- 4 à 7 voies, taux de lecture sans changer la hauteur, sévérité, mines, fins de notes longues jugées, formes et couleurs des notes, écran épuré, visualiseur.
- Import des maps osu!mania, StepMania et Quaver.
- Onglets Entraînement (exercices, boucle sur un passage) et Progrès (défi du jour, ceintures, parcours de dans).
- Analyse d'après partie : frappes, histogramme, colonnes, passages à retravailler.

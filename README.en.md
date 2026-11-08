# Rythme (Rhythm)

A 4-lane rhythm game: notes fall towards a line, and you press the right key the moment they touch it. 200 tracks composed and played by the game itself, each in 4 difficulties, or levels created from your own music.

*Version française : [README.md](README.md)*

## How to play

- **D**, **F**, **J**, **K** (or the **← ↓ ↑ →** arrows): one key per lane.
- Press when the note touches the line at the bottom; **hold** the key on long notes until the end.
- **Space**: play · **P**: pause · **Full screen** during the game.

## Accuracy and points

Each note is judged by how far it is from the right moment: **Perfect** (±45 ms, 300 points), **Good** (±90 ms, 200 points), **OK** (±140 ms, 100 points), otherwise a miss.

A note's points rise by 1 % per note of combo, up to double at 100 notes in a row; a miss resets the combo. At the end, accuracy gives a grade: **S** from 95 %, **A** at 90 %, **B** at 80 %, **C** at 70 %, **D** below. The best score and grade are kept for each track and each difficulty.

## Songs

The **Songs** tab offers 200 tracks composed by the game: each has its own tempo, scale, chords, drums and lead sound, and its notes are always the same from one game to the next. Each track comes in **Easy**, **Normal**, **Hard** and **Expert**.

These tracks are also used by the NeoTha, Prisme and Pulsar games.

## My music

In **My music**, create a level from an imported **audio file** or a track from your **NeoMusic** library: the game detects its tempo and strong beats and builds 4 difficulty levels from them.

## Settings

- Music **volume**.
- **Audio offset** (−300 to +300 ms): it adjusts itself after each game. If you hit late or early on average, the game corrects most of the gap; you can also change it by hand.

## Data and sync

Your scores and grades per level and your settings are stored by NeoDex, backed up and synced between your PCs when sync is on. On first launch, the plugin picks up what you already had in NeoDex.

## Install

In NeoDex: **NeoStore → Discover → Rythme → Install**.

Building a plugin: see the [NeoDex SDK](https://github.com/NDesumeur/neodex-sdk).

# Rythme (Rhythm)

A 4 to 7 lane rhythm game: notes fall towards a line, and you press the right key the moment they touch it. 1200 tracks composed and played by the game itself, each in 4 difficulties, levels created from your own music, and osu!mania, StepMania and Quaver maps.

*Version française : [README.md](README.md)*

## How to play

- **D**, **F**, **J**, **K** (or the **← ↓ ↑ →** arrows) in 4 lanes; other keys in 5, 6 and 7 lanes (Space in the middle for 5 and 7). Each lane count keeps its own keys, to change in the settings.
- Press when the note touches the line at the bottom; **hold** the key on long notes until the end.
- **Space**: play · **P**: pause · **Full screen** during the game.

## Accuracy and points

Each note is judged by how far it is from the right moment: **Perfect** (±45 ms, 300 points), **Good** (±90 ms, 200 points), **OK** (±140 ms, 100 points), otherwise a miss. These windows are strictness 5: from 0 (widest) to 10 (tightest).

A note's points rise by 1 % per note of combo, up to double at 100 notes in a row; a miss resets the combo. At the end, accuracy gives a grade: **S** from 95 %, **A** at 90 %, **B** at 80 %, **C** at 70 %, **D** below. The best score and grade are kept for each track and each difficulty.

## Songs

The **Songs** tab offers 1200 tracks composed by the game: each has its own tempo, scale, chords, drums and lead sound, and its notes are always the same from one game to the next. Each track comes in **Easy**, **Normal**, **Hard** and **Expert**.

These tracks are also used by the NeoTha, Prisme and Pulsar games.

## My music

In **My music**, create a level from an imported **audio file** or a track from your **NeoMusic** library: the game detects its tempo and strong beats and builds 4 difficulty levels from them.

**Import a map** reads **osu!mania** (.osz, .osu), **StepMania** (.sm, .ssc, in a .zip or with their music) and **Quaver** (.qp, .qua) maps, from 4 to 7 lanes, with their background. Each difficulty has its lane count and difficulty rating.

## Training

- **Exercises**: generated patterns for one skill (stream, jumpstream, handstream, jacks, chordjacks, stamina, technical), at the chosen tempo and length.
- **Section loop**: after a game, the analysis offers your most missed sections; the chosen one loops slowed down and speeds up by 5% each time you pass it (93% or more). Esc stops the loop.
- **Playback rate** (0.5× to 2×): the whole song slower or faster, without changing the pitch. Each rate keeps its own records.

## Progress

- **Daily challenge**: a song and a forced setting, the same for everyone; days passed in a row are counted.
- **Belts**: your level in each skill, from your 5 best games (song difficulty and accuracy).
- **Dan courses**: 10 dans of 4 songs in a row, with a life bar that drops on every mistake and never comes back.

## Post-game analysis

Your hits over time (late at the top), the offset histogram, each column's mean (« your J column is 12 ms late »), the mean, deviation and UR, and up to 3 sections to practise. The end screen also shows the accuracy curve across the song.

## Settings

- Music **volume**.
- **Hit sound**: the sound played on each note you hit, one of 10 (Soft, Clap, Wood, Kick, Crystal, Pop, Hi-hat, Snare, Pluck, Tock) or none. Losing a combo of 10 or more plays a « combo break » sound.
- **Lanes** (4 to 7), **Speed** (auto or 1 to 10), **Rate**, **Strictness** (0 to 10).
- **Long notes**: only the start is judged, or the start and the end (release on time).
- **Mines**: notes not to touch; if their key is held when they pass, they cost 200 points and the combo.
- **Notes** as bars, arrows or circles; **Colours** by lane or by beat (quarters, eighths, sixteenths…).
- **Screen** full or clean (only notes and judgement); **Background** plain or a music visualizer.
- **Audio offset** (−300 to +300 ms): it adjusts itself after each game. If you hit late or early on average, the game corrects most of the gap; you can also change it by hand.

## Data and sync

Your scores and grades per level and your settings are stored by NeoDex, backed up and synced between your PCs when sync is on. On first launch, the plugin picks up what you already had in NeoDex.

## Install

In NeoDex: **NeoStore → Discover → Rythme → Install**.

Building a plugin: see the [NeoDex SDK](https://github.com/NDesumeur/neodex-sdk).

## Version 1.9.0

- 4 to 7 lanes, playback rate without pitch change, strictness, mines, judged long note ends, note shapes and colours, clean screen, visualizer.
- osu!mania, StepMania and Quaver map import.
- Training tab (exercises, section loop) and Progress tab (daily challenge, belts, dan courses).
- Post-game analysis: hits, histogram, columns, sections to practise.

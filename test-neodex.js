// lancé par le test « local » de NeoDex : plein écran, touches tapées alors que NeoDex a le clavier, puis fluidité en jeu
module.exports = async ({ pj, js, sleep }) => {
  { // les touches réglables : la 1re case prend Q, puis reprend sa touche d'avant
    const r = await pj(`(async () => { const b = document.querySelector('.rhKeys button'); if (!b) return 'pas de réglage des touches'; const old = b.textContent;
      const press = k => dispatchEvent(new KeyboardEvent('keydown', {key: k, bubbles: true}));
      b.click(); press('q'); await new Promise(r => setTimeout(r, 50)); if (b.textContent !== 'Q') return 'touche non prise : ' + b.textContent;
      b.click(); press(old.toLowerCase()); await new Promise(r => setTimeout(r, 50)); return b.textContent === old ? '' : 'touche non rendue'; })()`);
    if (r) throw new Error(r);
  }
  await pj(`document.querySelector('#rhSongs .rhSong .btn')?.click(), 0`); await sleep(9000);  // un morceau intégré (son rendu prend quelques secondes)
  await pj(`document.getElementById('rhFs').click(), 0`); await sleep(1200);
  const fs = await pj(`!!document.fullscreenElement`);
  await pj(`document.exitFullscreen?.().catch(() => {}), 0`); await sleep(800);
  if (!fs) throw new Error('le plein écran ne s\'ouvre pas');
  // la page NeoDex reprend le clavier, puis espace : la partie doit démarrer quand même
  await js(`document.activeElement?.blur(), document.body.focus(), document.body.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', code: 'Space', bubbles: true })), 0`);
  await sleep(3000);
  const mode = await pj(`document.getElementById('rhCanvas').__rh().mode`);
  if (mode !== 'play') throw new Error('espace tapé dans NeoDex n’a pas lancé la partie : ' + mode);
  const r = await pj(`new Promise(ok => { const d = []; let l = performance.now(), n = 0; const f = t => { d.push(t - l); l = t; if (++n < 240) requestAnimationFrame(f); else ok(d); }; requestAnimationFrame(f); })`);
  const s = [...r].sort((x, y) => x - y), avg = r.reduce((x, y) => x + y, 0) / r.length, p95 = s[Math.floor(s.length * .95)], slow = r.filter(x => x > 25).length;
  if (1000 / avg < 50 || slow > 12) throw new Error('saccades : ' + Math.round(1000 / avg) + ' i/s, ' + slow + ' images lentes');
  // fin du morceau avancée, avec une partie inventée (un passage plus difficile au milieu) : l'écran de fin doit montrer la courbe de précision
  await pj(`(() => { const rh = document.getElementById('rhCanvas').__rh(), L = rh.c.len, h = []; for (const n of rh.notes) n.judged = true; for (let i = 0; i < 200; i++) { const t = i / 200 * L, mid = t > L * .4 && t < L * .6; h.push([t, mid ? (i % 3 ? 1 : 0) : (i % 7 ? 3 : 2)]); for (let r = 0; r < 4; r++) rh.hits.push([t + r * .1, (i + r) % 4, mid ? (i % 3 ? .12 : null) : ((i + r) % 4) * .004]); } rh.hist = h; rh.t0 -= L + 3; return 0; })()`); await sleep(1500);
  const end = await pj(`(() => { const rh = document.getElementById('rhCanvas').__rh(); return [rh.mode, rh.hist.length].join(','); })()`);
  if (end !== 'over,200') throw new Error('écran de fin sans courbe : ' + end);
  const ana = await pj(`(() => { const a = document.getElementById('rhAna'); return a.hidden ? 'cachée' : document.querySelectorAll('#rhAnaBtns button').length + ' passages, ' + document.getElementById('rhAnaTxt').textContent; })()`);
  if (!/^[1-3] passages/.test(ana)) throw new Error('analyse : ' + ana);
  // les nouveaux réglages : 7 voies, puis taux ×1,5 (musique étirée sans changer de hauteur)
  const set = (id, v) => pj(`(() => { const s = document.getElementById('${id}'); s.value = '${v}'; s.dispatchEvent(new Event('change')); return 0; })()`);
  if (await pj(`document.querySelectorAll('#rhOpts2 select').length`) !== 10) throw new Error('carte des réglages de jeu absente');
  await set('rhK', '7'); await sleep(9000);
  const k7 = await pj(`(() => { const rh = document.getElementById('rhCanvas').__rh(); return [rh.K, document.querySelectorAll('.rhKeys button').length, rh.notes.every(n => n.lane < 7), new Set(rh.notes.map(n => n.lane)).size].join(','); })()`);
  if (k7 !== '7,7,true,7') throw new Error('7 voies : ' + k7);
  await set('rhRate', '1.5'); await sleep(12000);
  const r15 = await pj(`(() => { const rh = document.getElementById('rhCanvas').__rh(); return rh.rate + ',' + (rh.c.buffer.duration / (rh.c.len + 1.5)).toFixed(2); })()`);
  await set('rhRate', '1'); await set('rhK', '4'); await sleep(6000);
  if (!/^1\.5,0\.6[5-9]/.test(r15)) throw new Error('taux ×1,5 : ' + r15);
  // les onglets : un exercice se lance, les dans sont là
  await pj(`document.getElementById('rhTabTrain').click(), 0`); await sleep(300);
  await pj(`[...document.querySelectorAll('#rhSongs button')].find(b => /EXERCICE/.test(b.textContent)).click(), 0`); await sleep(8000);
  const ex = await pj(`(() => { const rh = document.getElementById('rhCanvas').__rh(); return !!rh.info.ex + ',' + (rh.notes.length > 50); })()`);
  if (ex !== 'true,true') throw new Error('exercice : ' + ex);
  await pj(`document.getElementById('rhTabProg').click(), 0`); await sleep(300);
  const dans = await pj(`[...document.querySelectorAll('#rhSongs button')].filter(b => /dan/i.test(b.textContent)).length`);
  if (dans !== 10) throw new Error('dans : ' + dans);
  await pj(`document.getElementById('rhTabSongs').click(), 0`);
  return 'analyse ok (' + ana + '), 7 voies ok, taux ×1,5 ok (' + r15 + '), exercice ok, 10 dans, ' + 'courbe de précision ok, plein écran ok, touche depuis NeoDex ok, ' + Math.round(1000 / avg) + ' i/s en jeu, 95e centile ' + p95.toFixed(1) + ' ms';
};

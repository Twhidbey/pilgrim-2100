// THE KEY MOMENTS OF EACH LEVEL (object MO, build 663; art direction chat; owner: "using the menu to move between parts
// of level is clunky"). One list for the whole game: the contents page in a level (keepsakes.js) shows the current
// level's moments as chapter lines and goes to one at a touch; the editor's jump list (editor.js) uses the same list.
//   MO.POINTS      [level, name, [[editor's name, test, the child's short name] ...]]
//   MO.jumpTo(i, j, done)   begins level POINTS[i] again and fast-forwards silently, as the play-through test plays
//                  (holds to walk, passes lines, does every act, picks the way on), until moment j's test is true
//   MO.reached(lv) how far the child has been in that level on this device (kept in localStorage 'pp-seen')
//   MO.here()      the moment he is at now in the current level
// A moment is listed for the child only once reached, so nothing is given away. Add a level's moments here when a
// level is built or its phases change.
const MO = (() => {
  const lvl = () => CR.on ? 5 : RM.on ? 4 : HL.on ? 3 : SL.on ? 2 : 1;
  const text = () => { const d = document.getElementById('dlg'); return d.classList.contains('on') && !d.classList.contains('hint') ? d.querySelector('.t').textContent : ''; };
  const said = (a, i = 0) => () => { const t = text(), w = a && a[i] && a[i][1]; return !!(t && w && t.slice(0, 24) === w.slice(0, 24)); };
  const P3 = (...ps) => () => ps.includes(HL.peek().ph), P2 = (...ps) => () => ps.includes(SL.peek().ph), P5 = (...ps) => () => ps.includes(CR.peek().ph), R4 = id => () => RM.peek().room === id;
  const END = () => G.state === 'end';
  const POINTS = [
    [1, 'The city', [['The start: he wakes', null, 'He wakes'], ['Phillip under the highway', said(typeof EVAN !== 'undefined' && EVAN), 'Phillip'], ['The onlookers (the run)', said(typeof WATCH !== 'undefined' && WATCH), 'The onlookers'], ['The two men in the port', said(typeof NEIGH_CALL !== 'undefined' && NEIGH_CALL), 'The two men'], ['The choice', () => G.state === 'choice', 'The choice'], ['The barricade', said(typeof GATEWORDS !== 'undefined' && GATEWORDS), 'The barricade'], ['The end card', END]]],
    [2, 'The fields', [['The start: the fields', null, 'The fields'], ['Into the flood', P2('fall'), 'The flood'], ['The young man turns back, the choice', P2('pli'), 'Turning back'], ['Swimming alone', P2('wade'), 'Swimming alone'], ['Out in the middle', P2('stuck'), 'Out in the middle'], ['Help comes in his boat', P2('help'), 'Help'], ['Hauled out; the history', P2('drawn', 'hist'), 'Hauled out'], ['Looking back', P2('look'), 'Looking back'], ['"Go on your way"', P2('onway', 'on'), 'On his way'], ['The end card', END]]],
    [3, 'The mountain', [['The start: the plain', null, 'The plain'], ['A stranger under the oak', P3('meet'), 'The stranger'], ['Turning aside', P3('aside'), 'Turning aside'], ['The rocky path', P3('path'), 'The rocky path'], ['Under the burning mountain (wide shot)', P3('still'), 'Under the mountain'], ['Phillip comes', P3('come', 'evan'), 'Phillip'], ['Running back', P3('back'), 'Running back'], ['The gate', P3('gate'), 'The gate'], ['Knocking', P3('knock'), 'Knocking'], ['The door opens', P3('open'), 'The door opens'], ['Pulled in, the arrows', () => HL.peek().pull > 25, 'Pulled in'], ['The end card', END]]],
    [4, 'The house (not built)', [['The door at night', null, 'The door'], ['1 The picture', R4('r1'), 'The picture'], ['2 The dusty parlour', R4('r2'), 'The parlour'], ['3 Passion and Patience', R4('r3'), 'Passion and Patience'], ['4 The fire behind the wall', R4('r4'), 'The fire'], ['5 The palace', R4('r5'), 'The palace'], ['6 The iron cage (darker rooms on)', R4('r6'), 'The iron cage'], ['7 The dream (darker rooms on)', R4('r7'), 'The dream'], ['Leaving', R4('leave'), 'Leaving'], ['The end card', END]]],
    [5, 'The steeple', [['The start: between the walls', null, 'Between the walls'], ['The climb', () => CR.peek().ph === 'walk' && CR.peek().night < .6, 'The climb'], ['At the cross: the burden falls', P5('cross'), 'The burden falls'], ['The burden tumbles to the tomb', P5('tumble'), 'The tomb'], ['The sunrise, Amazing Grace', P5('gone'), 'The sunrise'], ['The three in light', P5('shine'), 'The three in light'], ['The three leaps', P5('leaps'), 'Three leaps'], ['The end card', END]]]];
  // how far he has been, per level, kept on the device
  const seen = (() => { try { return JSON.parse(localStorage.getItem('pp-seen') || '{}') || {}; } catch (e) { return {}; } })();
  const keep = () => { try { localStorage.setItem('pp-seen', JSON.stringify(seen)); } catch (e) {} };
  let cur = 0, curLv = 0, busy = false;
  // watch the level as it is played: note the latest moment whose test is true
  setInterval(() => {
    if (busy || typeof G === 'undefined' || G.state === 'title' || (typeof KS !== 'undefined' && KS.paused)) return;
    const lv = lvl(), ps = POINTS[lv - 1][2];
    if (lv !== curLv) { curLv = lv; cur = 0; }
    for (let j = ps.length - 2; j > 0; j--) { let ok = false; try { ok = ps[j][1] && ps[j][1](); } catch (e) {}
      if (ok) { cur = j; if (!(seen[lv] >= j)) { seen[lv] = j; keep(); } break; } }
  }, 300);
  const quiet = on => { try { if (typeof AC !== 'undefined' && AC && MASTER) { MASTER.gain.cancelScheduledValues(AC.currentTime); MASTER.gain.setTargetAtTime(on || muted ? 0 : 1, AC.currentTime, on ? .005 : .25); } } catch (e) {} };
  function begin(lv) { if (G.state === 'title' && typeof openBook === 'function') openBook(); hush(); dlg.className = ''; choiceEl.className = ''; document.body.classList.remove('talking', 'capped', 'slough');
    G.capQ.length = 0; G.cap = 0; G.hint = null; G.act = null; G.ring = null; G.state = 'wait'; document.getElementById('endc').className = 'card';
    if (lv === 5) go5(); else if (lv === 4) goRoom('door'); else if (lv === 3) go3(); else if (lv === 2) go2(); else start(); cur = 0; curLv = lv; }
  // one tick of play as the play-through test plays it
  function tick() { if (G.state === 'choice') pick(false); keys.r = G.state === 'play';
    if (G.state === 'dialog') { if (G.act === 'gate' || G.act === 'walkon' || (RM.on && RM.HOLDS.includes(G.act))) keys.push = true; else if (G.act === 'hand') SL.grip(); else if (G.act === 'light') lightTouched(); else if (CR.on && G.act) CR.key(); else if (RM.on && G.act) RM.key(); else if (HL.on && G.act) HL.key(); else if (!G.act) next(true); }
    update(); }
  function settle() { keys.r = keys.push = false; downs.clear(); G.calm = G.t; G.guard = 0; dlg.classList.remove('wait'); }
  let busyEl = null;
  function jumpTo(i, j, done) {
    if (busy || (typeof KS !== 'undefined' && KS.paused)) return false; busy = true; quiet(true);
    if (!busyEl) { busyEl = document.createElement('div'); busyEl.id = 'mobusy'; busyEl.textContent = 'Turning the pages…';
      busyEl.style.cssText = "position:fixed;inset:0;z-index:61;display:none;align-items:center;justify-content:center;background:#0f0f13;color:rgba(244,236,220,.75);font:italic 18px 'IM Fell English',Georgia,serif"; document.body.appendChild(busyEl); }
    busyEl.style.display = 'flex';
    const [lv, , ps] = POINTS[i], cond = ps[j][1]; begin(lv);
    const t0 = Date.now(), poll = setInterval(() => {
      if ((G.state === 'wait' || G.state === 'title') && Date.now() - t0 < 10000) return;
      clearInterval(poll);
      // a time limit, not a tick count: the house changes rooms on real timers, so while a room waits ('wait') the page is
      // let run a moment before ticking on
      const tStop = Date.now() + 90000; const run = () => { const tEnd = performance.now() + 40;
        while (cond && !cond() && G.state !== 'end' && performance.now() < tEnd) { if (G.state === 'wait') break; tick(); }
        if (cond && !cond() && G.state !== 'end' && Date.now() < tStop) return setTimeout(run, G.state === 'wait' ? 40 : 0);
        settle(); cur = j; busyEl.style.display = 'none'; busy = false; setTimeout(() => quiet(false), 60); if (done) done(); };
      run(); }, 50);
    return true;
  }
  return { POINTS, jumpTo, lvl, reached: lv => seen[lv] || 0, here: () => cur, get busy() { return busy; } };
})();

# Pilgrim 2100: handoff

## START HERE

- **Where things stand: build 3 (see below).** At build 1 (Nov 26 2026) the repository was only seeded. Carried over from the 1678 game (`Twhidbey/pilgrims-progress`): Bunyan's text, the far light (`heaven.js`), Christian's pictures, the recorded sounds, the picture, video and voice tools, and a fresh `CLAUDE.md` holding only the lasting rules.
- **The owner's words (Nov 26 2026):** "looking to make a big change - early on I considered making this 2100 version"; "we need an entire transformation - new words too"; a fresh start "without a bunch of overwriting". The year 2100 is taken from the repository's name.
- **Nov 26 2026, the owner's direction:** storyboards first, starting with look and colours; this game more open-ended, with three or four choices a level that make a real difference, and thinking-kind game elements here and there; a new story carrying the book's major ideas (see "Rules for play" in `CLAUDE.md`). **Four look-and-colour studies were shown** (drawn in code, not in the repo; the same returning frame in each): A the drowned city at blue hour (Hasui, Whistler: still water, towers in mist, a narrow causeway; indigo, slate, silver, one amber light); B the ash plain at first light (Friedrich's Monk by the Sea: nearly all sky, a line of fallen pylons; bone, ash, umber, pale lemon); C the green return by moonlight (Kuindzhi: a viaduct given back to the trees, the moon's road on a river; deep teal, moss-black, silver-green); D the long road at dawn (Levitan, Friedrich: stilled turbines on misty ridges, an old highway; lilac, blue-violet, peach). Offered: they need not be rivals, they could be four places of one journey (a colour script). Waiting on the owner's reaction.
- **Nov 26 2026, the story and world given by the owner** (his words are in `CLAUDE.md`, "THE STORY AND THE WORLD"): a bomb dreamed, eyes opening, a land at war before the end, more ruin level by level, farming machines that stop and become statues, allegory by subtle strokes. **A first six-frame storyboard of the opening was shown** (drawn in code, not in the repo): 1 a whole lit city at night across dark fields; 2 the flash, silent, every tower a black shape; 3 the cloud, vast over a small land (John Martin: awe first); 4 his eyes open, the white becoming grey light between two lids; 5 from his window the same city still standing, smoke from three fires; 6 the land he walks out into at dusk: fields worked by tall machines, one stopped for good, fires far off, the far light ahead. Waiting on the owner's reaction, on where his coded eyes are, and on who the players now are.
- **Nov 27 2026: still for kids, PG; keep the old look of the Slough, the mountain and the Cross and add our age to it** (the owner's words and a table of what each thing becomes are in `CLAUDE.md`). A sheet of six sketches over the old levels' stills was shown. The build will start from the old engine and Levels 2, 3 and 5 brought over, not from nothing. Open: what wakes him now that books are the burden; his personal belonging; where his coded eyes are.
- **Build 2 (Nov 27 2026): the old engine and Levels 1, 2, 3 and 5 are here and play through** (the house, Level 4, was left behind; `rooms.js` is a stand-in). Nothing is changed in them yet. The owner's answers: the dream wakes him; he keeps his book in his hand; the burden is a pack of his civilization's stuff, not shown inside. His coded eyes are an uncommitted lab in the chat "Whole game: gamewide recommendations"; that chat was asked to push them to a branch `eyes` of the old repository. **First real piece to build: the owner chooses** (proposed: the fields and no man's land in the Slough, or the steeple and graveyard at the Cross).
- **Build 3 (Nov 27 2026): the Slough has its first signs of our age** (farm machines over the fields, wire, hedgehogs, a wreck and broken trunks in the mire; `farThings()` in `slough.js`; see `CLAUDE.md`). Before and after stills were sent; waiting on the owner's eyes. **The eyes for the opening:** the "Whole game" chat holds them but will not push them without the owner's plain yes, because their shapes are tracked from the owner's own face and this repository is public.
- **Build 4:** the machine redrawn as a huge walking combine at the size of the owner's reference picture (see `CLAUDE.md`). Asked by the owner: can public things live in one repo and most code in a private one (answered in chat; no change made).
- **Build 5:** the fields' machines are now two copies of one painted walking combine (`assets/mech.webp`), far off in the mist behind the trees (see `CLAUDE.md`).
- **Build 6:** the two machines darker; the mire's war things removed (see `CLAUDE.md`). The no man's land is still to be designed.
- **Build 7:** the plain's trees are darker than the machines behind them (see `CLAUDE.md`).
- **Build 8:** the city in the sky over the far light is gone from the Slough's plain.
- **Build 9:** the machines are flat silhouettes in two poses; the wavy rows are ground texture under everything; a new diffuse mist layer (see `CLAUDE.md`).
- **Build 10:** the plain composed: one framing tree, the near machine, the light, the far machine; nothing overlaps through the walk (see `CLAUDE.md`).
- **Build 11:** the far machine has its own painted pose, mid-stride (see `CLAUDE.md`).
- **Next, in this order (each waits on the owner):**
  1. The world: one of the old concept page's four directions (A Fallen towers, B Rust and ash, C The green return, D Glass age) or a new one, redrawn to the art direction in `CLAUDE.md`. Show stills; build nothing first.
  2. The retelling: who and what each person and place becomes in 2100, and a first draft of the first scene's words, checked against the book file.
  3. A colour script and a level list for the whole game.
  4. Then the engine and the first level in `index.html`, borrowing from the old game's engine (see "Files" in `CLAUDE.md`), with tests from its `tools/`.
- **GitHub Pages:** must be switched on once by the owner (Settings, Pages, "Deploy from a branch", `main`, `/ (root)`). The link is then https://twhidbey.github.io/pilgrim-2100/.

## Spending

Running total for this project: **about $0.30** (build 5: one picture of the two machines; build 11: the second pose).

## Voices

None designed yet. The old game's designed voices (the storyteller, Christian and the others) are described in its `HANDOFF.md` and their IDs are in `tools/make-voice.py`; whether they serve the new telling is the owner's choice.

# Pilgrim 2100: notes for Claude

A gentle side-scrolling story walk for kids ages 7 to 10: Bunyan's *The Pilgrim's Progress*, retold in the year 2100. No build step, no dependencies. **Read `HANDOFF.md` ("START HERE") first in a new chat.**

This is a FRESH START (owner, Nov 26 2026: "we need an entire transformation - new words too ... new way to start fresh without a bunch of overwriting"). The sister project `Twhidbey/pilgrims-progress` is the 1678 telling: five built levels, and notes that hold the full history of every lesson below. That game stays as it is. **Nothing here is converted from it level by level: the world, the scenes and the words are thought out again.** What is carried over is only what lasts: the owner's taste, the rules for play, the lessons from bugs, Christian's pictures, the sounds and the tools.

## Files

- `index.html`: for now only a holding page with the build stamp. It will become the game (engine and the first level).
- `book/pilgrims-progress-part-one.txt`: Bunyan's own text of Part One (public domain), section numbers like `{18}`. The story's spine.
- `heaven.js` (object `HV`): THE FAR LIGHT, one drawn light for the whole game: `HV.draw(ctx, x, y, r, a)`. Carried over unchanged.
- `assets/christian-*.pack`: Christian's pictures from the old game (walk, stand, turn with and without the book; run; kneel; weep; wade, stuck, reach; the cross clip; the coat's stand, walk and leap). A `.pack` = count, lengths, WebP frames end to end. His clothes were made timeless on purpose (worn, handmade, layered cloth), so they serve 2100. Delete any that the new game turns out not to use.
- `assets/sfx/`: recorded sounds (footsteps by ground, bog, knocks), mostly CC0; `CREDITS.txt` must stay with them (the knocks are CC-BY-SA).
- `tools/`: `clip-cut.py` (a clip of a figure on white to a sheet: walk or gesture), `video-frames.py`, `gesture-frames.py`, `cutout.py`, `flat-feet.py`, `pack-check.py`, `make-voice.py`. They still name the old game's files in places: fix each when first used here.
- To borrow from the old game when needed (read its code, do not copy blindly): the engine in its `index.html` (camera, baked scenery, `drawFrame`, the words engine `talk`/`caption`/`hint`, voices, touch, sound, the music player, the page's self-update, the Home Screen app), `keepsakes.js` (the ribbon and the contents-page menu), `moments.js` (key moments and silent jumps), `editor.js`, and the tests in its `tools/`.

## Decisions waiting on the owner (nothing is built until these are settled)

1. **The world.** The old concept page (`concept-2200.html` in the old repo, live at https://twhidbey.github.io/pilgrims-progress/concept-2200.html) offers four directions of a quiet, gentle apocalypse: A Fallen towers, B Rust and ash, C The green return, D Glass age. It predates the art direction below and needs a fresh pass. The owner has not chosen.
2. **The year is 2100** (the repository's name; the old notes said 2200).
3. **How the story is retold:** who the people and places become (Evangelist, the City of Destruction, the book in his hand, the burden, the wicket-gate, the Cross), what stays Bunyan's and what is new. The owner wants new words. Every such choice is the owner's.
4. **What the book-as-interface becomes** (the old game opens as a 1678 calf-bound book whose contents page is the menu).

## The book

- **The ideas are Bunyan's; the story is new** (owner: "compelling story with all the major ideas inspired by the ideas from PP"). Before designing a moment, read the part of the book its idea comes from, and say in the storyboard which idea of the book it carries (the burden, the far light, the wrong easy way, help at the worst moment, the burden falling off, and so on). Keep a table here of the book's major ideas and where each lives in the new story, so none is lost.
- **The storyteller only tells the story.** Anything that tells the child what to do is a side message (quiet italics, never spoken).
- **How gently to tell the dark parts** needs the owner's ruling, level by level.

### The book's ideas and where they live in the new story

(to be filled as the storyboards are agreed)

## Working with the owner

- **Repo `Twhidbey/pilgrim-2100`, branch `main`. Pushing `main` publishes the game** once GitHub Pages is on (https://twhidbey.github.io/pilgrim-2100/, a minute or two). Commit and push after every change, then tell the owner it is live; a phone may show an old copy, so give the link with `?v=N`.
- **Build stamp** (`id="build"`, bottom right): `build N · date`. Bump N on every push that changes the game, so one number means one push. **Currently build 1.** If several chats push: `git fetch` and rebase just before pushing, and take the next number.
- **SPEND AS LITTLE AS POSSIBLE.** Before any paid call: say the cost and wait for a yes; keep the running total in `HANDOFF.md`. Rough prices: a video about 56 cents, a picture about 15 cents (25 at 4K), a voice line about a cent, a music piece about 8 cents. Save in this order: do it in code first; reuse frames we have; draft on the cheaper image model; show a still before any video; get two clips from one video (backwards, back and forth); write video prompts that pass the safety filter first time (plain words: "wading", "thick sticky mud", never "drowning" or "desperate"). Free sources first: OpenGameArt for sounds (CC0 preferred, credit anything CC-BY), Wikimedia Commons originals for photographs (public domain or CC0; fetch slowly, it answers 429).
- **Keep `CLAUDE.md` and `HANDOFF.md` updated after every change.** The repo is public: no names, emails or other personal details in notes, code or commits. The image and voice key is never printed and never in the repo.
- **Players:** kids 7 to 10, mostly on an iPhone. Gentle: no lives, no game over, read-aloud words, short simple sentences.
- **BEFORE AND AFTER FOR EVERY CHANGE.** Before touching a picture, take stills of the moments it affects; after, the same moments again; send each pair, before above after, labelled, at twice the size.
- **The owner** looks closely and answers fast; show stills. "What do you think?" wants my opinion; "do it" wants action; "before you code" means only talk. I cannot hear sound or watch motion: say so; their ears and eyes decide.
- **Keep the files trim:** never add dated or numbered copies; delete test pages once done (ask first). Stills for the owner go in the session's scratchpad, not the repo.
- **When a thing is turned down, write "do not bring back" here**, so no later chat tries it again.

## Art direction (the owner's, settled in the old game; it rules here too)

**The look in one sentence: quiet, luminous, REAL landscapes at the edges of the day (dusk, moonlight, first light), mostly sky and mist, with one small pilgrim or holy presence in a vast space; no line, no symbols, no fantasy, nothing lush or busy.** Scenery drawn in code as **atmospheric layered silhouettes, not video-game looking**: each depth layer basically one colour, pale far layers, darker near layers, haze between. For 2100 this means: ruins and what is left of our age are quiet real shapes in mist, never science-fiction illustration, never gadgets, never neon.

**Masters the owner loved:** Friedrich (*Monk by the Sea*, *Morning in the Riesengebirge*, *Abbey in the Oakwood*), Levitan, Kuindzhi (*Moonlit Night on the Dnieper*), Hasui and Yoshida, Nesterov, Millet (*The Angelus*), Vasnetsov, Chełmoński; also Whistler's nocturnes, Rembrandt's one warm light in a great dark, John Martin for vast rock and fire. **Turned down, do not use as models:** engravings and line drawings, ink-wash, icons and gold grounds, literal allegory painted as fairy tale, lush detailed green, fantasy illustration, NASA photographs.

**The rules, for every level:**
1. **Beauty first; each level one stunning picture.** Choose it and the master it learns from before building, and say so in the notes. A frightening thing must awe before it frightens.
2. **Braver emptiness:** more sky, mist and still water; when a scene feels empty, strengthen the sky before adding a thing. Stripped down and elegant: when in doubt take a thing away. One special thing in the picture at a time.
3. **Light at the edges of the day:** give each level a time of day; noon only on purpose.
4. **Decide where the one light is, then make every tone, edge and shadow follow from it.** A thing lit from behind is in shadow toward us. Holy light glows by darkening what is round it (Kuindzhi), not by brightening it. One light at a time; light on a surface is a soft pool, never a pattern of lit tiles; light on the ground is flat.
5. **Hold colour back for grace:** plan a colour script for the whole game before the first level; full gold only at the Cross and the City; neighbouring levels never share a key.
6. **Christian always reads:** at least a 30% lightness step from the ground directly behind him, made by mist or pale sky BEHIND him, never by lighting him. Mist goes behind or beside a figure, never between him and what he stands in.
7. **One returning frame in every level:** Christian small at the left third, the far light ahead at the right third, a low horizon.
8. **The road carries the meaning:** the right way one narrow, straight, level band; wrong ways crooked, wider and easier-looking.
9. **Faith shown small:** never a symbol drawn large; the meaning comes from the story, the pictures stay real places.
10. **Flat, not deep:** a flat side view with a far horizon, like a long lens; mist in layers of ridges for distance. Far things all slide at nearly one slow pace as the camera moves, and do not zoom against the land.
11. **Show a vast thing's size by what does not fit and by moving the camera along it, never by shrinking the person the child steers.** Anything drawn ON a great thing is a measure of it: keep it small.
12. **Scale told to the image model:** it paints things at the size of a near, small place unless shown; draw figures at the game's true size on the layout as a guide. To get a REAL-looking thing, give it no stylised picture to copy; describe the real thing in words. Ask for 4K when the camera will come close.

**People:** monochrome watercolour figures taken from AI video ("that walk looks AMAZING"); AI image tools cannot make walk cycles, AI video can. Frames are grey and tinted in the game for the light. **Clothes timeless.** **Faces plain** (no eyes or mouth, a soft wash; say so in every prompt), but Christian's side-on profile shows. Every clip at its own video speed, never sped up. **NEVER FLOATING (a common complaint of the owner's):** every figure stands with his feet sunk a little INTO the ground (about 5 to 7% of his height, more on a slope), taking that ground's tone at his feet or a contact shadow clipped to it; before showing any still, crop his feet, enlarge them and look. **FLAT FEET:** in every standing or planted pose both soles rest on ONE line; measure the soles of every new figure and fix with `tools/flat-feet.py`. **No code breathing or swaying of a still picture** in close scenes: figures move by real frames. A figure in the scene is the darkest or the lightest thing near him on purpose, never a pale ghost.

**Seams and craft:** look at close-up stills at twice the size before calling a scene done; wherever one thing fades into another, crop the join and enlarge it: a fade must end fully clear, a blend must never run along one straight line, an added patch must not read as a smudge or a box. A fade between two shapes must lie wholly over the shape it fades into. Do not cover the scene with words: a thin strip of light text low in the picture, no box. Trees: real plain kinds, no two alike in a scene, one dark tone, never several bright greens; a special tree is never reused in another scene. Smoke and cloud: soft, never crisp or photographic. A falling or bouncing thing is simulated (gravity, a bounce that loses speed), never scripted.

## Rules for play

**THE NEW DIRECTION FOR THIS GAME (owner, Nov 26 2026): "this version can be slightly more open ended - maybe less uni directional but with choices that actually make a difference (maybe 3-4 per level) and game like elements here and there (though really a thinking man's game and visually stunning with compelling story with all the major ideas inspired by the ideas from PP)"; and "we need storyboards - let's use painting artistic direction notes - maybe first get some ideas on look and colors - simple".** So, unlike the 1678 game: (1) each level has about three or four choices that change what follows (a way taken, a person trusted, a thing carried or left), not choices that come back to the same place; (2) the way is less one-directional; (3) game-like elements here and there, of a thinking kind (working something out, reading a place), never reflexes; (4) the story is NEW, carrying the book's major ideas, not its scenes line by line. How choices carry forward, and what a wrong way costs, is to be designed in the storyboards and agreed with the owner before any level is built. Work in this order: look and colours, then storyboards, then building.

The rules below are the old game's. They hold unless the new direction above changes them (marked).

- **No jumps, no score, no counter, no lives, no game over** (gentle; a wrong way has a cost in the story, as the Slough and the burning hill do in the book, and a way back). *Changed:* the old rule "one way to go ... nothing can be missed" no longer holds.
- **Hold to walk; a tap only touches. Hold anywhere** on the screen, also outside the picture. **Nothing moves on its own except the words**, apart from story moves the owner agrees to one by one.
- **Words stay with what they tell of:** fixed places on the road; give the road room so stops hold him a moment at most.
- **A line never starts over another voice.** No skipping by accident: a line cannot be tapped away until its recording has finished.
- **Less waiting:** about 2 minutes of speech a level; never more than about 5 lines in a row before the child acts; the storyteller never describes what the picture shows; when people meet or part, say the first and last lines while they walk.
- **One text size**, from the picture's height; never too small to read.
- **The book is the only interface** in the old game (one ribbon, the contents page as the menu, no row of buttons). What takes its place here is open, but keep the rule's spirit: one quiet way in, no game-like buttons.
- **Sound: silence and the world's own sounds are the ground; music is punctuation at a few moments.** One loudness rule each for footsteps, for all effects and for weather, so each can be changed in one place; keep them quiet (the owner halved the footsteps and wanted rain "atmospheric not dominant").
- **Phones:** check every screen on an emulated iPhone upright and sideways; test walking with real touches, not only keys; upright, use the whole screen (words in the dark space below the picture).

## Lessons (bugs that happened in the old game)

- **Never put a `//` comment before other code on the same line** (it swallowed the code after it, four times). Run a syntax check (`new Function(source)`) before every push.
- A level's own update must not move the engine's clock; measure ticks a second when timing feels wrong.
- Never draw from a canvas that changed this frame into another canvas; bake once and draw from the bakes. Don't rely on `ctx.filter` (iPhone): paint small and stretch up. To blur, halve and double step by step.
- Sample any outline at fixed places on the land, never from the screen's edge (it shimmers).
- A cache freed and filled by two conditions must not overlap them, or it is rebuilt every tick; measure update and draw time apart.
- A value worked out afresh each frame from a limit has corners: work out the whole movement's line first and smooth it.
- Cutting a figure from white: paper is only what reaches the frame's edge through near-white; never clear white inside the figure except between the feet; a pack with two figures is never made solid as one outline.
- A walking video must be checked for sliding feet and for zoom (videos zoom though told not to: measure and undo). A walk loop is one WHOLE stride, not a step.
- After touching sound, check that recordings really start. Change a line's words and it must be recorded again, or it goes silent.
- Anything seen in the first picture loads before the first touch.

## Making pictures, videos and voices (costs money: ask first)

The owner's key is saved in the cloud environment as `GEMINI_API_KEY` (never print it). Pictures: `gemini-3-pro-image` (`generateContent`, `responseModalities: ['TEXT', 'IMAGE']`, reference pictures as `inlineData` before the text). Video: `gemini-omni-1.2-flash` through the Interactions API, about 8 s; give a first and a last picture; a figure small on white, a flat side view, hands empty, a move with a settled end that can be held. **Every video must earn its keep across the whole game:** list where else it will serve before proposing it. Voices: Gemini TTS through `tools/make-voice.py`, designed voices, each line checked by transcription; about 100 requests a model a day. Music: `lyria-3-pro-preview` (it cannot make sound effects). Free: FLUX Kontext on Hugging Face (edits one picture by words), and Modal's monthly credits for image-to-video (set up in the old repo's `clips` branch and workflow; not set up here yet). The old notes hold the working details of each.

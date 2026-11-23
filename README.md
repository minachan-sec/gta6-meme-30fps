[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/minachan-sec/gta6-meme-30fps/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/minachan-sec/gta6-meme-30fps/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

# "Best We Can Do Is 30 FPS" — a GTA 6 meme for make.fun

An entry for the [gta6-meme-x-01](https://make.fun/bounty/gta6-meme-x-01) contest: post a GTA 6 meme on X.

## The joke

A fan buys a brand-new PS5 Pro for one reason only: Grand Theft Auto VI. He
unboxes it, settles onto the sofa, boots the game up — and the screen reads
**30 FPS**. Rockstar's launch target for GTA 6 on consoles is 30 frames per
second, with no 60 FPS mode at launch, even on the most powerful PlayStation
money can buy. The picture says the quiet part out loud: the most expensive
console on the shelf, the most anticipated game of the decade, and the
framerate of a slideshow. It stung because it was true — launch week was
full of fans doing exactly this maths.

The meme shows a disappointed gamer slumped on his sofa in front of a big
TV flashing "30 FPS", the PS5 Pro box still beside him. Top text: "BOUGHT
A PS5 PRO JUST FOR GTA 6". Bottom text: "ROCKSTAR: BEST WE CAN DO IS
30 FPS". A make.fun badge — the white ghost mascot and the name — sits in
the bottom-right corner.

## The post

The meme was posted from the public X account **@bobbostqq**:

- Post: https://x.com/bobbostqq/status/2124717996929393142
- Play code in the post: `makefun-collar-opal-outlet`

The post text names @makefunai and points readers at the contest, so anyone
who laughs at the joke can see where agents and humans win bounties.

## Handing it in

The entry is deliberately small. `POST.json` holds one thing: the URL of the
X post above. `main.ts` is the hand-in script — it reads `POST.json` from
the bot directory, checks it is valid JSON carrying a `url` string (and
fails loudly with exit code 1 if it is not), then copies it byte-for-byte
into the output directory. The house reads the post itself from X, so the
script does nothing more than deliver the pointer.

## Provenance

The base meme image was AI-generated on 22 November 2026. The make.fun
ghost badge was added on 23 November 2026, using the ghost from make.fun's
own press kit (`ghost-only.svg`, included here). The picture in this repo,
`meme.jpg`, is the exact image attached to the X post.

## License

MIT — see [LICENSE](LICENSE).

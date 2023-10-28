---
layout: post
title: "SyncThing"
description: "Open source file synchronization software"
category: software
---

As much I wanted it to work, iCloud file synchronization always gave me headaches. I work with two Macs - one Mini in the office, and a MacBook on the go. In addition, I'm using a large iPad Pro and an older, small iPad Pro for traveling. My work files, mostly Git repositories of projects I am working on and additional reference material, should be shared across all these devices. I tried to use iCloud for this, but it was always a pain to get it to work reliably. I also used Dropbox in the past, but moved away after they went the course of integration everything and whatnot in their software. Also, it was a resource hog.

The problem with iCloud is that you don't really know what's going on. It's a black box. You can't see what's happening, and you can't really control it. When the service thinks your files might have been changed on another device, it will create a copy of the file with a suffix " 2". Sometimes this happens for hundreds of files in a folder, and I resorted to just deleting them with:

```bash
find . -name "*\ 2" -delete
```

Also, sometimes iCloud is not updating at all for some reason. Yesterday, I was fed up with this and installed [SyncThing](https://github.com/syncthing/syncthing) on my Macs. It's a free, open-source file synchronization software that works on all major platforms and works really smoothly. I used it in the past already, and never had a problem. For iOS, there is a third party solution ([MöbiusSync](https://www.mobiussync.com/)) for syncing with you other devices (worked also without problems for me, in a minute).

There is a [goals document](https://github.com/syncthing/syncthing/blob/main/GOALS.md) describing SyncThing if you're interested.

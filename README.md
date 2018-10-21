# video-game-versioning
Convert semantic versions to video game versions

A silly package to transform semver versions into much more exciting video game versions. The result of a
twitter conversation with @pobocks (https://twitter.com/pobocks/status/1052967711456813056)

The versioning is a mish-mash of Street Fighter, classic 80s arcade and 90s cash cow milking.

There is also a demo here: http://howardjones.github.io/playtime/game-versions.html

## Usage

    const gamever = require('@anotherhowie/video-game-versioning');

    gamever.semver_to_game("Excel", "1.1.0")
    //=> "New Excel Plus"

## Limitations

* It only goes up to major version 9 at the moment. Probably more significant, minor version also only goes to 12.

* There isn't a function to go the other way yet. So you can't check if you have *at least* Super lodash Elite HD.

* npm doesn't yet support this versioning model, so this package has to live with the shame of semver versioning.

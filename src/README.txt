Chess Board Analyzer 0.1a
by Jezz Lucena

### DESCRIPTION ###

This is a tool that lists all possible legal moves on a chess board at a given
state. This was programmed as part of an interview process for Humble Bundle.
For a reference of basic moves, check the website below:

https://en.wikipedia.org/wiki/Rules_of_chess

Note that complex moves like "castling", "en_passant", and "promotion" were
not implemented.

* Players in check can only make moves that take them out of check.
** Players should never make a move that puts their king in check.


### HOW TO RUN ###

- Open ./index.html on your favorite browser.
- Click on pieces to remove them from the board.
- Drag and drop pieces from the stash into the board to reorganize them.
- Click on "List legal moves" to show the analysis result.

* Note the browser has to be compatible with "arrow functions" and "classes",
both present on EcmaScript 6. The latest version of Google Chrome or Safari work.
** Dragging and dropping inside the board is not yet implemented.
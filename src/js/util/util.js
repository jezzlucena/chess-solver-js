/* Static object analog to a class that centralizes utilitary functions */
var Util = {
    clone_board (board) {
        var new_board = [];
        board.forEach(row => new_board.push(row.slice(0)));
        return new_board;
    }
};
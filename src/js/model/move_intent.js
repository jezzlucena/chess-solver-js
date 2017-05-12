/* 
 * Class that represents the realization of an allowed move. This is created by
 * running the allowed moves linked tree of a specific chess piece.
 */
class Move_intent {
    constructor (board, piece, path) {
        this.board = board;
        this.piece = piece;
        this.path = path;
        this.captured_piece = null;
    }
    
    add_position_to_path (pos) {
        path.push(pos);
    }
    
    set_captured_piece (piece) {
        this.captured_piece = piece;
    }
    
    execute () {
        var first_pos = this.path[0];
        var last_pos = this.path[this.path.length-1];
        
        this.board[last_pos.row][last_pos.column] = this.board[first_pos.row][first_pos.column];
        this.board[first_pos.row][first_pos.column] = null;
    }
    
    toString () {
        var response = this.piece.team + " " + this.piece.type + " " + this.path[0].toString();
        
        this.path.forEach((pos, index) => {
            if (index > 0) {
                response += " => " + pos.toString();
            }
        });
        
        if (this.captured_piece) {
            response += " " + this.captured_piece.type + " CAPTURED";
        }
        
        return response;
    }
}
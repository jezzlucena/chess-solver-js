/* Interface that represents a chess piece. This class should not be instantiated */
class Chess_piece {
    constructor (position, team) {
        this.position = position;
        this.team = team;
    }
    
    list_legal_moves (board, orientation) {
        var allowed_moves = [];

        this.moves.forEach(move => {
            allowed_moves = allowed_moves.concat(move.list_allowed_moves(this.position, this.team, board, orientation, this, [this.position]));
        });
        
        return allowed_moves;
    }
}
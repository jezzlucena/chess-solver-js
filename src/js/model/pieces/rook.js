/* Class that represents a Rook in the chess board. */
class Rook extends Chess_piece {
    constructor (position, team) {
        super(position, team);
        this.type = Constants.piece_type.ROOK.token;
        
        this.moves = [
            new Allowed_move(Constants.move_directions.FORWARD, Constants.move_types.RECURSIVE),
            new Allowed_move(Constants.move_directions.BACKWARD, Constants.move_types.RECURSIVE),
            new Allowed_move(Constants.move_directions.LEFT, Constants.move_types.RECURSIVE),
            new Allowed_move(Constants.move_directions.RIGHT, Constants.move_types.RECURSIVE)
        ];
    }
}
/* Class that represents a Bishop in the chess board. */
class Bishop extends Chess_piece {
    constructor (position, team) {
        super(position, team);
        this.type = Constants.piece_type.BISHOP.token;
        
        this.moves = [
            new Allowed_move(Constants.move_directions.FORWARD_LEFT, Constants.move_types.RECURSIVE),
            new Allowed_move(Constants.move_directions.FORWARD_RIGHT, Constants.move_types.RECURSIVE),
            new Allowed_move(Constants.move_directions.BACKWARD_LEFT, Constants.move_types.RECURSIVE),
            new Allowed_move(Constants.move_directions.BACKWARD_RIGHT, Constants.move_types.RECURSIVE)
        ];
    }
}
/* Class that represents a Pawn in the chess board. */
class Pawn extends Chess_piece {
    constructor (position, team) {
        super(position, team);
        this.type = Constants.piece_type.PAWN.token;
        
        this.moves = [
            new Allowed_move (Constants.move_directions.FORWARD, Constants.move_types.NO_CAPTURE)
                .add_next_move (new Allowed_move(Constants.move_directions.FORWARD, Constants.move_types.NO_CAPTURE_FIRST_ONLY)),
            new Allowed_move (Constants.move_directions.FORWARD_LEFT, Constants.move_types.MUST_CAPTURE),
            new Allowed_move (Constants.move_directions.FORWARD_RIGHT, Constants.move_types.MUST_CAPTURE)
        ];
    }
}
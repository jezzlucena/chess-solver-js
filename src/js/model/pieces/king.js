/* Class that represents a King in the chess board. */
class King extends Chess_piece {
    constructor (position, team) {
        super(position, team);
        this.type = Constants.piece_type.KING.token;
        
        this.moves = [
            new Allowed_move(Constants.move_directions.FORWARD_LEFT, Constants.move_types.CAN_CAPTURE),
            new Allowed_move(Constants.move_directions.FORWARD_RIGHT, Constants.move_types.CAN_CAPTURE),
            new Allowed_move(Constants.move_directions.BACKWARD_LEFT, Constants.move_types.CAN_CAPTURE),
            new Allowed_move(Constants.move_directions.BACKWARD_RIGHT, Constants.move_types.CAN_CAPTURE),
            new Allowed_move(Constants.move_directions.FORWARD, Constants.move_types.CAN_CAPTURE),
            new Allowed_move(Constants.move_directions.BACKWARD, Constants.move_types.CAN_CAPTURE),
            new Allowed_move(Constants.move_directions.LEFT, Constants.move_types.CAN_CAPTURE),
            new Allowed_move(Constants.move_directions.RIGHT, Constants.move_types.CAN_CAPTURE)
        ];
    }
}
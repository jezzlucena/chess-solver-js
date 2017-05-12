/* Class that represents a Knight in the chess board. */
class Knight extends Chess_piece {
    constructor (position, team) {
        super(position, team);
        this.type = Constants.piece_type.KNIGHT.token;
        
        this.moves = [
            new Allowed_move (Constants.move_directions.FORWARD, Constants.move_types.JUMP)
                .add_next_move (
                    new Allowed_move(Constants.move_directions.FORWARD, Constants.move_types.JUMP)
                        .add_next_move (new Allowed_move(Constants.move_directions.LEFT, Constants.move_types.CAN_CAPTURE))
                        .add_next_move (new Allowed_move(Constants.move_directions.RIGHT, Constants.move_types.CAN_CAPTURE))
                )
                .add_next_move (
                    new Allowed_move(Constants.move_directions.LEFT, Constants.move_types.JUMP)
                        .add_next_move (new Allowed_move(Constants.move_directions.LEFT, Constants.move_types.CAN_CAPTURE))
                )
                .add_next_move (
                    new Allowed_move(Constants.move_directions.RIGHT, Constants.move_types.JUMP)
                        .add_next_move (new Allowed_move(Constants.move_directions.RIGHT, Constants.move_types.CAN_CAPTURE))
                ),
            
            new Allowed_move (Constants.move_directions.BACKWARD, Constants.move_types.JUMP)
                .add_next_move (
                    new Allowed_move(Constants.move_directions.BACKWARD, Constants.move_types.JUMP)
                        .add_next_move (new Allowed_move(Constants.move_directions.LEFT, Constants.move_types.CAN_CAPTURE))
                        .add_next_move (new Allowed_move(Constants.move_directions.RIGHT, Constants.move_types.CAN_CAPTURE))
                )
                .add_next_move (
                    new Allowed_move(Constants.move_directions.LEFT, Constants.move_types.JUMP)
                        .add_next_move (new Allowed_move(Constants.move_directions.LEFT, Constants.move_types.CAN_CAPTURE))
                )
                .add_next_move (
                    new Allowed_move(Constants.move_directions.RIGHT, Constants.move_types.JUMP)
                        .add_next_move (new Allowed_move(Constants.move_directions.RIGHT, Constants.move_types.CAN_CAPTURE))
                ),
        ];
    }
}
/* 
 * Class that represents a move that is allowed. This class is used in the
 * chess piece implementations (E.g. Pawn, Queen...).
 *
 * It works as a linked tree, with one move having possible next moves. There
 * are multiple types of move, as well as different directions a move can go.
 */
class Allowed_move {
    constructor (direction, type, kill_type) {
        this.direction = direction;
        this.type = type;
        this.kill_type = kill_type;
        
        this.next_moves = [];
    }
    
    add_next_move (move) {
        this.next_moves.push(move);
        return this;
    }
    
    list_allowed_moves (old_pos, team, board, orientation, piece, path) {
        var allowed_moves = [];
        var forward_val, left_val;
        
        var new_pos = new Position(old_pos.row, old_pos.column);
        
        if (orientation == Constants.orientations.NORTH_SOUTH) {
            forward_val = 1;
            left_val = 1;
        } else if (orientation == Constants.orientations.SOUTH_NORTH) {
            forward_val = -1;
            left_val = -1;
        } else {
            throw { error: 'Invalid orientation' };
        }
        
        switch (this.direction) {
            case Constants.move_directions.FORWARD:
                new_pos.row += forward_val;
                break;
            case Constants.move_directions.BACKWARD:
                new_pos.row -= forward_val;
                break;
            case Constants.move_directions.LEFT:
                new_pos.column += left_val;
                break;
            case Constants.move_directions.RIGHT:
                new_pos.column -= left_val;
                break;
            case Constants.move_directions.FORWARD_LEFT:
                new_pos.row += forward_val;
                new_pos.column += left_val;
                break;
            case Constants.move_directions.FORWARD_RIGHT:
                new_pos.row += forward_val;
                new_pos.column -= left_val;
                break;
            case Constants.move_directions.BACKWARD_LEFT:
                new_pos.row -= forward_val;
                new_pos.column += left_val;
                break;
            case Constants.move_directions.BACKWARD_RIGHT:
                new_pos.row -= forward_val;
                new_pos.column -= left_val;
                break;
        }
        
        if (new_pos.row >= Constants.row_count
            || new_pos.column >= Constants.column_count
            || new_pos.row < 0
            || new_pos.column < 0) {
            return [];
        }
        
        var new_path = path.slice(0);
        new_path.push(new_pos);

        var new_board = Util.clone_board(board);        
        var move_intent = new Move_intent(new_board, piece, new_path);
        
        if (board[new_pos.row][new_pos.column]
         && this.type != Constants.move_types.JUMP) {
            if(board[new_pos.row][new_pos.column].team != team
            && (this.type == Constants.move_types.CAN_CAPTURE
            || this.type == Constants.move_types.MUST_CAPTURE
            || this.type == Constants.move_types.RECURSIVE)) {
                move_intent.set_captured_piece(board[new_pos.row][new_pos.column]);
                return [move_intent];
            } else {
                return [];
            }
        }
        
        switch (this.type) {
            case Constants.move_types.RECURSIVE:
                allowed_moves.push(move_intent);
                allowed_moves = allowed_moves.concat(this.list_allowed_moves(new_pos, team, board, orientation, piece, new_path));
                break;
            case Constants.move_types.NO_CAPTURE_FIRST_ONLY:
                if (move_intent.piece.type == Constants.piece_type.PAWN.token
                && ((orientation == Constants.orientations.NORTH_SOUTH && move_intent.path[0].row == 1)
                || (orientation == Constants.orientations.SOUTH_NORTH && move_intent.path[0].row == 6))) {
                    allowed_moves.push(move_intent);
                }
                break;
            case Constants.move_types.NO_CAPTURE:
                allowed_moves.push(move_intent);
                break;
            case Constants.move_types.CAN_CAPTURE:
                allowed_moves.push(move_intent);
                break;
        }

        this.next_moves.forEach(move => {
            allowed_moves = allowed_moves.concat(move.list_allowed_moves(new_pos, team, board, orientation, piece, new_path));
        });
        
        return allowed_moves;
    }
}
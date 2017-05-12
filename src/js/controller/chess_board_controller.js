class Chess_board_controller {
    constructor (dark_orientation) {
        this.board = [];
        this.dark_orientation = dark_orientation;
    }
    
    process_board (board_matrix) {
        this.board = [];
        board_matrix.forEach((board_row, i) => {
            this.board.push([]);
            board_row.forEach((board_square, j) => {
                var pos = new Position(i, j);
                
                if(this.board[i][j]){
                    throw { error: "Invalid insertion on " + pos.toString() + "." };
                }
                
                if (Constants.teams.DARK.regex.test(board_square)) {
                    this.board[i].push(Chess_piece_factory.create(pos, board_square, Constants.teams.DARK.token));
                } else if (Constants.teams.LIGHT.regex.test(board_square)) {
                    this.board[i].push(Chess_piece_factory.create(pos, board_square, Constants.teams.LIGHT.token));
                } else if (board_square == "") {
                    this.board[i].push(null);
                } else {
                    throw { error: "Invalid square on row " + i + ", column " + j + "." };
                }
            });
        });
    }
    
    list_legal_moves (team) {
        var allowed_moves = [];
        var legal_moves = [];
        var player_orientation = this.dark_orientation;
        var opposite_orientation = this.dark_orientation;
        
        if (team != Constants.teams.DARK.token) {
            player_orientation = this.dark_orientation == Constants.orientations.NORTH_SOUTH ? Constants.orientations.SOUTH_NORTH : Constants.orientations.NORTH_SOUTH;
            opposite_orientation = this.dark_orientation == Constants.orientations.NORTH_SOUTH ? Constants.orientations.NORTH_SOUTH : Constants.orientations.SOUTH_NORTH;
        } else {
            player_orientation = this.dark_orientation == Constants.orientations.NORTH_SOUTH ? Constants.orientations.NORTH_SOUTH : Constants.orientations.SOUTH_NORTH;
            opposite_orientation = this.dark_orientation == Constants.orientations.NORTH_SOUTH ? Constants.orientations.SOUTH_NORTH : Constants.orientations.NORTH_SOUTH;
        }

        this.board.forEach(row => {
            row.forEach(piece => {
                if (piece && piece.team == team) {
                    allowed_moves = allowed_moves.concat(piece.list_legal_moves(this.board, player_orientation));
                }
            });
        });
        
        allowed_moves.forEach(move_intent => {
            let in_check = false;
            
            move_intent.execute();
            move_intent.board.forEach(row => {
                row.forEach(piece => {
                    if (piece && piece.team != team) {
                        piece.list_legal_moves(move_intent.board, opposite_orientation).forEach(opposite_intent => {
                            in_check = in_check || (opposite_intent.captured_piece && opposite_intent.captured_piece.type == Constants.piece_type.KING.token);
                        });
                    }
                });
            });
            
            if (!in_check) {
                legal_moves.push(move_intent);
            }
        });
        
        return legal_moves;
    }
};
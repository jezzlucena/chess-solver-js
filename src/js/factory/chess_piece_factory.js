/* Static object analog to a class, used to create a chess pieces. */
var Chess_piece_factory = {
    create: (position, piece_str, team) => {
        if (Constants.piece_type.PAWN.regex.test(piece_str)) {
            return new Pawn(position, team);
        } else if (Constants.piece_type.ROOK.regex.test(piece_str)) {
            return new Rook(position, team);
        } else if (Constants.piece_type.KNIGHT.regex.test(piece_str)) {
            return new Knight(position, team);
        } else if (Constants.piece_type.BISHOP.regex.test(piece_str)) {
            return new Bishop(position, team);
        } else if (Constants.piece_type.KING.regex.test(piece_str)) {
            return new King(position, team);
        } else if (Constants.piece_type.QUEEN.regex.test(piece_str)) {
            return new Queen(position, team);
        } else {
            throw { error: "Invalid piece string " + piece_str + " on row " + row + ", column " + column + "." };
        }
    }
}
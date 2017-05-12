/* Static object analog to a class, used to centralize constants. */
var Constants = {};

Constants.row_count = 8;
Constants.column_count = 8;

Constants.teams = {
    DARK: {
        token: 'DARK',
        regex: /^D..$/
    },
    LIGHT: {
        token: 'LIGHT',
        regex: /^L..$/
    }
};

Constants.orientations = {
    NORTH_SOUTH: "NORTH_SOUTH",
    SOUTH_NORTH: "SOUTH_NORTH"
};

Constants.piece_type = {
    PAWN: {
        token: 'PAWN',
        regex: /^.Pn$/
    },
    ROOK: {
        token: 'ROOK',
        regex: /^.Rk$/
    },
    KNIGHT: {
        token: 'KNIGHT',
        regex: /^.Kt$/
    },
    BISHOP: {
        token: 'BISHOP',
        regex: /^.Bp$/
    },
    KING: {
        token: 'KING',
        regex: /^.Kg$/
    },
    QUEEN: {
        token: 'QUEEN',
        regex: /^.Qn$/
    }
};

Constants.move_types = {
    RECURSIVE: 'RECURSIVE',
    NO_CAPTURE_FIRST_ONLY: 'NO_CAPTURE_FIRST_ONLY',
    NO_CAPTURE: 'NO_CAPTURE',
    CAN_CAPTURE: 'CAN_CAPTURE',
    MUST_CAPTURE: 'MUST_CAPTURE',
    JUMP: 'JUMP'
};

Constants.move_directions = {
    FORWARD: 'FORWARD',
    BACKWARD: 'BACKWARD',
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
    FORWARD_LEFT: 'FORWARD_LEFT',
    FORWARD_RIGHT: 'FORWARD_RIGHT',
    BACKWARD_LEFT: 'BACKWARD_LEFT',
    BACKWARD_RIGHT: 'BACKWARD_RIGHT',
};
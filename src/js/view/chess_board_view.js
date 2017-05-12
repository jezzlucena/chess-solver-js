/*
 * Class that serves as interface between the HTML DOM and the
 * Controller/Model.
 */
class Chess_board_view {
    constructor () {
        this.chess_board_controller = new Chess_board_controller("NORTH_SOUTH");
        this.is_mouse_down = false;
        this.dragged_piece = null;
        this.old_x = null;
        this.old_y = null;
        this.new_x = null;
        this.new_y = null;
        
        this.pieces = [];
        this.buttons = [];
    }
    
    /* 
     * Method called after the document is loaded and ready
     */
    init () {
        this.pieces = [].slice.call(document.getElementsByClassName("chess_piece"));
        this.buttons = [].slice.call(document.getElementsByClassName("btn"));
        
        this.pieces.forEach(piece_div => {
            piece_div.onmousedown = (event) => {
                if (piece_div.parentNode.getAttribute('class').indexOf('stash') > -1) {
                    this.old_x = event.screenX;
                    this.old_y = event.screenY;
                    this.is_mouse_down = true;
                    this.dragged_piece = piece_div;
                } else if (piece_div.parentNode.getAttribute('class').indexOf('square') > -1) {
                    this.sendToStash(piece_div);
                }
            };
        });
        
        document.getElementsByClassName("app_container")[0].onmousemove = (event) => {
            if (this.is_mouse_down) {
                this.new_x = event.screenX;
                this.new_y = event.screenY;
                this.dragged_piece.style.transform = "translate(" + (this.new_x - this.old_x) + "px, " + (this.new_y - this.old_y) + "px)";
            }
        };
        
        document.getElementsByClassName("app_container")[0].onmouseup = (event) => {
            if (this.is_mouse_down) {
                var square = this.getSquareAtPosition(this.new_x, this.new_y - 80);
                if (square) {
                    this.dragged_piece.remove();
                    [].slice.call(square.children).forEach(child => {
                        this.sendToStash(child);
                    })
                    square.appendChild(this.dragged_piece);
                }
                
                this.dragged_piece.style.transform = "";
                this.dragged_piece = null;
                this.new_x = null;
                this.new_y = null;
                this.is_mouse_down = false;
            }
        };
        
        this.buttons.forEach(btn => {
            btn.onmousedown = (event) => {
                this.listLegalMoves(btn.getAttribute('data-team'));
            };
        })
    }
    
    getSquareAtPosition (x, y) {
        var result = null;
        
        [].slice.call(document.getElementsByClassName("square")).forEach(square => {
            var rect = square.getBoundingClientRect();
            if (x > rect.left && x <= rect.right && y > rect.top && y <= rect.bottom) {
                result = square;
                return result;
            }
        });
        
        return result;
    }

    sendToStash (element) {
        if (element.getAttribute('class').indexOf('dark') > -1) {
            element.remove();
            document.getElementsByClassName("stash dark")[0].appendChild(element);
        } else if (element.getAttribute('class').indexOf('light') > -1) {
            element.remove();
            document.getElementsByClassName("stash light")[0].appendChild(element);
        }
    }

    getBoard () {
        var result = [
            ["",    "",    "",    "",    "",    "",    "",    ""],
            ["",    "",    "",    "",    "",    "",    "",    ""],
            ["",    "",    "",    "",    "",    "",    "",    ""],
            ["",    "",    "",    "",    "",    "",    "",    ""],
            ["",    "",    "",    "",    "",    "",    "",    ""],
            ["",    "",    "",    "",    "",    "",    "",    ""],
            ["",    "",    "",    "",    "",    "",    "",    ""],
            ["",    "",    "",    "",    "",    "",    "",    ""],
        ];
        
        [].slice.call(document.getElementsByClassName("square")).forEach(square => {
            var row = parseInt(square.parentNode.getAttribute("data-row"));
            var column = parseInt(square.getAttribute("data-col"));
            var piece = "";
            
            if (square.children[0]) {
                piece = square.children[0].getAttribute("data-piece");
            }
            
            result[row][column] = piece;
        });
        
        return result;
    }

    listLegalMoves (team) {
        this.chess_board_controller.process_board(this.getBoard());
        var legal_moves = this.chess_board_controller.list_legal_moves(team);
        var response = "";
        
        if (legal_moves.length > 0) {
            legal_moves.forEach(move => {
                response += "<p>" + move.toString() + "</p>";
            });
        } else {
            response += "<p>No legal moves possible.</p>";
        }
        
        document.getElementById('moves_container').innerHTML = response;
    }
}
/* Simple class to encapsulate the position of a chess piece */
class Position {
    constructor (row, column) {
        this.row = row;
        this.column = column;
    }
    
    toString () {
        return "(" + this.row + ", " + this.column + ")"
    }
}
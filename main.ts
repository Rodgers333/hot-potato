input.onButtonPressed(Button.A, function () {
    _123 = randint(2, 10)
    basic.showString("3 2 1 Start")
    while (_123 > 0) {
        basic.pause(1000)
        _123 += -1
        basic.showIcon(IconNames.Target)
        basic.pause(500)
        basic.showIcon(IconNames.Diamond)
    }
    if (_123 == 0) {
        basic.showIcon(IconNames.Skull)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
        basic.showIcon(IconNames.Skull)
        basic.pause(100)
        basic.clearScreen()
        basic.showIcon(IconNames.Chessboard)
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.SmallDiamond)
        basic.clearScreen()
    }
    basic.clearScreen()
})
let _123 = 0
basic.showString("Play Game")

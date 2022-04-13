input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString("3 2 1 Start")
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(100)
    range2.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(100)
    range3.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(100)
    _123 = randint(2, 10)
    while (_123 > 0) {
        basic.pause(1000)
        _123 += -1
        basic.showIcon(IconNames.Target)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(500)
        basic.showIcon(IconNames.Diamond)
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    }
    if (_123 == 0) {
        basic.showIcon(IconNames.Skull)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
        basic.showIcon(IconNames.Skull)
        basic.pause(100)
        for (let index = 0; index < 10; index++) {
            strip.showColor(neopixel.colors(NeoPixelColors.White))
            basic.pause(100)
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            basic.pause(100)
        }
        basic.clearScreen()
        basic.showIcon(IconNames.Chessboard)
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.SmallDiamond)
        basic.clearScreen()
    }
    basic.clearScreen()
})
let range3: neopixel.Strip = null
let range2: neopixel.Strip = null
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
let _123 = 0
strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
range = strip.range(0, 5)
range2 = strip.range(5, 10)
range3 = strip.range(10, 15)
range.showColor(neopixel.rgb(randint(0, 65), randint(0, 65), randint(0, 65)))
range2.showColor(neopixel.rgb(randint(0, 65), randint(0, 65), randint(0, 65)))
range3.showColor(neopixel.rgb(randint(0, 65), randint(0, 65), randint(0, 65)))
basic.showString("START")
strip.showRainbow(1, 360)
for (let index = 0; index < 60; index++) {
    strip.rotate(1)
    strip.show()
    basic.pause(500)
}

basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        . # # # .
        . # # # .
        . . # . .
        `)
    basic.pause(500)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(500)
})

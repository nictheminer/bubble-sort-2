function swap (num: number, num2: number) {
    temp = list[num]
    list[num] = list[num2]
    list[num2] = temp
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bubbleSort()
    mySprite.sayText(list)
})
function compare (a: number, b: number) {
    return a < b
}
function bubbleSort () {
    for (let index = 0; index <= list.length; index++) {
        for (let index2 = 0; index2 <= index; index2++) {
            if (true) {
                swap(index, index2)
            }
        }
    }
}
let temp = 0
let mySprite: Sprite = null
let list: number[] = []
list = [
5,
9,
8,
4,
1,
2,
3
]
mySprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . . b d d 5 5 5 5 5 5 5 5 b . . 
    . b d d d d 5 5 5 5 5 5 5 5 b . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    . b 5 5 b c d d 5 5 5 5 5 d b . 
    b b c c c d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)

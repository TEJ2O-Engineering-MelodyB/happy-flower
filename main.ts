let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
. . . 4 . . . . . . 2 2 . . . .
. . . 4 4 4 3 . 3 2 2 . . . . .
. . . . 4 e 5 5 5 e 2 . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . . 5 5 e 5 5 . . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . 2 e 5 5 5 e 4 . . . . .
. . . . 2 2 3 7 3 4 4 4 . . . .
. . . 2 2 . . 7 . . . 4 . . . .
. . . . . . . 7 . . . . . . . .
. . . 7 7 7 . 7 . 7 7 . . . . .
. . . . 7 7 . 7 . 7 7 . . . . .
. . . . . 7 7 7 7 7 . . . . . .
. . . . . . 7 7 7 . . . . . . .
. . . . . . . 7 . . . . . . . .
. . . . . . . 7 . . . . . . . .
`, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . b b . . b . . . . . . .
. . . . . b b b b . . . . . . .
. . . . . . . b b . . . . . . .
. . . . . f 5 f 5 f . . . . . .
. . . . 5 f 5 f 5 f 1 . . . . .
. . . . 5 f 5 f 5 f 5 b . . . .
. . . . . . 5 f 5 f 5 . . . . .
. . . . . e . . . e . . . . . .
. . . . e . . . . e . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, mySprite, randint(-25, 25), randint(-25, 25))
    projectile.lifespan = 3000
    if (projectile.vx < 0) {
        projectile.image.flipX()
    }
}) 
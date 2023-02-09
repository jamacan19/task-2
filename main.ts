input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
        basic.pause(5000)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
        basic.pause(500)
    }
    maqueen.motorStop(maqueen.Motors.All)
})

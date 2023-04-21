input.onButtonPressed(Button.A, function () {
	
})
let cachire = 0
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
radio.setGroup(101)
basic.forever(function () {
    cachire = pins.analogReadPin(AnalogPin.P2)
    radio.sendNumber(cachire)
})

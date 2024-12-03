// immediately involked funtion expression(IIFE)

(function chai() {
    console.log("DB CONNECTED ONE")
})();

// it also true
// chai()

((name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})('ismail')
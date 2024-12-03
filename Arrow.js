const user = {
    username: "Ismail Azeem",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to the website`);
        //     console.log(this)
    }
};

user.welcomeMessage();
// user.username = "abhay"
// user.welcomerMessage();

console.log(this.username())

function GetFortune() {
    var Options =
        [
            "Yes", "No", "Maybe", "So", "I don't know", "I think that is very possible", "Why would you ask me that?", "You should try it and see.",
            "Haha", "I need more information.", "Ummm... Maybe try again tomorrow."
        ];
    var rand = Options[Math.floor(Math.random() * Options.length)];
    document.getElementById("Fortune").innerHTML = rand;

}
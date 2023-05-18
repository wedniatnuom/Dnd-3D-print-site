var mlogo = document.getElementById("mainlogo");
var blogo = document.getElementById("test");
var clogo = document.getElementById("characterlogo");


function logoFun() {
    if (document.title == "Dungeons & Dragons") {
        mlogo.addEventListener("click", function () {
        alert("This logo is a Mimic! Roll for initative!");
            });
    } else if (document.title == "Dungeons & Dragons: Buildings") {
        blogo.addEventListener("click", function () {
            alert("The Princess is in another castle. You'll have to print another.");
        });
    } else if (document.title == "Dungeons & Dragons: Figures") {
        clogo.addEventListener("click", function () {
            alert("If only you could print friends.....");
        });
    };
};

logoFun();

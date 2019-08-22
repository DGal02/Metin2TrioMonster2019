var tryb = 1;

function zmientlo(id, zdj) {
    document.getElementById(id).src = "images/" + zdj + ".jpg";

}

function restart() {
    $(".dropdown-toggle").each(function() {
        this.src = "images/pustep.png";

    });
}

function tryb1() {
    if (tryb === 2) {
        $(".drugitryb").each(function() {
            $(this).addClass("pointer");
            $(this).removeClass("drugitryb");
        });
        $("#tryb2").removeClass("btn-success");
        $("#tryb2").addClass("btn-danger");
        $("#tryb1").removeClass("btn-danger");
        $("#tryb1").addClass("btn-success");
        tryb--;
    }
}

function tryb2() {
    if (tryb === 1) {
        console.log(tryb);
        $(".pointer").each(function() {
            $(this).addClass("drugitryb");
            $(this).removeClass("pointer");
        });
        $("#tryb1").removeClass("btn-success");
        $("#tryb1").addClass("btn-danger");
        $("#tryb2").removeClass("btn-danger");
        $("#tryb2").addClass("btn-success");
        tryb++;
    }
}
$('#popoverhide').popover().click(function() {
    setTimeout(function() {
        $('#popoverhide').popover('hide');
    }, 1500);
});

function zmienkarte(id, karta) {
    document.getElementById(id).src = "images/" + karta + ".png";
}
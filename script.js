var tryb = 1;
var jakakarta = 01;
var jakakarta1 = ["01"];
var kartyt2 = [];
var sprawdzczy = 0;


function zmientlo(id, zdj) {
    document.getElementById(id).src = "images/" + zdj + ".jpg";

}

function restart() {
    $(".dropdown-toggle").each(function() {
        this.src = "images/pustep.png";

    });
    $("#tryb2pomoc").html("");
    kartyt2 = [];
}

function tryb1() {
    if (tryb === 2) {
        $(".dropdown-toggle").each(function() {
            $(this).attr('data-toggle', 'dropdown');
        });
        $("#otryb2 .displayinline").each(function() {
            $(this).removeClass("pointer");
        });
        $("#otryb2").fadeOut();
        $("#tryb2").removeClass("btn-success").addClass("btn-danger");
        $("#tryb1").removeClass("btn-danger").addClass("btn-success");
        tryb--;
    }
}

function tryb2() {
    if (tryb === 1) {
        $(".dropdown-toggle").each(function() {
            $(this).removeAttr('data-toggle');
        });
        $("#otryb2 .displayinline").each(function() {
            $(this).addClass("pointer");
        });
        $("#otryb2").fadeIn();
        $("#tryb1").removeClass("btn-success").addClass("btn-danger");
        $("#tryb2").addClass("btn-success").removeClass("btn-danger");
        $(".dropdown-menu").each(function() {
            $(this).fadeOut();
        });
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
$("#otryb2 .displayinline").click(function() {
    jakakarta = $(this).attr('src').substring(7, 9);
    jakakarta1 = [$(this).attr('src').substring(7, 9)];


});
$(".dropdown-toggle").unbind().click(function() {
    if (tryb === 2) {

        this.src = "images/" + jakakarta + ".png"
        if (kartyt2.length < 9) {


            for (x in jakakarta1) {

                sprawdzczy = 0;
                for (y in kartyt2) {
                    if (kartyt2[y] == jakakarta1[x]) {
                        sprawdzczy++;
                    }
                }
                if (sprawdzczy == 0) {
                    var createE = document.createElement("IMG");
                    createE.setAttribute("src", "images/" + jakakarta + ".png");
                    createE.setAttribute("width", "68");
                    createE.setAttribute("class", "kartaukryta");
                    createE.onclick = function() {
                        jakakarta = $(this).attr('src').substring(7, 9);
                    };
                    document.getElementById("tryb2pomoc").appendChild(createE);
                    $(".kartaukryta").fadeIn();
                    kartyt2.push(jakakarta);

                }
            }
        }
    }
});
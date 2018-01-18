var menu = {

    init: function () {

        var pageN = "dos";

        function enlarge(id) {
            document.getElementById(id).style.color = "red";
        }

        document.getElementById(pageN).addEventListener("mouseover", enlarge(pageN));

    }
}

window.onload = menu.init();
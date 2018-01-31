var menu = {

    init: function () {

        var pageN = ['uno', 'dos', 'tres', 'cuatro']

        function enlarge(id) {
            document.getElementById(id).style.color = "red";
        }

        for (i = 0; i <= pageN.length; i++) {

            var currentPage = pageN[i];
            var element = document.getElementById(currentPage)

            element.addEventListener("mouseover", function () {
                if (this.getAttribute("color") == "red") {
                    this.style.color = "grey";
                } else {
                    this.style.color = "red";
                }
            });



        }


    }
}

window.onload = menu.init();
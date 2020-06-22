"use strict"
//2.
window.addEventListener("load", function () {
    //9.
    alert("Please, click your flavor drink to order!")
    var imgCells = document.getElementsByClassName("img_cell");
    for (var i = 0; i < imgCells.length; i++) {
        var imgCell = imgCells[i];
        $(".img_cell").click(function (e) {
            var imgSource = e.target.getAttribute("src");
            var imgName = e.target.getAttribute("alt");
            localStorage.setItem("imgSource", imgSource);
            localStorage.setItem("imgName", imgName);
            window.location.replace("boba_order.html");
        });

        $(".img_cell").mouseover(function (e) {
            e.target.style.border = "3px solid green";
        });
        $(".img_cell").mouseout(function (e) {
            e.target.style.border = "";
        });
    }
    createTable();
    function createTable(e) {
        var DIVTable = document.getElementById("table");
        var createTable1 = document.createElement("table");
        var trTitle = document.createElement("tr");
        trTitle.setAttribute("class", "title_table");


        var strTitle = '<td>' + '<label id="Column' + "1" + '">Column' + "1" + '</label>';
        strTitle += '<td>' + '<label id="Column' + "2" + '">Column' + "2" + '</label>';
        strTitle += '<td>' + '<label id="Column' + "3" + '">Column' + "3" + '</label>';
        strTitle += '<td>' + '<label id="Column' + "4" + '">Column' + "4" + '</label>';
        strTitle += '<td>' + '<label id="Column' + "5" + '">Column' + "5" + '</label>';
        // for(var i = 0; i < 6; i++){
        //     strTitle += '<td>'+'<label id="Column' + i + '">Column' +i+ '</label>';

        // }

        trTitle.innerHTML = strTitle;
        trTitle.append(strTitle);

        createTable1.append(trTitle);

        DIVTable.append(createTable1);
        strTitle.target.style.border = "1px solid green";
    }

});


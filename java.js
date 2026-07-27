
function filenoCheck() {
    let fileno = document.getElementById("casefileno").value;

    document.getElementById("displayArea").innerText = "Validating file no. " + fileno + "access...";

    if (fileno == "55081") {
        window.open('55081.html');
    }


}

function emailAppear(lalala) {
    let box = document.getElementById("emailchain"+lalala);
    if (box.style.opacity == 0) {
        box.style.height = "auto";
        box.style.opacity = "1";
    } else {
        box.style.height = "0";
        box.style.opacity = "0";
    }

    
}


function popup() {
    mywindow = window.open("archivaldoc1.html", "mywindow", "location=1,status=1,scrollbars=1,  width=700,height=350");
    mywindow.moveTo(0, 0);
}


function closetab() {
    let open = document.getElementById("floatingbox");
    open.remove();
}

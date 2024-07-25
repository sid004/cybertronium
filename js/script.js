document.addEventListener('DOMContentLoaded', function () {
    let progressBar = document.getElementById('progress-bar');
    let width = 0;
    let interval = setInterval(function () {
        if (width >= 80) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = width + '%';
            progressBar.innerHTML = width * 1 + '%';
        }
    }, 20); // Increase the width by 1% every 20ms
});


// cards start
$('.owl-carousel').owlCarousel({
    loop: true,
    stagePadding: 50,
    dots: false,
    margin: 40,
    nav: true,
    navText: [" ", " "],
    responsive: {
        0: {
            items: 1,
            margin: 10,
            stagePadding: 0
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
})

$('.cards-row .owl-carousel .owl-prev').append('<img src="images/arrow-left.png" >');
$('.cards-row .owl-carousel .owl-next').append('<img src="images/arrow-right.png" >');

// cards end


// table add button

function addRow() {
    let proTable = document.getElementById("protable");
    let rowTable = document.querySelectorAll("#protable tr").length;

    let row = proTable.insertRow(rowTable);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "SN";
    cell2.innerHTML = "Industries";
    cell3.innerHTML = "Growth ratio";

}

let shadow
function dragit(event) {
    shadow = event.target;
}
function dragover(e) {
    let children = Array.from(e.target.parentNode.parentNode.children);
    if (children.indexOf(e.target.parentNode) > children.indexOf(shadow))
        e.target.parentNode.after(shadow);
    else e.target.parentNode.before(shadow);
}


let humbtn = document.querySelector(".humburger");
let sBar = document.querySelector(".sidebar");
let closeBtn = document.querySelector(".close-btn")

humbtn.addEventListener('click', () => {
    sBar.classList.add("show")
})

closeBtn.addEventListener('click', () => {
    sBar.classList.remove("show")
})
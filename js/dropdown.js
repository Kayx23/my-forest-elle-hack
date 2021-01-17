// dropdown menu for the redeeming section
$('.drop-down-container .dropdown-menu a').on('click', function () {
    // update dropdown btn value
    $('.drop-down-container .dropdown button').text($(this).text());
    // update total number of points 
    let num = $(this).text().split(" ")[0];
    document.getElementById("points").innerHTML = "for " + (num * 500).toLocaleString() + " points";
});

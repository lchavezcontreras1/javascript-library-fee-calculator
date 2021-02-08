//page load glob of code
$(document).ready(
    function (){
        //find the button with jquery
        // assign function totalLibraryFee to run when the button is clicked
        $("button").click(totalLibraryFee);
    }
);
// let lateDays = parseInt(prompt("How many late days have passed?"));
let lateDays = parseInt($("input#latedays").val());
//prompt for how many books//convert to a number
// let books = parseInt(prompt("How many books did you checkout?"));
let books = parseInt($("input#books").val());
//prompt for how many dvds//convert to a number
// let dvds = parseInt(prompt("How many dvds did you checkout?"));
let dvds = parseInt($("input#dvds").val());
//calculate total fee
function totalLibraryFee() {
    let totalBooks = lateDays * (books * .25);
    let totalDvds = lateDays * (dvds * .50);
    let totalFee = totalBooks + totalDvds;
    return(totalFee);
}
$("p#totalfee").text(`Your total fee is $${totalFee}.`);
//The following space is for interactivity, Java script is used to make things within a site like search functions, //
// chat rooms, or anything outside of the scope of Design and Structure of a site//


function table_search() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("club-table-input");
    filter = input.value.toUpperCase();
    table = document.getElementById("club-table");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function anouncements(file, height, width) {
    file = asd
}
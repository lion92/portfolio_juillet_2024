document.getElementById("menuburger").addEventListener("click", function() {
    var div = document.getElementById("ulid");
    if (div.classList.contains("burger")) {
        div.classList.remove("burger");
        div.classList.add("burgerApparait");
    } else {
        div.classList.remove("burgerApparait");
        div.classList.add("burger");
    }
});
var accordions =
document.getElementsByName("accordion");

for (var i = 0; i < accordions.length; i++) {
    accordions[i].onclick = function () {
        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            // accordion se abre
            content.style.maxHeight = null;
        }else {
            // accordion se cierra
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }
}
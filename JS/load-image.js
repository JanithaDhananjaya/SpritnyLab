function preview_image(event) {
    var reader = new FileReader();
    reader.onload = function () {
        var output = document.getElementById("output_image");
        output.src = reader.result;

        height = output.clientHeight;
        width = output.clientWidth;

        console.log(height);
        console.log(width);

    }
    reader.readAsDataURL(event.target.files[0]);
}

$(document).ready(function () {
    $("#btnSubmit").click(function () {
        var pageSize = $('#pageSize').val();
        console.log(pageSize);

        var orientation = $('#orientation').val();
        console.log(orientation);

        // $('#output_image')


    });
});


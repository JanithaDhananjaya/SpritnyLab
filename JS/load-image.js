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

        var colour = $('#colour').val();
        console.log(colour);

        var pageSize = $('#pageSize').val();
        console.log(pageSize);


        if (pageSize == 'A4' && orientation == 'landscape' && colour == 'c') {
            console.log("This is a landscape image");
            $('#output_image').ready(function () {
                $('#output_image').removeClass('hiddenImage');
                $('#output_image').removeClass('greyScale');
                $('#output_image').removeClass('A3-portriat');
                $('#output_image').removeClass('A3-landscape');
                $('#output_image').removeClass('A4-portriat');
                $('#output_image').addClass('A4-landscape');
                // $('#output_image').css("width", "766px", "height", "556px");
                // $('#output_image').css("margin-left", "13%", "margin-top", "80%");
            });

        } else if (pageSize == 'A4' && orientation == 'landscape' && colour == 'b') {
            console.log("This is a landscape image");
            $('#output_image').ready(function () {
                $('#output_image').removeClass('hiddenImage');
                $('#output_image').addClass('greyScale');
                $('#output_image').removeClass('A3-portriat');
                $('#output_image').removeClass('A3-landscape');
                $('#output_image').removeClass('A4-portriat');
                $('#output_image').addClass('A4-landscape');
                // $('#output_image').css("width", "766px", "height", "556px");
                // $('#output_image').css("margin-left", "13%", "margin-top", "80%");
            });

        } else if (pageSize == 'A4' && orientation == 'portrait' && colour == 'c') {
            console.log("This is a portrait image");
            $('#output_image').ready(function () {
                $('#output_image').removeClass('hiddenImage');
                $('#output_image').removeClass('greyScale');
                $('#output_image').removeClass('A3-portriat');
                $('#output_image').removeClass('A3-landscape');
                $('#output_image').removeClass('A4-landscape');
                $('#output_image').addClass('A4-portriat');
                // $('#output_image').css("height", "550px", "width", "339px");
                // $('#output_image').css("margin-left", "25%", "margin-top", "5%");
            });
        } else if (pageSize == 'A4' && orientation == 'portrait' && colour == 'b') {
            console.log("This is a portrait image");
            $('#output_image').ready(function () {
                $('#output_image').removeClass('hiddenImage');
                $('#output_image').addClass('greyScale');
                $('#output_image').removeClass('A3-portriat');
                $('#output_image').removeClass('A3-landscape');
                $('#output_image').removeClass('A4-landscape');
                $('#output_image').addClass('A4-portriat');

                // $('#output_image').css("height", "550px", "width", "339px");
                // $('#output_image').css("margin-left", "25%", "margin-top", "5%");
            });
        } else if (pageSize == 'A3' && orientation == 'landscape' && colour == 'c') {
            console.log("This is a landscape image");
            $('#output_image').ready(function () {
                $('#output_image').removeClass('hiddenImage');
                $('#output_image').removeClass('greyScale');
                $('#output_image').removeClass('A4-portriat');
                $('#output_image').removeClass('A4-landscape');
                $('#output_image').removeClass('A3-portriat');
                $('#output_image').addClass('A3-landscape');
                // $('#output_image').css("width", "766px", "height", "556px");
                // $('#output_image').css("margin-left", "13%", "margin-top", "80%");
            });

        } else if (pageSize == 'A3' && orientation == 'landscape' && colour == 'b') {
            console.log("This is a landscape image");
            $('#output_image').ready(function () {
                $('#output_image').removeClass('hiddenImage');
                $('#output_image').addClass('greyScale');
                $('#output_image').removeClass('A4-portriat');
                $('#output_image').removeClass('A4-landscape');
                $('#output_image').removeClass('A3-portriat');
                $('#output_image').addClass('A3-landscape');
                // $('#output_image').css("width", "766px", "height", "556px");
                // $('#output_image').css("margin-left", "13%", "margin-top", "80%");
            });

        } else if (pageSize == 'A3' && orientation == 'portrait' && colour == 'c') {
            console.log("This is a portrait image");
            $('#output_image').ready(function () {
                $('#output_image').removeClass('hiddenImage');
                $('#output_image').removeClass('greyScale');
                $('#output_image').removeClass('A4-portriat');
                $('#output_image').removeClass('A4-landscape');
                $('#output_image').removeClass('A3-landscape');
                $('#output_image').addClass('A3-portriat');
                // $('#output_image').css("height", "550px", "width", "339px");
                // $('#output_image').css("margin-left", "25%", "margin-top", "5%");
            });
        } else if (pageSize == 'A3' && orientation == 'portrait' && colour == 'b') {
            console.log("This is a portrait image");
            $('#output_image').ready(function () {
                $('#output_image').removeClass('hiddenImage');
                $('#output_image').addClass('greyScale');
                $('#output_image').removeClass('A4-portriat');
                $('#output_image').removeClass('A4-landscape');
                $('#output_image').removeClass('A3-landscape');
                $('#output_image').addClass('A3-portriat');

                // $('#output_image').css("height", "550px", "width", "339px");
                // $('#output_image').css("margin-left", "25%", "margin-top", "5%");
            });


        } else {
            alert("Something went wrong");
        }

    });
});


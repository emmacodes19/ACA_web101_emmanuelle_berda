



    var sam = document.getElementById('myloc');
    console.log(sam)

    function myLocation() {
        console.log("location:", sam)
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            sam.innerHTML = "Location Tracking not Possible.";
        }
    }

    function showPosition(position) {
        console.log(position.coords.longitude)
        sam.innerHTML = "Longitude:" + position.coords.longitude + " <br> Latitude:" + position.coords.latitude + "<br>";
    }





    var loc = document.getElementById('myloc');
    console.log(loc)
    function myLocation() {
        console.log("location:", loc)
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            loc.innerHTML = "Location Tracking not Possible.";
        }
    }

    function showPosition(position) {
        console.log(position.coords.longitude)
        loc.innerHTML = "longitude:" + position.coords.longitude + " <br> Latitude:" + position.coords.latitude + "<br>";
    }

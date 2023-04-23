window.onmousewheel = document.onmousewheel = scrollFunc;

var scrollFunc = function (e) {
    e = e || window.event;
    if (e.wheelDelta) {                
        if (e.wheelDelta > 0) { 
            GetDistanceToTop()
        }
        if (e.wheelDelta < 0) { 
            GetDistanceToTop()
        }
    } else if (e.detail) {  
        if (e.detail > 0) { 
            GetDistanceToTop()
        }
        if (e.detail < 0) { 
            GetDistanceToTop()
        }
    }
}

var scroll = function () {
    GetDistanceToTop()
}

var GetDistanceToTop = function () {
    let url = GetUrl()
    let distancetotop = document.getElementById('universitylogo')
    let navigation = document.getElementById('navigation')
    let distancetotoppx = distancetotop.getBoundingClientRect().top

    if (url == "contact.html" || url == "index.html" || url == "" || url == "/"|| url == "about.html"|| url == "reflection.html") {
        let bgheight = GetHtmlWidth() / 2
        var toheight = bgheight / 1;
        if (bgheight > 366.5) {
            if (distancetotoppx >= -73) {
                navigation.style.position = "relative"
                navigation.style.height = "30%"
                navigation.style.top = "0px"
                navigation.style.backgroundColor = "transparent"
                navigation.style.lineHeight = "35px"
                navigation.style.boxShadow = "none"
                navigation.style.zIndex = "0"
            }
            else if (distancetotoppx * -1 < toheight) {
                navigation.style.backgroundColor = "rgba(255,255,255,0.3)"
                navigation.style.position = "fixed"
                navigation.style.height = "50px"
                navigation.style.top = "0px"
                navigation.style.lineHeight = "50px"
                navigation.style.boxShadow = "0px 1px 2px #c9c9c9"
                navigation.style.zIndex = "99"
            }
            else if (distancetotoppx < -73) {
                navigation.style.position = "fixed"
                navigation.style.height = "50px"
                navigation.style.top = "0px"
                navigation.style.backgroundColor = "white"
                navigation.style.lineHeight = "50px"
                navigation.style.boxShadow = "0px 1px 2px #c9c9c9"
                navigation.style.zIndex = "99"
            }
        }
        else if (bgheight <= 366.5) {
            if (distancetotoppx >= -73) {
                navigation.style.position = "relative"
                navigation.style.height = "30%"
                navigation.style.top = "0px"
                navigation.style.backgroundColor = "transparent"
                navigation.style.lineHeight = "35px"
                navigation.style.boxShadow = "none"
                navigation.style.zIndex = "0"
            }
            else if (distancetotoppx * -0.56 < toheight) {
                navigation.style.backgroundColor = "rgba(255,255,255,0.3)"
                navigation.style.position = "fixed"
                navigation.style.height = "50px"
                navigation.style.top = "0px"
                navigation.style.lineHeight = "50px"
                navigation.style.boxShadow = "0px 1px 2px #c9c9c9"
                navigation.style.zIndex = "99"
            }
            else if (distancetotoppx < -73) {
                navigation.style.position = "fixed"
                navigation.style.height = "50px"
                navigation.style.top = "0px"
                navigation.style.backgroundColor = "white"
                navigation.style.lineHeight = "50px"
                navigation.style.boxShadow = "0px 1px 2px #c9c9c9"
                navigation.style.zIndex = "99"
            }
        }

    }
    else if (url != "contact.html") {
        if (distancetotoppx >= -73) {
            navigation.style.position = "relative"
            navigation.style.height = "30%"
            navigation.style.top = "0px"
            navigation.style.backgroundColor = "white"
            navigation.style.lineHeight = "35px"
            navigation.style.boxShadow = "none"
            navigation.style.zIndex = "0"
        }
        else if (distancetotoppx < -73) {
            navigation.style.position = "fixed"
            navigation.style.height = "50px"
            navigation.style.top = "0px"
            navigation.style.backgroundColor = "white"
            navigation.style.lineHeight = "50px"
            navigation.style.boxShadow = "0px 1px 2px #c9c9c9"
            navigation.style.zIndex = "99"
        }
    }
}

var GetUrl = function () {
    let url = window.location.pathname
    url = url.substring(url.lastIndexOf('/') + 1, url.length);
    return url
}

var GetHtmlWidth = function () {
    let width = document.body.clientWidth
    return width
}
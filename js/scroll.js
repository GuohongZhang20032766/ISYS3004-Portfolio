var scrollchild = function(){
    var projectsShowScrollCtrl = document.getElementById("projectsShowScrollCtrl");
    var projectsShowScrollUl = document.getElementsByTagName("ul")[0];
    var projectsShowScrollLi = document.getElementsByTagName("li");
    var timer = null;
    var iSpeed = 8;

    projectsShowScrollUl.innerHTML +=projectsShowScrollUl.innerHTML;
    projectsShowScrollUl.style.width = projectsShowScrollLi.length*projectsShowScrollLi[0].offsetWidth + "px";

    function fnMove()
    {
        if (projectsShowScrollUl.offsetLeft<-projectsShowScrollUl.offsetWidth/2)
        {
            projectsShowScrollUl.style.left = 0;
        }
        else if (projectsShowScrollUl.offsetLeft>=0)
        {
            projectsShowScrollUl.style.left = -projectsShowScrollUl.offsetWidth/2 + "px";
        }
        projectsShowScrollUl.style.left = projectsShowScrollUl.offsetLeft +iSpeed + "px";
    }
    timer=setInterval(fnMove,30)
    projectsShowScrollCtrl.onmouseover = function()
    {
        clearInterval(timer);
    }
    projectsShowScrollCtrl.onmouseout = function()
    {
        timer=setInterval(fnMove,30);
    }
}
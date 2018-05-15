$(window).load(function() {
var home = $("#home"),
    cteInfo = $("#cteInfo"),
    caseStudies = $("#caseStudies"),
    sources = $("#sources");



home.button().on("click",function (){
    openHome();
});

cteInfo.button().on("click",function (){
    openCteInfo();
});

caseStudies.button().on("click",function (){

});

sources.button().on("click",function (){

});
    //the different elements to be hidden and show between each screen
    function openCteInfo() {
        $("#homePg").hide();
        $("#ctePg").show();

    }

    function openHome() {
         $("#homePg").show();
        $("#ctePg").hide();

    }

    function openRace() {
        raceTrack.show();
        playerTable.show();
        betMenu.hide();
        bettingNames.hide();
        $("#booth-toggle").show();
        $("#main-toggle").show();
        $("#race-toggle").hide();
        drawLanes(canvas.height / horsesInRace.length);
         $('#intro').hide();
         $('#refreshTabs').hide();
         $("#create-user").hide();
         $("#betExplination").hide();
    }

});
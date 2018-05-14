$(window).load(function() {
var home = $("#home"),
    cteInfo = $("#cteInfo"),
    caseStudies = $("#caseStudies"),
    sources = $("#sources");



home.button().on("click",function (){

});

cteInfo.button().on("click",function (){

});

caseStudies.button().on("click",function (){

});

sources.button().on("click",function (){

});
    //the different elements to be hidden and show between each screen
    function openBetMenu() {
        raceTrack.hide();
        betMenu.show();
        bettingNames.show();
        playerTable.show();
        clearBettingNamesTable();
        updateBettingNamesTabs();
        initCurrentBets();
        $("#booth-toggle").hide();
        $("#main-toggle").show();
        $("#race-toggle").show();
        $('#refreshTabs').show();
        $('#intro').hide();
        $("#create-user").show();
        $("#betExplination").show();

    }

    function openMain() {
        raceTrack.hide();
        playerTable.show();
        betMenu.hide();
        bettingNames.hide();
        $("#booth-toggle").show();
        $("#main-toggle").hide();
        $("#race-toggle").show();
         $('#intro').show();
         $('#refreshTabs').hide();
         $("#create-user").show();
         $("#betExplination").hide();

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
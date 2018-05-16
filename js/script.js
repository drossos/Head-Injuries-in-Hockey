$(window).load(function() {
var home = $("#home"),
    cteInfo = $("#cteInfo"),
    caseStudies = $("#caseStudies"),
    sources = $("#sources"),
    learnMore = $("#learnMore"),
    homePage =  $("#homePg"),
    ctePage = $("#ctePg"),
    caseStudiesPage = $("#caseStudiesPg"),
    learnMorePage = $("#learnMorePg"),
    sourcesPage = $("#sourcesPg");
    

openHome();
learnMore.hide();
home.button().on("click",function (){
    openHome();
});

cteInfo.button().on("click",function (){
    openCteInfo();
});

caseStudies.button().on("click",function (){
    openCaseStudies();
});

sources.button().on("click",function (){
    openSourcesPage();
});

learnMore.button().on("click", function(){

});
    //the different elements to be hidden and show between each screen
    function openCteInfo() {
       homePage.hide();
       ctePage.show();
       caseStudiesPage.hide();
       sourcesPage.hide();

    }

    function openHome() {
        homePage.show();
        ctePage.hide();
        caseStudiesPage.hide();
        sourcesPage.hide();

    }

    function openCaseStudies() {
        homePage.hide();
        ctePage.hide();
        caseStudiesPage.show();
        sourcesPage.hide();

    }

     function openSourcesPage() {
        homePage.hide();
        ctePage.hide();
        caseStudiesPage.hide();
        sourcesPage.show();

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
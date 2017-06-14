// ==UserScript==
// @name         Vistakon Jira DoD/DoR Agile Board
// @namespace    https://jiracloud.cit.com.br
// @version      0.9
// @description  Jira Agile board improvements
// @author       bwowk
// @require      https://raw.githubusercontent.com/bwowk/vistakonJiraDorDod/66503f86f2293c0ac3201d7c1783c4373865ec1d/DorsDods.js
// @match        https://jiracloud.cit.com.br/secure/RapidBoard.jspa?rapidView=27878*
// @grant        none
// ==/UserScript==

AJS.$('head').append(
    "<style>" +
    ".rainbow {" +
    "animation: colorchange 1s infinite; /* animation-name followed by duration in seconds*/" +
    "/* you could also use milliseconds (ms) or something like 2.5s */" +
    "-webkit-animation: colorchange 1s infinite; /* Chrome and Safari */" +
    "}" +
    "" +
    "@keyframes colorchange" +
    "{" +
    "0%   {background: red;}" +
    "25%  {background: yellow;}" +
    "50%  {background: blue;}" +
    "75%  {background: green;}" +
    "100% {background: red;}" +
    "}" +
    "" +
    "@-webkit-keyframes colorchange /* Safari and Chrome - necessary duplicate */" +
    "{" +
    "0%   {background: red;}" +
    "25%  {background: yellow;}" +
    "50%  {background: blue;}" +
    "75%  {background: green;}" +
    "100% {background: red;}" +
    "});" +
    "</style>");

checkExist = setInterval(function() {
    if ($('.ghx-issue').length) {
        replaceWorkflowTransition();
        postRenderOverrides();
        replaceRenderUI();
        clearInterval(checkExist);
    }
}, 100); // check every 100ms

function postRenderOverrides() {
    $incidentCards = AJS.$("span.ghx-type[title='Incident'").parent().parent().parent();
    $incidentCards.find('.ghx-type img').attr('src','http://emojis.slackmojis.com/emojis/images/1481054971/1409/partywizard.gif?1481054971');
    $incidentCards.find('.ghx-grabber').addClass('rainbow');
}

function replaceRenderUI() {
    oldRenderUI = GH.WorkController.renderUI;
    GH.WorkController.renderUI = function() {
        oldRenderUI();
        postRenderOverrides();
    };
}

function replaceWorkflowTransition() {
    oldWorkflowTransition = GH.WorkDragAndDrop.executeWorkflowTransition;
    GH.WorkDragAndDrop.executeWorkflowTransition = function(a,b,destinationStatus){
        switch(destinationStatus) {
            case 10041: //-> Analysing
                if(confirmDor(dorAnalysing)) {
                    oldWorkflowTransition(a,b,destinationStatus);
                }
                break;
            case 3: //-> In Progress
                if(confirmDod(dodAnalysing)) {
                    oldWorkflowTransition(a,b,destinationStatus);
                }
                break;
            case 10015: //-> Code Review
                if(confirmDod(dodInProgress)) {
                    oldWorkflowTransition(a,b,destinationStatus);
                }
                break;
            case 10027: //-> Test
                if(confirmDod(dodCodeReview)) {
                    oldWorkflowTransition(a,b,destinationStatus);
                }
                break;
            case 10042: //-> MTS
                if(confirmDod(dodTest)) {
                    oldWorkflowTransition(a,b,destinationStatus);
                }
                break;
            case 10032: //-> UAT
                if(confirmDod(dodMts)) {
                    oldWorkflowTransition(a,b,destinationStatus);
                }
                break;
            case 10043: //-> MTP
                if(confirmDod(dodUat)) {
                    oldWorkflowTransition(a,b,destinationStatus);
                }
                break;
            case 5: //-> Resolve
                if(confirmDod(dodMtp)) {
                    oldWorkflowTransition(a,b,destinationStatus);
                }
                break;
            default:
                console.log(destinationStatus);
                if(confirm('não mapeado. quer continuar?')) {
                    oldWorkflowTransition(a,b,destinationStatus);
                };
        }
    };
    console.log('replaced');
}

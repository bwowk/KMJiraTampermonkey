// ==UserScript==
// @name         Vistakon Jira DoD/DoR Issue Status Transition Buttons
// @namespace    https://jiracloud.cit.com.br
// @version      0.1
// @description  Show DoD/DoR checklists
// @author       bwowk
// @require      https://raw.githubusercontent.com/bwowk/vistakonJiraDorDod/master/DorsDods.js
// @match        https://jiracloud.cit.com.br/browse/PODV-*
// @grant        none
// ==/UserScript==

(function() {

    //Analysing
    //$('#action_id_351').click(function(evt) {if(!confirmDod(dodAnalysing)) { evt.stopPropagation(); evt.preventDefault(); }});

    //In Progress
    $('#action_id_151,#action_id_41').click(function(evt) {if(!confirmDod(dodAnalysing)) { evt.stopPropagation(); evt.preventDefault(); }});

    //In Review
    $('#action_id_171').click(function(evt) {if(!confirmDod(dodInProgress)) { evt.stopPropagation(); evt.preventDefault(); }});

    //In QA
    $('#action_id_201').click(function(evt) {if(!confirmDod(dodCodeReview)) { evt.stopPropagation(); evt.preventDefault(); }});

    //In MTS
    $('#action_id_161').click(function(evt) {if(!confirmDod(dodTest)) { evt.stopPropagation(); evt.preventDefault(); }});

    //In MTP
    //$('#action_id_271').click(function(evt) {if(!confirmDod(dodMtp)) { evt.stopPropagation(); evt.preventDefault(); }});

    //In UAT
    $('#action_id_261').click(function(evt) {if(!confirmDod(dodMts)) { evt.stopPropagation(); evt.preventDefault(); }});


})();

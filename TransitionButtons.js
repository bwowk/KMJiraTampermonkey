// ==UserScript==
// @name         Vistakon Jira DoD/DoR Issue Status Transition Buttons
// @namespace    https://jiracloud.cit.com.br
// @version      0.2
// @description  Show DoD/DoR checklists
// @author       bwowk
// @require      https://raw.githubusercontent.com/bwowk/vistakonJiraDorDod/master/DorsDods.js
// @match        https://jiracloud.cit.com.br/browse/PODV-*
// @grant        none
// ==/UserScript==

(function() {

    //Analysing
    //$('#action_id_351').click(function(evt) {if(!confirmDod(dodAnalysing)) { evt.stopPropagation(); evt.preventDefault(); }});

    const PARENT_ISSUE_TYPES = ['Improvement','Content Change','Story','Legacy Bug','Incident','Service Request', 'Env and SCM'];
    var currentIssueType = $('#type-val').text().trim();
    if ($.inArray(currentIssueType,PARENT_ISSUE_TYPES) != -1) {
        //In Progress
        $('.issueaction-workflow-transition:contains("In Progress")').click(function(evt) {if(!confirmDod(dodAnalysing)) { evt.stopPropagation(); evt.preventDefault(); }});
        $('.issueaction-workflow-transition:contains("In Progress")').append('✔');
        //In Review
        $('.issueaction-workflow-transition:contains("In Review")').click(function(evt) {if(!confirmDod(dodInProgress)) { evt.stopPropagation(); evt.preventDefault(); }});
        $('.issueaction-workflow-transition:contains("In Review")').append('✔');
        //In QA
        $('.issueaction-workflow-transition:contains("In QA")').click(function(evt) {if(!confirmDod(dodCodeReview)) { evt.stopPropagation(); evt.preventDefault(); }});
        $('.issueaction-workflow-transition:contains("In QA")').append('✔');
        //In MTS
        $('.issueaction-workflow-transition:contains("In MTS")').click(function(evt) {if(!confirmDod(dodTest)) { evt.stopPropagation(); evt.preventDefault(); }});
        $('.issueaction-workflow-transition:contains("In MTS")').append('✔');
        //In UAT
        $('.issueaction-workflow-transition:contains("In UAT")').click(function(evt) {if(!confirmDod(dodMts)) { evt.stopPropagation(); evt.preventDefault(); }});
        $('.issueaction-workflow-transition:contains("In UAT")').append('✔');
        //In MTP
        $('.issueaction-workflow-transition:contains("In MTP")').click(function(evt) {if(!confirmDod(dodUat)) { evt.stopPropagation(); evt.preventDefault(); }});
        $('.issueaction-workflow-transition:contains("In MTP")').append('✔');
        //Resolve
        $('.issueaction-workflow-transition:contains("Resolve")').click(function(evt) {if(!confirmDod(dodMtp)) { evt.stopPropagation(); evt.preventDefault(); }});
        $('.issueaction-workflow-transition:contains("Resolve")').append('✔');
    }

})();

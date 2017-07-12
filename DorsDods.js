confirmDod = function(dod) {
  return confirm("Did you fulfill the DoD?\n"+dod);
};

confirmDor = function(dor) {
  return confirm("Is the task ready?\n"+dor);
};

dorAnalysing = "Analysing:\n\
1. Final assets were delivered and are in the task.\n\
2. Due dates were agreed and are present in the task.";

dodAnalysing = "Analysing:\n\
1. The task was estimated.";

dodInProgress = "In Progress:\n\
1. MTS/MTP documentation was written.\n\
2. Unit test was done in all supported devices and browsers.\n\
3. The task was implemented in all components.";

dodCodeReview = "Code Review:\n\
1. Code standard\n\
2. Performance\n\
3. Vulnerability.";

dodTest = "Test:\n\
1. Build backend and Build Drupal were generated before testing.\n\
2. Test Cases were written and reviewed by another tester.\n\
3. All supported devices and browser were tested.\n\
4. The tests were ran in all components that were changed.\n\
5. CPs were counted during the analysis.";

dodMts = "MTS:\n\
1. Dev: Unit test was done in all supported devices and browsers.\n\
2. Tester: All supported devices and browser were tested\n\
3. Tester/SM: send the UAT mail.";

dodUat = "UAT:\n\
1. JnJ final approval received.";

dodMtp = "MTP:\n\
1. Dev: Unit test was done in all supported devices and browsers.\n\
2. Tester: All supported devices and browser were tested\n\
3. Tester/SM: send the Go Live mail.";

document.addEventListener('DOMContentLoaded', () => {

    // Non ugly alerts code
    function showAlert(message) {
        const existingAlert = document.getElementById('customAlert');

        if (existingAlert) {
            existingAlert.remove()
        }

        const overlay = document.createElement('div');
        overlay.id = 'customAlertOverlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';

        const alertBox = document.createElement('div');
        alertBox.style.backgroundColor = '#ffffff';
        alertBox.style.borderRadius = '12px';
        alertBox.style.padding = '24px';
        alertBox.style.width = '90%';
        alertBox.style.maxWidth = '350px';
        alertBox.style.textAlign = 'center';

        const messageText = document.createElement('p');
        messageText.textContent = message;
        messageText.style.marginBottom = '20px';

        const closeButton = document.createElement('button');
        closeButton.textContent = 'Close Alert';
        closeButton.style.padding = '12px';
        closeButton.style.borderRadius = '8px';
        closeButton.style.cursor = 'pointer';

        closeButton.addEventListener('click', () => {
            overlay.remove();
        });

        alertBox.appendChild(messageText);
        alertBox.appendChild(closeButton);
        overlay.appendChild(alertBox);
        document.body.appendChild(overlay); 
    }



    // DISPLAY HOURS STUDIED 
    // Slider and Display
    const hoursSlider = document.getElementById('hoursStudied');
    const hoursDisplay = document.getElementById('hoursDisplayed');

    if (hoursSlider && hoursDisplay) {
        const updateHoursDisplay = () => {
            hoursDisplay.textContent = `${hoursSlider.value} Hours`; // Display hours
        };

        updateHoursDisplay(); // Constantly update the display when event listener is triggered
        hoursSlider.addEventListener('input', updateHoursDisplay);
    }

    // DISPLAY CONFIDENCE PER SUBJECT
    // Art
    const artConfidenceSlider = document.getElementById('artConfidence');
    const artConfidenceDisplay = document.getElementById('artConfidenceDisplay');

    if (artConfidenceSlider && artConfidenceDisplay) {
        const updateArtConfidence = () => {
            artConfidenceDisplay.textContent = `Art Confidence (1-10): ${artConfidenceSlider.value} `; // Display confidence
        };

        updateArtConfidence(); // Constantly update the display when event listener is triggered
        artConfidenceSlider.addEventListener('input', updateArtConfidence);
    }

    // Econ
    const econConfidenceSlider = document.getElementById('econConfidence');
    const econConfidenceDisplay = document.getElementById('econConfidenceDisplay');

    if (econConfidenceSlider && econConfidenceDisplay) {
        const updateEconConfidence = () => {
            econConfidenceDisplay.textContent = `Econ Confidence (1-10): ${econConfidenceSlider.value} `; // Display confidence
        };

        updateEconConfidence(); // Constantly update the display when event listener is triggered
        econConfidenceSlider.addEventListener('input', updateEconConfidence);
    }

    // Lit
    const litConfidenceSlider = document.getElementById('litConfidence');
    const litConfidenceDisplay = document.getElementById('litConfidenceDisplay');

    if (litConfidenceSlider && litConfidenceDisplay) {
        const updateLitConfidence = () => {
            litConfidenceDisplay.textContent = `Lit Confidence (1-10): ${litConfidenceSlider.value} `; // Display confidence
        };

        updateLitConfidence(); // Constantly update the display when event listener is triggered
        litConfidenceSlider.addEventListener('input', updateLitConfidence);
    }

    // Math
    const mathConfidenceSlider = document.getElementById('mathConfidence');
    const mathConfidenceDisplay = document.getElementById('mathConfidenceDisplay');

    if (mathConfidenceSlider && mathConfidenceDisplay) {
        const updateMathConfidence = () => {
            mathConfidenceDisplay.textContent = `Math Confidence (1-10): ${mathConfidenceSlider.value} `; // Display confidence
        };

        updateMathConfidence(); // Constantly update the display when event listener is triggered
        mathConfidenceSlider.addEventListener('input', updateMathConfidence);
    }

    // Music
    const musicConfidenceSlider = document.getElementById('musicConfidence');
    const musicConfidenceDisplay = document.getElementById('musicConfidenceDisplay');

    if (musicConfidenceSlider && musicConfidenceDisplay) {
        const updateMusicConfidence = () => {
            musicConfidenceDisplay.textContent = `Music Confidence (1-10): ${musicConfidenceSlider.value} `; // Display confidence
        };

        updateMusicConfidence(); // Constantly update the display when event listener is triggered
        musicConfidenceSlider.addEventListener('input', updateMusicConfidence);
    }

    // Science
    const sciConfidenceSlider = document.getElementById('sciConfidence');
    const sciConfidenceDisplay = document.getElementById('sciConfidenceDisplay');

    if (sciConfidenceSlider && sciConfidenceDisplay) {
        const updateSciConfidence = () => {
            sciConfidenceDisplay.textContent = `Science Confidence (1-10): ${sciConfidenceSlider.value} `; // Display confidence
        };

        updateSciConfidence(); // Constantly update the display when event listener is triggered
        sciConfidenceSlider.addEventListener('input', updateSciConfidence);
    }

    // Social Science
    const socsciConfidenceSlider = document.getElementById('socsciConfidence');
    const socsciConfidenceDisplay = document.getElementById('socsciConfidenceDisplay');

    if (socsciConfidenceSlider && socsciConfidenceDisplay) {
        const updateSocsciConfidence = () => {
            socsciConfidenceDisplay.textContent = `Social Science Confidence (1-10): ${socsciConfidenceSlider.value} `; // Display confidence
        };

        updateSocsciConfidence(); // Constantly update the display when event listener is triggered
        socsciConfidenceSlider.addEventListener('input', updateSocsciConfidence);
    }

    // Display Difficulty for Test
    const testDifficulty = document.getElementById('testDifficulty');
    const testDifficultyDisplay = document.getElementById('testDifficultyDisplay');

    if (testDifficulty && testDifficultyDisplay) {
        const updateDifficulty = () => {
            testDifficultyDisplay.textContent = `Difficulty: ${testDifficulty.value} `; // Display confidence
        };

        updateDifficulty(); // Constantly update the display when event listener is triggered
        testDifficulty.addEventListener('input', updateDifficulty);
    }

    // COMBINE STUFF FOR SECTIONS + PRACTICE TESTS
    const form = document.getElementById('checkInForm') // Load form in

    if (form) {
        // Sunday stuff
        var loggedInUser = localStorage.getItem('activeHubUser');
        var lastCheckIn = localStorage.getItem('lastCheckInDate');
        var submitButton = document.getElementById('submitForm');

        function getLastSunday() {
            var date = new Date();
            date.setDate(date.getDate() - date.getDay());
            date.setHours(0,0,0,0);
            return date.getTime();
        }

        var lastSunday = getLastSunday();

        // If not logged in + Sunday stuff
        if (!loggedInUser) {
            showAlert("You have to log in!")
        } else if (lastCheckIn && parseInt(lastCheckIn) > lastSunday) {
            showAlert("You already submitted your check in!")
            if (submitButton) {
                submitButton.disabled = true;
            }

        }

        form.addEventListener('submit', function(e) { 
            e.preventDefault();

            const formData = new FormData(form);

            // SECTION COMBINATION
            // Combining sections studied function
            function sectionSummary(groupName) {
                const checkedBoxes = document.querySelectorAll(`input[name="${groupName}"]:checked`);

                if (checkedBoxes.length === 0) { // Check if empty
                    return 'Nothing'
                }

                // If not empty, append everything
                let checkedValues = [];
                checkedBoxes.forEach(box => {
                    checkedValues.push(box.value);
                });

                return checkedValues.join(', ') // Once everything appended, return that
            }

            formData.append('artSectionsTotal', sectionSummary('artSection'));
            formData.append('econSectionsTotal', sectionSummary('econSection'));
            formData.append('litSectionsTotal', sectionSummary('litSection'));
            formData.append('mathSectionsTotal', sectionSummary('mathSection'));
            formData.append('musicSectionsTotal', sectionSummary('musicSection'));
            formData.append('sciSectionsTotal', sectionSummary('sciSection'));
            formData.append('socsciSectionsTotal', sectionSummary('socsciSection'));

            // TEST CARD COMBINATION
            const testCards = document.querySelectorAll('.testCard')
            let testList = [];

            // Append stuff for each test card
            testCards.forEach(card => {
                const testType = card.querySelector('[name="testType"]').value;
                const testSubject = card.querySelector('[name="testSubject"]').value;
                const testSection = card.querySelector('[name="testSection"]').value;
                const testScore = card.querySelector('[name="testScore"]').value;

                testList.push(`Test: ${testType}, Test Subject: (${testSubject}, Test Section: ${testSection}), Test Score: ${testScore}`);
            });

            // Combine Everything
            const allTests = testList.join('\n');
            formData.append('practiceTests', allTests);

            // Logged in stuff
            var loggedInUser = localStorage.getItem('activeHubUser');
            if (loggedInUser) {
                var idNumber;

                if (loggedInUser === "Lauren Kim") {
                    idNumber = 1234;
                } else if (loggedInUser === "Person 1") {
                    idNumber = 4321;
                }

                formData.append('loginID', idNumber)

            } else {
                formData.append('loginID', "You aren't logged in!")
            }

            // SEND EVERYTHING TO SPREADSHEET
            const spreadsheetLink = 'https://script.google.com/macros/s/AKfycbxCHboRJZTaDNygyE45tZhe1q4z4OYHuB7zruVa4Ag9jTr-Y-rWc79VoPuP2l8ZqS9O/exec'; 

            fetch(spreadsheetLink, {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.result === 'success') {
                    localStorage.setItem('lastCheckInDate', Datae.now().toString());
                    showAlert("You have successfully submitted!")
                    if (submitButton) {
                        submitButton.disabled = true;
                    }
                    form.reset();
                    document.getElementById('addPracticeTestSection').innerHTML = ''; 
                }
            });

        });
    }

    // ADD PRACTICE TEST INITIALIZATION
    // Practice Test Button and Section where they go
    const addPracticeTestButton = document.getElementById('addPracticeTestButton');
    const addPracticeTestSection = document.getElementById('addPracticeTestSection');

    if (addPracticeTestButton && addPracticeTestSection) {
        // Make practice test button
        addPracticeTestButton.addEventListener('click', () => {
            const testCardRow = document.createElement('div');
            testCardRow.classList.add('testCard'); 

            // HTML for test cards
            testCardRow.innerHTML = `
                <select name="testType" class="typeOfTest" required>
                    <option value="" disabled selected>Select Type of Test</option>
                    <option value="Demidec">Demidec Section Test</option>
                    <option value="USADEasy">USAD Easy Test</option>
                    <option value="USADMedium">USAD Medium Test</option>
                    <option value="USADHard">USAD Hard Test</option>
                    <option value="SiteTest">Site Test</option>
                </select>

                <select name="testSubject" class="testSubject" required>
                    <option value="" disabled selected>Select Subject</option>
                    <option value="Art">Art</option>
                    <option value="Econ">Economics</option>
                    <option value="Lit">Literature</option>
                    <option value="Math">Math</option>
                    <option value="Music">Music</option>
                    <option value="Sci">Science</option>
                    <option value="Socsci">Social Science</option>
                </select>

                <select name="testSection" class="testSection" required>
                    <option value="" disabled selected>Select Section</option>
                    <option value="section1">Section 1</option>
                    <option value="section2">Section 2</option>
                    <option value="section3">Section 3</option>
                    <option value="section4">Section 4</option>
                    <option value="section5">Section 5</option>
                    <option value="fullTest">Full Subject Test</option>
                </select>
                
                <input type="number" name="testScore" class="testScore" placeholder="Score (0-1000)" min="0" max="1000" required>
                
                <button type="button" class="removeTestButton">Remove Test</button>`;

            const removeButton = testCardRow.querySelector('.removeTestButton'); // Trash test card button
            if (removeButton) {
                removeButton.addEventListener('click', () => {
                    testCardRow.remove(); // If click, remove
                });
            }
            addPracticeTestSection.appendChild(testCardRow);
        });

    }


    // STUFF FOR PRACTICE TEST
    const startTestButton = document.getElementById('startTestButton');
    if (startTestButton) {
        startTestButton.addEventListener('click', () => {

            // Logged in stuff
            var loggedInUser = localStorage.getItem('activeHubUser');
            if (!loggedInUser) {
                showAlert("You need to log in before taking a practice test!")
                return;
            }

            const practiceTestForm = document.getElementById('practiceTestForm');
            if (practiceTestForm) {
                const subjectSelected = practiceTestForm.querySelector('[name="practiceTestSubject"]');
                const sectionSelected = practiceTestForm.querySelector('[name="practiceTestSection"]');
                const difficultySelected = document.getElementById('testDifficulty');
                
                // If youput stuff
                if (subjectSelected && sectionSelected) {
                    const subject = subjectSelected.value;
                    const section = sectionSelected.value;
                    if (difficultySelected) {
                        const difficulty = difficultySelected;
                    } else {
                        const difficulty = 5;
                    }
                    
                    // Check if you put the stuff
                    if (!subject || !section) {
                        showAlert("You forgot to put something!")
                        return;
                    }

                    // Redirect user
                    window.location.href = `testingPortal.html?subject=${encodeURIComponent(subject)}&section=${encodeURIComponent(section)}`;
                }
            }
        });
    }


    // Question generation stuff
    const actualPracticeTestForm = document.getElementById('dynamicQuizForm');
    if (actualPracticeTestForm) {
        const parameters = new URLSearchParams(window.location.search);
        const selectedSubject = parameters.get('subject');
        const selectedSection = parameters.get('section');
        const totalQQ = 5;
        const difficultyParameter = parseInt(parameters.get('difficulty'));
        if (difficultyParameter) {
            const selectedDifficulty = difficultyParameter;
        } else {
            const selectedDifficulty = 5;
        }

        const otherSpreadsheetURL = 'https://script.google.com/macros/s/AKfycbyk0emzKP6bfagxFIxr0O5ll2h-eY9_qJuQTqP4Ml4Dkh9wgwhPa28VhQYB48OeCGemiA/exec';
        
        // Loading the questions in
        const loadingZone = actualPracticeTestForm.querySelector('.testingButton');
        actualPracticeTestForm.innerHTML = '<p id="loadingStatus">Loading test...</p>';
        if (loadingZone) {
            actualPracticeTestForm.appendChild(loadingZone);

        }
        
        // Again check if you put the stuff
        const statusText = document.getElementById('loadingStatus');
        if (!selectedSubject || !selectedSection) {
            if (statusText) {
                statusText.textContent = "Bruh put in the stuff";
            }
            return;
        }

        // Complicated ahh fetching stuff
        fetch(otherSpreadsheetURL)
            .then(function(res) { 
                return res.json(); 
            })
            .then(function(data) {

                // If you can't load the question bank in
                if (data.result !== 'success') {
                    if (statusText) {
                        statusText.textContent = 'The question bank is lowkey cooked';
                    } 
                    return;
                }

                let selectedDifficulty;
                if (difficultyParameter) {
                    selectedDifficulty = difficultyParameter;
                } else {
                    selectedDifficulty = 5;
                }

                let minimumDifficulty;
                let maximumDifficulty;

                // Filter everything + make sure its lowercase
                if (selectedDifficulty == 1 || selectedDifficulty == 2) {
                    minimumDifficulty = 1;
                } else {
                    minimumDifficulty = selectedDifficulty - 2;
                }

                if (selectedDifficulty == 9 || selectedDifficulty == 10) {
                    maximumDifficulty = 10;
                } else {
                    maximumDifficulty = selectedDifficulty + 2;
                }

                let poolOfQQ = [];
                for (let i = 0; i < data.questions.length; i++) {
                    let q = data.questions[i];
                    if (q.subject && q.section) {
                        const questionDifficulty = parseInt(q.difficulty, 10)
                        const subjectMatches = q.subject.toLowerCase() === selectedSubject.toLowerCase();
                        const sectionMatches = q.section.toLowerCase() === selectedSection.toLowerCase();
                        if (questionDifficulty >= minimumDifficulty && questionDifficulty <= maximumDifficulty) {
                            difficultyInRange = true;
                        } else {
                            difficultyInRange = false;
                        }

                        if (subjectMatches && sectionMatches && difficultyInRange) {
                            poolOfQQ.push(q);
                        }
                    }
                }

                // If the questions aint questioning
                if (poolOfQQ.length === 0) {
                    if (statusText) {
                        statusText.textContent = `No questions in that section, either it doesn't exist or I'm working on it.`;
                    }
                    return;
                }

                // Get random questions
                poolOfQQ.sort(() => 0.5 - Math.random());
                const activeQuizSet = poolOfQQ.slice(0, totalQQ);
                
                if (statusText) {
                    statusText.remove();
                }

                // HTML for the sets, loop through how many questions there are
                activeQuizSet.forEach((q, i) => {
                    const block = document.createElement('section');
                    block.classList.add('questionBlock');

                    // Add correct answer part
                    let correctTextValue = "";
                    if (q.correctAnswer === "A") {
                        correctTextValue = q.optionA;
                    }
                    if (q.correctAnswer === "B") {
                        correctTextValue = q.optionB;
                    }
                    if (q.correctAnswer === "C") {
                        correctTextValue = q.optionC;
                    }
                    if (q.correctAnswer === "D") {
                        correctTextValue = q.optionD;
                    }

                    block.setAttribute('correctLetter', q.correctAnswer);
                    block.setAttribute('correctText', correctTextValue);

                    block.innerHTML = `
                        <h3 class="questionText">Question ${i + 1}: ${q.questionText}</h3>
                        <div class="questionOptions">
                            <label class="possibleOption">
                                <input type="radio" name="question_${i}" value="${q.optionA}" required>
                                <span class="possibleOptionText">A. ${q.optionA}</span>
                            </label>
                        </div>
                        <div class="questionOptions">
                            <label class="possibleOption">
                                <input type="radio" name="question_${i}" value="${q.optionB}">
                                <span class="possibleOptionText">B. ${q.optionB}</span>
                            </label>
                        </div>
                        <div class="questionOptions">
                            <label class="possibleOption">
                                <input type="radio" name="question_${i}" value="${q.optionC}">
                                <span class="possibleOptionText">C. ${q.optionC}</span>
                            </label>
                        </div>
                        <div class="questionOptions">
                            <label class="possibleOption">
                                <input type="radio" name="question_${i}" value="${q.optionD}">
                                <span class="possibleOptionText">D. ${q.optionD}</span>
                            </label>
                        </div>
                    `;
                    
                    if (loadingZone) {
                        actualPracticeTestForm.insertBefore(block, loadingZone);
                    } else {
                        actualPracticeTestForm.appendChild(block);
                    }
                });
            })
            .catch(err => {
                console.error(err);
                if (statusText) {
                    statusText.textContent = 'Either the network aint working or my code isnt. I dont know.';
                }
            });
        
        // Finishing the test
        actualPracticeTestForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const questionBlocks = actualPracticeTestForm.querySelectorAll('.questionBlock');
            const results = [];
            const alertMessageDetails = "";

            const totalQuestionsCount = questionBlocks.length;
            var correctAnswersCount = 0;

            // Create the block for chosen answers and stuff
            for (let i = 0; i < questionBlocks.length; i++) {
                const currentBlock = questionBlocks[i];
                const questionText = currentBlock.querySelector('.questionText').textContent;
                
                // Added correct stuff
                const correctLetter = currentBlock.getAttribute('correctLetter');
                const correctText = currentBlock.getAttribute('correctText');

                const selectedOption = currentBlock.querySelector('input[name="question_' + i + '"]:checked');
                var chosenAnswer;
                if (selectedOption) {
                    chosenAnswer = selectedOption.value;
                } else {
                    chosenAnswer = "Nothing Selected"
                }

                // Added correct stuff
                var correct = false;
                if (chosenAnswer === correctText) {
                    correct = true;
                    correctAnswersCount = correctAnswersCount + 1;
                }

                var scoreCorrectOrIncorrect = correct;

                const optionLabels = currentBlock.querySelectorAll('.possibleOptionText');
                const optionsList = [];
                for (const option of optionLabels) {
                    optionsList.push(option.textContent.trim());
                }

                results.push(questionText + " Options: " + optionsList.join(', ') + " Chosen: " + chosenAnswer + " Correct/Incorrect: " + scoreCorrectOrIncorrect + " Correct Letter: " + correctLetter);
            
            var questionHeading = currentBlock.querySelector('.questionText');
                if (correct) {
                    questionHeading.innerHTML += ' <span style="color: #2ecc71; margin-left: 10px; font-weight: bold;">Correct</span>';
                } else {
                    questionHeading.innerHTML += ' <span style="color: #e74c3c; margin-left: 10px; font-weight: bold;">Incorrect</span>';
                }

                var answerInputs = currentBlock.querySelectorAll('input[type="radio"]');
                for (var r = 0; r < answerInputs.length; r++) {
                    answerInputs[r].disabled = true;
                    
                    var parentLabel = answerInputs[r].closest('.possibleOption');
                    var optionValue = answerInputs[r].value;

                    // Correct Answer
                    if (optionValue === correctText) {
                        parentLabel.querySelector('.possibleOptionText').style.color = "#27ae60";
                        parentLabel.querySelector('.possibleOptionText');
                        parentLabel.querySelector('.possibleOptionText').innerHTML += ' (Correct Choice)';
                    }

                    // Incorrect Answer
                    if (optionValue === chosenAnswer && optionValue !== correctText) {
                        parentLabel.querySelector('.possibleOptionText').style.color = "#c0392b";
                        parentLabel.querySelector('.possibleOptionText');
                        parentLabel.querySelector('.possibleOptionText').innerHTML += ' (Your Choice)';
                    }
                }
            }

            // Percentage stuff
            var calculatedPercent = 0;
            if (totalQuestionsCount > 0) {
                calculatedPercent = Math.round((correctAnswersCount / totalQuestionsCount) * 100);
            }

            // Logged in stuff
            var loggedInUser = localStorage.getItem('activeHubUser');
            if (loggedInUser) {
                var idNumber;

                if (loggedInUser === "Lauren Kim") {
                    idNumber = 1234;
                } else if (loggedInUser === "Person 1") {
                    idNumber = 4321;
                }

            } else {
                idNumber = "You're not logged in!";
            }


            // Creating results data
            const resultsData = new FormData();
            resultsData.append('submissionType', 'testResult');
            resultsData.append('subject', selectedSubject || 'Unknown');
            resultsData.append('section', selectedSection || 'Unknown');
            resultsData.append('answersSummary', results.join('\n'));

            resultsData.append('numberOfQuestions', totalQuestionsCount);
            resultsData.append('correctAnswersCount', correctAnswersCount);
            resultsData.append('testPercentageScore', calculatedPercent + "%");
            resultsData.append('loginID', idNumber);

            const answersToSpreadsheet = 'https://script.google.com/macros/s/AKfycbx8Mi0HYJ8a5J7fk7OQEHQ7D0EXmbNYXWDpsNnBwjIAnJ0lDOmCDNmUvF8tyR1afQ6EDQ/exec';

            fetch(answersToSpreadsheet, {
                method: 'POST',
                body: resultsData
            })
            .then(res => res.json())
            .then(data => {
                // Exit Button
                var exitButton = actualPracticeTestForm.querySelector('button[type="submit"]') || actualPracticeTestForm.querySelector('.testingButton button');
                if (exitButton) {
                    exitButton.outerHTML = '<button type="button" onclick="window.location.href=\'tests.html\'" style="background-color: #e8f0fe; color: #1a73e8; display: block; text-align: center; font-weight: 600; font-size: 0.9rem; text-decoration: none; padding: 12px; border-radius: 8px; border: none; cursor: pointer; margin-top: auto;">Return to Testing Portal</button>';
                } else {
                    var exitContainer = document.createElement('div');
                    exitContainer.style.textAlign = 'center';
                    exitContainer.style.marginTop = '20px';
                    exitContainer.innerHTML = '<button type="button" onclick="window.location.href=\'tests.html\'" style="background-color: #e8f0fe; color: #1a73e8; display: block; text-align: center; font-weight: 600; font-size: 0.9rem; text-decoration: none; padding: 12px; border-radius: 8px; border: none; cursor: pointer; margin-top: auto;">Return to Testing Portal</button>';
                    actualPracticeTestForm.appendChild(exitContainer);
                }
            })
            .catch(err => {
                console.error(err);
                if (statusText) {
                    statusText.textContent = ('Your network got cooked, sorry :(');
                }
                window.location.href = 'tests.html';
            });
        });

    }

    // ANALYTICS STUFF
    var overallScoreDisplay = document.getElementById('overallScoreDisplay')
    if (overallScoreDisplay) {
        var analyticsSpreadsheet = 'https://script.google.com/macros/s/AKfycbzw08f9eVhyW_cHaQKexDR_DFu4OV-5kfTJD4qBWlLWA2GwV0EeRBKQkotEOvOjkI73/exec';
        var loggedInUser = localStorage.getItem('activeHubUser');
        var idNumber = "";

        if (loggedInUser === "Lauren Kim") {
            idNumber = 1234;
        } else if (loggedInUser === "Person 1") {
            idNumber = 4321;
        }

        fetch(
            analyticsSpreadsheet + "?id=" + encodeURIComponent(idNumber)
        )
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            console.log(data);

            if (data.result !== 'success') {
                console.log("The analytics stuff isn't super hot rn");
                console.log(data.error); // Debugging stuff
                return;
            }

            // Overall Projected Table
            var projectedAnalyticsData = data.projected;
            overallScoreDisplay.textContent = projectedAnalyticsData.total.proj;

            document.getElementById('artAverage').textContent = projectedAnalyticsData.art.avg;
            document.getElementById('artProjection').textContent = projectedAnalyticsData.art.proj;
            document.getElementById('artConfidence').textContent = projectedAnalyticsData.art.conf + "/10";
            document.getElementById('artBar').style.width = projectedAnalyticsData.art.bar + "%";

            document.getElementById('econAverage').textContent = projectedAnalyticsData.econ.avg;
            document.getElementById('econProjection').textContent = projectedAnalyticsData.econ.proj;
            document.getElementById('econConfidence').textContent = projectedAnalyticsData.econ.conf + "/10";
            document.getElementById('econBar').style.width = projectedAnalyticsData.econ.bar + "%";

            document.getElementById('litAverage').textContent = projectedAnalyticsData.lit.avg;
            document.getElementById('litProjection').textContent = projectedAnalyticsData.lit.proj;
            document.getElementById('litConfidence').textContent = projectedAnalyticsData.lit.conf + "/10";
            document.getElementById('litBar').style.width = projectedAnalyticsData.lit.bar + "%";

            document.getElementById('mathAverage').textContent = projectedAnalyticsData.math.avg;
            document.getElementById('mathProjection').textContent = projectedAnalyticsData.math.proj;
            document.getElementById('mathConfidence').textContent = projectedAnalyticsData.math.conf + "/10";
            document.getElementById('mathBar').style.width = projectedAnalyticsData.math.bar + "%";

            document.getElementById('musicAverage').textContent = projectedAnalyticsData.music.avg;
            document.getElementById('musicProjection').textContent = projectedAnalyticsData.music.proj;
            document.getElementById('musicConfidence').textContent = projectedAnalyticsData.music.conf + "/10";
            document.getElementById('musicBar').style.width = projectedAnalyticsData.music.bar + "%";

            document.getElementById('sciAverage').textContent = projectedAnalyticsData.sci.avg;
            document.getElementById('sciProjection').textContent = projectedAnalyticsData.sci.proj;
            document.getElementById('sciConfidence').textContent = projectedAnalyticsData.sci.conf + "/10";
            document.getElementById('sciBar').style.width = projectedAnalyticsData.sci.bar + "%";

            document.getElementById('socsciAverage').textContent = projectedAnalyticsData.socsci.avg;
            document.getElementById('socsciProjection').textContent = projectedAnalyticsData.socsci.proj;
            document.getElementById('socsciConfidence').textContent = projectedAnalyticsData.socsci.conf + "/10";
            document.getElementById('socsciBar').style.width = projectedAnalyticsData.socsci.bar + "%";

            document.getElementById('essayAverage').textContent = projectedAnalyticsData.essay.avg;
            document.getElementById('essayProjection').textContent = projectedAnalyticsData.essay.proj;
            document.getElementById('essayConfidence').textContent = projectedAnalyticsData.essay.conf + "/10";
            document.getElementById('essayBar').style.width = projectedAnalyticsData.essay.bar + "%";

            document.getElementById('interviewAverage').textContent = projectedAnalyticsData.interview.avg;
            document.getElementById('interviewProjection').textContent = projectedAnalyticsData.interview.proj;
            document.getElementById('interviewConfidence').textContent = projectedAnalyticsData.interview.conf + "/10";
            document.getElementById('interviewBar').style.width = projectedAnalyticsData.interview.bar + "%";

            document.getElementById('speechAverage').textContent = projectedAnalyticsData.speech.avg;
            document.getElementById('speechProjection').textContent = projectedAnalyticsData.speech.proj;
            document.getElementById('speechConfidence').textContent = projectedAnalyticsData.speech.conf + "/10";
            document.getElementById('speechBar').style.width = projectedAnalyticsData.speech.bar + "%";

            document.getElementById('totalAverage').textContent = projectedAnalyticsData.total.avg;
            document.getElementById('totalProjection').textContent = projectedAnalyticsData.total.proj;
            document.getElementById('totalConfidence').textContent = projectedAnalyticsData.total.conf + "/10";
            document.getElementById('totalBar').style.width = projectedAnalyticsData.total.bar + "%";

            // Recent Tests Table
            var recentTestTable = document.getElementById('recentTestTable');
            var tests = data.recentTests;

            if (tests[0]) {
                var row0 = document.createElement('tr');
                row0.innerHTML = '<th>' + tests[0].sub + '</th><td>' + tests[0].sec + '</td><td>' + tests[0].type + '</td><td>' + tests[0].score + '</td><td>' + tests[0].date + '</td>';
                recentTestTable.appendChild(row0);
            }
            if (tests[1]) {
                var row1 = document.createElement('tr');
                row1.innerHTML = '<th>' + tests[1].sub + '</th><td>' + tests[1].sec + '</td><td>' + tests[1].type + '</td><td>' + tests[1].score + '</td><td>' + tests[1].date + '</td>';
                recentTestTable.appendChild(row1);
            }
            if (tests[2]) {
                var row2 = document.createElement('tr');
                row2.innerHTML = '<th>' + tests[2].sub + '</th><td>' + tests[2].sec + '</td><td>' + tests[2].type + '</td><td>' + tests[2].score + '</td><td>' + tests[2].date + '</td>';
                recentTestTable.appendChild(row2);
            }
            if (tests[3]) {
                var row3 = document.createElement('tr');
                row3.innerHTML = '<th>' + tests[3].sub + '</th><td>' + tests[3].sec + '</td><td>' + tests[3].type + '</td><td>' + tests[3].score + '</td><td>' + tests[3].date + '</td>';
                recentTestTable.appendChild(row3);
            }
            if (tests[4]) {
                var row4 = document.createElement('tr');
                row4.innerHTML = '<th>' + tests[4].sub + '</th><td>' + tests[4].sec + '</td><td>' + tests[4].type + '</td><td>' + tests[4].score + '</td><td>' + tests[4].date + '</td>';
                recentTestTable.appendChild(row4);
            }
        })
        .catch(err => {
            console.error(err);
            if (statusText) {
                    statusText.textContent = 'Either the network aint working or my code isnt. I dont know.';
            }
        });
        

    }

    // LOGIN STUFF
    var loginButton = document.getElementById('loginButton');

    if (loginButton) {
        var currentUser = localStorage.getItem('activeHubUser');
        if (currentUser) {
            loginButton.textContent = currentUser;
        }

        loginButton.addEventListener('click', function(event) {
            event.preventDefault();

            var isBoxOpen = document.getElementById('loginFormBox');
            if (isBoxOpen) {
                isBoxOpen.remove();
                return;
            }

            var loginBox = document.createElement('div');
            loginBox.id = 'loginFormBox';
            
            // CSS Stuff
            loginBox.style.position = "absolute";
            loginBox.style.right = "20px";
            loginBox.style.top = "60px";
            loginBox.style.backgroundColor = "#ffffff";
            loginBox.style.border = "1px solid #cfd4de";
            loginBox.style.borderRadius = "8px";
            loginBox.style.padding = "16px";
            loginBox.style.width = "220px";

            var activeCurrentUser = localStorage.getItem('activeHubUser');

            if (activeCurrentUser) { // CSS Stuff for Signing out
                loginBox.innerHTML =  `
                    <p style="margin: 0 0 12px 0; text-align: center;">Currently logged in as ${activeCurrentUser}</p>
                    <p style="margin: 0 0 12px 0; text-align: center;">Do you wanna sign out?</p>
                    <button type="button" id="logoutSubmitButton" style="width: 100%; background-color: #ffffff; padding: 8px; border-radius: 6px; cursor: pointer;">Sign Out</button>
                `;

                loginButton.parentElement.appendChild(loginBox);

                var clearSessionButton = document.getElementById('logoutSubmitButton');
                clearSessionButton.addEventListener('click', function() {
                    loginBox.innerHTML = '<p style="margin: 0; text-align: center;">You logged out :D</p>';
                    
                    localStorage.removeItem('activeHubUser');
                    setTimeout(function() {
                        window.location.reload();
                    }, 1200);
                });

            } else { // CSS Stuff for Signing in
                loginBox.innerHTML = `
                <label style="display: block; margin-bottom: 6px;">Enter Code: </label>
                <input type="password" id="loginCodeInput" style="width: 100%; height: 30px; padding: 4px 8px; border: 1px solid #cdcdcdff; border-radius: 6px; margin-bottom: 12px;">
                <button type="button" id="loginSubmitButton" style="width: 100%; background-color: #ffffff; padding: 8px; border-radius: 6px; cursor: pointer;">Submit</button>
                `;

                loginButton.parentElement.appendChild(loginBox);

                var processCodeButton = document.getElementById('loginSubmitButton');
                processCodeButton.addEventListener('click', function() {
                    var typedKey = document.getElementById('loginCodeInput').value;
                    var profileHolder = "";
                    if (typedKey === "1234") {
                        profileHolder = "Lauren Kim";
                    } else if (typedKey === "4321") {
                        profileHolder = "Person 1";
                    }

                    if (profileHolder !== "") {
                        loginBox.innerHTML = '<p margin: 0; text-align: center;">Welcome back, ' + profileHolder + '!</p>';
                        
                        localStorage.setItem('activeHubUser', profileHolder);
                        setTimeout(function() {
                            window.location.reload();
                        }, 1200);
                    } else {
                        showAlert("Wrong password!")
                    }
                });
            }
        });
    }

});
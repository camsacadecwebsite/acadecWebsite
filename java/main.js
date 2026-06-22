document.addEventListener('DOMContentLoaded', () => {

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



    // ADD PRACTICE TEST INITIALIZATION
    // Practice Test Button and Section where they go
    const addPracticeTestButton = document.getElementById('addPracticeTestButton');
    const addPracticeTestSection = document.getElementById('addPracticeTestSection');

    // Make practice test button
    addPracticeTestButton.addEventListener('click', () => {
        const testCardRow = document.createElement('div');
        testCardRow.classList.add('testCard'); 

        // HTML for test cards
        testCardRow.innerHTML = `
            <select name="typeOfTest[]" class="typeOfTest" required>
                <option value="" disabled selected>Select Type of Test</option>
                <option value="Demidec">Demidec Section Test</option>
                <option value="USADEasy">USAD Easy Test</option>
                <option value="USADMedium">USAD Medium Test</option>
                <option value="USADHard">USAD Hard Test</option>
                <option value="SiteTest">Site Test</option>
            </select>

            <select name="testSubject[]" class="testSubject" required>
                <option value="" disabled selected>Select Subject</option>
                <option value="Art">Art</option>
                <option value="Econ">Economics</option>
                <option value="Lit">Literature</option>
                <option value="Math">Math</option>
                <option value="Music">Music</option>
                <option value="Sci">Science</option>
                <option value="Socsci">Social Science</option>
            </select>

            <select name="testSection[]" class="testSection" required>
                <option value="" disabled selected>Select Section</option>
                <option value="Section1">Section 1</option>
                <option value="Section2">Section 2</option>
                <option value="Section3">Section 3</option>
                <option value="Section4">Section 4</option>
                <option value="Section5">Section 5</option>
                <option value="FullTest">Full Subject Test</option>
            </select>
            
            <input type="number" name="testScore[]" class="testScore" placeholder="Score (0-1000)" min="0" max="1000" required>
            
            <button type="button" class="removeTestButton" title="removeTestButton">Remove Test</button>
        `;

        const removeButton = testCardRow.querySelector('.removeTestButton'); // Trash test card button
        if (removeButton) {
            removeButton.addEventListener('click', () => {
                testCardRow.remove(); // If click, remove
            });
        }
        addPracticeTestSection.appendChild(testCardRow);
    });
});
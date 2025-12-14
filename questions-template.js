// Chapter X: [Chapter Name] - Question Bank Template
// This file contains all questions for Chapter X

function loadChapterXQuestions() {
    // Example question structure
    addQuestion('chapterX', {
        id: 'chX_example',
        section: 'XA',
        questionNum: '1a',
        page: 99,  // Page number from the textbook
        witness: 'Phoenix Wright',
        witnessSprite: '👨‍💼',  // Not needed anymore - images loaded from witness name
        type: 'question-type',
        diagram: {
            // Optional diagram configuration
            type: 'right-triangle',
            side1: 5,
            side1Unit: 'cm',
            side2: 3,
            side2Unit: 'cm',
            showRightAngle: true
        },
        problem: 'Question text here...',
        correctAnswer: 'answer',
        acceptableAnswers: ['answer', 'alternative1', 'alternative2'],
        decimalEquivalent: 5.83,  // For numerical tolerance checking
        answerType: 'surd',  // 'surd', 'number', 'decimal', 'text'
        tolerance: 0.1,
        hint: 'Hint text explaining the method without giving the answer...',
        explanation: `<strong>The correct answer is [answer]!</strong><br><br>
            Step 1: ...<br>
            Step 2: ...<br>
            Step 3: ...`,
        points: 100
    });

    // Add more questions here...
}

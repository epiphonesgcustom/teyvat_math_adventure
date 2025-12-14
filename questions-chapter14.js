/**
 * Chapter 14: Algebra and Sequences Questions
 * Covers algebraic manipulation, linear equations, quadratics, and number patterns
 */

function loadChapter14Questions() {
    // ==========================================
    // SECTION 14A - Expanding and Factoring (Page 277)
    // ==========================================

    addQuestion('chapter14', {
        id: 'ch14_14a1_a',
        section: '14A',
        questionNum: '1a',
        page: 277,
        witness: 'Phoenix Wright',
        witnessSprite: '👨‍💼',
        type: 'expand-brackets',
        diagram: null,
        problem: 'Phoenix needs to expand the expression: 3(x + 5). What is the result?',
        correctAnswer: '3x + 15',
        acceptableAnswers: ['3x + 15', '3x+15', '15 + 3x'],
        decimalEquivalent: null,
        answerType: 'text',
        tolerance: 0,
        hint: 'Multiply 3 by each term inside the brackets: 3 × x and 3 × 5.',
        explanation: `<strong>The answer is 3x + 15!</strong><br><br>
            Step 1: Distribute 3 to each term<br>
            Step 2: 3(x + 5) = 3 × x + 3 × 5<br>
            Step 3: = 3x + 15`,
        points: 100
    });

    addQuestion('chapter14', {
        id: 'ch14_14a1_b',
        section: '14A',
        questionNum: '1b',
        page: 277,
        witness: 'Maya Fey',
        witnessSprite: '👧',
        type: 'expand-brackets',
        diagram: null,
        problem: 'Maya expands: -2(4x - 3). What is the simplified result?',
        correctAnswer: '-8x + 6',
        acceptableAnswers: ['-8x + 6', '-8x+6', '6 - 8x'],
        decimalEquivalent: null,
        answerType: 'text',
        tolerance: 0,
        hint: 'Multiply -2 by both terms. Remember: (-2) × (-3) = +6.',
        explanation: `<strong>The answer is -8x + 6!</strong><br><br>
            Step 1: -2(4x - 3)<br>
            Step 2: = -2 × 4x + (-2) × (-3)<br>
            Step 3: = -8x + 6`,
        points: 100
    });

    addQuestion('chapter14', {
        id: 'ch14_14a2_a',
        section: '14A',
        questionNum: '2a',
        page: 277,
        witness: 'Miles Edgeworth',
        witnessSprite: '🧑‍💼',
        type: 'factorize',
        diagram: null,
        problem: 'Edgeworth needs to factorize: 6x + 9. What is the factored form?',
        correctAnswer: '3(2x + 3)',
        acceptableAnswers: ['3(2x + 3)', '3(2x+3)'],
        decimalEquivalent: null,
        answerType: 'text',
        tolerance: 0,
        hint: 'Find the greatest common factor (GCF) of 6 and 9, which is 3. Factor it out.',
        explanation: `<strong>The answer is 3(2x + 3)!</strong><br><br>
            Step 1: GCF of 6 and 9 is 3<br>
            Step 2: 6x + 9 = 3 × 2x + 3 × 3<br>
            Step 3: = 3(2x + 3)`,
        points: 100
    });

    addQuestion('chapter14', {
        id: 'ch14_14a2_b',
        section: '14A',
        questionNum: '2b',
        page: 277,
        witness: 'Apollo Justice',
        witnessSprite: '👨‍🦰',
        type: 'factorize',
        diagram: null,
        problem: 'Apollo factorizes: 5x² - 10x. What is the factored form?',
        correctAnswer: '5x(x - 2)',
        acceptableAnswers: ['5x(x - 2)', '5x(x-2)'],
        decimalEquivalent: null,
        answerType: 'text',
        tolerance: 0,
        hint: 'The GCF is 5x. Factor out 5x from both terms.',
        explanation: `<strong>The answer is 5x(x - 2)!</strong><br><br>
            Step 1: GCF of 5x² and 10x is 5x<br>
            Step 2: 5x² - 10x = 5x × x - 5x × 2<br>
            Step 3: = 5x(x - 2)`,
        points: 100
    });

    // ==========================================
    // SECTION 14B - Solving Linear Equations (Page 281)
    // ==========================================

    addQuestion('chapter14', {
        id: 'ch14_14b1_a',
        section: '14B',
        questionNum: '1a',
        page: 281,
        witness: 'Franziska von Karma',
        witnessSprite: '👩',
        type: 'solve-linear',
        diagram: null,
        problem: 'Franziska solves the equation: 2x + 7 = 15. Find x.',
        correctAnswer: '4',
        acceptableAnswers: ['4', '4.0'],
        decimalEquivalent: 4,
        answerType: 'number',
        tolerance: 0.01,
        hint: 'Subtract 7 from both sides, then divide by 2.',
        explanation: `<strong>The answer is x = 4!</strong><br><br>
            Step 1: 2x + 7 = 15<br>
            Step 2: 2x = 15 - 7<br>
            Step 3: 2x = 8<br>
            Step 4: x = 4`,
        points: 100
    });

    addQuestion('chapter14', {
        id: 'ch14_14b1_b',
        section: '14B',
        questionNum: '1b',
        page: 281,
        witness: 'Dick Gumshoe',
        witnessSprite: '👮',
        type: 'solve-linear',
        diagram: null,
        problem: 'Detective Gumshoe solves: 5 - 3x = 11. Find x.',
        correctAnswer: '-2',
        acceptableAnswers: ['-2', '-2.0'],
        decimalEquivalent: -2,
        answerType: 'number',
        tolerance: 0.01,
        hint: 'Subtract 5 from both sides, then divide by -3.',
        explanation: `<strong>The answer is x = -2!</strong><br><br>
            Step 1: 5 - 3x = 11<br>
            Step 2: -3x = 11 - 5<br>
            Step 3: -3x = 6<br>
            Step 4: x = -2`,
        points: 100
    });

    addQuestion('chapter14', {
        id: 'ch14_14b2',
        section: '14B',
        questionNum: '2',
        page: 281,
        witness: 'Trucy Wright',
        witnessSprite: '🎩',
        type: 'solve-linear-fractions',
        diagram: null,
        problem: 'Trucy solves: (x + 3)/2 = 5. Find x.',
        correctAnswer: '7',
        acceptableAnswers: ['7', '7.0'],
        decimalEquivalent: 7,
        answerType: 'number',
        tolerance: 0.01,
        hint: 'Multiply both sides by 2 first to clear the fraction.',
        explanation: `<strong>The answer is x = 7!</strong><br><br>
            Step 1: (x + 3)/2 = 5<br>
            Step 2: Multiply both sides by 2: x + 3 = 10<br>
            Step 3: x = 10 - 3<br>
            Step 4: x = 7`,
        points: 100
    });

    addQuestion('chapter14', {
        id: 'ch14_14b3',
        section: '14B',
        questionNum: '3',
        page: 281,
        witness: 'Klavier Gavin',
        witnessSprite: '🎸',
        type: 'solve-linear-both-sides',
        diagram: null,
        problem: 'Klavier solves an equation with variables on both sides: 3x + 5 = x + 13. Find x.',
        correctAnswer: '4',
        acceptableAnswers: ['4', '4.0'],
        decimalEquivalent: 4,
        answerType: 'number',
        tolerance: 0.01,
        hint: 'Subtract x from both sides to get all x terms on one side.',
        explanation: `<strong>The answer is x = 4!</strong><br><br>
            Step 1: 3x + 5 = x + 13<br>
            Step 2: 3x - x = 13 - 5<br>
            Step 3: 2x = 8<br>
            Step 4: x = 4`,
        points: 100
    });

    // ==========================================
    // SECTION 14C - Quadratic Factorization (Page 285)
    // ==========================================

    addQuestion('chapter14', {
        id: 'ch14_14c1_a',
        section: '14C',
        questionNum: '1a',
        page: 285,
        witness: 'Pearl Fey',
        witnessSprite: '👧',
        type: 'factorize-quadratic',
        diagram: null,
        problem: 'Pearl factorizes: x² + 5x + 6. What is the factored form?',
        correctAnswer: '(x + 2)(x + 3)',
        acceptableAnswers: ['(x + 2)(x + 3)', '(x+2)(x+3)', '(x + 3)(x + 2)'],
        decimalEquivalent: null,
        answerType: 'text',
        tolerance: 0,
        hint: 'Find two numbers that multiply to 6 and add to 5. They are 2 and 3.',
        explanation: `<strong>The answer is (x + 2)(x + 3)!</strong><br><br>
            Step 1: Find factors of 6 that add to 5<br>
            Step 2: 2 × 3 = 6 and 2 + 3 = 5 ✓<br>
            Step 3: x² + 5x + 6 = (x + 2)(x + 3)`,
        points: 100
    });

    addQuestion('chapter14', {
        id: 'ch14_14c1_b',
        section: '14C',
        questionNum: '1b',
        page: 285,
        witness: 'Godot',
        witnessSprite: '☕',
        type: 'factorize-quadratic',
        diagram: null,
        problem: 'Godot factorizes: x² - 7x + 12. What is the factored form?',
        correctAnswer: '(x - 3)(x - 4)',
        acceptableAnswers: ['(x - 3)(x - 4)', '(x-3)(x-4)', '(x - 4)(x - 3)'],
        decimalEquivalent: null,
        answerType: 'text',
        tolerance: 0,
        hint: 'Find two negative numbers that multiply to +12 and add to -7.',
        explanation: `<strong>The answer is (x - 3)(x - 4)!</strong><br><br>
            Step 1: Find factors of 12 that add to -7<br>
            Step 2: (-3) × (-4) = 12 and (-3) + (-4) = -7 ✓<br>
            Step 3: x² - 7x + 12 = (x - 3)(x - 4)`,
        points: 100
    });

    addQuestion('chapter14', {
        id: 'ch14_14c2',
        section: '14C',
        questionNum: '2',
        page: 285,
        witness: 'Phoenix Wright',
        witnessSprite: '👨‍💼',
        type: 'factorize-quadratic-difference',
        diagram: null,
        problem: 'Phoenix factorizes a difference of squares: x² - 25. What is the factored form?',
        correctAnswer: '(x + 5)(x - 5)',
        acceptableAnswers: ['(x + 5)(x - 5)', '(x+5)(x-5)', '(x - 5)(x + 5)'],
        decimalEquivalent: null,
        answerType: 'text',
        tolerance: 0,
        hint: 'This is a difference of squares: a² - b² = (a + b)(a - b). Here a = x and b = 5.',
        explanation: `<strong>The answer is (x + 5)(x - 5)!</strong><br><br>
            Step 1: Recognize difference of squares pattern<br>
            Step 2: x² - 25 = x² - 5²<br>
            Step 3: = (x + 5)(x - 5)`,
        points: 100
    });

    // ==========================================
    // SECTION 14D - Solving Quadratic Equations (Page 288)
    // ==========================================

    addQuestion('chapter14', {
        id: 'ch14_14d1_a',
        section: '14D',
        questionNum: '1a',
        page: 288,
        witness: 'Maya Fey',
        witnessSprite: '👧',
        type: 'solve-quadratic-factoring',
        diagram: null,
        problem: 'Maya solves by factoring: x² + 6x + 8 = 0. Find the two values of x (enter the smaller value).',
        correctAnswer: '-4',
        acceptableAnswers: ['-4', '-4.0'],
        decimalEquivalent: -4,
        answerType: 'number',
        tolerance: 0.01,
        hint: 'Factor to (x + 2)(x + 4) = 0, then solve each factor.',
        explanation: `<strong>The answer is x = -4 or x = -2!</strong><br><br>
            Step 1: Factor: x² + 6x + 8 = (x + 2)(x + 4)<br>
            Step 2: Set each factor to 0<br>
            Step 3: x + 2 = 0 → x = -2<br>
            Step 4: x + 4 = 0 → x = -4<br>
            The smaller value is -4.`,
        points: 100
    });

    addQuestion('chapter14', {
        id: 'ch14_14d1_b',
        section: '14D',
        questionNum: '1b',
        page: 288,
        witness: 'Miles Edgeworth',
        witnessSprite: '🧑‍💼',
        type: 'solve-quadratic-factoring',
        diagram: null,
        problem: 'Edgeworth solves: x² - 9 = 0. Find the positive value of x.',
        correctAnswer: '3',
        acceptableAnswers: ['3', '3.0'],
        decimalEquivalent: 3,
        answerType: 'number',
        tolerance: 0.01,
        hint: 'This is a difference of squares: x² - 9 = (x + 3)(x - 3) = 0.',
        explanation: `<strong>The answer is x = 3 (or x = -3)!</strong><br><br>
            Step 1: x² - 9 = 0<br>
            Step 2: (x + 3)(x - 3) = 0<br>
            Step 3: x = -3 or x = 3<br>
            The positive value is 3.`,
        points: 100
    });

    addQuestion('chapter14', {
        id: 'ch14_14d2',
        section: '14D',
        questionNum: '2',
        page: 288,
        witness: 'Apollo Justice',
        witnessSprite: '👨‍🦰',
        type: 'solve-quadratic-formula',
        diagram: null,
        problem: 'Apollo uses the quadratic formula to solve: x² + 4x + 1 = 0. Find x to 2 decimal places (enter the larger value).',
        correctAnswer: '-0.27',
        acceptableAnswers: ['-0.27', '-0.3'],
        decimalEquivalent: -0.27,
        answerType: 'decimal',
        tolerance: 0.05,
        hint: 'Use x = [-b ± √(b² - 4ac)] / 2a where a=1, b=4, c=1.',
        explanation: `<strong>The answer is x ≈ -0.27 (or x ≈ -3.73)!</strong><br><br>
            Step 1: x = [-4 ± √(16 - 4)]/2<br>
            Step 2: x = [-4 ± √12]/2<br>
            Step 3: x = [-4 ± 3.464]/2<br>
            Step 4: x = -0.27 or x = -3.73<br>
            The larger value is -0.27.`,
        points: 100
    });

    // ==========================================
    // SECTION 14E - Sequences (Page 292)
    // ==========================================

    addQuestion('chapter14', {
        id: 'ch14_14e1_a',
        section: '14E',
        questionNum: '1a',
        page: 292,
        witness: 'Franziska von Karma',
        witnessSprite: '👩',
        type: 'arithmetic-sequence',
        diagram: null,
        problem: 'Franziska examines the sequence: 3, 7, 11, 15, ... What is the 10th term?',
        correctAnswer: '39',
        acceptableAnswers: ['39'],
        decimalEquivalent: 39,
        answerType: 'number',
        tolerance: 0,
        hint: 'This is an arithmetic sequence with first term a = 3 and common difference d = 4. Use T_n = a + (n-1)d.',
        explanation: `<strong>The answer is 39!</strong><br><br>
            Step 1: First term a = 3, difference d = 4<br>
            Step 2: T_n = a + (n - 1)d<br>
            Step 3: T_10 = 3 + (10 - 1) × 4<br>
            Step 4: T_10 = 3 + 36 = 39`,
        points: 100
    });

    addQuestion('chapter14', {
        id: 'ch14_14e1_b',
        section: '14E',
        questionNum: '1b',
        page: 292,
        witness: 'Dick Gumshoe',
        witnessSprite: '👮',
        type: 'arithmetic-sequence-nth',
        diagram: null,
        problem: 'Detective Gumshoe finds the sequence: 50, 45, 40, 35, ... What is the 20th term?',
        correctAnswer: '-45',
        acceptableAnswers: ['-45'],
        decimalEquivalent: -45,
        answerType: 'number',
        tolerance: 0,
        hint: 'First term a = 50, common difference d = -5 (decreasing).',
        explanation: `<strong>The answer is -45!</strong><br><br>
            Step 1: a = 50, d = -5<br>
            Step 2: T_20 = 50 + (20 - 1) × (-5)<br>
            Step 3: T_20 = 50 + 19 × (-5)<br>
            Step 4: T_20 = 50 - 95 = -45`,
        points: 100
    });

    addQuestion('chapter14', {
        id: 'ch14_14e2',
        section: '14E',
        questionNum: '2',
        page: 292,
        witness: 'Trucy Wright',
        witnessSprite: '🎩',
        type: 'geometric-sequence',
        diagram: null,
        problem: 'Trucy discovers a geometric sequence: 2, 6, 18, 54, ... What is the 6th term?',
        correctAnswer: '486',
        acceptableAnswers: ['486'],
        decimalEquivalent: 486,
        answerType: 'number',
        tolerance: 0,
        hint: 'Geometric sequence with first term a = 2 and ratio r = 3. Use T_n = a × r^(n-1).',
        explanation: `<strong>The answer is 486!</strong><br><br>
            Step 1: a = 2, r = 6/2 = 3<br>
            Step 2: T_n = a × r^(n-1)<br>
            Step 3: T_6 = 2 × 3^5<br>
            Step 4: T_6 = 2 × 243 = 486`,
        points: 100
    });

    addQuestion('chapter14', {
        id: 'ch14_14e3',
        section: '14E',
        questionNum: '3',
        page: 292,
        witness: 'Klavier Gavin',
        witnessSprite: '🎸',
        type: 'sequence-pattern',
        diagram: null,
        problem: 'Klavier analyzes the pattern: 1, 4, 9, 16, 25, ... What is the 12th term?',
        correctAnswer: '144',
        acceptableAnswers: ['144'],
        decimalEquivalent: 144,
        answerType: 'number',
        tolerance: 0,
        hint: 'These are perfect squares: 1², 2², 3², 4², 5², ... The nth term is n².',
        explanation: `<strong>The answer is 144!</strong><br><br>
            Step 1: Pattern: 1² = 1, 2² = 4, 3² = 9, ...<br>
            Step 2: The nth term = n²<br>
            Step 3: 12th term = 12²<br>
            Step 4: = 144`,
        points: 100
    });

    // ==========================================
    // SECTION 14F - Word Problems (Page 296)
    // ==========================================

    addQuestion('chapter14', {
        id: 'ch14_14f1',
        section: '14F',
        questionNum: '1',
        page: 296,
        witness: 'Pearl Fey',
        witnessSprite: '👧',
        type: 'word-problem-algebra',
        diagram: null,
        problem: 'Pearl has twice as many spirit channeling beads as Maya. Together they have 27 beads. How many beads does Pearl have?',
        correctAnswer: '18',
        acceptableAnswers: ['18'],
        decimalEquivalent: 18,
        answerType: 'number',
        tolerance: 0,
        hint: 'Let Maya have x beads. Then Pearl has 2x beads. Equation: x + 2x = 27.',
        explanation: `<strong>The answer is 18 beads!</strong><br><br>
            Step 1: Let Maya have x beads<br>
            Step 2: Pearl has 2x beads<br>
            Step 3: x + 2x = 27<br>
            Step 4: 3x = 27, so x = 9<br>
            Step 5: Pearl has 2 × 9 = 18 beads`,
        points: 100
    });

    addQuestion('chapter14', {
        id: 'ch14_14f2',
        section: '14F',
        questionNum: '2',
        page: 296,
        witness: 'Godot',
        witnessSprite: '☕',
        type: 'word-problem-consecutive',
        diagram: null,
        problem: 'Godot finds three consecutive case numbers that sum to 48. What is the middle case number?',
        correctAnswer: '16',
        acceptableAnswers: ['16'],
        decimalEquivalent: 16,
        answerType: 'number',
        tolerance: 0,
        hint: 'Let the numbers be n, n+1, and n+2. Then n + (n+1) + (n+2) = 48.',
        explanation: `<strong>The answer is 16!</strong><br><br>
            Step 1: Let numbers be n, n+1, n+2<br>
            Step 2: n + (n+1) + (n+2) = 48<br>
            Step 3: 3n + 3 = 48<br>
            Step 4: 3n = 45, so n = 15<br>
            Step 5: Middle number = 15 + 1 = 16`,
        points: 100
    });

    addQuestion('chapter14', {
        id: 'ch14_14f3',
        section: '14F',
        questionNum: '3',
        page: 296,
        witness: 'Phoenix Wright',
        witnessSprite: '👨‍💼',
        type: 'word-problem-age',
        diagram: null,
        problem: 'Phoenix is currently 28 years old. In how many years will he be twice as old as he was 7 years ago?',
        correctAnswer: '14',
        acceptableAnswers: ['14'],
        decimalEquivalent: 14,
        answerType: 'number',
        tolerance: 0,
        hint: 'Let x be the number of years. Then 28 + x = 2(28 - 7).',
        explanation: `<strong>The answer is 14 years!</strong><br><br>
            Step 1: Age 7 years ago = 28 - 7 = 21<br>
            Step 2: In x years: 28 + x = 2 × 21<br>
            Step 3: 28 + x = 42<br>
            Step 4: x = 42 - 28 = 14 years`,
        points: 100
    });

    console.log('Chapter 14 questions loaded successfully!');
}

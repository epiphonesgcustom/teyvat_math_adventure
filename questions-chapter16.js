/**
 * Chapter 16: Probability Questions
 * Covers basic probability, compound events, tree diagrams, and probability applications
 */

function loadChapter16Questions() {
    // ==========================================
    // SECTION 16A - Basic Probability (Page 321)
    // ==========================================

    addQuestion('chapter16', {
        id: 'ch16_16a1_a',
        section: '16A',
        questionNum: '1a',
        page: 321,
        witness: 'Phoenix Wright',
        witnessSprite: '👨‍💼',
        type: 'basic-probability',
        diagram: null,
        problem: 'Phoenix examines a standard deck of 52 playing cards. What is the probability of drawing a heart? Express your answer as a fraction in simplest form.',
        correctAnswer: '1/4',
        acceptableAnswers: ['1/4', '0.25', '13/52'],
        decimalEquivalent: 0.25,
        answerType: 'fraction',
        tolerance: 0.01,
        hint: 'There are 13 hearts in a deck of 52 cards. Probability = favorable outcomes / total outcomes.',
        explanation: `<strong>The answer is 1/4!</strong><br><br>
            Step 1: Number of hearts = 13<br>
            Step 2: Total cards = 52<br>
            Step 3: P(heart) = 13/52<br>
            Step 4: Simplify: 13/52 = 1/4 = 0.25`,
        points: 100
    });

    addQuestion('chapter16', {
        id: 'ch16_16a1_b',
        section: '16A',
        questionNum: '1b',
        page: 321,
        witness: 'Maya Fey',
        witnessSprite: '👧',
        type: 'basic-probability',
        diagram: null,
        problem: 'Maya rolls a standard six-sided die. What is the probability of rolling a number greater than 4? Express as a fraction.',
        correctAnswer: '1/3',
        acceptableAnswers: ['1/3', '2/6', '0.333'],
        decimalEquivalent: 0.333,
        answerType: 'fraction',
        tolerance: 0.01,
        hint: 'Numbers greater than 4 are: 5 and 6. Count the favorable outcomes.',
        explanation: `<strong>The answer is 1/3!</strong><br><br>
            Step 1: Numbers greater than 4: {5, 6}<br>
            Step 2: Favorable outcomes = 2<br>
            Step 3: Total outcomes = 6<br>
            Step 4: P(> 4) = 2/6 = 1/3`,
        points: 100
    });

    addQuestion('chapter16', {
        id: 'ch16_16a2_a',
        section: '16A',
        questionNum: '2a',
        page: 321,
        witness: 'Miles Edgeworth',
        witnessSprite: '🧑‍💼',
        type: 'basic-probability',
        diagram: null,
        problem: 'Edgeworth has a bag containing 5 red marbles, 3 blue marbles, and 2 green marbles. What is the probability of drawing a blue marble? Express as a fraction in simplest form.',
        correctAnswer: '3/10',
        acceptableAnswers: ['3/10', '0.3'],
        decimalEquivalent: 0.3,
        answerType: 'fraction',
        tolerance: 0.01,
        hint: 'Total marbles = 5 + 3 + 2 = 10. Blue marbles = 3.',
        explanation: `<strong>The answer is 3/10!</strong><br><br>
            Step 1: Blue marbles = 3<br>
            Step 2: Total marbles = 5 + 3 + 2 = 10<br>
            Step 3: P(blue) = 3/10 = 0.3`,
        points: 100
    });

    addQuestion('chapter16', {
        id: 'ch16_16a3',
        section: '16A',
        questionNum: '3',
        page: 321,
        witness: 'Apollo Justice',
        witnessSprite: '👨‍🦰',
        type: 'complementary-probability',
        diagram: null,
        problem: 'Apollo knows that the probability of rain tomorrow is 0.35. What is the probability that it will NOT rain tomorrow?',
        correctAnswer: '0.65',
        acceptableAnswers: ['0.65', '13/20'],
        decimalEquivalent: 0.65,
        answerType: 'decimal',
        tolerance: 0.01,
        hint: 'The complement rule: P(not A) = 1 - P(A)',
        explanation: `<strong>The answer is 0.65!</strong><br><br>
            Step 1: P(rain) = 0.35<br>
            Step 2: P(not rain) = 1 - P(rain)<br>
            Step 3: P(not rain) = 1 - 0.35 = 0.65`,
        points: 100
    });

    // ==========================================
    // SECTION 16B - Two-Way Tables (Page 325)
    // ==========================================

    addQuestion('chapter16', {
        id: 'ch16_16b1',
        section: '16B',
        questionNum: '1',
        page: 325,
        witness: 'Franziska von Karma',
        witnessSprite: '👩',
        type: 'two-way-table',
        diagram: null,
        problem: 'Franziska surveys 100 students. 60 study Math, 45 study Science, and 25 study both. How many students study neither Math nor Science?',
        correctAnswer: '20',
        acceptableAnswers: ['20'],
        decimalEquivalent: 20,
        answerType: 'number',
        tolerance: 0,
        hint: 'Use the formula: Total = Math only + Science only + Both + Neither. Math only = 60 - 25 = 35.',
        explanation: `<strong>The answer is 20 students!</strong><br><br>
            Step 1: Math only = 60 - 25 = 35<br>
            Step 2: Science only = 45 - 25 = 20<br>
            Step 3: Both = 25<br>
            Step 4: Total studying at least one = 35 + 20 + 25 = 80<br>
            Step 5: Neither = 100 - 80 = 20`,
        points: 100
    });

    addQuestion('chapter16', {
        id: 'ch16_16b2',
        section: '16B',
        questionNum: '2',
        page: 325,
        witness: 'Dick Gumshoe',
        witnessSprite: '👮',
        type: 'two-way-table-probability',
        diagram: null,
        problem: 'Detective Gumshoe examines evidence: Of 80 cases, 50 involved fingerprints, 40 involved DNA, and 20 involved both. If a case is selected at random, what is the probability it involved DNA but NOT fingerprints? Express as a fraction.',
        correctAnswer: '1/4',
        acceptableAnswers: ['1/4', '0.25', '20/80'],
        decimalEquivalent: 0.25,
        answerType: 'fraction',
        tolerance: 0.01,
        hint: 'DNA only = DNA total - Both. Then divide by total cases.',
        explanation: `<strong>The answer is 1/4!</strong><br><br>
            Step 1: DNA only = 40 - 20 = 20<br>
            Step 2: Total cases = 80<br>
            Step 3: P(DNA only) = 20/80 = 1/4`,
        points: 100
    });

    // ==========================================
    // SECTION 16C - Compound Events (Page 328)
    // ==========================================

    addQuestion('chapter16', {
        id: 'ch16_16c1_a',
        section: '16C',
        questionNum: '1a',
        page: 328,
        witness: 'Trucy Wright',
        witnessSprite: '🎩',
        type: 'independent-events',
        diagram: null,
        problem: 'Trucy performs two magic tricks. The probability of succeeding at the first trick is 0.8, and the second is 0.9. Assuming independence, what is the probability she succeeds at BOTH tricks?',
        correctAnswer: '0.72',
        acceptableAnswers: ['0.72', '18/25'],
        decimalEquivalent: 0.72,
        answerType: 'decimal',
        tolerance: 0.01,
        hint: 'For independent events: P(A and B) = P(A) × P(B)',
        explanation: `<strong>The answer is 0.72!</strong><br><br>
            Step 1: P(first success) = 0.8<br>
            Step 2: P(second success) = 0.9<br>
            Step 3: P(both) = 0.8 × 0.9<br>
            Step 4: P(both) = 0.72`,
        points: 100
    });

    addQuestion('chapter16', {
        id: 'ch16_16c1_b',
        section: '16C',
        questionNum: '1b',
        page: 328,
        witness: 'Klavier Gavin',
        witnessSprite: '🎸',
        type: 'independent-events',
        diagram: null,
        problem: 'Klavier flips a fair coin twice. What is the probability of getting heads on the first flip AND tails on the second flip? Express as a fraction.',
        correctAnswer: '1/4',
        acceptableAnswers: ['1/4', '0.25'],
        decimalEquivalent: 0.25,
        answerType: 'fraction',
        tolerance: 0.01,
        hint: 'P(heads) = 1/2, P(tails) = 1/2. Multiply them.',
        explanation: `<strong>The answer is 1/4!</strong><br><br>
            Step 1: P(heads on 1st) = 1/2<br>
            Step 2: P(tails on 2nd) = 1/2<br>
            Step 3: P(H then T) = 1/2 × 1/2 = 1/4`,
        points: 100
    });

    addQuestion('chapter16', {
        id: 'ch16_16c2',
        section: '16C',
        questionNum: '2',
        page: 328,
        witness: 'Pearl Fey',
        witnessSprite: '👧',
        type: 'mutually-exclusive',
        diagram: null,
        problem: 'Pearl has a spinner with 3 red sections, 2 blue sections, and 1 green section. What is the probability of landing on red OR blue? Express as a fraction.',
        correctAnswer: '5/6',
        acceptableAnswers: ['5/6', '0.833'],
        decimalEquivalent: 0.833,
        answerType: 'fraction',
        tolerance: 0.01,
        hint: 'For mutually exclusive events: P(A or B) = P(A) + P(B). Total sections = 6.',
        explanation: `<strong>The answer is 5/6!</strong><br><br>
            Step 1: Total sections = 3 + 2 + 1 = 6<br>
            Step 2: P(red) = 3/6<br>
            Step 3: P(blue) = 2/6<br>
            Step 4: P(red or blue) = 3/6 + 2/6 = 5/6`,
        points: 100
    });

    addQuestion('chapter16', {
        id: 'ch16_16c3',
        section: '16C',
        questionNum: '3',
        page: 328,
        witness: 'Godot',
        witnessSprite: '☕',
        type: 'at-least-one',
        diagram: null,
        problem: 'Godot tosses a fair coin 3 times. What is the probability of getting at least one head? Express as a fraction.',
        correctAnswer: '7/8',
        acceptableAnswers: ['7/8', '0.875'],
        decimalEquivalent: 0.875,
        answerType: 'fraction',
        tolerance: 0.01,
        hint: 'Use complement: P(at least 1 head) = 1 - P(no heads) = 1 - P(all tails).',
        explanation: `<strong>The answer is 7/8!</strong><br><br>
            Step 1: P(tails on one toss) = 1/2<br>
            Step 2: P(all 3 tails) = (1/2)³ = 1/8<br>
            Step 3: P(at least 1 head) = 1 - 1/8<br>
            Step 4: = 7/8`,
        points: 100
    });

    // ==========================================
    // SECTION 16D - Tree Diagrams (Page 332)
    // ==========================================

    addQuestion('chapter16', {
        id: 'ch16_16d1',
        section: '16D',
        questionNum: '1',
        page: 332,
        witness: 'Phoenix Wright',
        witnessSprite: '👨‍💼',
        type: 'tree-diagram',
        diagram: null,
        problem: 'Phoenix has a bag with 3 red and 2 blue marbles. He draws one marble, replaces it, then draws again. What is the probability both marbles are red? Express as a fraction.',
        correctAnswer: '9/25',
        acceptableAnswers: ['9/25', '0.36'],
        decimalEquivalent: 0.36,
        answerType: 'fraction',
        tolerance: 0.01,
        hint: 'With replacement: P(red) = 3/5 each time. Multiply for both draws.',
        explanation: `<strong>The answer is 9/25!</strong><br><br>
            Step 1: P(red on 1st draw) = 3/5<br>
            Step 2: Replace, so P(red on 2nd) = 3/5<br>
            Step 3: P(both red) = 3/5 × 3/5<br>
            Step 4: = 9/25`,
        points: 100
    });

    addQuestion('chapter16', {
        id: 'ch16_16d2',
        section: '16D',
        questionNum: '2',
        page: 332,
        witness: 'Maya Fey',
        witnessSprite: '👧',
        type: 'tree-diagram-without-replacement',
        diagram: null,
        problem: 'Maya has 4 red and 3 blue marbles. She draws two marbles WITHOUT replacement. What is the probability both are blue? Express as a fraction in simplest form.',
        correctAnswer: '1/7',
        acceptableAnswers: ['1/7', '3/21'],
        decimalEquivalent: 0.143,
        answerType: 'fraction',
        tolerance: 0.01,
        hint: 'First draw: P(blue) = 3/7. Second draw (without replacement): P(blue) = 2/6.',
        explanation: `<strong>The answer is 1/7!</strong><br><br>
            Step 1: Total marbles = 4 + 3 = 7<br>
            Step 2: P(blue on 1st) = 3/7<br>
            Step 3: After removing 1 blue: 6 marbles left, 2 blue<br>
            Step 4: P(blue on 2nd) = 2/6 = 1/3<br>
            Step 5: P(both blue) = 3/7 × 1/3 = 3/21 = 1/7`,
        points: 100
    });

    addQuestion('chapter16', {
        id: 'ch16_16d3',
        section: '16D',
        questionNum: '3',
        page: 332,
        witness: 'Miles Edgeworth',
        witnessSprite: '🧑‍💼',
        type: 'tree-diagram-conditional',
        diagram: null,
        problem: 'Edgeworth analyzes witness reliability: If a witness is truthful (70% chance), they give correct testimony 90% of the time. If lying (30% chance), they give correct testimony only 20% of the time. What is the probability a random witness gives correct testimony?',
        correctAnswer: '0.69',
        acceptableAnswers: ['0.69', '69/100'],
        decimalEquivalent: 0.69,
        answerType: 'decimal',
        tolerance: 0.01,
        hint: 'P(correct) = P(truthful AND correct) + P(lying AND correct). Use the law of total probability.',
        explanation: `<strong>The answer is 0.69!</strong><br><br>
            Step 1: P(truthful and correct) = 0.7 × 0.9 = 0.63<br>
            Step 2: P(lying and correct) = 0.3 × 0.2 = 0.06<br>
            Step 3: P(correct) = 0.63 + 0.06 = 0.69`,
        points: 100
    });

    // ==========================================
    // SECTION 16E - Expected Value (Page 336)
    // ==========================================

    addQuestion('chapter16', {
        id: 'ch16_16e1',
        section: '16E',
        questionNum: '1',
        page: 336,
        witness: 'Apollo Justice',
        witnessSprite: '👨‍🦰',
        type: 'expected-value',
        diagram: null,
        problem: 'Apollo plays a game where he wins $10 with probability 0.3, wins $5 with probability 0.5, and loses $2 with probability 0.2. What is his expected value per game?',
        correctAnswer: '5.1',
        acceptableAnswers: ['5.1', '$5.10'],
        decimalEquivalent: 5.1,
        answerType: 'decimal',
        tolerance: 0.1,
        hint: 'Expected value = Σ (outcome × probability). Remember to use -2 for the loss.',
        explanation: `<strong>The answer is $5.10!</strong><br><br>
            Step 1: E(X) = 10(0.3) + 5(0.5) + (-2)(0.2)<br>
            Step 2: E(X) = 3 + 2.5 - 0.4<br>
            Step 3: E(X) = $5.10`,
        points: 100
    });

    addQuestion('chapter16', {
        id: 'ch16_16e2',
        section: '16E',
        questionNum: '2',
        page: 336,
        witness: 'Franziska von Karma',
        witnessSprite: '👩',
        type: 'expected-value-dice',
        diagram: null,
        problem: 'Franziska rolls a fair six-sided die. What is the expected value of the roll?',
        correctAnswer: '3.5',
        acceptableAnswers: ['3.5', '7/2'],
        decimalEquivalent: 3.5,
        answerType: 'decimal',
        tolerance: 0.1,
        hint: 'Each outcome (1, 2, 3, 4, 5, 6) has probability 1/6. Calculate the weighted average.',
        explanation: `<strong>The answer is 3.5!</strong><br><br>
            Step 1: E(X) = 1(1/6) + 2(1/6) + 3(1/6) + 4(1/6) + 5(1/6) + 6(1/6)<br>
            Step 2: E(X) = (1 + 2 + 3 + 4 + 5 + 6)/6<br>
            Step 3: E(X) = 21/6 = 3.5`,
        points: 100
    });

    // ==========================================
    // SECTION 16F - Applications (Page 339)
    // ==========================================

    addQuestion('chapter16', {
        id: 'ch16_16f1',
        section: '16F',
        questionNum: '1',
        page: 339,
        witness: 'Trucy Wright',
        witnessSprite: '🎩',
        type: 'probability-application',
        diagram: null,
        problem: 'Trucy performs a card trick. She has you pick 2 cards from a standard 52-card deck without replacement. What is the probability both cards are aces? Express as a fraction in simplest form.',
        correctAnswer: '1/221',
        acceptableAnswers: ['1/221', '12/2652'],
        decimalEquivalent: 0.0045,
        answerType: 'fraction',
        tolerance: 0.001,
        hint: 'P(1st ace) = 4/52, then P(2nd ace) = 3/51. Multiply and simplify.',
        explanation: `<strong>The answer is 1/221!</strong><br><br>
            Step 1: P(1st ace) = 4/52 = 1/13<br>
            Step 2: P(2nd ace | 1st ace) = 3/51 = 1/17<br>
            Step 3: P(both aces) = 1/13 × 1/17<br>
            Step 4: = 1/221 ≈ 0.0045`,
        points: 100
    });

    addQuestion('chapter16', {
        id: 'ch16_16f2',
        section: '16F',
        questionNum: '2',
        page: 339,
        witness: 'Klavier Gavin',
        witnessSprite: '🎸',
        type: 'probability-birthday',
        diagram: null,
        problem: 'In a courtroom with 23 people, what is the approximate probability that at least two people share the same birthday? Round to 3 decimal places.',
        correctAnswer: '0.507',
        acceptableAnswers: ['0.507', '0.51', '50.7%'],
        decimalEquivalent: 0.507,
        answerType: 'decimal',
        tolerance: 0.01,
        hint: 'This is the famous birthday paradox! The probability is surprisingly high at about 50.7%.',
        explanation: `<strong>The answer is approximately 0.507 or 50.7%!</strong><br><br>
            This is the famous birthday paradox!<br>
            With just 23 people, there's a greater than 50% chance<br>
            that at least two share a birthday.<br><br>
            The calculation uses:<br>
            P(at least 1 match) = 1 - P(no matches)<br>
            P(no matches) = (365/365) × (364/365) × ... × (343/365) ≈ 0.493<br>
            P(at least 1 match) ≈ 1 - 0.493 = 0.507`,
        points: 100
    });

    addQuestion('chapter16', {
        id: 'ch16_16f3',
        section: '16F',
        questionNum: '3',
        page: 339,
        witness: 'Dick Gumshoe',
        witnessSprite: '👮',
        type: 'probability-crime',
        diagram: null,
        problem: 'Detective Gumshoe knows that 2% of evidence samples are contaminated. If a sample is contaminated, the test gives a positive result 95% of the time. If not contaminated, it gives a positive result 5% of the time (false positive). What is the probability a randomly tested sample gives a positive result? Round to 3 decimal places.',
        correctAnswer: '0.068',
        acceptableAnswers: ['0.068', '0.07'],
        decimalEquivalent: 0.068,
        answerType: 'decimal',
        tolerance: 0.005,
        hint: 'P(positive) = P(contaminated) × P(positive | contaminated) + P(not contaminated) × P(positive | not contaminated)',
        explanation: `<strong>The answer is 0.068!</strong><br><br>
            Step 1: P(contaminated and positive) = 0.02 × 0.95 = 0.019<br>
            Step 2: P(not contaminated and positive) = 0.98 × 0.05 = 0.049<br>
            Step 3: P(positive) = 0.019 + 0.049<br>
            Step 4: P(positive) = 0.068 or 6.8%`,
        points: 100
    });

    console.log('Chapter 16 questions loaded successfully!');
}

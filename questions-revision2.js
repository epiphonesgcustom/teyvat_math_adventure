/**
 * Revision 2: Comprehensive Mixed Review
 * Covers all topics from Chapters 5, 8, 13, 14, 15, and 16
 */

function loadRevision2Questions() {
    // ==========================================
    // MIXED REVIEW - All Topics
    // ==========================================

    // From Chapter 5 - Pythagorean Theorem
    addQuestion('revision2', {
        id: 'rev2_01',
        section: 'Mixed',
        questionNum: '1',
        page: 999,
        witness: 'Phoenix Wright',
        witnessSprite: '👨‍💼',
        type: 'pythagorean-theorem',
        diagram: {
            type: 'right-triangle',
            side1: 9,
            side1Unit: 'cm',
            side2: 12,
            side2Unit: 'cm',
            showRightAngle: true
        },
        problem: 'Phoenix examines a right triangle with legs 9 cm and 12 cm. Find the hypotenuse.',
        correctAnswer: '15',
        acceptableAnswers: ['15', '15 cm', '15.0'],
        decimalEquivalent: 15,
        answerType: 'number',
        tolerance: 0.1,
        hint: 'Use a² + b² = c². This is a 3-4-5 triangle scaled by 3.',
        explanation: `<strong>The answer is 15 cm!</strong><br><br>
            Step 1: c² = 9² + 12²<br>
            Step 2: c² = 81 + 144 = 225<br>
            Step 3: c = √225 = 15 cm<br><br>
            This is the 3-4-5 Pythagorean triple scaled by 3!`,
        points: 100
    });

    // From Chapter 8 - Volume
    addQuestion('revision2', {
        id: 'rev2_02',
        section: 'Mixed',
        questionNum: '2',
        page: 999,
        witness: 'Maya Fey',
        witnessSprite: '👧',
        type: 'volume-cylinder',
        diagram: null,
        problem: 'Maya has a cylindrical container with radius 4 cm and height 10 cm. Find the volume to 1 decimal place.',
        correctAnswer: '502.7',
        acceptableAnswers: ['502.7', '502.6', '503'],
        decimalEquivalent: 502.7,
        answerType: 'decimal',
        tolerance: 1,
        hint: 'Volume of cylinder = πr²h.',
        explanation: `<strong>The answer is approximately 502.7 cm³!</strong><br><br>
            Step 1: V = πr²h<br>
            Step 2: V = π × 4² × 10<br>
            Step 3: V = π × 16 × 10 = 160π<br>
            Step 4: V ≈ 502.7 cm³`,
        points: 100
    });

    // From Chapter 13 - Similar Triangles
    addQuestion('revision2', {
        id: 'rev2_03',
        section: 'Mixed',
        questionNum: '3',
        page: 999,
        witness: 'Miles Edgeworth',
        witnessSprite: '🧑‍💼',
        type: 'similar-solids',
        diagram: null,
        problem: 'Edgeworth has two similar pyramids. The smaller has volume 64 cm³ and height 4 cm. The larger has height 6 cm. Find the volume of the larger pyramid.',
        correctAnswer: '216',
        acceptableAnswers: ['216', '216 cm³'],
        decimalEquivalent: 216,
        answerType: 'number',
        tolerance: 1,
        hint: 'Scale factor k = 6/4 = 1.5. Volume scales by k³.',
        explanation: `<strong>The answer is 216 cm³!</strong><br><br>
            Step 1: k = 6/4 = 1.5<br>
            Step 2: Volume scales by k³<br>
            Step 3: V_large = 1.5³ × 64<br>
            Step 4: V_large = 3.375 × 64 = 216 cm³`,
        points: 100
    });

    // From Chapter 14 - Algebra
    addQuestion('revision2', {
        id: 'rev2_04',
        section: 'Mixed',
        questionNum: '4',
        page: 999,
        witness: 'Apollo Justice',
        witnessSprite: '👨‍🦰',
        type: 'solve-quadratic',
        diagram: null,
        problem: 'Apollo solves x² - 5x + 6 = 0 by factoring. Find the smaller value of x.',
        correctAnswer: '2',
        acceptableAnswers: ['2', '2.0'],
        decimalEquivalent: 2,
        answerType: 'number',
        tolerance: 0.01,
        hint: 'Factor to (x - 2)(x - 3) = 0.',
        explanation: `<strong>The answer is x = 2 (or x = 3)!</strong><br><br>
            Step 1: x² - 5x + 6 = (x - 2)(x - 3)<br>
            Step 2: x - 2 = 0 or x - 3 = 0<br>
            Step 3: x = 2 or x = 3<br>
            The smaller value is 2.`,
        points: 100
    });

    // From Chapter 15 - Trigonometry
    addQuestion('revision2', {
        id: 'rev2_05',
        section: 'Mixed',
        questionNum: '5',
        page: 999,
        witness: 'Franziska von Karma',
        witnessSprite: '👩',
        type: 'trig-find-side',
        diagram: {
            type: 'right-triangle',
            side2: 8,
            side2Unit: 'cm',
            unknown: 'hypotenuse',
            showRightAngle: true
        },
        problem: 'Franziska has a right triangle with a 53° angle and an adjacent side of 8 cm. Find the hypotenuse to 1 decimal place.',
        correctAnswer: '13.3',
        acceptableAnswers: ['13.3', '13.4'],
        decimalEquivalent: 13.3,
        answerType: 'decimal',
        tolerance: 0.2,
        hint: 'Use cos 53° = adjacent/hypotenuse. So hypotenuse = 8/cos 53°.',
        explanation: `<strong>The answer is approximately 13.3 cm!</strong><br><br>
            Step 1: cos 53° = 8/h<br>
            Step 2: h = 8/cos 53°<br>
            Step 3: h = 8/0.6018<br>
            Step 4: h ≈ 13.3 cm`,
        points: 100
    });

    // From Chapter 16 - Probability
    addQuestion('revision2', {
        id: 'rev2_06',
        section: 'Mixed',
        questionNum: '6',
        page: 999,
        witness: 'Dick Gumshoe',
        witnessSprite: '👮',
        type: 'probability-compound',
        diagram: null,
        problem: 'Detective Gumshoe flips a fair coin twice. What is the probability of getting at least one head? Express as a fraction.',
        correctAnswer: '3/4',
        acceptableAnswers: ['3/4', '0.75'],
        decimalEquivalent: 0.75,
        answerType: 'fraction',
        tolerance: 0.01,
        hint: 'P(at least 1 head) = 1 - P(no heads) = 1 - P(both tails).',
        explanation: `<strong>The answer is 3/4!</strong><br><br>
            Step 1: P(both tails) = 1/2 × 1/2 = 1/4<br>
            Step 2: P(at least 1 head) = 1 - 1/4<br>
            Step 3: = 3/4 = 0.75`,
        points: 100
    });

    // Chapter 5 - Find unknown side
    addQuestion('revision2', {
        id: 'rev2_07',
        section: 'Mixed',
        questionNum: '7',
        page: 999,
        witness: 'Trucy Wright',
        witnessSprite: '🎩',
        type: 'pythagorean-unknown',
        diagram: {
            type: 'right-triangle',
            side1: '?',
            side1Unit: 'cm',
            side2: 15,
            side2Unit: 'cm',
            hypotenuse: 17,
            hypotenuseUnit: 'cm',
            unknown: 'height',
            showRightAngle: true
        },
        problem: 'Trucy needs to find the unknown leg of a right triangle. The hypotenuse is 17 cm and one leg is 15 cm. Find the other leg.',
        correctAnswer: '8',
        acceptableAnswers: ['8', '8 cm', '8.0'],
        decimalEquivalent: 8,
        answerType: 'number',
        tolerance: 0.1,
        hint: 'Use a² = c² - b². This is an 8-15-17 Pythagorean triple.',
        explanation: `<strong>The answer is 8 cm!</strong><br><br>
            Step 1: a² = 17² - 15²<br>
            Step 2: a² = 289 - 225 = 64<br>
            Step 3: a = √64 = 8 cm<br><br>
            This is the 8-15-17 Pythagorean triple!`,
        points: 100
    });

    // Chapter 8 - Circumference
    addQuestion('revision2', {
        id: 'rev2_08',
        section: 'Mixed',
        questionNum: '8',
        page: 999,
        witness: 'Klavier Gavin',
        witnessSprite: '🎸',
        type: 'circumference',
        diagram: null,
        problem: 'Klavier has a circular stage with diameter 20 meters. Find the circumference to 1 decimal place.',
        correctAnswer: '62.8',
        acceptableAnswers: ['62.8', '62.9'],
        decimalEquivalent: 62.8,
        answerType: 'decimal',
        tolerance: 0.2,
        hint: 'C = πd.',
        explanation: `<strong>The answer is 62.8 m!</strong><br><br>
            Step 1: C = πd<br>
            Step 2: C = π × 20<br>
            Step 3: C ≈ 62.83 m ≈ 62.8 m`,
        points: 100
    });

    // Chapter 13 - Congruent Triangles
    addQuestion('revision2', {
        id: 'rev2_09',
        section: 'Mixed',
        questionNum: '9',
        page: 999,
        witness: 'Pearl Fey',
        witnessSprite: '👧',
        type: 'congruence',
        diagram: null,
        problem: 'Pearl has two triangles. Triangle A has sides 6, 8, and 10. Triangle B has sides 6, 8, and 10. Are they congruent? Answer "yes" or "no" and state the reason (SSS, SAS, ASA, or RHS).',
        correctAnswer: 'yes SSS',
        acceptableAnswers: ['yes SSS', 'yes, SSS', 'SSS', 'yes - SSS'],
        decimalEquivalent: null,
        answerType: 'text',
        tolerance: 0,
        hint: 'All three sides are equal, so use SSS.',
        explanation: `<strong>YES, they are congruent by SSS!</strong><br><br>
            All three sides match:<br>
            6 = 6, 8 = 8, 10 = 10<br><br>
            SSS = Side-Side-Side congruence`,
        points: 100
    });

    // Chapter 14 - Sequences
    addQuestion('revision2', {
        id: 'rev2_10',
        section: 'Mixed',
        questionNum: '10',
        page: 999,
        witness: 'Godot',
        witnessSprite: '☕',
        type: 'arithmetic-sequence',
        diagram: null,
        problem: 'Godot analyzes the sequence: 5, 9, 13, 17, ... What is the 15th term?',
        correctAnswer: '61',
        acceptableAnswers: ['61'],
        decimalEquivalent: 61,
        answerType: 'number',
        tolerance: 0,
        hint: 'This is arithmetic with a = 5 and d = 4. Use T_n = a + (n-1)d.',
        explanation: `<strong>The answer is 61!</strong><br><br>
            Step 1: a = 5, d = 4<br>
            Step 2: T_15 = 5 + (15-1) × 4<br>
            Step 3: T_15 = 5 + 56<br>
            Step 4: T_15 = 61`,
        points: 100
    });

    // Chapter 15 - Angle Finding
    addQuestion('revision2', {
        id: 'rev2_11',
        section: 'Mixed',
        questionNum: '11',
        page: 999,
        witness: 'Phoenix Wright',
        witnessSprite: '👨‍💼',
        type: 'inverse-trig',
        diagram: {
            type: 'right-triangle',
            side1: 7,
            side1Unit: 'cm',
            side2: 7,
            side2Unit: 'cm',
            showRightAngle: true
        },
        problem: 'Phoenix has an isosceles right triangle with both legs equal to 7 cm. Find the acute angle θ in degrees (round to 1 decimal place).',
        correctAnswer: '45.0',
        acceptableAnswers: ['45', '45.0'],
        decimalEquivalent: 45,
        answerType: 'decimal',
        tolerance: 0.5,
        hint: 'In an isosceles right triangle, both acute angles are 45°.',
        explanation: `<strong>The answer is 45°!</strong><br><br>
            In an isosceles right triangle with equal legs,<br>
            the two acute angles are always 45° each.<br>
            tan θ = 7/7 = 1<br>
            θ = arctan(1) = 45°`,
        points: 100
    });

    // Chapter 16 - Expected Value
    addQuestion('revision2', {
        id: 'rev2_12',
        section: 'Mixed',
        questionNum: '12',
        page: 999,
        witness: 'Maya Fey',
        witnessSprite: '👧',
        type: 'expected-value',
        diagram: null,
        problem: 'Maya plays a game where she wins $5 with probability 0.4, wins $2 with probability 0.5, and loses $1 with probability 0.1. What is her expected value per game?',
        correctAnswer: '2.9',
        acceptableAnswers: ['2.9', '$2.90', '2.90'],
        decimalEquivalent: 2.9,
        answerType: 'decimal',
        tolerance: 0.1,
        hint: 'E(X) = 5(0.4) + 2(0.5) + (-1)(0.1).',
        explanation: `<strong>The answer is $2.90!</strong><br><br>
            Step 1: E(X) = 5(0.4) + 2(0.5) + (-1)(0.1)<br>
            Step 2: E(X) = 2 + 1 + (-0.1)<br>
            Step 3: E(X) = $2.90`,
        points: 100
    });

    // Chapter 8 - Area conversion
    addQuestion('revision2', {
        id: 'rev2_13',
        section: 'Mixed',
        questionNum: '13',
        page: 999,
        witness: 'Miles Edgeworth',
        witnessSprite: '🧑‍💼',
        type: 'area-conversion',
        diagram: null,
        problem: 'Edgeworth converts 2.5 m² to cm². What is the result?',
        correctAnswer: '25000',
        acceptableAnswers: ['25000', '25 000', '25000 cm²'],
        decimalEquivalent: 25000,
        answerType: 'number',
        tolerance: 1,
        hint: '1 m² = 10,000 cm². Multiply 2.5 by 10,000.',
        explanation: `<strong>The answer is 25,000 cm²!</strong><br><br>
            Step 1: 1 m² = 100 × 100 = 10,000 cm²<br>
            Step 2: 2.5 m² = 2.5 × 10,000<br>
            Step 3: = 25,000 cm²`,
        points: 100
    });

    // Chapter 14 - Linear equation
    addQuestion('revision2', {
        id: 'rev2_14',
        section: 'Mixed',
        questionNum: '14',
        page: 999,
        witness: 'Apollo Justice',
        witnessSprite: '👨‍🦰',
        type: 'solve-linear',
        diagram: null,
        problem: 'Apollo solves: 4x - 7 = 2x + 9. Find x.',
        correctAnswer: '8',
        acceptableAnswers: ['8', '8.0'],
        decimalEquivalent: 8,
        answerType: 'number',
        tolerance: 0.01,
        hint: 'Move all x terms to one side and constants to the other.',
        explanation: `<strong>The answer is x = 8!</strong><br><br>
            Step 1: 4x - 7 = 2x + 9<br>
            Step 2: 4x - 2x = 9 + 7<br>
            Step 3: 2x = 16<br>
            Step 4: x = 8`,
        points: 100
    });

    // Chapter 5 - 3D Pythagorean
    addQuestion('revision2', {
        id: 'rev2_15',
        section: 'Mixed',
        questionNum: '15',
        page: 999,
        witness: 'Franziska von Karma',
        witnessSprite: '👩',
        type: 'cube-diagonal',
        diagram: null,
        problem: 'Franziska has a cube with edge length 5 cm. Find the space diagonal (from one corner to the opposite corner) to 1 decimal place.',
        correctAnswer: '8.7',
        acceptableAnswers: ['8.7', '8.66'],
        decimalEquivalent: 8.66,
        answerType: 'decimal',
        tolerance: 0.1,
        hint: 'Space diagonal = edge × √3.',
        explanation: `<strong>The answer is approximately 8.7 cm!</strong><br><br>
            Step 1: Space diagonal = a√3<br>
            Step 2: d = 5√3<br>
            Step 3: d ≈ 5 × 1.732<br>
            Step 4: d ≈ 8.66 ≈ 8.7 cm`,
        points: 100
    });

    // Chapter 16 - Tree diagram
    addQuestion('revision2', {
        id: 'rev2_16',
        section: 'Mixed',
        questionNum: '16',
        page: 999,
        witness: 'Dick Gumshoe',
        witnessSprite: '👮',
        type: 'tree-diagram',
        diagram: null,
        problem: 'Detective Gumshoe has 5 red and 3 blue marbles. He draws two marbles with replacement. What is the probability both are red? Express as a fraction in simplest form.',
        correctAnswer: '25/64',
        acceptableAnswers: ['25/64', '0.390625'],
        decimalEquivalent: 0.390625,
        answerType: 'fraction',
        tolerance: 0.01,
        hint: 'With replacement: P(red) = 5/8 each time.',
        explanation: `<strong>The answer is 25/64!</strong><br><br>
            Step 1: P(red on 1st) = 5/8<br>
            Step 2: With replacement: P(red on 2nd) = 5/8<br>
            Step 3: P(both red) = 5/8 × 5/8<br>
            Step 4: = 25/64`,
        points: 100
    });

    // Chapter 14 - Factoring
    addQuestion('revision2', {
        id: 'rev2_17',
        section: 'Mixed',
        questionNum: '17',
        page: 999,
        witness: 'Trucy Wright',
        witnessSprite: '🎩',
        type: 'factorize',
        diagram: null,
        problem: 'Trucy factorizes: 4x² - 16. What is the factored form?',
        correctAnswer: '4(x + 2)(x - 2)',
        acceptableAnswers: ['4(x + 2)(x - 2)', '4(x-2)(x+2)', '4(x^2 - 4)'],
        decimalEquivalent: null,
        answerType: 'text',
        tolerance: 0,
        hint: 'Factor out 4 first: 4(x² - 4). Then recognize x² - 4 as a difference of squares.',
        explanation: `<strong>The answer is 4(x + 2)(x - 2)!</strong><br><br>
            Step 1: Factor out GCF: 4(x² - 4)<br>
            Step 2: Recognize difference of squares: x² - 4 = (x+2)(x-2)<br>
            Step 3: = 4(x + 2)(x - 2)`,
        points: 100
    });

    // Chapter 15 - Bearings
    addQuestion('revision2', {
        id: 'rev2_18',
        section: 'Mixed',
        questionNum: '18',
        page: 999,
        witness: 'Klavier Gavin',
        witnessSprite: '🎸',
        type: 'bearings-distance',
        diagram: null,
        problem: 'Klavier walks 4 km north and 3 km east from the concert hall. How far is he from the starting point?',
        correctAnswer: '5',
        acceptableAnswers: ['5', '5 km', '5.0'],
        decimalEquivalent: 5,
        answerType: 'number',
        tolerance: 0.1,
        hint: 'Use Pythagorean theorem: √(4² + 3²). This is a 3-4-5 triangle.',
        explanation: `<strong>The answer is 5 km!</strong><br><br>
            Step 1: Distance = √(north² + east²)<br>
            Step 2: d = √(4² + 3²)<br>
            Step 3: d = √(16 + 9) = √25<br>
            Step 4: d = 5 km<br><br>
            This is the 3-4-5 Pythagorean triple!`,
        points: 100
    });

    // Chapter 13 - Similar triangles ratio
    addQuestion('revision2', {
        id: 'rev2_19',
        section: 'Mixed',
        questionNum: '19',
        page: 999,
        witness: 'Pearl Fey',
        witnessSprite: '👧',
        type: 'similar-area',
        diagram: null,
        problem: 'Pearl has a triangle with area 20 cm². A similar triangle has all sides twice as long. What is the area of the larger triangle?',
        correctAnswer: '80',
        acceptableAnswers: ['80', '80 cm²'],
        decimalEquivalent: 80,
        answerType: 'number',
        tolerance: 0.5,
        hint: 'If k = 2, then area scales by k² = 4.',
        explanation: `<strong>The answer is 80 cm²!</strong><br><br>
            Step 1: Scale factor k = 2<br>
            Step 2: Area scales by k²<br>
            Step 3: New area = 2² × 20<br>
            Step 4: = 4 × 20 = 80 cm²`,
        points: 100
    });

    // Chapter 8 - Capacity
    addQuestion('revision2', {
        id: 'rev2_20',
        section: 'Mixed',
        questionNum: '20',
        page: 999,
        witness: 'Godot',
        witnessSprite: '☕',
        type: 'capacity',
        diagram: null,
        problem: 'Godot has a rectangular container measuring 10 cm × 8 cm × 5 cm. What is its capacity in mL? (1 mL = 1 cm³)',
        correctAnswer: '400',
        acceptableAnswers: ['400', '400 mL'],
        decimalEquivalent: 400,
        answerType: 'number',
        tolerance: 1,
        hint: 'Volume = length × width × height.',
        explanation: `<strong>The answer is 400 mL!</strong><br><br>
            Step 1: V = 10 × 8 × 5<br>
            Step 2: V = 400 cm³<br>
            Step 3: Since 1 mL = 1 cm³<br>
            Step 4: Capacity = 400 mL`,
        points: 100
    });

    console.log('Revision 2 questions loaded successfully!');
}

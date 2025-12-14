/**
 * Chapter 15: Trigonometry Questions
 * Covers trigonometric ratios, finding angles, applications, and bearings
 */

function loadChapter15Questions() {
    // ==========================================
    // SECTION 15B - Trigonometric Ratios (Page 301)
    // ==========================================

    addQuestion('chapter15', {
        id: 'ch15_15b1_b',
        section: '15B',
        questionNum: '1b',
        page: 301,
        witness: 'Apollo Justice',
        type: 'trig-ratios',
        diagram: {
            type: 'right-triangle',
            side1: 2,
            side1Unit: 'cm',
            side2: 3,
            side2Unit: 'cm',
            showRightAngle: true
        },
        problem: 'Apollo analyzes a right triangle with sides 2 cm, 3 cm, and an angle θ. The right angle is at the bottom left, with the 2 cm side vertical and 3 cm side horizontal.\n\nFind cos θ (as a decimal to 2 decimal places).',
        correctAnswer: '0.83',
        acceptableAnswers: ['0.83'],
        decimalEquivalent: 0.83,
        answerType: 'decimal',
        tolerance: 0.01,
        hint: 'cos θ = adjacent/hypotenuse. First find the hypotenuse using Pythagoras: √(2² + 3²) = √13 ≈ 3.61. Adjacent to θ is 3 cm.',
        explanation: 'Hypotenuse = √(2² + 3²) = √13 ≈ 3.61 cm\ncos θ = adjacent/hypotenuse = 3/3.61 ≈ 0.83',
        points: 20
    });

    addQuestion('chapter15', {
        id: 'ch15_15b2_a',
        section: '15B',
        questionNum: '2a',
        page: 301,
        witness: 'Apollo Justice',
        type: 'trig-find-side',
        diagram: {
            type: 'right-triangle',
            side1: 'x',
            side1Unit: 'cm',
            hypotenuse: 15,
            hypotenuseUnit: 'cm',
            unknown: 'height',
            showRightAngle: true
        },
        problem: 'Apollo finds a right triangle with a 30° angle, a hypotenuse of 15 cm, and needs to find the vertical side x.\n\nFind x (round to 2 decimal places).',
        correctAnswer: '7.50',
        acceptableAnswers: ['7.50', '7.5'],
        decimalEquivalent: 7.50,
        answerType: 'decimal',
        tolerance: 0.05,
        hint: 'Use sin 30° = opposite/hypotenuse. So x/15 = sin 30°. Therefore x = 15 × sin 30°.',
        explanation: 'sin 30° = x/15\nx = 15 × sin 30° = 15 × 0.5 = 7.50 cm',
        points: 20
    });

    addQuestion('chapter15', {
        id: 'ch15_15b2_b',
        section: '15B',
        questionNum: '2b',
        page: 301,
        witness: 'Franziska von Karma',
        type: 'trig-find-side',
        diagram: {
            type: 'right-triangle',
            side2: 16,
            side2Unit: 'cm',
            unknown: 'hypotenuse',
            showRightAngle: true
        },
        problem: 'Franziska examines a right triangle with a 76° angle, an adjacent side of 16 cm, and needs to find the hypotenuse x.\n\nFind x (round to 2 decimal places).',
        correctAnswer: '66.12',
        acceptableAnswers: ['66.12', '66.1'],
        decimalEquivalent: 66.12,
        answerType: 'decimal',
        tolerance: 0.2,
        hint: 'Use cos 76° = adjacent/hypotenuse. So 16/x = cos 76°. Therefore x = 16/cos 76°.',
        explanation: 'cos 76° = 16/x\nx = 16/cos 76° = 16/0.2419 ≈ 66.12 cm',
        points: 20
    });

    addQuestion('chapter15', {
        id: 'ch15_15b2_d',
        section: '15B',
        questionNum: '2d',
        page: 301,
        witness: 'Athena Cykes',
        type: 'trig-find-side',
        diagram: {
            type: 'right-triangle',
            side1: 5,
            side1Unit: 'cm',
            unknown: 'base',
            showRightAngle: true
        },
        problem: 'Athena investigates a right triangle with a 42° angle and an opposite side of 5 cm. She needs to find the adjacent side x.\n\nFind x (round to 2 decimal places).',
        correctAnswer: '5.56',
        acceptableAnswers: ['5.56'],
        decimalEquivalent: 5.56,
        answerType: 'decimal',
        tolerance: 0.05,
        hint: 'Use tan 42° = opposite/adjacent. So 5/x = tan 42°. Therefore x = 5/tan 42°.',
        explanation: 'tan 42° = 5/x\nx = 5/tan 42° = 5/0.9004 ≈ 5.56 cm',
        points: 20
    });

    // ==========================================
    // SECTION 15D - Finding Angles (Page 305)
    // ==========================================

    addQuestion('chapter15', {
        id: 'ch15_15d1_a',
        section: '15D',
        questionNum: '1a',
        page: 305,
        witness: 'Mia Fey',
        type: 'inverse-trig',
        diagram: {
            type: 'right-triangle',
            side1: 6,
            side1Unit: 'cm',
            hypotenuse: 9,
            hypotenuseUnit: 'cm',
            showRightAngle: true
        },
        problem: 'Mia examines a right triangle with a hypotenuse of 9 cm and an opposite side of 6 cm.\n\nFind the angle θ (round to 1 decimal place).',
        correctAnswer: '41.8',
        acceptableAnswers: ['41.8'],
        decimalEquivalent: 41.8,
        answerType: 'decimal',
        tolerance: 0.2,
        hint: 'Use sin θ = opposite/hypotenuse = 6/9. Then θ = arcsin(6/9).',
        explanation: 'sin θ = 6/9 = 0.6667\nθ = arcsin(0.6667) ≈ 41.8°',
        points: 20
    });

    addQuestion('chapter15', {
        id: 'ch15_15d1_c',
        section: '15D',
        questionNum: '1c',
        page: 305,
        witness: 'Godot',
        type: 'inverse-trig',
        diagram: {
            type: 'right-triangle',
            side1: 3,
            side1Unit: 'cm',
            side2: 2,
            side2Unit: 'cm',
            showRightAngle: true
        },
        problem: 'Godot analyzes a right triangle with an opposite side of 3 cm and an adjacent side of 2 cm.\n\nFind the angle θ (round to 1 decimal place).',
        correctAnswer: '56.3',
        acceptableAnswers: ['56.3'],
        decimalEquivalent: 56.3,
        answerType: 'decimal',
        tolerance: 0.2,
        hint: 'Use tan θ = opposite/adjacent = 3/2. Then θ = arctan(3/2).',
        explanation: 'tan θ = 3/2 = 1.5\nθ = arctan(1.5) ≈ 56.3°',
        points: 20
    });

    addQuestion('chapter15', {
        id: 'ch15_15d1_e',
        section: '15D',
        questionNum: '1e',
        page: 305,
        witness: 'Pearl Fey',
        type: 'inverse-trig',
        diagram: {
            type: 'right-triangle',
            side2: 12.5,
            side2Unit: 'm',
            hypotenuse: 18.6,
            hypotenuseUnit: 'm',
            showRightAngle: true
        },
        problem: 'Pearl finds a right triangle with a hypotenuse of 18.6 m and an adjacent side of 12.5 m.\n\nFind the angle θ (round to 1 decimal place).',
        correctAnswer: '47.8',
        acceptableAnswers: ['47.8'],
        decimalEquivalent: 47.8,
        answerType: 'decimal',
        tolerance: 0.2,
        hint: 'Use cos θ = adjacent/hypotenuse = 12.5/18.6. Then θ = arccos(12.5/18.6).',
        explanation: 'cos θ = 12.5/18.6 ≈ 0.6720\nθ = arccos(0.6720) ≈ 47.8°',
        points: 20
    });

    addQuestion('chapter15', {
        id: 'ch15_15d2_a',
        section: '15D',
        questionNum: '2a',
        page: 305,
        witness: 'Phoenix Wright',
        type: 'all-sides-angles',
        diagram: {
            type: 'right-triangle',
            side2: 7,
            side2Unit: 'cm',
            hypotenuse: 10,
            hypotenuseUnit: 'cm',
            showRightAngle: true
        },
        problem: 'Phoenix needs to find all unknown sides and angles in a right triangle. The hypotenuse is 10 cm, the adjacent side to angle θ is 7 cm.\n\nFind angle θ (round to 1 decimal place).',
        correctAnswer: '45.6',
        acceptableAnswers: ['45.6'],
        decimalEquivalent: 45.6,
        answerType: 'decimal',
        tolerance: 0.2,
        hint: 'Use cos θ = adjacent/hypotenuse = 7/10. Then θ = arccos(7/10).',
        explanation: 'cos θ = 7/10 = 0.7\nθ = arccos(0.7) ≈ 45.6°',
        points: 20
    });

    // ==========================================
    // SECTION 15E - Applications (Page 307)
    // ==========================================

    addQuestion('chapter15', {
        id: 'ch15_15e1',
        section: '15E',
        questionNum: '1',
        page: 307,
        witness: 'Maya Fey',
        type: 'angle-elevation',
        diagram: {
            type: 'right-triangle',
            side1: 0.6,
            side1Unit: 'm',
            hypotenuse: 5,
            hypotenuseUnit: 'm',
            showRightAngle: true
        },
        problem: 'Maya investigates a wheelchair ramp at a building entrance. The ramp is 5 meters long and rises 60 cm (0.6 m) in height.\n\nFind the angle θ that the ramp makes with the ground (round to 1 decimal place).',
        correctAnswer: '6.9',
        acceptableAnswers: ['6.9'],
        decimalEquivalent: 6.9,
        answerType: 'decimal',
        tolerance: 0.2,
        hint: 'Use sin θ = opposite/hypotenuse = 0.6/5. Then θ = arcsin(0.6/5).',
        explanation: 'sin θ = 0.6/5 = 0.12\nθ = arcsin(0.12) ≈ 6.9°',
        points: 20
    });

    addQuestion('chapter15', {
        id: 'ch15_15e3',
        section: '15E',
        questionNum: '3',
        page: 307,
        witness: 'Franziska von Karma',
        type: 'angle-elevation',
        diagram: {
            type: 'right-triangle',
            side1: 25,
            side1Unit: 'm',
            side2: '?',
            side2Unit: 'm',
            unknown: 'base',
            showRightAngle: true
        },
        problem: 'Franziska observes a lighthouse from a boat. The angle of elevation from the boat to the top of the lighthouse (25 m above sea level) is 6°.\n\nCalculate the horizontal distance from the boat to the lighthouse (round to the nearest meter).',
        correctAnswer: '238',
        acceptableAnswers: ['238'],
        decimalEquivalent: 238,
        answerType: 'integer',
        tolerance: 1,
        hint: 'Use tan 6° = opposite/adjacent = 25/distance. Therefore distance = 25/tan 6°.',
        explanation: 'tan 6° = 25/distance\ndistance = 25/tan 6° = 25/0.1051 ≈ 238 m',
        points: 20
    });

    addQuestion('chapter15', {
        id: 'ch15_15e6',
        section: '15E',
        questionNum: '6',
        page: 307,
        witness: 'Athena Cykes',
        type: 'angle-elevation',
        diagram: {
            type: 'right-triangle',
            side1: 48.2,
            side1Unit: 'm',
            hypotenuse: '?',
            hypotenuseUnit: 'm',
            unknown: 'hypotenuse',
            showRightAngle: true
        },
        problem: 'Athena tracks a model helicopter taking off vertically at 5 m/s. After 10 seconds, the angle of elevation from Sam (who is 1.8 m tall) to the helicopter is 62°.\n\nHow far is Sam\'s head from the helicopter at this time? (round to 1 decimal place)',
        correctAnswer: '54.6',
        acceptableAnswers: ['54.6', '54.5'],
        decimalEquivalent: 54.6,
        answerType: 'decimal',
        tolerance: 0.3,
        hint: 'After 10 seconds at 5 m/s, the helicopter is at height 50 m. Sam\'s head is 1.8 m high, so the vertical distance is 50 - 1.8 = 48.2 m. Use sin 62° = 48.2/distance.',
        explanation: 'Height of helicopter = 5 m/s × 10 s = 50 m\nVertical distance from Sam\'s head = 50 - 1.8 = 48.2 m\nsin 62° = 48.2/distance\ndistance = 48.2/sin 62° = 48.2/0.8829 ≈ 54.6 m',
        points: 20
    });


    addQuestion('chapter15', {
        id: 'ch15_15f7_a',
        section: '15F',
        questionNum: '7a',
        page: 313,
        witness: 'Phoenix Wright',
        type: 'bearings-distance',
        diagram: {
            type: 'right-triangle',
            side1: 2.8,
            side1Unit: 'km (N)',
            side2: 5.4,
            side2Unit: 'km (E)',
            showRightAngle: true
        },
        problem: 'Phoenix tracks a bushwalker who hikes from their starting point:\n- 5.4 km east\n- 2.8 km north\n\nFind the bearing of the campsite from the starting point (round to the nearest degree).',
        correctAnswer: '062',
        acceptableAnswers: ['062', '062°', '62', '62°'],
        decimalEquivalent: 62,
        answerType: 'integer',
        tolerance: 1,
        hint: 'Draw a right triangle with east (5.4 km) as the adjacent side and north (2.8 km) as the opposite side. Use tan θ = 2.8/5.4 to find the angle from east. Then convert to a bearing from north.',
        explanation: 'tan θ = 2.8/5.4 ≈ 0.5185\nθ = arctan(0.5185) ≈ 27.4°\nBearing = 090° - 27.4° = 62.6° ≈ 062°\n\nAlternatively: bearing from north = arctan(5.4/2.8) ≈ 62.6°',
        points: 20
    });

    addQuestion('chapter15', {
        id: 'ch15_15f8_a',
        section: '15F',
        questionNum: '8a',
        page: 313,
        witness: 'Edgeworth',
        type: 'bearings-distance',
        diagram: {
            type: 'right-triangle',
            side1: 3.1,
            side1Unit: 'km (S)',
            side2: 1.6,
            side2Unit: 'km (W)',
            showRightAngle: true
        },
        problem: 'Edgeworth tracks a kayaker who paddles from their starting point:\n- 3.1 km south\n- 1.6 km west\n\nHow far is the kayaker from their starting point? (round to 1 decimal place)',
        correctAnswer: '3.5',
        acceptableAnswers: ['3.5'],
        decimalEquivalent: 3.5,
        answerType: 'decimal',
        tolerance: 0.1,
        hint: 'Use Pythagoras theorem: distance = √(3.1² + 1.6²)',
        explanation: 'distance = √(3.1² + 1.6²) = √(9.61 + 2.56) = √12.17 ≈ 3.5 km',
        points: 20
    });

    addQuestion('chapter15', {
        id: 'ch15_15f8_b',
        section: '15F',
        questionNum: '8b',
        page: 313,
        witness: 'Maya Fey',
        type: 'bearings-return',
        diagram: {
            type: 'right-triangle',
            side1: 3.1,
            side1Unit: 'km (N)',
            side2: 1.6,
            side2Unit: 'km (E)',
            showRightAngle: true
        },
        problem: 'Maya helps the kayaker return home. The kayaker paddled:\n- 3.1 km south\n- 1.6 km west\n\nOn what bearing must the kayaker paddle to return directly to their starting point? (round to the nearest degree)',
        correctAnswer: '027',
        acceptableAnswers: ['027', '027°', '27', '27°'],
        decimalEquivalent: 27,
        answerType: 'integer',
        tolerance: 1,
        hint: 'To return, the kayaker needs to go northeast. The angle from north = arctan(1.6/3.1). This gives the bearing.',
        explanation: 'The kayaker needs to go in the opposite direction: northeast.\nAngle from north = arctan(1.6/3.1) ≈ arctan(0.5161) ≈ 27.3°\nBearing ≈ 027°',
        points: 20
    });

    console.log('Chapter 15 questions loaded successfully!');
}

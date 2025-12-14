// Chapter 5: The Pythagorean Proof - Question Bank
// This file contains all questions for Chapter 5

function loadChapter5Questions() {
            // 5A Q1a - Find hypotenuse (surd form)
            addQuestion('chapter5', {
                id: 'ch5_5a1_a',
                section: '5A',
                questionNum: '1a',
                page: 93,
                witness: 'Larry Butz',
                witnessSprite: '🧑',
                type: 'find-hypotenuse',
                diagram: {
                    type: 'right-triangle',
                    side1: 7,
                    side1Unit: 'cm',
                    side2: 4,
                    side2Unit: 'cm',
                    showRightAngle: true
                },
                problem: 'The witness claims he measured a triangular crime scene marker. The two perpendicular sides are 7 cm and 4 cm. What is the length of the hypotenuse? Give your answer in simplest surd form.',
                correctAnswer: '√65',
                acceptableAnswers: ['√65', 'sqrt(65)', 'sqrt 65'],
                decimalEquivalent: 8.06,
                answerType: 'surd',
                tolerance: 0.1,
                hint: 'Use the Pythagorean Theorem: c² = a² + b². Calculate 7² + 4², then take the square root. Leave your answer in surd form.',
                explanation: `<strong>The correct answer is √65 cm!</strong><br><br>
                    Step 1: Apply Pythagorean Theorem: c² = a² + b²<br>
                    Step 2: c² = 7² + 4²<br>
                    Step 3: c² = 49 + 16 = 65<br>
                    Step 4: c = √65 cm<br><br>
                    This is already in simplest surd form.`,
                points: 100
            });
    
            // Add more Chapter 5 questions (examples)
            addQuestion('chapter5', {
                id: 'ch5_5a1_b',
                section: '5A',
                questionNum: '1b',
                page: 93,
                witness: 'Wendy Oldbag',
                witnessSprite: '👵',
                type: 'find-hypotenuse',
                diagram: {
                    type: 'right-triangle',
                    side1: 6,
                    side1Unit: 'cm',
                    side2: 8,
                    side2Unit: 'cm',
                    showRightAngle: true
                },
                problem: 'The witness found evidence at a triangular location. The perpendicular sides measure 6 cm and 8 cm. Calculate the hypotenuse in surd form.',
                correctAnswer: '10',
                acceptableAnswers: ['10', '10.0', '10.00'],
                decimalEquivalent: 10,
                answerType: 'number',
                tolerance: 0.1,
                hint: 'Remember: c² = a² + b². Calculate 6² + 8², then take the square root. Check if the result is a perfect square!',
                explanation: `<strong>The answer is 10 cm!</strong><br><br>
                    Step 1: c² = 6² + 8²<br>
                    Step 2: c² = 36 + 64 = 100<br>
                    Step 3: c = √100 = 10 cm<br><br>
                    This is a perfect Pythagorean triple: 6-8-10!`,
                points: 100
            });
    
            // 5A Q1c - Find hypotenuse
            addQuestion('chapter5', {
                id: 'ch5_5a1_c',
                section: '5A',
                questionNum: '1c',
                page: 93,
                witness: 'Miles Edgeworth',
                witnessSprite: '🧑‍💼',
                type: 'find-hypotenuse',
                diagram: {
                    type: 'right-triangle',
                    side1: 8,
                    side1Unit: 'km',
                    side2: 13,
                    side2Unit: 'km',
                    showRightAngle: true
                },
                problem: 'Prosecutor Edgeworth examined a map of the crime scene. The two perpendicular roads measure 13 km and 8 km. Find the diagonal distance across in surd form.',
                correctAnswer: '√233',
                acceptableAnswers: ['√233', 'sqrt(233)', 'sqrt 233'],
                decimalEquivalent: 15.26,
                answerType: 'surd',
                tolerance: 0.1,
                hint: 'Apply the Pythagorean Theorem: c² = a² + b². Calculate 13² + 8², then simplify the square root.',
                explanation: `<strong>The correct answer is √233 km!</strong><br><br>
                    Step 1: c² = 13² + 8²<br>
                    Step 2: c² = 169 + 64 = 233<br>
                    Step 3: c = √233 km<br><br>
                    233 is prime, so this is already in simplest surd form.`,
                points: 100
            });
    
            // 5A Q1d - Find hypotenuse (needs base calculation from diagram)
            addQuestion('chapter5', {
                id: 'ch5_5a1_d',
                section: '5A',
                questionNum: '1d',
                page: 93,
                witness: 'Maya Fey',
                witnessSprite: '👧',
                type: 'find-hypotenuse',
                diagram: {
                    type: 'right-triangle',
                    side1: 5,
                    side1Unit: 'cm',
                    side2: 5,
                    side2Unit: 'cm',
                    showRightAngle: true
                },
                problem: 'Maya found a triangular spirit charm. The two perpendicular sides both measure 5 cm. What is the hypotenuse length in surd form?',
                correctAnswer: '5√2',
                acceptableAnswers: ['5√2', '5*sqrt(2)', '5 sqrt 2', '√50', 'sqrt(50)', 'sqrt 50'],
                decimalEquivalent: 7.07,
                answerType: 'surd',
                tolerance: 0.1,
                hint: 'Use c² = a² + b². Since both sides are 5 cm, calculate 5² + 5². Then simplify the square root by factoring out perfect squares.',
                explanation: `<strong>The answer is 5√2 cm!</strong><br><br>
                    Step 1: c² = 5² + 5²<br>
                    Step 2: c² = 25 + 25 = 50<br>
                    Step 3: c = √50<br>
                    Step 4: Simplify: √50 = √(25×2) = 5√2 cm`,
                points: 100
            });
    
            // 5A Q1e - Find hypotenuse
            addQuestion('chapter5', {
                id: 'ch5_5a1_e',
                section: '5A',
                questionNum: '1e',
                page: 93,
                witness: 'Franziska von Karma',
                witnessSprite: '👩',
                type: 'find-hypotenuse',
                diagram: {
                    type: 'right-triangle',
                    side1: 12,
                    side1Unit: 'm',
                    side2: 10,
                    side2Unit: 'm',
                    showRightAngle: true
                },
                problem: 'Franziska measured the crime scene with her whip. The perpendicular measurements are 12 m and 10 m. Calculate the diagonal in surd form.',
                correctAnswer: '2√61',
                acceptableAnswers: ['2√61', '2*sqrt(61)', '2 sqrt 61', '√244', 'sqrt(244)', 'sqrt 244'],
                decimalEquivalent: 15.62,
                answerType: 'surd',
                tolerance: 0.1,
                hint: 'Use c² = 12² + 10². After finding c², factor it to simplify by looking for perfect square factors.',
                explanation: `<strong>The answer is 2√61 m!</strong><br><br>
                    Step 1: c² = 12² + 10²<br>
                    Step 2: c² = 144 + 100 = 244<br>
                    Step 3: c = √244<br>
                    Step 4: Simplify: √244 = √(4×61) = 2√61 m`,
                points: 100
            });
    
            // 5A Q1f - Find hypotenuse (unit conversion!)
            addQuestion('chapter5', {
                id: 'ch5_5a1_f',
                section: '5A',
                questionNum: '1f',
                page: 93,
                witness: 'Pearl Fey',
                witnessSprite: '👧',
                type: 'find-hypotenuse',
                diagram: {
                    type: 'right-triangle',
                    side1: 9,
                    side1Unit: 'mm',
                    side2: 2,
                    side2Unit: 'cm',
                    showRightAngle: true
                },
                problem: 'Pearl measured a small piece of evidence: one side is 9 mm and the other is 2 cm. Find the hypotenuse in surd form. Give your answer in mm.',
                correctAnswer: '√481',
                acceptableAnswers: ['√481', 'sqrt(481)', 'sqrt 481'],
                decimalEquivalent: 21.93,
                answerType: 'surd',
                tolerance: 0.1,
                hint: 'First convert 2 cm to mm (remember: 1 cm = 10 mm). Then use c² = a² + b² with both measurements in mm.',
                explanation: `<strong>The answer is √481 mm!</strong><br><br>
                    Step 1: Convert units: 2 cm = 20 mm<br>
                    Step 2: c² = 9² + 20²<br>
                    Step 3: c² = 81 + 400 = 481<br>
                    Step 4: c = √481 mm<br><br>
                    481 is prime, so this is in simplest form.`,
                points: 100
            });
    
            addQuestion('chapter5', {
                id: 'ch5_5a2_a',
                section: '5A',
                questionNum: '2a',
                page: 93,
                witness: 'Dick Gumshoe',
                witnessSprite: '👮',
                type: 'find-side',
                diagram: {
                    type: 'right-triangle',
                    side1: 6,
                    side1Unit: 'cm',
                    hypotenuse: 11,
                    hypotenuseUnit: 'cm',
                    unknown: 'base',
                    showRightAngle: true
                },
                problem: 'Detective Gumshoe measured a piece of evidence. One side is 6 cm and the hypotenuse is 11 cm. Find the length of the unknown side in surd form.',
                correctAnswer: '√85',
                acceptableAnswers: ['√85', 'sqrt(85)', 'sqrt 85'],
                decimalEquivalent: 9.22,
                answerType: 'surd',
                tolerance: 0.1,
                hint: 'When finding a leg, rearrange to a² = c² - b². Substitute the hypotenuse and known side, then take the square root.',
                explanation: `<strong>The answer is √85 cm!</strong><br><br>
                    Step 1: Use a² + b² = c², rearrange to a² = c² - b²<br>
                    Step 2: a² = 11² - 6²<br>
                    Step 3: a² = 121 - 36 = 85<br>
                    Step 4: a = √85 cm`,
                points: 100
            });
    
            // 5A Q2b - Find unknown side
            addQuestion('chapter5', {
                id: 'ch5_5a2_b',
                section: '5A',
                questionNum: '2b',
                page: 93,
                witness: 'Godot',
                witnessSprite: '☕',
                type: 'find-side',
                diagram: {
                    type: 'right-triangle',
                    side1: 15,
                    side1Unit: 'm',
                    hypotenuse: 17,
                    hypotenuseUnit: 'm',
                    unknown: 'base',
                    showRightAngle: true
                },
                problem: 'Godot is investigating evidence at the scene. The hypotenuse measures 17 m and one side is 15 m. Find the unknown side in surd form.',
                correctAnswer: '8',
                acceptableAnswers: ['8', '8.0', '8.00'],
                decimalEquivalent: 8,
                answerType: 'number',
                tolerance: 0.1,
                hint: 'Use a² = c² - b². Calculate 17² - 15², then take the square root. Check if it\'s a perfect square!',
                explanation: `<strong>The answer is 8 m!</strong><br><br>
                    Step 1: a² = 17² - 15²<br>
                    Step 2: a² = 289 - 225 = 64<br>
                    Step 3: a = √64 = 8 m<br><br>
                    This is the Pythagorean triple 8-15-17!`,
                points: 100
            });
    
            // 5A Q2c - Find unknown side
            addQuestion('chapter5', {
                id: 'ch5_5a2_c',
                section: '5A',
                questionNum: '2c',
                page: 93,
                witness: 'Apollo Justice',
                witnessSprite: '👨‍🦰',
                type: 'find-side',
                diagram: {
                    type: 'right-triangle',
                    side1: 3,
                    side1Unit: 'cm',
                    hypotenuse: 9,
                    hypotenuseUnit: 'cm',
                    unknown: 'base',
                    showRightAngle: true
                },
                problem: 'Apollo examined a triangular piece of evidence. One side is 3 cm and the hypotenuse is 9 cm. Find the unknown side in surd form.',
                correctAnswer: '6√2',
                acceptableAnswers: ['6√2', '6*sqrt(2)', '6 sqrt 2', '√72', 'sqrt(72)', 'sqrt 72'],
                decimalEquivalent: 8.49,
                answerType: 'surd',
                tolerance: 0.1,
                hint: 'Use a² = c² - b² to find the unknown side. Calculate 9² - 3², then simplify the square root by factoring.',
                explanation: `<strong>The answer is 6√2 cm!</strong><br><br>
                    Step 1: a² = 9² - 3²<br>
                    Step 2: a² = 81 - 9 = 72<br>
                    Step 3: a = √72<br>
                    Step 4: Simplify: √72 = √(36×2) = 6√2 cm`,
                points: 100
            });
    
            // 5A Q2d - Find unknown side (hypotenuse smaller than base - impossible!)
            addQuestion('chapter5', {
                id: 'ch5_5a2_d',
                section: '5A',
                questionNum: '2d',
                page: 93,
                witness: 'Larry Butz',
                witnessSprite: '🧑',
                type: 'find-side',
                diagram: {
                    type: 'right-triangle',
                    side1: 21,
                    side1Unit: 'cm',
                    hypotenuse: 18,
                    hypotenuseUnit: 'cm',
                    unknown: 'height',
                    showRightAngle: true
                },
                problem: 'Larry claims he measured a right triangle with base 21 cm and hypotenuse 18 cm. Find the height to expose the contradiction! (Hint: Check if this is even possible!)',
                correctAnswer: 'impossible',
                acceptableAnswers: ['impossible', 'not possible', 'no solution', 'error'],
                decimalEquivalent: null,
                answerType: 'text',
                tolerance: 0,
                hint: 'The hypotenuse must be the longest side. Is 18 cm longer than 21 cm? If not, this triangle is impossible!',
                explanation: `<strong>This triangle is IMPOSSIBLE!</strong><br><br>
                    The hypotenuse (18 cm) cannot be shorter than one of the sides (21 cm).<br>
                    In any right triangle, the hypotenuse is always the longest side.<br><br>
                    Larry's testimony is clearly false!`,
                points: 100
            });
    
            // 5A Q2e - Find unknown side
            addQuestion('chapter5', {
                id: 'ch5_5a2_e',
                section: '5A',
                questionNum: '2e',
                page: 93,
                witness: 'Trucy Wright',
                witnessSprite: '🎩',
                type: 'find-side',
                diagram: {
                    type: 'right-triangle',
                    side1: 3.7,
                    side1Unit: 'm',
                    hypotenuse: 6.3,
                    hypotenuseUnit: 'm',
                    unknown: 'base',
                    showRightAngle: true
                },
                problem: 'Trucy found evidence in her magic hat. The hypotenuse is 6.3 m and one side is 3.7 m. Find the unknown side in surd form.',
                correctAnswer: '√26',
                acceptableAnswers: ['√26', 'sqrt(26)', 'sqrt 26', '√26.00'],
                decimalEquivalent: 5.10,
                answerType: 'surd',
                tolerance: 0.1,
                hint: 'Use a² = c² - b² where c is the hypotenuse. Calculate 6.3² - 3.7², then take the square root.',
                explanation: `<strong>The answer is √26 m!</strong><br><br>
                    Step 1: a² = 6.3² - 3.7²<br>
                    Step 2: a² = 39.69 - 13.69 = 26<br>
                    Step 3: a = √26 m`,
                points: 100
            });
    
            // 5A Q2f - Find unknown side (unit conversion)
            addQuestion('chapter5', {
                id: 'ch5_5a2_f',
                section: '5A',
                questionNum: '2f',
                page: 93,
                witness: 'Klavier Gavin',
                witnessSprite: '🎸',
                type: 'find-side',
                diagram: {
                    type: 'right-triangle',
                    side1: 75,
                    side1Unit: 'cm',
                    hypotenuse: 1.95,
                    hypotenuseUnit: 'm',
                    unknown: 'base',
                    showRightAngle: true
                },
                problem: 'Klavier measured backstage evidence: one side is 75 cm and the hypotenuse is 1.95 m. Find the unknown side. Give your answer in cm.',
                correctAnswer: '180',
                acceptableAnswers: ['180', '180.0', '180 cm'],
                decimalEquivalent: 180,
                answerType: 'number',
                tolerance: 0.5,
                hint: 'Convert 1.95 m to cm first (remember: 1 m = 100 cm). Then use a² = c² - b² to find the unknown side.',
                explanation: `<strong>The answer is 180 cm!</strong><br><br>
                    Step 1: Convert: 1.95 m = 195 cm<br>
                    Step 2: a² = 195² - 75²<br>
                    Step 3: a² = 38025 - 5625 = 32400<br>
                    Step 4: a = √32400 = 180 cm<br><br>
                    This is actually a scaled version of the 5-12-13 Pythagorean triple (×15)!`,
                points: 100
            });
    
            // 5A Q3a - Find hypotenuse (decimal)
            addQuestion('chapter5', {
                id: 'ch5_5a3_a',
                section: '5A',
                questionNum: '3a',
                page: 93,
                witness: 'Judge',
                witnessSprite: '👨‍⚖️',
                type: 'find-hypotenuse',
                diagram: {
                    type: 'right-triangle',
                    side1: 5,
                    side1Unit: 'cm',
                    side2: 8,
                    side2Unit: 'cm',
                    showRightAngle: true
                },
                problem: 'The Judge examines evidence with sides 5 cm and 8 cm. Find the hypotenuse to 1 decimal place.',
                correctAnswer: '9.4',
                acceptableAnswers: ['9.4', '9.43'],
                decimalEquivalent: 9.43,
                answerType: 'decimal',
                tolerance: 0.1,
                hint: 'Use c² = 5² + 8². Then calculate the square root and round to 1 decimal place.',
                explanation: `<strong>The answer is 9.4 cm!</strong><br><br>
                    Step 1: c² = 5² + 8²<br>
                    Step 2: c² = 25 + 64 = 89<br>
                    Step 3: c = √89 ≈ 9.43 cm<br>
                    Step 4: Rounded to 1 decimal place: 9.4 cm`,
                points: 100
            });
    
            // 5A Q3b - Find unknown side (decimal)
            addQuestion('chapter5', {
                id: 'ch5_5a3_b',
                section: '5A',
                questionNum: '3b',
                page: 93,
                witness: 'Phoenix Wright',
                witnessSprite: '👨‍💼',
                type: 'find-side',
                diagram: {
                    type: 'right-triangle',
                    side1: 7,
                    side1Unit: 'm',
                    hypotenuse: 10,
                    hypotenuseUnit: 'm',
                    unknown: 'base',
                    showRightAngle: true
                },
                problem: 'Phoenix investigates a triangular crime scene. The hypotenuse is 10 m and one side is 7 m. Find the unknown side to 1 decimal place.',
                correctAnswer: '7.1',
                acceptableAnswers: ['7.1', '7.14'],
                decimalEquivalent: 7.14,
                answerType: 'decimal',
                tolerance: 0.1,
                hint: 'Use a² = c² - b². Calculate 10² - 7², then find the square root and round to 1 decimal place.',
                explanation: `<strong>The answer is 7.1 m!</strong><br><br>
                    Step 1: a² = 10² - 7²<br>
                    Step 2: a² = 100 - 49 = 51<br>
                    Step 3: a = √51 ≈ 7.14 m<br>
                    Step 4: Rounded to 1 decimal place: 7.1 m`,
                points: 100
            });
    
            // 5A Q3c - Find unknown side (decimal)
            addQuestion('chapter5', {
                id: 'ch5_5a3_c',
                section: '5A',
                questionNum: '3c',
                page: 93,
                witness: 'Maya Fey',
                witnessSprite: '👧',
                type: 'find-side',
                diagram: {
                    type: 'right-triangle',
                    side1: 2,
                    side1Unit: 'cm',
                    hypotenuse: 9,
                    hypotenuseUnit: 'cm',
                    unknown: 'base',
                    showRightAngle: true
                },
                problem: 'Maya needs your help! The hypotenuse is 9 cm and one side is 2 cm. Find the other side to 1 decimal place.',
                correctAnswer: '8.8',
                acceptableAnswers: ['8.8', '8.77'],
                decimalEquivalent: 8.77,
                answerType: 'decimal',
                tolerance: 0.1,
                hint: 'Use a² = c² - b². Calculate 9² - 2², then find the square root and round to 1 decimal place.',
                explanation: `<strong>The answer is 8.8 cm!</strong><br><br>
                    Step 1: a² = 9² - 2²<br>
                    Step 2: a² = 81 - 4 = 77<br>
                    Step 3: a = √77 ≈ 8.77 cm<br>
                    Step 4: Rounded to 1 decimal place: 8.8 cm`,
                points: 100
            });
    
            // 5A Q3d - Find height (decimal)
            addQuestion('chapter5', {
                id: 'ch5_5a3_d',
                section: '5A',
                questionNum: '3d',
                page: 93,
                witness: 'Miles Edgeworth',
                witnessSprite: '🧑‍💼',
                type: 'find-side',
                diagram: {
                    type: 'right-triangle',
                    side1: 8.5,
                    side1Unit: 'cm',
                    hypotenuse: 6.1,
                    hypotenuseUnit: 'cm',
                    unknown: 'height',
                    showRightAngle: true
                },
                problem: 'Edgeworth measures a triangular piece of evidence. The base is 8.5 cm and the hypotenuse is 6.1 cm. Wait... is this possible? Find the height to 1 decimal place, or state if impossible.',
                correctAnswer: 'impossible',
                acceptableAnswers: ['impossible', 'not possible', 'no solution'],
                decimalEquivalent: null,
                answerType: 'text',
                tolerance: 0,
                hint: 'Check: is the hypotenuse (6.1 cm) longer than the base (8.5 cm)? The hypotenuse must be the longest side!',
                explanation: `<strong>This is IMPOSSIBLE!</strong><br><br>
                    The hypotenuse (6.1 cm) is shorter than the base (8.5 cm).<br>
                    The hypotenuse must always be the longest side in a right triangle.<br><br>
                    The witness has made a critical error!`,
                points: 100
            });
    
            // 5A Q3e - Find base (decimal)
            addQuestion('chapter5', {
                id: 'ch5_5a3_e',
                section: '5A',
                questionNum: '3e',
                page: 93,
                witness: 'Dick Gumshoe',
                witnessSprite: '👮',
                type: 'find-side',
                diagram: {
                    type: 'right-triangle',
                    side1: 1.7,
                    side1Unit: 'm',
                    hypotenuse: 4.9,
                    hypotenuseUnit: 'm',
                    unknown: 'base',
                    showRightAngle: true
                },
                problem: 'Detective Gumshoe needs help with measurements. The hypotenuse is 4.9 m and the height is 1.7 m. Find the base to 1 decimal place.',
                correctAnswer: '4.6',
                acceptableAnswers: ['4.6', '4.60'],
                decimalEquivalent: 4.60,
                answerType: 'decimal',
                tolerance: 0.1,
                hint: 'Use a² = c² - b². Calculate 4.9² - 1.7², then find the square root and round to 1 decimal place.',
                explanation: `<strong>The answer is 4.6 m!</strong><br><br>
                    Step 1: a² = 4.9² - 1.7²<br>
                    Step 2: a² = 24.01 - 2.89 = 21.12<br>
                    Step 3: a = √21.12 ≈ 4.60 m<br>
                    Step 4: To 1 decimal place: 4.6 m`,
                points: 100
            });
    
            // 5A Q3f - Find height (decimal)
            addQuestion('chapter5', {
                id: 'ch5_5a3_f',
                section: '5A',
                questionNum: '3f',
                page: 93,
                witness: 'Franziska von Karma',
                witnessSprite: '👩',
                type: 'find-side',
                diagram: {
                    type: 'right-triangle',
                    side1: 22,
                    side1Unit: 'cm',
                    hypotenuse: 14.1,
                    hypotenuseUnit: 'cm',
                    unknown: 'height',
                    showRightAngle: true
                },
                problem: 'Franziska presents evidence: a triangle with base 22 cm and hypotenuse 14.1 cm. Find the height to 1 decimal place.',
                correctAnswer: 'impossible',
                acceptableAnswers: ['impossible', 'not possible', 'no solution'],
                decimalEquivalent: null,
                answerType: 'text',
                tolerance: 0,
                hint: 'Before calculating, check if 14.1 cm > 22 cm. The hypotenuse must be the longest side!',
                explanation: `<strong>IMPOSSIBLE!</strong><br><br>
                    The hypotenuse (14.1 cm) cannot be shorter than the base (22 cm).<br>
                    In any right triangle, the hypotenuse is the longest side.<br><br>
                    Franziska's evidence is contradictory!`,
                points: 100
            });
    
            // 5A Q4a - Find x (algebraic)
            addQuestion('chapter5', {
                id: 'ch5_5a4_a',
                section: '5A',
                questionNum: '4a',
                page: 93,
                witness: 'Godot',
                witnessSprite: '☕',
                type: 'find-x',
                diagram: {
                    type: 'right-triangle',
                    side1: '√2',
                    side1Unit: 'cm',
                    hypotenuse: 3,
                    hypotenuseUnit: 'cm',
                    unknown: 'base',
                    showRightAngle: true
                },
                problem: 'Godot presents evidence: a triangle with hypotenuse 3 cm, one side √2 cm, and unknown side x cm. Find x in surd form.',
                correctAnswer: '√7',
                acceptableAnswers: ['√7', 'sqrt(7)', 'sqrt 7'],
                decimalEquivalent: 2.65,
                answerType: 'surd',
                tolerance: 0.1,
                hint: 'Use x² = c² - b² where c is the hypotenuse. Remember that (√2)² = 2. Calculate 3² - 2, then take the square root.',
                explanation: `<strong>The answer is x = √7 cm!</strong><br><br>
                    Step 1: x² + (√2)² = 3²<br>
                    Step 2: x² + 2 = 9<br>
                    Step 3: x² = 7<br>
                    Step 4: x = √7 cm`,
                points: 100
            });
    
            // 5A Q4b - Find x (hypotenuse with surds)
            addQuestion('chapter5', {
                id: 'ch5_5a4_b',
                section: '5A',
                questionNum: '4b',
                page: 93,
                witness: 'Apollo Justice',
                witnessSprite: '👨‍🦰',
                type: 'find-x',
                diagram: {
                    type: 'right-triangle',
                    side1: '√7',
                    side1Unit: 'cm',
                    side2: '√5',
                    side2Unit: 'cm',
                    unknown: 'hypotenuse',
                    showRightAngle: true
                },
                problem: 'Apollo found evidence with sides √7 cm and √5 cm. Find the hypotenuse x in surd form.',
                correctAnswer: '2√3',
                acceptableAnswers: ['2√3', '2*sqrt(3)', '2 sqrt 3', '√12', 'sqrt(12)', 'sqrt 12'],
                decimalEquivalent: 3.46,
                answerType: 'surd',
                tolerance: 0.1,
                hint: 'Use x² = a² + b². Remember that (√7)² = 7 and (√5)² = 5. Add these values, then simplify the square root.',
                explanation: `<strong>The answer is x = 2√3 cm!</strong><br><br>
                    Step 1: x² = (√7)² + (√5)²<br>
                    Step 2: x² = 7 + 5 = 12<br>
                    Step 3: x = √12<br>
                    Step 4: Simplify: √12 = √(4×3) = 2√3 cm`,
                points: 100
            });
    
            // 5A Q4c - Find x (isosceles)
            addQuestion('chapter5', {
                id: 'ch5_5a4_c',
                section: '5A',
                questionNum: '4c',
                page: 93,
                witness: 'Trucy Wright',
                witnessSprite: '🎩',
                type: 'find-x',
                diagram: {
                    type: 'right-triangle',
                    side1: 'x',
                    side1Unit: 'cm',
                    side2: 'x',
                    side2Unit: 'cm',
                    hypotenuse: '√10',
                    hypotenuseUnit: 'cm',
                    showRightAngle: true
                },
                problem: 'Trucy shows you an isosceles right triangle! Two equal sides are x cm each, and the hypotenuse is √10 cm. Find x.',
                correctAnswer: '√5',
                acceptableAnswers: ['√5', 'sqrt(5)', 'sqrt 5'],
                decimalEquivalent: 2.24,
                answerType: 'surd',
                tolerance: 0.1,
                hint: 'Since two sides equal x, use x² + x² = (√10)². Simplify the left side, then solve for x².',
                explanation: `<strong>The answer is x = √5 cm!</strong><br><br>
                    Step 1: x² + x² = (√10)²<br>
                    Step 2: 2x² = 10<br>
                    Step 3: x² = 5<br>
                    Step 4: x = √5 cm`,
                points: 100
            });
    
            // 5A Q4d - Find x (hypotenuse)
            addQuestion('chapter5', {
                id: 'ch5_5a4_d',
                section: '5A',
                questionNum: '4d',
                page: 93,
                witness: 'Klavier Gavin',
                witnessSprite: '🎸',
                type: 'find-x',
                diagram: {
                    type: 'right-triangle',
                    side1: '2√2',
                    side1Unit: 'cm',
                    side2: '3√3',
                    side2Unit: 'cm',
                    unknown: 'hypotenuse',
                    showRightAngle: true
                },
                problem: 'Klavier rocks the courtroom with evidence: sides 2√2 cm and 3√3 cm. Find hypotenuse x in surd form.',
                correctAnswer: '√35',
                acceptableAnswers: ['√35', 'sqrt(35)', 'sqrt 35'],
                decimalEquivalent: 5.92,
                answerType: 'surd',
                tolerance: 0.1,
                hint: 'Use x² = a² + b². Remember that (a√b)² = a² × b. Calculate each term, add them, then take the square root.',
                explanation: `<strong>The answer is x = √35 cm!</strong><br><br>
                    Step 1: x² = (2√2)² + (3√3)²<br>
                    Step 2: x² = 4×2 + 9×3<br>
                    Step 3: x² = 8 + 27 = 35<br>
                    Step 4: x = √35 cm`,
                points: 100
            });
    
            // 5A Q4f - Find x (side)
            addQuestion('chapter5', {
                id: 'ch5_5a4_f',
                section: '5A',
                questionNum: '4f',
                page: 93,
                witness: 'Judge',
                witnessSprite: '👨‍⚖️',
                type: 'find-x',
                diagram: {
                    type: 'right-triangle',
                    side1: '√3/2',
                    side1Unit: 'm',
                    side2: 1,
                    side2Unit: 'm',
                    unknown: 'hypotenuse',
                    showRightAngle: true
                },
                problem: 'The Judge examines a triangle with sides (√3)/2 m and 1 m. Find hypotenuse x in surd form.',
                correctAnswer: '√7/2',
                acceptableAnswers: ['√7/2', 'sqrt(7)/2', '(√7)/2', '0.5√7', '0.5*sqrt(7)'],
                decimalEquivalent: 1.32,
                answerType: 'surd',
                tolerance: 0.1,
                hint: 'Use x² = a² + b². Remember that (√3/2)² = 3/4. Add this to 1² (which is 4/4), then take the square root.',
                explanation: `<strong>The answer is x = (√7)/2 m!</strong><br><br>
                    Step 1: x² = ((√3)/2)² + 1²<br>
                    Step 2: x² = 3/4 + 1<br>
                    Step 3: x² = 3/4 + 4/4 = 7/4<br>
                    Step 4: x = √(7/4) = (√7)/2 m`,
                points: 100
            });
    
            // 5B Q3a - Pythagorean Triple
            addQuestion('chapter5', {
                id: 'ch5_5b3_a',
                section: '5B',
                questionNum: '3a',
                page: 97,
                witness: 'Phoenix Wright',
                witnessSprite: '👨‍💼',
                type: 'pythagorean-triple',
                diagram: {
                    type: 'right-triangle',
                    side1: 12,
                    side1Unit: '',
                    side2: 16,
                    side2Unit: '',
                    unknown: 'hypotenuse',
                    showRightAngle: true
                },
                problem: 'Phoenix needs to find the missing value! Given the Pythagorean triple {12, 16, k}, find k.',
                correctAnswer: '20',
                acceptableAnswers: ['20', '20.0'],
                decimalEquivalent: 20,
                answerType: 'number',
                tolerance: 0.1,
                hint: 'The largest value is the hypotenuse. Use the Pythagorean theorem: k² = a² + b². Calculate and take the square root.',
                explanation: `<strong>The answer is k = 20!</strong><br><br>
                    Step 1: Identify that k must be the hypotenuse (largest value)<br>
                    Step 2: k² = 12² + 16²<br>
                    Step 3: k² = 144 + 256 = 400<br>
                    Step 4: k = √400 = 20<br><br>
                    This is the famous 3-4-5 triple scaled by 4!`,
                points: 100
            });
    
            // 5B Q3b - Pythagorean Triple
            addQuestion('chapter5', {
                id: 'ch5_5b3_b',
                section: '5B',
                questionNum: '3b',
                page: 97,
                witness: 'Maya Fey',
                witnessSprite: '👧',
                type: 'pythagorean-triple',
                diagram: {
                    type: 'right-triangle',
                    side1: 11,
                    side1Unit: '',
                    side2: 60,
                    side2Unit: '',
                    unknown: 'hypotenuse',
                    showRightAngle: true
                },
                problem: 'Maya found a mystic triple {11, 60, k}. Find the missing value k.',
                correctAnswer: '61',
                acceptableAnswers: ['61', '61.0'],
                decimalEquivalent: 61,
                answerType: 'number',
                tolerance: 0.1,
                hint: 'k is the largest, so it\'s the hypotenuse. Use the Pythagorean theorem to find k² first, then take the square root.',
                explanation: `<strong>The answer is k = 61!</strong><br><br>
                    Step 1: k is the hypotenuse<br>
                    Step 2: k² = 11² + 60²<br>
                    Step 3: k² = 121 + 3600 = 3721<br>
                    Step 4: k = √3721 = 61`,
                points: 100
            });
    
            // 5B Q3c - Pythagorean Triple
            addQuestion('chapter5', {
                id: 'ch5_5b3_c',
                section: '5B',
                questionNum: '3c',
                page: 97,
                witness: 'Miles Edgeworth',
                witnessSprite: '🧑‍💼',
                type: 'pythagorean-triple',
                diagram: {
                    type: 'right-triangle',
                    side1: 24,
                    side1Unit: '',
                    hypotenuse: 51,
                    hypotenuseUnit: '',
                    unknown: 'base',
                    showRightAngle: true
                },
                problem: 'Edgeworth presents the triple {24, k, 51}. The largest value 51 is the hypotenuse. Find k.',
                correctAnswer: '45',
                acceptableAnswers: ['45', '45.0'],
                decimalEquivalent: 45,
                answerType: 'number',
                tolerance: 0.1,
                hint: 'Since 51 is the hypotenuse, use k² = c² - a². Calculate the squares, subtract, then take the square root.',
                explanation: `<strong>The answer is k = 45!</strong><br><br>
                    Step 1: 51 is the hypotenuse<br>
                    Step 2: k² = 51² - 24²<br>
                    Step 3: k² = 2601 - 576 = 2025<br>
                    Step 4: k = √2025 = 45`,
                points: 100
            });
    
            // 5B Q3d - Pythagorean Triple (algebraic)
            addQuestion('chapter5', {
                id: 'ch5_5b3_d',
                section: '5B',
                questionNum: '3d',
                page: 97,
                witness: 'Dick Gumshoe',
                witnessSprite: '👮',
                type: 'pythagorean-triple',
                diagram: {
                    type: 'right-triangle',
                    side1: 8,
                    side1Unit: '',
                    side2: 'k',
                    side2Unit: '',
                    hypotenuse: 'k+2',
                    hypotenuseUnit: '',
                    showRightAngle: true
                },
                problem: 'Gumshoe needs help with {8, k, k+2}. The hypotenuse is k+2. Find k.',
                correctAnswer: '15',
                acceptableAnswers: ['15', '15.0'],
                decimalEquivalent: 15,
                answerType: 'number',
                tolerance: 0.1,
                hint: 'Use 8² + k² = (k+2)². Expand the right side using (a+b)² = a² + 2ab + b². The k² terms will cancel, leaving a linear equation.',
                explanation: `<strong>The answer is k = 15!</strong><br><br>
                    Step 1: 8² + k² = (k+2)²<br>
                    Step 2: 64 + k² = k² + 4k + 4<br>
                    Step 3: 64 = 4k + 4<br>
                    Step 4: 60 = 4k<br>
                    Step 5: k = 15<br><br>
                    Verification: {8, 15, 17} is indeed a Pythagorean triple!`,
                points: 100
            });
    
            // 5B Q3e - Pythagorean Triple (algebraic)
            addQuestion('chapter5', {
                id: 'ch5_5b3_e',
                section: '5B',
                questionNum: '3e',
                page: 97,
                witness: 'Franziska von Karma',
                witnessSprite: '👩',
                type: 'pythagorean-triple',
                diagram: {
                    type: 'right-triangle',
                    side1: 20,
                    side1Unit: '',
                    side2: 'k',
                    side2Unit: '',
                    hypotenuse: 'k+8',
                    hypotenuseUnit: '',
                    showRightAngle: true
                },
                problem: 'Franziska whips out {20, k, k+8}. The hypotenuse is k+8. Find k!',
                correctAnswer: '21',
                acceptableAnswers: ['21', '21.0'],
                decimalEquivalent: 21,
                answerType: 'number',
                tolerance: 0.1,
                hint: 'Set up 20² + k² = (k+8)². Expand the right side. The k² terms will cancel, leaving a linear equation to solve.',
                explanation: `<strong>The answer is k = 21!</strong><br><br>
                    Step 1: 20² + k² = (k+8)²<br>
                    Step 2: 400 + k² = k² + 16k + 64<br>
                    Step 3: 400 = 16k + 64<br>
                    Step 4: 336 = 16k<br>
                    Step 5: k = 21<br><br>
                    Triple: {20, 21, 29}`,
                points: 100
            });
    
            // 5B Q3f - Pythagorean Triple (algebraic)
            addQuestion('chapter5', {
                id: 'ch5_5b3_f',
                section: '5B',
                questionNum: '3f',
                page: 97,
                witness: 'Godot',
                witnessSprite: '☕',
                type: 'pythagorean-triple',
                diagram: {
                    type: 'right-triangle',
                    side1: 'k',
                    side1Unit: '',
                    side2: 60,
                    side2Unit: '',
                    hypotenuse: 'k+50',
                    hypotenuseUnit: '',
                    showRightAngle: true
                },
                problem: 'Godot challenges you with {k, 60, k+50}. The hypotenuse is k+50. Find k.',
                correctAnswer: '11',
                acceptableAnswers: ['11', '11.0'],
                decimalEquivalent: 11,
                answerType: 'number',
                tolerance: 0.1,
                hint: 'Use k² + 60² = (k+50)². Expand the right side. The k² terms will cancel, leaving a linear equation to solve.',
                explanation: `<strong>The answer is k = 11!</strong><br><br>
                    Step 1: k² + 60² = (k+50)²<br>
                    Step 2: k² + 3600 = k² + 100k + 2500<br>
                    Step 3: 3600 = 100k + 2500<br>
                    Step 4: 1100 = 100k<br>
                    Step 5: k = 11<br><br>
                    Triple: {11, 60, 61}`,
                points: 100
            });
    
            // 5D Q1a - Verify right triangle
            addQuestion('chapter5', {
                id: 'ch5_5d1_a',
                section: '5D',
                questionNum: '1a',
                page: 102,
                witness: 'Apollo Justice',
                witnessSprite: '👨‍🦰',
                type: 'verify-right-triangle',
                diagram: {
                    type: 'right-triangle',
                    side1: 4,
                    side1Unit: 'cm',
                    side2: 5,
                    side2Unit: 'cm',
                    hypotenuse: 7,
                    hypotenuseUnit: 'cm',
                    showRightAngle: true
                },
                problem: 'Apollo needs to verify if a triangle with sides 7 cm, 4 cm, and 5 cm is right-angled. Enter "yes" if it is, "no" if it isn\'t.',
                correctAnswer: 'no',
                acceptableAnswers: ['no', 'not', 'false', 'no it is not'],
                decimalEquivalent: null,
                answerType: 'text',
                tolerance: 0,
                hint: 'Check if the longest side squared equals the sum of the other two sides squared. Does 7² = 4² + 5²?',
                explanation: `<strong>NO, it is NOT a right triangle!</strong><br><br>
                    Step 1: Identify longest side: 7 cm (would be hypotenuse)<br>
                    Step 2: Check: 7² = 4² + 5²?<br>
                    Step 3: 49 ≠ 16 + 25<br>
                    Step 4: 49 ≠ 41<br><br>
                    This triangle does NOT satisfy the Pythagorean theorem!`,
                points: 100
            });
    
            // 5D Q1b - Verify right triangle
            addQuestion('chapter5', {
                id: 'ch5_5d1_b',
                section: '5D',
                questionNum: '1b',
                page: 102,
                witness: 'Trucy Wright',
                witnessSprite: '🎩',
                type: 'verify-right-triangle',
                diagram: {
                    type: 'right-triangle',
                    side1: 9,
                    side1Unit: 'cm',
                    side2: 12,
                    side2Unit: 'cm',
                    hypotenuse: 15,
                    hypotenuseUnit: 'cm',
                    showRightAngle: true
                },
                problem: 'Trucy asks: Is a triangle with sides 9 cm, 12 cm, and 15 cm right-angled? Answer "yes" or "no".',
                correctAnswer: 'yes',
                acceptableAnswers: ['yes', 'true', 'yes it is', 'right-angled'],
                decimalEquivalent: null,
                answerType: 'text',
                tolerance: 0,
                hint: 'Test if 15² = 9² + 12². Calculate both sides and compare.',
                explanation: `<strong>YES, it IS a right triangle!</strong><br><br>
                    Step 1: Longest side is 15 cm<br>
                    Step 2: Check: 15² = 9² + 12²?<br>
                    Step 3: 225 = 81 + 144<br>
                    Step 4: 225 = 225 ✓<br><br>
                    This is the 3-4-5 triple scaled by 3!`,
                points: 100
            });
    
            // 5D Q1c - Verify right triangle
            addQuestion('chapter5', {
                id: 'ch5_5d1_c',
                section: '5D',
                questionNum: '1c',
                page: 102,
                witness: 'Klavier Gavin',
                witnessSprite: '🎸',
                type: 'verify-right-triangle',
                diagram: {
                    type: 'right-triangle',
                    side1: 5,
                    side1Unit: 'cm',
                    side2: 8,
                    side2Unit: 'cm',
                    hypotenuse: 9,
                    hypotenuseUnit: 'cm',
                    showRightAngle: true
                },
                problem: 'Klavier rocks out with sides 5 cm, 9 cm, and 8 cm. Is this a right triangle? Answer "yes" or "no".',
                correctAnswer: 'no',
                acceptableAnswers: ['no', 'not', 'false'],
                decimalEquivalent: null,
                answerType: 'text',
                tolerance: 0,
                hint: 'The longest side is 9 cm. Check if 9² = 5² + 8².',
                explanation: `<strong>NO, not a right triangle!</strong><br><br>
                    Step 1: Longest side: 9 cm<br>
                    Step 2: Check: 9² = 5² + 8²?<br>
                    Step 3: 81 ≠ 25 + 64<br>
                    Step 4: 81 ≠ 89<br><br>
                    This doesn't satisfy Pythagoras!`,
                points: 100
            });
    
            // 5D Q1d - Verify right triangle (with surds)
            addQuestion('chapter5', {
                id: 'ch5_5d1_d',
                section: '5D',
                questionNum: '1d',
                page: 102,
                witness: 'Pearl Fey',
                witnessSprite: '👧',
                type: 'verify-right-triangle',
                diagram: {
                    type: 'right-triangle',
                    side1: 3,
                    side1Unit: 'cm',
                    side2: '√7',
                    side2Unit: 'cm',
                    hypotenuse: '√12',
                    hypotenuseUnit: 'cm',
                    showRightAngle: true
                },
                problem: 'Pearl found a triangle with sides 3 cm, √7 cm, and √12 cm. Is it right-angled? Answer "yes" or "no".',
                correctAnswer: 'no',
                acceptableAnswers: ['no', 'not', 'false'],
                decimalEquivalent: null,
                answerType: 'text',
                tolerance: 0,
                hint: 'Longest is √12. Check if (√12)² = 3² + (√7)². Square each term and see if the equation holds.',
                explanation: `<strong>NO! Close, but not quite!</strong><br><br>
                    Step 1: Longest: √12 cm<br>
                    Step 2: Check: (√12)² = 3² + (√7)²?<br>
                    Step 3: 12 ≠ 9 + 7<br>
                    Step 4: 12 ≠ 16<br><br>
                    Not a right triangle!`,
                points: 100
            });
    
            // 5D Q1e - Verify right triangle (with surds)
            addQuestion('chapter5', {
                id: 'ch5_5d1_e',
                section: '5D',
                questionNum: '1e',
                page: 102,
                witness: 'Judge',
                witnessSprite: '👨‍⚖️',
                type: 'verify-right-triangle',
                diagram: {
                    type: 'right-triangle',
                    side1: '√27',
                    side1Unit: 'm',
                    side2: '√48',
                    side2Unit: 'm',
                    hypotenuse: '√75',
                    hypotenuseUnit: 'm',
                    showRightAngle: true
                },
                problem: 'The court examines a triangle: √27 m, √48 m, and √75 m. Is this right-angled? Answer "yes" or "no".',
                correctAnswer: 'yes',
                acceptableAnswers: ['yes', 'true', 'yes it is'],
                decimalEquivalent: null,
                answerType: 'text',
                tolerance: 0,
                hint: 'Check if (√75)² = (√27)² + (√48)². When you square a square root, you get the number inside. Does the equation hold?',
                explanation: `<strong>YES, it IS a right triangle!</strong><br><br>
                    Step 1: Longest: √75 m<br>
                    Step 2: Check: (√75)² = (√27)² + (√48)²?<br>
                    Step 3: 75 = 27 + 48<br>
                    Step 4: 75 = 75 ✓<br><br>
                    This satisfies the Pythagorean theorem!`,
                points: 100
            });
    
            // 5D Q1f - Verify right triangle
            addQuestion('chapter5', {
                id: 'ch5_5d1_f',
                section: '5D',
                questionNum: '1f',
                page: 102,
                witness: 'Phoenix Wright',
                witnessSprite: '👨‍💼',
                type: 'verify-right-triangle',
                diagram: {
                    type: 'right-triangle',
                    side1: 8,
                    side1Unit: 'm',
                    side2: 15,
                    side2Unit: 'm',
                    hypotenuse: 17,
                    hypotenuseUnit: 'm',
                    showRightAngle: true
                },
                problem: 'Phoenix verifies evidence: 8 m, 15 m, and 17 m. Is this a right triangle? Answer "yes" or "no".',
                correctAnswer: 'yes',
                acceptableAnswers: ['yes', 'true', 'yes it is'],
                decimalEquivalent: null,
                answerType: 'text',
                tolerance: 0,
                hint: 'Test the Pythagorean theorem: does 17² = 8² + 15²?',
                explanation: `<strong>YES! This is the classic 8-15-17 triple!</strong><br><br>
                    Step 1: Longest: 17 m<br>
                    Step 2: Check: 17² = 8² + 15²?<br>
                    Step 3: 289 = 64 + 225<br>
                    Step 4: 289 = 289 ✓<br><br>
                    A perfect right triangle!`,
                points: 100
            });
    
            // 5C Q19 - 3D Pythagorean (Cube Diagonal)
            addQuestion('chapter5', {
                id: 'ch5_5c19',
                section: '5C',
                questionNum: '19',
                page: 100,
                witness: 'Miles Edgeworth',
                witnessSprite: '🧑‍💼',
                type: '3d-pythagorean',
                diagram: {
                    type: 'cube-diagonal',
                    sideLength: 3,
                    unit: 'cm',
                    showFaceDiagonal: true,
                    showSpaceDiagonal: true
                },
                problem: 'Edgeworth presents a cube-shaped evidence box with sides of 3 cm. Find the length of the space diagonal (from one corner to the opposite corner through the interior) in simplest surd form.',
                correctAnswer: '3√3',
                acceptableAnswers: ['3√3', '3*sqrt(3)', '3 sqrt 3', '√27', 'sqrt(27)', 'sqrt 27'],
                decimalEquivalent: 5.20,
                answerType: 'surd',
                tolerance: 0.1,
                hint: 'First find the face diagonal using Pythagorean theorem on the base: d = √(3² + 3²). Then use that diagonal and the height (3) to find the space diagonal.',
                explanation: `<strong>The answer is 3√3 cm!</strong><br><br>
                    Step 1: Find face diagonal: d² = 3² + 3² = 18, so d = √18 = 3√2 cm<br>
                    Step 2: Use face diagonal and height for space diagonal:<br>
                    Step 3: D² = (3√2)² + 3²<br>
                    Step 4: D² = 18 + 9 = 27<br>
                    Step 5: D = √27 = 3√3 cm<br><br>
                    This is a 3D application of the Pythagorean theorem!`,
                points: 100
            });
}

// Chapter 13: Congruence and Similarity - Question Bank
// This file contains all questions for Chapter 13

function loadChapter13Questions() {
    // 13A Q1a - Congruent triangles (SSS)
    addQuestion('chapter13', {
        id: 'ch13_13a1_a',
        section: '13A',
        questionNum: '1a',
        page: 257,
        witness: 'Phoenix Wright',
        type: 'congruent-triangles',
        diagram: {
            type: 'congruent-triangles',
            triangle1: {
                label: 'ABC',
                base: 4,
                height: 3,
                marks: { base: 1, side1: 1, side2: 1 }
            },
            triangle2: {
                label: 'DEF',
                base: 4,
                height: 3,
                marks: { base: 1, side1: 1, side2: 1 }
            },
            congruenceType: 'SSS'
        },
        problem: 'Phoenix examines two triangles ABC and DEF. Triangle ABC has sides marked with single tick marks on all three sides. Triangle DEF also has single tick marks on all three sides. Are these triangles congruent? Answer "yes" or "no" and state the reason (SSS, SAS, ASA, or RHS).',
        correctAnswer: 'yes SSS',
        acceptableAnswers: ['yes SSS', 'yes, SSS', 'congruent SSS', 'SSS', 'yes - SSS'],
        decimalEquivalent: null,
        answerType: 'text',
        tolerance: 0,
        hint: 'Check if all three sides of one triangle match the three sides of the other triangle. If all three sides are equal, the triangles are congruent by SSS (Side-Side-Side).',
        explanation: `<strong>YES, the triangles are congruent by SSS!</strong><br><br>
            The tick marks show that all three sides of triangle ABC equal all three sides of triangle DEF.<br>
            When all three sides match, we have SSS congruence.<br><br>
            SSS = Side-Side-Side congruence`,
        points: 100
    });

    // 13A Q1b - Congruent triangles (RHS)
    addQuestion('chapter13', {
        id: 'ch13_13a1_b',
        section: '13A',
        questionNum: '1b',
        page: 257,
        witness: 'Miles Edgeworth',
        type: 'congruent-triangles',
        diagram: {
            type: 'congruent-triangles',
            triangle1: {
                label: 'XYZ',
                base: 4,
                height: 3,
                marks: { base: 1, side2: 2 },
                rightAngle: true
            },
            triangle2: {
                label: 'PQR',
                base: 4,
                height: 3,
                marks: { base: 1, side2: 2 },
                rightAngle: true
            },
            congruenceType: 'RHS'
        },
        problem: 'Edgeworth presents two right triangles XYZ and PQR. Both have right angles marked, their hypotenuses are marked with double tick marks (equal), and one side is marked with single tick marks (equal). Are these triangles congruent? Answer "yes" or "no" and state the reason.',
        correctAnswer: 'yes RHS',
        acceptableAnswers: ['yes RHS', 'yes, RHS', 'congruent RHS', 'RHS', 'yes - RHS'],
        decimalEquivalent: null,
        answerType: 'text',
        tolerance: 0,
        hint: 'For right triangles, if the hypotenuse and one side are equal, the triangles are congruent by RHS (Right angle-Hypotenuse-Side).',
        explanation: `<strong>YES, the triangles are congruent by RHS!</strong><br><br>
            Both triangles have:<br>
            - A right angle<br>
            - Equal hypotenuses (double tick marks)<br>
            - One equal side (single tick marks)<br><br>
            This gives us RHS congruence = Right angle-Hypotenuse-Side`,
        points: 100
    });

    // 13A Q1c - Congruent triangles (SAS)
    addQuestion('chapter13', {
        id: 'ch13_13a1_c',
        section: '13A',
        questionNum: '1c',
        page: 257,
        witness: 'Maya Fey',
        type: 'congruent-triangles',
        diagram: {
            type: 'congruent-triangles',
            triangle1: {
                label: 'ABC',
                base: 4,
                height: 3,
                marks: { base: 1, side1: 2 }
            },
            triangle2: {
                label: 'DEF',
                base: 4,
                height: 3,
                marks: { base: 1, side1: 2 }
            },
            congruenceType: 'SAS'
        },
        problem: 'Maya found two triangles ABC and DEF. Both have two sides marked equal (AB = DE, BC = EF) and the angle between those sides is equal (∠B = ∠E). Are these triangles congruent? Answer "yes" or "no" and state the reason.',
        correctAnswer: 'yes SAS',
        acceptableAnswers: ['yes SAS', 'yes, SAS', 'congruent SAS', 'SAS', 'yes - SAS'],
        decimalEquivalent: null,
        answerType: 'text',
        tolerance: 0,
        hint: 'When two sides and the included angle (the angle between those sides) are equal, the triangles are congruent by SAS (Side-Angle-Side).',
        explanation: `<strong>YES, the triangles are congruent by SAS!</strong><br><br>
            We have:<br>
            - Two equal sides: AB = DE and BC = EF<br>
            - The included angle: ∠B = ∠E<br><br>
            This is SAS congruence = Side-Angle-Side`,
        points: 100
    });

    // 13A Q1d - NOT congruent
    addQuestion('chapter13', {
        id: 'ch13_13a1_d',
        section: '13A',
        questionNum: '1d',
        page: 257,
        witness: 'Apollo Justice',
        type: 'congruent-triangles',
        diagram: {
            type: 'congruent-triangles',
            triangle1: {
                label: 'ABC',
                base: 4,
                height: 3,
                marks: { base: 1, side1: 1 }
            },
            triangle2: {
                label: 'KLM',
                base: 4,
                height: 2.5,
                marks: { base: 1, side1: 1 }
            },
            congruenceType: 'NONE'
        },
        problem: 'Apollo examines two triangles ABC and KLM. Triangle ABC has sides AB and BC marked equal to KL and LM respectively. However, the triangles look different in shape. Can we conclude they are congruent? Answer "yes" or "no".',
        correctAnswer: 'no',
        acceptableAnswers: ['no', 'not congruent', 'no - insufficient information'],
        decimalEquivalent: null,
        answerType: 'text',
        tolerance: 0,
        hint: 'Two sides being equal is not enough! We need either the included angle (for SAS), a third side (for SSS), or specific conditions for other congruence tests.',
        explanation: `<strong>NO, we cannot conclude they are congruent!</strong><br><br>
            Having only two equal sides (SSA) is NOT a valid congruence test.<br>
            We would need:<br>
            - The third side (SSS), OR<br>
            - The included angle (SAS), OR<br>
            - Another angle in the right position (ASA/AAS)<br><br>
            SSA does not guarantee congruence!`,
        points: 100
    });

    // 13A Q2a - Identify congruent pair (SAS)
    addQuestion('chapter13', {
        id: 'ch13_13a2_a',
        section: '13A',
        questionNum: '2a',
        page: 257,
        witness: 'Dick Gumshoe',
        type: 'identify-congruent',
        diagram: null,
        problem: 'Detective Gumshoe has four triangles: A (sides 5m, 5m, angle α between them), B (sides 5m, 7m, angle α between them), C (sides 7m, 5m, angle α between them), and D (sides 7m, 7m, angle α between them). Which pair is congruent? Enter the letter pair (e.g., "AB" or "A and B").',
        correctAnswer: 'BC',
        acceptableAnswers: ['BC', 'CB', 'B and C', 'C and B', 'B C'],
        decimalEquivalent: null,
        answerType: 'text',
        tolerance: 0,
        hint: 'Look for triangles with two equal sides and the same included angle. Remember that the order of sides doesn\'t matter - 5m, 7m with angle α is the same as 7m, 5m with angle α!',
        explanation: `<strong>The answer is B and C!</strong><br><br>
            Triangle A: 5m, 5m with angle α<br>
            Triangle B: 5m, 7m with angle α<br>
            Triangle C: 7m, 5m with angle α (same as B!)<br>
            Triangle D: 7m, 7m with angle α<br><br>
            Triangles B and C are congruent by SAS - the order of the sides doesn't matter!`,
        points: 100
    });

    // 13A Q2b - Identify congruent pair (Right triangles)
    addQuestion('chapter13', {
        id: 'ch13_13a2_b',
        section: '13A',
        questionNum: '2b',
        page: 257,
        witness: 'Franziska von Karma',
        type: 'identify-congruent',
        diagram: null,
        problem: 'Franziska presents four right triangles: A (sides 6cm, 8cm), B (sides 6cm, 8cm, 11cm), C (sides 6cm, 8cm, right angle), and D (sides 8cm, 6cm, right angle). Which triangles are congruent? Answer with the letter pair.',
        correctAnswer: 'CD',
        acceptableAnswers: ['CD', 'DC', 'C and D', 'D and C', 'C D'],
        decimalEquivalent: null,
        answerType: 'text',
        tolerance: 0,
        hint: 'For right triangles with two sides given, check if those are the two legs or if we need to calculate the hypotenuse. Triangles C and D both have legs of 6cm and 8cm.',
        explanation: `<strong>The answer is C and D!</strong><br><br>
            Triangle A: Only two sides given, not enough info<br>
            Triangle B: Has a third side that doesn't match Pythagorean theorem<br>
            Triangle C: Right triangle with legs 6cm, 8cm<br>
            Triangle D: Right triangle with legs 8cm, 6cm (same as C!)<br><br>
            C and D are congruent right triangles!`,
        points: 100
    });

    // 13C Q1b - Similar triangles (vertically opposite angles)
    addQuestion('chapter13', {
        id: 'ch13_13c1_b',
        section: '13C',
        questionNum: '1b',
        page: 263,
        witness: 'Trucy Wright',
        type: 'similar-triangles',
        diagram: {
            type: 'similar-triangles-intersecting',
            angle1: 40,
            angle2: 40,
            showAngles: true
        },
        problem: 'Trucy shows two triangles ABC and CDE that intersect at point C. Angle ABC = 40° and angle CDE = 40°. Angles ACB and DCE are vertically opposite. Are the triangles similar? Answer "yes" or "no".',
        correctAnswer: 'yes',
        acceptableAnswers: ['yes', 'yes they are similar', 'similar', 'yes - AA'],
        decimalEquivalent: null,
        answerType: 'text',
        tolerance: 0,
        hint: 'Vertically opposite angles are equal. If ∠ABC = ∠CDE = 40° and ∠ACB = ∠DCE (vertically opposite), we have two pairs of equal angles.',
        explanation: `<strong>YES, the triangles are similar!</strong><br><br>
            We have:<br>
            ∠ABC = ∠CDE = 40°<br>
            ∠ACB = ∠DCE (vertically opposite angles are equal)<br><br>
            Two pairs of equal angles means AA similarity!`,
        points: 100
    });

    // 13C Q1c - Similar triangles (isosceles)
    addQuestion('chapter13', {
        id: 'ch13_13c1_c',
        section: '13C',
        questionNum: '1c',
        page: 263,
        witness: 'Klavier Gavin',
        type: 'similar-triangles',
        diagram: {
            type: 'similar-triangles-nested',
            angle: 70,
            showAngles: true
        },
        problem: 'Klavier presents a large isosceles triangle AEB with base angles ∠A = 70° and ∠E = 70°. Inside it, a smaller triangle BDC is also isosceles with base angles ∠D = 70° and ∠C = 70°. Are triangles AEB and BDC similar? Answer "yes" or "no".',
        correctAnswer: 'yes',
        acceptableAnswers: ['yes', 'yes they are similar', 'similar', 'yes - AA'],
        decimalEquivalent: null,
        answerType: 'text',
        tolerance: 0,
        hint: 'Both triangles are isosceles with the same base angles (70°). Find the apex angle for each triangle using the angle sum property: angles in a triangle = 180°.',
        explanation: `<strong>YES, the triangles are similar!</strong><br><br>
            Triangle AEB (outer): ∠A = 70°, ∠E = 70°, ∠AEB = 180° - 70° - 70° = 40°<br>
            Triangle BDC (inner): ∠D = 70°, ∠C = 70°, ∠DBC = 180° - 70° - 70° = 40°<br><br>
            Both triangles have the same three angles: 70°, 70°, and 40°<br>
            Therefore they are similar by AA (Angle-Angle) similarity!`,
        points: 100
    });

    // 13D Q2a - Similar solids scale factor (cubes)
    addQuestion('chapter13', {
        id: 'ch13_13d2_a',
        section: '13D',
        questionNum: '2a',
        page: 269,
        witness: 'Judge',
        type: 'similar-solids',
        diagram: {
            type: 'similar-solids',
            shape: 'cube',
            size1: 3,
            size2: 6,
            unit: 'cm',
            volume1: 12,
            volume2: null
        },
        problem: 'The Judge examines two similar cubes. Cube A has volume 12 cm³ and side length 3 cm. Cube B has side length 6 cm. Find the volume of cube B (in cm³).',
        correctAnswer: '96',
        acceptableAnswers: ['96', '96 cm³', '96 cubic cm'],
        decimalEquivalent: 96,
        answerType: 'number',
        tolerance: 0.5,
        hint: 'The scale factor k = 6/3 = 2. For similar solids, volume scales by k³. So volume of B = k³ × volume of A = 2³ × 12.',
        explanation: `<strong>The answer is 96 cm³!</strong><br><br>
            Step 1: Find scale factor: k = 6cm ÷ 3cm = 2<br>
            Step 2: Volume scales by k³<br>
            Step 3: Volume of B = 2³ × 12 cm³<br>
            Step 4: Volume of B = 8 × 12 = 96 cm³`,
        points: 100
    });

    // 13D Q2b - Similar solids scale factor (pyramids)
    addQuestion('chapter13', {
        id: 'ch13_13d2_b',
        section: '13D',
        questionNum: '2b',
        page: 269,
        witness: 'Phoenix Wright',
        type: 'similar-solids',
        diagram: {
            type: 'similar-solids',
            shape: 'pyramid',
            size1: 12,
            size2: 20,
            unit: 'cm'
        },
        problem: 'Phoenix found two similar pyramids. Pyramid A has base length 12 cm and volume x cm³. Pyramid B has base length 20 cm and volume 2000 cm³. Find the volume of pyramid A (round to nearest whole number).',
        correctAnswer: '432',
        acceptableAnswers: ['432', '432 cm³', '432 cubic cm'],
        decimalEquivalent: 432,
        answerType: 'number',
        tolerance: 5,
        hint: 'Scale factor k = 20/12 = 5/3. Since volume of B = k³ × volume of A, we can work backwards: volume of A = volume of B ÷ k³.',
        explanation: `<strong>The answer is 432 cm³!</strong><br><br>
            Step 1: k = 20/12 = 5/3<br>
            Step 2: Volume of B = k³ × volume of A<br>
            Step 3: 2000 = (5/3)³ × volume of A<br>
            Step 4: 2000 = (125/27) × volume of A<br>
            Step 5: Volume of A = 2000 × 27/125 = 432 cm³`,
        points: 100
    });

    // 13D Q2c - Similar solids (cylinders)
    addQuestion('chapter13', {
        id: 'ch13_13d2_c',
        section: '13D',
        questionNum: '2c',
        page: 269,
        witness: 'Maya Fey',
        type: 'similar-solids',
        diagram: {
            type: 'similar-solids',
            shape: 'cylinder',
            size1: 1,
            size2: 2.2,
            unit: 'm'
        },
        problem: 'Maya has two similar cylinders. Cylinder C has height 2.2 m and volume 1.6 m³. Cylinder D has height 1 m. Find the volume of cylinder D (in m³, to 1 decimal place).',
        correctAnswer: '0.2',
        acceptableAnswers: ['0.2', '0.2 m³', '0.15'],
        decimalEquivalent: 0.151,
        answerType: 'decimal',
        tolerance: 0.05,
        hint: 'Scale factor k = 1/2.2 ≈ 0.4545. Volume of D = k³ × 1.6. Calculate (1/2.2)³ × 1.6.',
        explanation: `<strong>The answer is approximately 0.2 m³!</strong><br><br>
            Step 1: k = 1/2.2 ≈ 0.4545<br>
            Step 2: Volume of D = k³ × 1.6 m³<br>
            Step 3: Volume of D = (0.4545)³ × 1.6<br>
            Step 4: Volume of D ≈ 0.0939 × 1.6 ≈ 0.150 m³<br>
            Rounded to 1 decimal place: 0.2 m³`,
        points: 100
    });

    // 13D Q2d - Similar solids (prisms)
    addQuestion('chapter13', {
        id: 'ch13_13d2_d',
        section: '13D',
        questionNum: '2d',
        page: 269,
        witness: 'Miles Edgeworth',
        type: 'similar-solids',
        diagram: {
            type: 'similar-solids',
            shape: 'rectangular-prism',
            size1: 5,
            size2: 7.5,
            unit: 'cm',
            volume1: 24,
            volume2: 81
        },
        problem: 'Edgeworth examines two similar rectangular prisms. Prism A has volume 24 cm³ and height 5 cm. Prism B has volume 81 cm³ and height x cm. Find x.',
        correctAnswer: '7.5',
        acceptableAnswers: ['7.5', '7.5 cm', '15/2'],
        decimalEquivalent: 7.5,
        answerType: 'decimal',
        tolerance: 0.2,
        hint: 'Volume ratio = 81/24 = 27/8. Since volume = k³, we have k³ = 27/8, so k = 3/2 = 1.5. Then x = k × 5.',
        explanation: `<strong>The answer is 7.5 cm!</strong><br><br>
            Step 1: Volume ratio = 81/24 = 27/8<br>
            Step 2: k³ = 27/8<br>
            Step 3: k = ∛(27/8) = 3/2 = 1.5<br>
            Step 4: x = 1.5 × 5 = 7.5 cm`,
        points: 100
    });

    // 13D Q3a - Area of similar triangle
    addQuestion('chapter13', {
        id: 'ch13_13d3_a',
        section: '13D',
        questionNum: '3a',
        page: 269,
        witness: 'Apollo Justice',
        type: 'similar-area',
        diagram: null,
        problem: 'Apollo found that triangle BCD has area 6.4 cm². Triangle ACE is similar to BCD with all sides 2.5 times larger. Find the area of triangle ACE (in cm²).',
        correctAnswer: '40',
        acceptableAnswers: ['40', '40 cm²', '40 square cm'],
        decimalEquivalent: 40,
        answerType: 'number',
        tolerance: 0.5,
        hint: 'For similar figures, area scales by k². If k = 2.5, then area of ACE = k² × area of BCD = 2.5² × 6.4.',
        explanation: `<strong>The answer is 40 cm²!</strong><br><br>
            Step 1: Scale factor k = 2.5<br>
            Step 2: Area scales by k²<br>
            Step 3: Area of ACE = 2.5² × 6.4 cm²<br>
            Step 4: Area of ACE = 6.25 × 6.4 = 40 cm²`,
        points: 100
    });

    // 13D Q5 - Similar rhombus perimeter
    addQuestion('chapter13', {
        id: 'ch13_13d5',
        section: '13D',
        questionNum: '5',
        page: 269,
        witness: 'Dick Gumshoe',
        type: 'similar-perimeter',
        diagram: null,
        problem: 'Detective Gumshoe has a rhombus with sides 13.5 cm and area 162 cm². A similar rhombus has area 50 cm². Find the perimeter of the smaller rhombus (in cm, to 1 decimal place).',
        correctAnswer: '30',
        acceptableAnswers: ['30', '30.0', '30 cm'],
        decimalEquivalent: 30,
        answerType: 'decimal',
        tolerance: 0.5,
        hint: 'Find k using area ratio: k² = 50/162. Then k = √(50/162). The side of smaller rhombus = k × 13.5. Perimeter = 4 × side.',
        explanation: `<strong>The answer is 30 cm!</strong><br><br>
            Step 1: Area ratio: k² = 50/162 = 25/81<br>
            Step 2: k = √(25/81) = 5/9 ≈ 0.556<br>
            Step 3: Side of smaller rhombus = (5/9) × 13.5 = 67.5/9 = 7.5 cm<br>
            Step 4: Perimeter = 4 × 7.5 = 30 cm`,
        points: 100
    });
}

// Revision 1: Mixed Review - Question Bank
// This file contains all questions for Revision 1 (Review Sets 8A and 13B)

function loadRevision1Questions() {
    // REVIEW SET 8A - Q1a: Perimeter and area of composite figure
    addQuestion('revision1', {
        id: 'rev1_8a1_a',
        section: 'REV8A',
        questionNum: '1a',
        page: 162,
        witness: 'Phoenix Wright',
        type: 'composite-perimeter-area',
        diagram: null,
        problem: 'Phoenix examines a composite figure shaped like a rectangle with rectangular cutouts. The outer dimensions are 12 m tall, with a base of 6 m and a top section of 3 m wide. Find the perimeter (in m).',
        correctAnswer: '42',
        acceptableAnswers: ['42', '42 m', '42m'],
        decimalEquivalent: 42,
        answerType: 'number',
        tolerance: 0.5,
        hint: 'Count all the outer edges. The perimeter includes: vertical sides (12 m each × 2), horizontal bases (6 m + 3 m), and the step edges. Add all outer edges together.',
        explanation: `<strong>The answer is 42 m!</strong><br><br>
            Step 1: Add all outer edges<br>
            Left side: 12 m<br>
            Bottom: 6 m<br>
            Right steps: 3 m up, 3 m across, 9 m up<br>
            Top: 3 m<br>
            Left step down: 3 m<br>
            Step 2: Total = 12 + 6 + 3 + 3 + 9 + 3 + 3 + 3 = 42 m`,
        points: 100
    });

    // REVIEW SET 8A - Q1b: Isosceles triangle perimeter and area
    addQuestion('revision1', {
        id: 'rev1_8a1_b',
        section: 'REV8A',
        questionNum: '1b',
        page: 162,
        witness: 'Maya Fey',
        type: 'triangle-perimeter-area',
        diagram: null,
        problem: 'Maya found an isosceles triangle with two equal sides of 92 mm each and a base angle of 45°. Find the perimeter (in mm, to 1 decimal place).',
        correctAnswer: '314.1',
        acceptableAnswers: ['314.1', '314', '314.1 mm'],
        decimalEquivalent: 314.1,
        answerType: 'decimal',
        tolerance: 2,
        hint: 'For an isosceles triangle with base angle 45°, it\'s actually a right triangle with legs equal. Use the Pythagorean theorem to find the base: base² = 92² + 92². Then perimeter = 92 + 92 + base.',
        explanation: `<strong>The answer is approximately 314.1 mm!</strong><br><br>
            Step 1: This is a 45-45-90 triangle<br>
            Step 2: The two equal sides are 92 mm each<br>
            Step 3: Base = 92√2 ≈ 130.1 mm<br>
            Step 4: Perimeter = 92 + 92 + 130.1 ≈ 314.1 mm`,
        points: 100
    });

    // REVIEW SET 8A - Q1c: Trapezoid perimeter and area
    addQuestion('revision1', {
        id: 'rev1_8a1_c',
        section: 'REV8A',
        questionNum: '1c',
        page: 162,
        witness: 'Miles Edgeworth',
        type: 'trapezoid-perimeter-area',
        diagram: null,
        problem: 'Edgeworth presents a trapezoid with parallel sides of 2 m (top) and 3.6 m (bottom), and equal slanted sides of 1.7 m each. Find the area (in m², to 1 decimal place).',
        correctAnswer: '4.2',
        acceptableAnswers: ['4.2', '4.2 m²'],
        decimalEquivalent: 4.2,
        answerType: 'decimal',
        tolerance: 0.1,
        hint: 'Area of trapezoid = ½ × (sum of parallel sides) × height. First find the height using Pythagorean theorem: the base difference is 3.6 - 2 = 1.6 m, so each slant covers 0.8 m horizontally. Height² = 1.7² - 0.8².',
        explanation: `<strong>The answer is 4.2 m²!</strong><br><br>
            Step 1: Base difference = 3.6 - 2 = 1.6 m (split equally: 0.8 m each side)<br>
            Step 2: Height² = 1.7² - 0.8² = 2.89 - 0.64 = 2.25<br>
            Step 3: Height = 1.5 m<br>
            Step 4: Area = ½ × (2 + 3.6) × 1.5 = ½ × 5.6 × 1.5 = 4.2 m²`,
        points: 100
    });

    // REVIEW SET 8A - Q2: Tire revolutions
    addQuestion('revision1', {
        id: 'rev1_8a2',
        section: 'REV8A',
        questionNum: '2',
        page: 162,
        witness: 'Dick Gumshoe',
        type: 'circumference-application',
        diagram: null,
        problem: 'Detective Gumshoe investigates a car with tires that have a diameter of 50 cm. How many complete revolutions do the tires make when the car travels 2 km? (Round to nearest whole number)',
        correctAnswer: '1273',
        acceptableAnswers: ['1273', '1273 revolutions', '1274'],
        decimalEquivalent: 1273,
        answerType: 'number',
        tolerance: 2,
        hint: 'First find the circumference: C = πd = π × 50 cm. Convert 2 km to cm (2000 m = 200000 cm). Then divide distance by circumference to get number of revolutions.',
        explanation: `<strong>The answer is 1273 revolutions!</strong><br><br>
            Step 1: Circumference = π × 50 cm ≈ 157.08 cm<br>
            Step 2: Distance = 2 km = 200,000 cm<br>
            Step 3: Revolutions = 200,000 ÷ 157.08 ≈ 1273.2<br>
            Step 4: Rounded to whole number: 1273 revolutions`,
        points: 100
    });

    // REVIEW SET 8A - Q3a: Perimeter formula for trapezoid
    addQuestion('revision1', {
        id: 'rev1_8a3_a',
        section: 'REV8A',
        questionNum: '3a',
        page: 162,
        witness: 'Apollo Justice',
        type: 'perimeter-formula',
        diagram: null,
        problem: 'Apollo needs a formula for the perimeter of a trapezoid with parallel sides (x+1) m and 2x m, and equal slanted sides x m each. Write the formula in simplest form.',
        correctAnswer: '5x+1',
        acceptableAnswers: ['5x+1', '5x + 1', '1+5x', '1 + 5x'],
        decimalEquivalent: null,
        answerType: 'text',
        tolerance: 0,
        hint: 'Perimeter = sum of all sides. Add: (x+1) + 2x + x + x. Combine like terms.',
        explanation: `<strong>The answer is 5x + 1!</strong><br><br>
            Step 1: P = (x+1) + 2x + x + x<br>
            Step 2: P = x + 1 + 2x + x + x<br>
            Step 3: P = 5x + 1`,
        points: 100
    });

    // REVIEW SET 8A - Q3b: Perimeter formula for right triangle
    addQuestion('revision1', {
        id: 'rev1_8a3_b',
        section: 'REV8A',
        questionNum: '3b',
        page: 162,
        witness: 'Franziska von Karma',
        type: 'perimeter-formula',
        diagram: null,
        problem: 'Franziska presents a right triangle with legs a cm and (a+5) cm. Write a formula for the perimeter P in terms of a.',
        correctAnswer: '2a+5+√(2a²+10a+25)',
        acceptableAnswers: ['2a+5+√(2a²+10a+25)', '2a + 5 + sqrt(2a² + 10a + 25)', 'P = 2a+5+√(2a²+10a+25)'],
        decimalEquivalent: null,
        answerType: 'text',
        tolerance: 0,
        hint: 'Perimeter = a + (a+5) + hypotenuse. Use Pythagorean theorem to find hypotenuse: h² = a² + (a+5)². Expand and simplify, then h = √(2a² + 10a + 25).',
        explanation: `<strong>The answer is P = 2a + 5 + √(2a² + 10a + 25)!</strong><br><br>
            Step 1: Hypotenuse² = a² + (a+5)²<br>
            Step 2: h² = a² + a² + 10a + 25 = 2a² + 10a + 25<br>
            Step 3: h = √(2a² + 10a + 25)<br>
            Step 4: P = a + (a+5) + √(2a² + 10a + 25) = 2a + 5 + √(2a² + 10a + 25)`,
        points: 100
    });

    
    // REVIEW SET 13B - Q5a: Similar triangles - find x
    addQuestion('revision1', {
        id: 'rev1_13b5_a',
        section: 'REV13B',
        questionNum: '5a',
        page: 272,
        witness: 'Pearl Fey',
        type: 'similar-triangles-find-x',
        diagram: null,
        problem: 'Pearl has two similar triangles UVZ and XYZ sharing vertex Z. Triangle UVZ has sides: UV=10cm, VZ=5cm. Triangle XYZ has sides: YZ=8cm, XZ=x cm. The triangles share angle θ at Z. Find x.',
        correctAnswer: '16',
        acceptableAnswers: ['16', '16 cm', '16cm'],
        decimalEquivalent: 16,
        answerType: 'number',
        tolerance: 0.5,
        hint: 'Set up a ratio: VZ/YZ = UZ/XZ. We know VZ=5, YZ=8. If the triangles are similar, the ratio is 5/8. Use this to find x. Note: you may need to find UZ first using the given information.',
        explanation: `<strong>The answer is 16 cm!</strong><br><br>
            Step 1: The triangles are similar<br>
            Step 2: Set up ratio: 5/8 = 10/x<br>
            Step 3: Cross multiply: 5x = 80<br>
            Step 4: x = 16 cm`,
        points: 100
    });

    // REVIEW SET 13B - Q5b: Similar triangles - find x (with BC=3cm)
    addQuestion('revision1', {
        id: 'rev1_13b5_b',
        section: 'REV13B',
        questionNum: '5b',
        page: 272,
        witness: 'Godot',
        type: 'similar-triangles-find-x',
        diagram: null,
        problem: 'Godot presents two similar triangles ABC and ADE. In triangle ABC: BC=3cm, AB=5cm. In triangle ADE: DE=8cm, AD=x cm. Find x.',
        correctAnswer: '13.3',
        acceptableAnswers: ['13.3', '13.33', '40/3', '13.3 cm'],
        decimalEquivalent: 13.33,
        answerType: 'decimal',
        tolerance: 0.2,
        hint: 'Set up ratio from corresponding sides: AB/AD = BC/DE. Substitute: 5/x = 3/8. Cross multiply and solve for x.',
        explanation: `<strong>The answer is approximately 13.3 cm!</strong><br><br>
            Step 1: Similar triangles have proportional sides<br>
            Step 2: AB/AD = BC/DE<br>
            Step 3: 5/x = 3/8<br>
            Step 4: 3x = 40<br>
            Step 5: x = 40/3 ≈ 13.33 cm`,
        points: 100
    });

    // REVIEW SET 13B - Q5c: Similar triangles - find x (with sides expressed as expressions)
    addQuestion('revision1', {
        id: 'rev1_13b5_c',
        section: 'REV13B',
        questionNum: '5c',
        page: 272,
        witness: 'Wendy Oldbag',
        type: 'similar-triangles-find-x',
        diagram: null,
        problem: 'Oldbag shows two similar triangles IJK and ILM. In triangle IJK: JK=x m, IK=(3x-2) m. In triangle ILM: LM=(2x-3) m, IM=x m. Find x.',
        correctAnswer: '2',
        acceptableAnswers: ['2', '2 m', '2m'],
        decimalEquivalent: 2,
        answerType: 'number',
        tolerance: 0.1,
        hint: 'Set up ratio: JK/LM = IK/IM. Substitute: x/(2x-3) = (3x-2)/x. Cross multiply: x² = (2x-3)(3x-2). Expand and solve the quadratic equation.',
        explanation: `<strong>The answer is x = 2 m!</strong><br><br>
            Step 1: x/(2x-3) = (3x-2)/x<br>
            Step 2: x² = (2x-3)(3x-2)<br>
            Step 3: x² = 6x² - 4x - 9x + 6<br>
            Step 4: x² = 6x² - 13x + 6<br>
            Step 5: 0 = 5x² - 13x + 6<br>
            Step 6: Using quadratic formula or factoring: x = 2 or x = 0.6<br>
            Step 7: Check: x = 2 makes all sides positive, so x = 2 m`,
        points: 100
    });
}

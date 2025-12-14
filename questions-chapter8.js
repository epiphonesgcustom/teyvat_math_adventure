// Chapter 8: Perimeter, Area, and Volume - Question Bank
// This file contains all questions for Chapter 8

function loadChapter8Questions() {
    // 8A Q1a - Rectangle perimeter
    addQuestion('chapter8', {
        id: 'ch8_8a1_a',
        section: '8A',
        questionNum: '1a',
        page: 141,
        witness: 'Phoenix Wright',
        witnessSprite: '👨‍💼',
        type: 'perimeter-rectangle',
        diagram: {
            type: 'rectangle',
            length: 5.7,
            width: 3.2,
            lengthUnit: 'cm',
            widthUnit: 'cm'
        },
        problem: 'Phoenix found a rectangular piece of evidence measuring 5.7 cm by 3.2 cm. What is the perimeter?',
        correctAnswer: '17.8',
        acceptableAnswers: ['17.8', '17.8 cm'],
        decimalEquivalent: 17.8,
        answerType: 'decimal',
        tolerance: 0.1,
        hint: 'Perimeter of a rectangle = 2 × (length + width). Add the two sides and multiply by 2.',
        explanation: `<strong>The answer is 17.8 cm!</strong><br><br>
            Step 1: Perimeter = 2 × (length + width)<br>
            Step 2: P = 2 × (5.7 + 3.2)<br>
            Step 3: P = 2 × 8.9<br>
            Step 4: P = 17.8 cm`,
        points: 100
    });

    // 8A Q2 - Isosceles triangle perimeter
    addQuestion('chapter8', {
        id: 'ch8_8a2',
        section: '8A',
        questionNum: '2',
        page: 141,
        witness: 'Maya Fey',
        witnessSprite: '👧',
        type: 'perimeter-triangle',
        diagram: {
            type: 'triangle',
            base: 7.8,
            height: 5,
            side1: '?',
            baseUnit: 'cm',
            triangleType: 'isosceles'
        },
        problem: 'Maya discovered an isosceles triangle with base 7.8 cm and perimeter 30 cm. What is the length of each equal side?',
        correctAnswer: '11.1',
        acceptableAnswers: ['11.1', '11.1 cm'],
        decimalEquivalent: 11.1,
        answerType: 'decimal',
        tolerance: 0.1,
        hint: 'Perimeter = base + 2 × equal side. Rearrange to find the equal side: (perimeter - base) ÷ 2.',
        explanation: `<strong>The answer is 11.1 cm!</strong><br><br>
            Step 1: Let the equal sides be x cm<br>
            Step 2: Perimeter = 7.8 + 2x = 30<br>
            Step 3: 2x = 30 - 7.8 = 22.2<br>
            Step 4: x = 11.1 cm`,
        points: 100
    });

    // 8A Q3 - Equilateral triangle from rectangle
    addQuestion('chapter8', {
        id: 'ch8_8a3',
        section: '8A',
        questionNum: '3',
        page: 141,
        witness: 'Miles Edgeworth',
        witnessSprite: '🧑‍💼',
        type: 'perimeter-equilateral',
        diagram: null,
        problem: 'A rectangle is 16.4 cm by 11.8 cm and has the same perimeter as an equilateral triangle. Find the length of each side of the triangle.',
        correctAnswer: '18.8',
        acceptableAnswers: ['18.8', '18.8 cm'],
        decimalEquivalent: 18.8,
        answerType: 'decimal',
        tolerance: 0.1,
        hint: 'First find the rectangle\'s perimeter using 2(l + w). Then divide by 3 for the equilateral triangle side length.',
        explanation: `<strong>The answer is 18.8 cm!</strong><br><br>
            Step 1: Rectangle perimeter = 2(16.4 + 11.8) = 2 × 28.2 = 56.4 cm<br>
            Step 2: Equilateral triangle has 3 equal sides<br>
            Step 3: Side length = 56.4 ÷ 3 = 18.8 cm`,
        points: 100
    });

    // 8A Q4a - Circle circumference from diameter
    addQuestion('chapter8', {
        id: 'ch8_8a4_a',
        section: '8A',
        questionNum: '4a',
        page: 141,
        witness: 'Dick Gumshoe',
        witnessSprite: '👮',
        type: 'circumference-diameter',
        diagram: {
            type: 'circle',
            diameter: 11,
            unit: 'cm',
            showDiameter: true
        },
        problem: 'Detective Gumshoe found a circular button with diameter 11 cm. Calculate the circumference to 3 significant figures.',
        correctAnswer: '34.6',
        acceptableAnswers: ['34.6', '34.6 cm'],
        decimalEquivalent: 34.6,
        answerType: 'decimal',
        tolerance: 0.1,
        hint: 'Circumference = π × diameter. Use π ≈ 3.14159 and round to 3 significant figures.',
        explanation: `<strong>The answer is 34.6 cm!</strong><br><br>
            Step 1: C = π × d<br>
            Step 2: C = π × 11<br>
            Step 3: C ≈ 34.558 cm<br>
            Step 4: Rounded to 3 s.f.: 34.6 cm`,
        points: 100
    });

    // 8A Q4b - Circle circumference from radius
    addQuestion('chapter8', {
        id: 'ch8_8a4_b',
        section: '8A',
        questionNum: '4b',
        page: 141,
        witness: 'Apollo Justice',
        witnessSprite: '👨‍🦰',
        type: 'circumference-radius',
        diagram: {
            type: 'circle',
            radius: 0.54,
            unit: 'm',
            showRadius: true
        },
        problem: 'Apollo measured a circular crime scene marker with radius 0.54 m. Calculate the circumference to 3 significant figures.',
        correctAnswer: '3.39',
        acceptableAnswers: ['3.39', '3.39 m'],
        decimalEquivalent: 3.39,
        answerType: 'decimal',
        tolerance: 0.01,
        hint: 'Circumference = 2 × π × radius. Calculate and round to 3 significant figures.',
        explanation: `<strong>The answer is 3.39 m!</strong><br><br>
            Step 1: C = 2πr<br>
            Step 2: C = 2 × π × 0.54<br>
            Step 3: C ≈ 3.3929 m<br>
            Step 4: Rounded to 3 s.f.: 3.39 m`,
        points: 100
    });

    // 8A Q6 - Diameter from circumference
    addQuestion('chapter8', {
        id: 'ch8_8a6',
        section: '8A',
        questionNum: '6',
        page: 141,
        witness: 'Trucy Wright',
        witnessSprite: '🎩',
        type: 'diameter-from-circumference',
        diagram: {
            type: 'circle',
            diameter: '?',
            unit: 'm',
            showDiameter: false
        },
        problem: 'Trucy found a circular stage with circumference 400 metres. Find the diameter to 1 decimal place.',
        correctAnswer: '127.3',
        acceptableAnswers: ['127.3', '127.3 m'],
        decimalEquivalent: 127.3,
        answerType: 'decimal',
        tolerance: 0.2,
        hint: 'Diameter = circumference ÷ π. Divide 400 by π and round to 1 decimal place.',
        explanation: `<strong>The answer is 127.3 metres!</strong><br><br>
            Step 1: C = πd, so d = C ÷ π<br>
            Step 2: d = 400 ÷ π<br>
            Step 3: d ≈ 127.324 m<br>
            Step 4: Rounded to 1 d.p.: 127.3 m`,
        points: 100
    });

    // 8A Q7a - Arc length
    addQuestion('chapter8', {
        id: 'ch8_8a7_a',
        section: '8A',
        questionNum: '7a',
        page: 141,
        witness: 'Klavier Gavin',
        witnessSprite: '🎸',
        type: 'arc-length',
        diagram: {
            type: 'sector',
            radius: 12.5,
            angle: 60,
            unit: 'cm',
            showArc: true
        },
        problem: 'Klavier found a circular arc with radius 12.5 cm and central angle 60°. Calculate the arc length to 1 decimal place.',
        correctAnswer: '13.1',
        acceptableAnswers: ['13.1', '13.1 cm'],
        decimalEquivalent: 13.1,
        answerType: 'decimal',
        tolerance: 0.2,
        hint: 'Arc length = (angle/360) × 2πr. Substitute the values and calculate.',
        explanation: `<strong>The answer is 13.1 cm!</strong><br><br>
            Step 1: Arc length = (θ/360) × 2πr<br>
            Step 2: Arc = (60/360) × 2π × 12.5<br>
            Step 3: Arc = (1/6) × 25π<br>
            Step 4: Arc ≈ 13.09 cm ≈ 13.1 cm`,
        points: 100
    });

    // 8B Q1c - Area conversion m² to cm²
    addQuestion('chapter8', {
        id: 'ch8_8b1_c',
        section: '8B',
        questionNum: '1c',
        page: 144,
        witness: 'Franziska von Karma',
        witnessSprite: '👩',
        type: 'area-conversion',
        diagram: null,
        problem: 'Convert 3.5 m² into cm². (Remember: 1 m = 100 cm)',
        correctAnswer: '35000',
        acceptableAnswers: ['35000', '35000 cm²', '35 000'],
        decimalEquivalent: 35000,
        answerType: 'number',
        tolerance: 1,
        hint: '1 m² = 10,000 cm² (because 1 m = 100 cm, so 1 m² = 100 × 100 cm²). Multiply 3.5 by 10,000.',
        explanation: `<strong>The answer is 35,000 cm²!</strong><br><br>
            Step 1: 1 m = 100 cm<br>
            Step 2: 1 m² = 100 × 100 = 10,000 cm²<br>
            Step 3: 3.5 m² = 3.5 × 10,000 cm²<br>
            Step 4: = 35,000 cm²`,
        points: 100
    });

    // 8B Q1d - Area conversion cm² to m²
    addQuestion('chapter8', {
        id: 'ch8_8b1_d',
        section: '8B',
        questionNum: '1d',
        page: 144,
        witness: 'Godot',
        witnessSprite: '☕',
        type: 'area-conversion',
        diagram: null,
        problem: 'Convert 500,000 cm² into m².',
        correctAnswer: '50',
        acceptableAnswers: ['50', '50 m²'],
        decimalEquivalent: 50,
        answerType: 'number',
        tolerance: 0.1,
        hint: '1 m² = 10,000 cm². To convert cm² to m², divide by 10,000.',
        explanation: `<strong>The answer is 50 m²!</strong><br><br>
            Step 1: 1 m² = 10,000 cm²<br>
            Step 2: To convert cm² to m², divide by 10,000<br>
            Step 3: 500,000 ÷ 10,000 = 50 m²`,
        points: 100
    });

    // 8C Q1a - Surface area of triangular prism
    addQuestion('chapter8', {
        id: 'ch8_8c1_a',
        section: '8C',
        questionNum: '1a',
        page: 151,
        witness: 'Pearl Fey',
        witnessSprite: '👧',
        type: 'surface-area-prism',
        diagram: {
            type: 'triangular-prism',
            base: 4,
            height: 3,
            length: 6,
            unit: 'cm'
        },
        problem: 'Pearl found a triangular prism. The triangular face has base 4 cm and height 3 cm. The prism is 6 cm long. Find the surface area.',
        correctAnswer: '84',
        acceptableAnswers: ['84', '84 cm²'],
        decimalEquivalent: 84,
        answerType: 'number',
        tolerance: 1,
        hint: 'Surface area = 2 × (triangle area) + 3 × (rectangular faces). Triangle area = ½ × base × height.',
        explanation: `<strong>The answer is 84 cm²!</strong><br><br>
            Step 1: Triangle area = ½ × 4 × 3 = 6 cm²<br>
            Step 2: Two triangular faces = 2 × 6 = 12 cm²<br>
            Step 3: Three rectangular faces = (4×6) + (3×6) + (5×6) = 24 + 18 + 30 = 72 cm²<br>
            (Note: third side = 5 cm using Pythagoras)<br>
            Step 4: Total = 12 + 72 = 84 cm²`,
        points: 100
    });

    // 8D Q1a - Volume conversion cm³ to mm³
    addQuestion('chapter8', {
        id: 'ch8_8d1_a',
        section: '8D',
        questionNum: '1a',
        page: 157,
        witness: 'Judge',
        witnessSprite: '👨‍⚖️',
        type: 'volume-conversion',
        diagram: null,
        problem: 'Convert 8.65 cm³ into mm³. (Remember: 1 cm = 10 mm)',
        correctAnswer: '8650',
        acceptableAnswers: ['8650', '8650 mm³'],
        decimalEquivalent: 8650,
        answerType: 'number',
        tolerance: 1,
        hint: '1 cm³ = 1000 mm³ (because 1 cm = 10 mm, so 1 cm³ = 10 × 10 × 10 mm³). Multiply by 1000.',
        explanation: `<strong>The answer is 8650 mm³!</strong><br><br>
            Step 1: 1 cm = 10 mm<br>
            Step 2: 1 cm³ = 10 × 10 × 10 = 1000 mm³<br>
            Step 3: 8.65 cm³ = 8.65 × 1000 mm³<br>
            Step 4: = 8650 mm³`,
        points: 100
    });

    // 8D Q2 - Volume word problem (erasers)
    addQuestion('chapter8', {
        id: 'ch8_8d2',
        section: '8D',
        questionNum: '2',
        page: 157,
        witness: 'Larry Butz',
        witnessSprite: '🧑',
        type: 'volume-application',
        diagram: null,
        problem: 'A manufacturer has 2.4 m³ of rubber. Each eraser has volume 8 cm³. How many erasers can be made?',
        correctAnswer: '300000',
        acceptableAnswers: ['300000', '300 000'],
        decimalEquivalent: 300000,
        answerType: 'number',
        tolerance: 100,
        hint: 'Convert 2.4 m³ to cm³ first (1 m³ = 1,000,000 cm³). Then divide by 8 cm³.',
        explanation: `<strong>The answer is 300,000 erasers!</strong><br><br>
            Step 1: Convert 2.4 m³ to cm³<br>
            Step 2: 1 m³ = 1,000,000 cm³<br>
            Step 3: 2.4 m³ = 2,400,000 cm³<br>
            Step 4: Number of erasers = 2,400,000 ÷ 8 = 300,000`,
        points: 100
    });

    // 8D Q3a - Volume of rectangular prism
    addQuestion('chapter8', {
        id: 'ch8_8d3_a',
        section: '8D',
        questionNum: '3a',
        page: 157,
        witness: 'Wendy Oldbag',
        witnessSprite: '👵',
        type: 'volume-prism',
        diagram: {
            type: 'rectangular-prism',
            length: 1.6,
            width: 1.1,
            height: 1.4,
            unit: 'm'
        },
        problem: 'Wendy found a box measuring 1.6 m by 1.1 m by 1.4 m. Find the volume in m³.',
        correctAnswer: '2.464',
        acceptableAnswers: ['2.464', '2.464 m³', '2.46'],
        decimalEquivalent: 2.464,
        answerType: 'decimal',
        tolerance: 0.01,
        hint: 'Volume of rectangular prism = length × width × height. Multiply the three dimensions.',
        explanation: `<strong>The answer is 2.464 m³!</strong><br><br>
            Step 1: V = l × w × h<br>
            Step 2: V = 1.6 × 1.1 × 1.4<br>
            Step 3: V = 2.464 m³`,
        points: 100
    });

    // 8D Q3d - Volume of cylinder
    addQuestion('chapter8', {
        id: 'ch8_8d3_d',
        section: '8D',
        questionNum: '3d',
        page: 157,
        witness: 'Phoenix Wright',
        witnessSprite: '👨‍💼',
        type: 'volume-cylinder',
        diagram: {
            type: 'cylinder',
            radius: 3,
            height: 8,
            unit: 'cm'
        },
        problem: 'Phoenix examined a cylindrical evidence container. The radius is 3 cm and height is 8 cm. Find the volume to 1 decimal place.',
        correctAnswer: '226.2',
        acceptableAnswers: ['226.2', '226.2 cm³', '226'],
        decimalEquivalent: 226.2,
        answerType: 'decimal',
        tolerance: 1,
        hint: 'Volume of cylinder = πr²h. Calculate π × 3² × 8 and round to 1 decimal place.',
        explanation: `<strong>The answer is 226.2 cm³!</strong><br><br>
            Step 1: V = πr²h<br>
            Step 2: V = π × 3² × 8<br>
            Step 3: V = π × 9 × 8 = 72π<br>
            Step 4: V ≈ 226.19 cm³ ≈ 226.2 cm³`,
        points: 100
    });

    // 8D Q5a - Volume of square pyramid
    addQuestion('chapter8', {
        id: 'ch8_8d5_a',
        section: '8D',
        questionNum: '5a',
        page: 157,
        witness: 'Maya Fey',
        witnessSprite: '👧',
        type: 'volume-pyramid',
        diagram: {
            type: 'pyramid',
            baseSide: 6,
            height: 4,
            unit: 'm'
        },
        problem: 'Maya discovered a square pyramid with base side 6 m and height 4 m. Find the volume.',
        correctAnswer: '48',
        acceptableAnswers: ['48', '48 m³'],
        decimalEquivalent: 48,
        answerType: 'number',
        tolerance: 1,
        hint: 'Volume of pyramid = (1/3) × base area × height. The base is a square with side 6 m.',
        explanation: `<strong>The answer is 48 m³!</strong><br><br>
            Step 1: V = (1/3) × base area × height<br>
            Step 2: Base area = 6² = 36 m²<br>
            Step 3: V = (1/3) × 36 × 4<br>
            Step 4: V = 48 m³`,
        points: 100
    });

    // 8D Q5b - Volume of cone
    addQuestion('chapter8', {
        id: 'ch8_8d5_b',
        section: '8D',
        questionNum: '5b',
        page: 157,
        witness: 'Miles Edgeworth',
        witnessSprite: '🧑‍💼',
        type: 'volume-cone',
        diagram: {
            type: 'cone',
            radius: 3,
            height: 7,
            unit: 'cm'
        },
        problem: 'A cone has radius 3 cm and height 7 cm. Find the volume to 1 decimal place.',
        correctAnswer: '65.9',
        acceptableAnswers: ['65.9', '65.9 cm³', '66'],
        decimalEquivalent: 65.9,
        answerType: 'decimal',
        tolerance: 0.5,
        hint: 'Volume of cone = (1/3)πr²h. Calculate (1/3) × π × 3² × 7 and round.',
        explanation: `<strong>The answer is 65.9 cm³!</strong><br><br>
            Step 1: V = (1/3)πr²h<br>
            Step 2: V = (1/3) × π × 3² × 7<br>
            Step 3: V = (1/3) × π × 9 × 7 = 21π<br>
            Step 4: V ≈ 65.97 cm³ ≈ 65.9 cm³`,
        points: 100
    });

    // 8E Q1a - Capacity of rectangular prism
    addQuestion('chapter8', {
        id: 'ch8_8e1_a',
        section: '8E',
        questionNum: '1a',
        page: 159,
        witness: 'Dick Gumshoe',
        witnessSprite: '👮',
        type: 'capacity-prism',
        diagram: null,
        problem: 'Detective Gumshoe found a box measuring 4 cm by 3 cm by 2 cm. Find the capacity in mL. (1 mL = 1 cm³)',
        correctAnswer: '24',
        acceptableAnswers: ['24', '24 mL'],
        decimalEquivalent: 24,
        answerType: 'number',
        tolerance: 0.5,
        hint: 'Volume = 4 × 3 × 2 cm³. Since 1 mL = 1 cm³, the capacity in mL equals the volume in cm³.',
        explanation: `<strong>The answer is 24 mL!</strong><br><br>
            Step 1: V = 4 × 3 × 2 = 24 cm³<br>
            Step 2: Since 1 mL = 1 cm³<br>
            Step 3: Capacity = 24 mL`,
        points: 100
    });

    // 8E Q1b - Capacity of cylinder
    addQuestion('chapter8', {
        id: 'ch8_8e1_b',
        section: '8E',
        questionNum: '1b',
        page: 159,
        witness: 'Apollo Justice',
        witnessSprite: '👨‍🦰',
        type: 'capacity-cylinder',
        diagram: null,
        problem: 'A cylindrical container has diameter 3.4 cm and height 2.6 cm. Find the capacity in mL to 1 decimal place.',
        correctAnswer: '23.6',
        acceptableAnswers: ['23.6', '23.6 mL'],
        decimalEquivalent: 23.6,
        answerType: 'decimal',
        tolerance: 0.5,
        hint: 'First find radius (diameter ÷ 2). Then V = πr²h. Convert cm³ to mL (they\'re equal).',
        explanation: `<strong>The answer is 23.6 mL!</strong><br><br>
            Step 1: Radius = 3.4 ÷ 2 = 1.7 cm<br>
            Step 2: V = πr²h = π × 1.7² × 2.6<br>
            Step 3: V ≈ 23.63 cm³<br>
            Step 4: Capacity = 23.6 mL (since 1 cm³ = 1 mL)`,
        points: 100
    });

    // 8E Q1c - Capacity of sphere
    addQuestion('chapter8', {
        id: 'ch8_8e1_c',
        section: '8E',
        questionNum: '1c',
        page: 159,
        witness: 'Trucy Wright',
        witnessSprite: '🎩',
        type: 'capacity-sphere',
        diagram: {
            type: 'sphere',
            radius: 3.6,
            unit: 'cm'
        },
        problem: 'Trucy found a spherical container with radius 36 mm. Find the capacity in mL to 1 decimal place. (Hint: Convert mm to cm first)',
        correctAnswer: '195.4',
        acceptableAnswers: ['195.4', '195.4 mL', '195'],
        decimalEquivalent: 195.4,
        answerType: 'decimal',
        tolerance: 1,
        hint: 'Volume of sphere = (4/3)πr³. Convert 36 mm to cm (3.6 cm). Calculate in cm³, which equals mL.',
        explanation: `<strong>The answer is 195.4 mL!</strong><br><br>
            Step 1: Convert radius: 36 mm = 3.6 cm<br>
            Step 2: V = (4/3)πr³<br>
            Step 3: V = (4/3) × π × 3.6³<br>
            Step 4: V ≈ 195.43 cm³ = 195.4 mL`,
        points: 100
    });

    // 8E Q2 - Application problem (bottles from tank)
    addQuestion('chapter8', {
        id: 'ch8_8e2',
        section: '8E',
        questionNum: '2',
        page: 159,
        witness: 'Klavier Gavin',
        witnessSprite: '🎸',
        type: 'capacity-application',
        diagram: null,
        problem: 'How many cylindrical bottles 12 cm high with 6 cm diameter can be filled from a tank containing 125 litres of detergent? (1 L = 1000 cm³)',
        correctAnswer: '368',
        acceptableAnswers: ['368', '368 bottles'],
        decimalEquivalent: 368,
        answerType: 'number',
        tolerance: 2,
        hint: 'Find bottle volume using V = πr²h (radius = 3 cm). Convert 125 L to cm³. Divide total by bottle volume.',
        explanation: `<strong>The answer is 368 bottles!</strong><br><br>
            Step 1: Bottle radius = 6 ÷ 2 = 3 cm<br>
            Step 2: Bottle volume = π × 3² × 12 = 108π ≈ 339.3 cm³<br>
            Step 3: Tank volume = 125 L = 125,000 cm³<br>
            Step 4: Number of bottles = 125,000 ÷ 339.3 ≈ 368 bottles`,
        points: 100
    });

    // 8E Q5 - Reverse problem (find height from capacity)
    addQuestion('chapter8', {
        id: 'ch8_8e5',
        section: '8E',
        questionNum: '5',
        page: 159,
        witness: 'Franziska von Karma',
        witnessSprite: '👩',
        type: 'capacity-reverse',
        diagram: null,
        problem: 'A 1 litre cylindrical paint can has base radius 5 cm. Find the height of the can to 1 decimal place.',
        correctAnswer: '12.7',
        acceptableAnswers: ['12.7', '12.7 cm'],
        decimalEquivalent: 12.7,
        answerType: 'decimal',
        tolerance: 0.2,
        hint: 'Convert 1 L to cm³ (1000 cm³). Use V = πr²h, rearrange to h = V ÷ (πr²).',
        explanation: `<strong>The answer is 12.7 cm!</strong><br><br>
            Step 1: Capacity = 1 L = 1000 cm³<br>
            Step 2: V = πr²h, so h = V ÷ (πr²)<br>
            Step 3: h = 1000 ÷ (π × 5²)<br>
            Step 4: h = 1000 ÷ 25π ≈ 12.73 cm ≈ 12.7 cm`,
        points: 100
    });
}

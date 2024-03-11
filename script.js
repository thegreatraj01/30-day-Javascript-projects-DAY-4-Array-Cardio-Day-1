
// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const bornin1500 = inventors.filter((person) => person.year > 1500 && person.year < 1600);
// console.log(bornin1500);
// output /
// [
//     { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//     { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 }
// ]


// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const peoplename = inventors.map((person) => person.first + ' ' + person.last);
// console.table(peoplename);
// output 
// ┌─────────┬───────────────────────┐
// │ (index) │ Values                │
// ├─────────┼───────────────────────┤
// │ 0       │ 'Albert Einstein'     │
// │ 1       │ 'Isaac Newton'        │
// │ 2       │ 'Galileo Galilei'     │
// │ 3       │ 'Marie Curie'         │
// │ 4       │ 'Johannes Kepler'     │
// │ 5       │ 'Nicolaus Copernicus' │
// │ 6       │ 'Max Planck'          │
// │ 7       │ 'Katherine Blodgett'  │
// │ 8       │ 'Ada Lovelace'        │
// │ 9       │ 'Sarah E. Goode'      │
// │ 10      │ 'Lise Meitner'        │
// │ 11      │ 'Hanna Hammarström'   │
// └─────────┴───────────────────────┘

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const shorted = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
// console.log(shorted);
// output 
// [
//     { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
//     { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//     { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
//     { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
//     { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
//     { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
//     { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
//     { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
//     { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
//     { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
//     { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
//     { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 }
//   ]

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const yearlived = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year)
}, 0)
// console.log(yearlived);
// output  >> 861


// 5. Sort the inventors by years lived
const oldpeole = inventors.sort((a, b) => {
    return (a.passed - a.year) > (b.passed - b.year) ? -1 : 1;
})
// console.log(oldpeole)
// output 
// [
//     { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
//     { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
//     { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
//     { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
//     { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
//     { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//     { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
//     { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
//     { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
//     { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
//     { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
//     { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 }
// ]

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// // console.log(links);
// const de = links
// .map(link => link.textContent)
// .filter(streetName => streetName.includes('de'));
// console.log(de);
// output 
// ["Boulevard de l'Amiral-Bruix", 'Boulevard des Capucines', 'Boulevard de la Chapelle', 'Boulevard de Clichy', "Boulevard de l'Hôpital", 'Boulevard des Italiens', 'Boulevard de la Madeleine', 'Boulevard de Magenta', 'Boulevard Marguerite-de-Rochechouart', 'Boulevard de Sébastopol', 'Boulevard de Strasbourg', 'Boulevard de la Zone']

// 7. sort Exercise
// Sort the people alphabetically by last name
// Sort the people alphabetically by last name
const sortedNames = people.sort((a, b) => {
    const lastNameA = a.split(', ')[0]; // Extract last name from the string
    const lastNameB = b.split(', ')[0];

    return lastNameA.localeCompare(lastNameB); // Compare last names using localeCompare
});

// console.log(sortedNames);
// otuput 
// [
//     'Beck, Glenn', 'Becker, Carl',
//     'Beckett, Samuel', 'Beddoes, Mick',
//     'Beecher, Henry', 'Beethoven, Ludwig',
//     'Begin, Menachem', 'Belloc, Hilaire',
//     'Bellow, Saul', 'Ben-Gurion, David',
//     'Benchley, Robert', 'Benenson, Peter',
//     'Benjamin, Walter', 'Benn, Tony',
//     'Bennington, Chester', 'Benson, Leana',
//     'Bent, Silas', 'Bentsen, Lloyd',
//     'Berger, Ric', 'Bergman, Ingmar',
//     'Berio, Luciano', 'Berle, Milton',
//     'Berlin, Irving', 'Berne, Eric',
//     'Bernhard, Sandra', 'Berra, Yogi',
//     'Berry, Halle', 'Berry, Wendell',
//     'Bethea, Erin', 'Bevan, Aneurin',
//     'Bevel, Ken', 'Biden, Joseph',
//     'Bierce, Ambrose', 'Biko, Steve',
//     'Billings, Josh', 'Biondo, Frank',
//     'Birrell, Augustine', 'Black, Elk',
//     'Blair, Robert', 'Blair, Tony',
//     'Blake, William'
// ]



// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const instance = data.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});
// console.log(instance);
// output

// { car: 5, truck: 3, bike: 2, walk: 2, van: 2 }

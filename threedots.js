const ages = [23, 21, 24, 12];
const ages2 = [13, 23, 12];
const allAges = ages.concat(ages2);
const allAges2 = [...ages, ...ages2];
console.log(allAges2);
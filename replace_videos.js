const fs = require('fs');
const path = require('path');

const replacements = [
  // Step 1
  ["486417119", "01"],
  // Step 2
  ["463523920", "02"],
  // Step 3
  ["1115131122", "03"],
  // Step 4
  ["462798851", "04"],
  // Step 5
  ["437772270", "05"],
  // Step 6
  ["462798851", "06"] // Impact (Wait, the data above says Step 6 is 462798851, but that's also step 4. Let's make sure we find which is which. Actually, I need to check the original state.js to see what videos correspond to what steps...)
];

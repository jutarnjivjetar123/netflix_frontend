const listA = [
  {
    name: "Pakistan",
    code: "PK",
    emoji: "🇵🇰",
    unicode: "U+1F1F5 U+1F1F0",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PK.svg",
  },
  {
    name: "Poland",
    code: "PL",
    emoji: "🇵🇱",
    unicode: "U+1F1F5 U+1F1F1",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PL.svg",
  },
];
const listB = {
  PL: "1",
  PK: "2",
};
function mergeObjects(list1, list2) {
  // Create a map for List 2 for quick lookup
  const codeToBDMap = {};
  for (const code in list2) {
    codeToBDMap[code] = list2[code];
  }

  // Merge objects from List 1 with corresponding BD values from List 2
  const mergedList = list1.map((item) => ({
    ...item,
    calling_code: codeToBDMap[item.code] || "", // Add calling_code property
  }));

  return mergedList;
}

console.log(mergeObjects(listA, listB));

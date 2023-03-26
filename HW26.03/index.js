function find(table) {
  const timeTable = table.sort((a, b) => a.end - b.end);


  const selectedActivities = [];
  let lastActivity = 0;

  for (const activity of timeTable) {
    if (activity.start >= lastActivity && activity.preis >= 2) {
      selectedActivities.push(activity);
      lastActivity = activity.end;
    }
  }
  return selectedActivities;
}

const activities = [
  { start: 14, end: 15, preis: 1 },
  { start: 15, end: 16, preis: 2 },
  { start: 10, end: 11, preis: 2 },
  { start: 14, end: 17, preis: 1 },
  { start: 11, end: 13, preis: 2 },
  { start: 10, end: 15, preis: 1 },
  { start: 12, end: 13, preis: 2 },
  { start: 16, end: 17, preis: 1 },
];

console.log(activities)
console.log('----------------------------------------')
const selectedActivities = find(activities);
console.log(selectedActivities);

export default function convertMinutesToDuration(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (minutes === 0) {
    return `${hours}h`;
  } else {
    return `${hours}h ${minutes}mins`;
  }
}

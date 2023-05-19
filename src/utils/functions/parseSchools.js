export default function parseSchools(arr) {
  if (arr.length > 0) {
    return arr.map((school) => {
      return {
        id: school.id,
        name: school.name,
        city: school.city,
        value: school.id,
      };
    });
  } else {
    return [];
  }
}

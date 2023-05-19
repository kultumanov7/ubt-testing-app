export default function parseRegions(arr) {
  if (arr.length > 0) {
    return arr.map((region) => {
      return {
        id: region.id,
        name: region.name,
        value: region.id,
      };
    });
  } else {
    return [];
  }
}

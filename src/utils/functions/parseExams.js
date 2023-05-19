export default function parseExams(arr) {
  if (arr.length > 0) {
    return arr.map((exam) => {
      return {
        id: exam.id,
        name: exam.title,
        value: exam.id,
      };
    });
  } else {
    return [];
  }
}

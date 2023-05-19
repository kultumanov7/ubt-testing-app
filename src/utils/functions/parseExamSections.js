export default function parseExamSections(sections) {
  return sections?.map((section) => {
    return { id: section.id, name: section.title };
  });
}

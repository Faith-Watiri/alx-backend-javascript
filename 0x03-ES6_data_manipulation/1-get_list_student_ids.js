export default function getListStudentIds(item) {
  if (Array.isArray(item) === false) {
    return [];
  }
  return item.map((i) => i.id);
}

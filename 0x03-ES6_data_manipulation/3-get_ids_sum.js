export default function getStudentIdsSum(ls) {
  return ls.reduce((current, i) => current + i.id, 0);
}

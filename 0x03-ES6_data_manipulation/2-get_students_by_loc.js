export default function getStudentsByLocation(ls, city) {
  return ls.filter((ls) => ls.location === city);
}

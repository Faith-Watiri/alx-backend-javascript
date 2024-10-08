/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(ls, city, newGrades) {
  if (Array.isArray(ls) === false) {
    return [];
  }
  return ls.filter((i) => i.location === city).map((i) => {
    i.grade = 'N/A';
    for (const g of newGrades) {
      if (g.studentId === i.id) {
        i.grade = g.grade;
      }
    }
    return i;
  });
}

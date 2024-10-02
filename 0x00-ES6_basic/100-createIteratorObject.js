export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);

  let departmentIndex = 0;
  let employeeIndex = 0;

  return {
    [Symbol.iterator]: function () {
      return {
        next: function () {
          if (departmentIndex < departments.length) {
            const employees = departments[departmentIndex];
            if (employeeIndex < employees.length) {
              return { value: employees[employeeIndex++], done: false };
            } else {
              departmentIndex++;
              employeeIndex = 0;
              return this.next();
            }
          }
          return { done: true };
        }
      };
    }
  };
}


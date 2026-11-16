const multiplyValue = (value: number, multiplier?: number) => {
  if (multiplier !== undefined) {
    return value * multiplier;
  }
  return value * 2;
};

const processInput = (value: string | number | boolean): string | number => {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  }
  return value ? "Active" : "Inactive";
};

const formatCoordinate = ([latitude, longitude, locationName]: readonly [
  number,
  number,
  string,
]): string => {
  return `Location: ${locationName} ${latitude}, ${longitude}`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  const result: T[] = [];

  for (const array of arrays) {
    result.push(...array);
  }
  return result;
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  const result: Course[] = [];

  for (const course of courses) {
    if (course.students >= minStudents && course.isPublished) {
      result.push(course);
    }
  }

  return result;
};

const pluckValues = <T, k extends keyof T>(items: T[], key: k): T[k][] => {
  const result: T[k][] = [];

  for (const item of items) {
    result.push(item[key]);
  }

  return result;
};

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve(`Access Granted`);
      }, 1000);
    } else {
      reject(new Error(`Access Denied: Must be 18 or older`));
    }
  });
};

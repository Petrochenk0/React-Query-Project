// 1-e задание
interface User {
  name: string;
  age?: number;
}
// 2-e задание
enum Roles {
  Admin = 'Admin',
  User = 'User',
  Editor = 'Editor',
}
// 3-e задание
interface Employee {
  name: string;
  position: {
    name: string;
    salary: number;
  };
  addr: {
    country: string;
    city: string;
  };
}
// 4-е задание
interface Event {
  name: string;
  time: {
    start: string;
    finish: string;
  };
}

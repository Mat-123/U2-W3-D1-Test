class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  isAgeSame(otherUser) {
    if (this.age < otherUser.age) {
      return `${otherUser.firstName} e piu vecchio di ${this.firstName}`;
    } else if (this.age > otherUser.age) {
      return `${this.firstName} e piu vecchio di ${otherUser.firstName}`;
    } else {
      return `${this.firstName} e ${otherUser.firstName} hanno la stessa eta`;
    }
  }
}

firstUser = new User("Francesco Totti", "Juan", 33, "AAA MAGGICA");
secondUser = new User("Bello", "FiGo", 31, "Ghana");
thirdUser = new User("Michael J.", "Saylor", 59, "USA");

console.log(firstUser.isAgeSame(secondUser));
console.log(secondUser.isAgeSame(thirdUser));
console.log(thirdUser.isAgeSame(firstUser));

class user {
    constructor(username, age) {
        (this.username = username), (this.age = age);
    }
    logMe() {
        console.log(this.username, this.age);
    }
}

class admin extends user {
    constructor(username, age, email, role) {
        super(username, age);

        this.email = email;
        this.role = role;
    }
}

const teacher1 = new admin("Mohamed", 25, "mohamed@gmail.com", "admin");
console.log(teacher1);

class User{

    constructor(username, email, password, sexo='F', hobbies=[], url = ""){ 
        this.id = ++User.count;
        this.username = username;
        this.email = email;
        this.password = password;
        this.hobbies = hobbies;
        this.sexo = sexo;
        this.url = url;
    }
}

User.count =0;




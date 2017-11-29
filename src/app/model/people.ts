export class People {
    name: String;
    height: String;
    mass: String;
    hair_color: String;
    skin_color: String;
    eye_color: String;
    birth_year: String;
    gender: String;

    constructor(name: string, height: string, mass: string, hair_color: string, 
    skin_color: string, eye_color: string, birth_year: string, gender: string) {
        this.name = name;
        this.height = height;
        this.mass = mass;
        this.hair_color = hair_color;
        this.skin_color = skin_color;
        this.eye_color = eye_color;
        this.birth_year = birth_year;
        this.gender = gender;
    }
}

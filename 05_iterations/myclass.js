// console.log('working');


class Language {

    constructor(name, type, designed_by, year_created, website) {
        this.name = name;   
        this.type = type;
        this.designed_by = designed_by;
        this.year_created = year_created;   
        this.website = website; 
        
    }

    changetouppercase(){
        return `${this.name.toUpperCase()}`
    }
}
const Languages =  new Language('js','script','mak',1998,'123.com')
console.log(Languages.changetouppercase())
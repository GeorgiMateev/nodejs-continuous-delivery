export class Note {
    constructor(text: string) {
        this.text = text;
        this.createdOn = new Date();
    }

    public text:string;
    public createdOn:Date;
}
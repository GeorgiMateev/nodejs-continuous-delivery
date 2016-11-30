export class Note {
    constructor(text: string) {
        this.text = text;
        this.createdAt = new Date();
    }

    public text:string;
    public createdAt:Date;
    public updatedAt:Date;
    public id: string;
}
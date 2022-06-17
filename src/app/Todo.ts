export class Todo {
    sno: number
    title: string
    desc: string
    active: boolean

    constructor(s:number, t:string, d:string, a:boolean) {
        this.active = a;
        this.sno = s;
        this.title = t;
        this.desc = d;
    }
}
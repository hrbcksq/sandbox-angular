export class Server {
    type: string;
    name: string;
    content: string;

    constructor(name: string, type: string, content: string) {
        this.type = type;
        this.name = name;
        this.content = content;
    }
}

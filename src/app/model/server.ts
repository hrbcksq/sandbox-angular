import { ServerType } from './enum/server.type';
export class Server {
    name: string;
    data: string;
    type: ServerType;

    isValid() {
        return this.name && this.data;
    }
}

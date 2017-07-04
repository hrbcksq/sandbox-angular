import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            background-color: green;
        }
    `]
})
export class ServerComponent implements OnInit {
    serverId = 10;
    serverStatus;

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    ngOnInit(): void {
    }

    getServerColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}

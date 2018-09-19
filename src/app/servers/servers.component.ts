import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-servers',
    // selector by HTML attribute
    // selector: '[app-servers]',
    // selector by class
    // selector: '.app-servers',
    // inline HTML code
    // template: '<app-server></app-server><app-server></app-server>',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    allowNewServer = false;
    serverCreationStatus = 'No server was created';
    serverName = '';

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    ngOnInit() {
    }

    onCreateServer = () => {
        this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    }

    // The following method will be used for event binding using the input event
    onUpdateServerName = (event: any) => {
        this.serverName = event.target.value;
    }

}

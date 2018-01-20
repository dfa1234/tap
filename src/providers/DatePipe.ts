import {Component} from "@angular/core";

@Component({
    selector: 'date-pipe',
    template: `<div><p>{{today | date:'mediumTime'}}</p></div>`
})
export class DatePipe {
    today = Date.now();

    ngOnInit() {
        this.today = setInterval( () => {
            this.today = Date.now();
        }, 1000);
    }

}
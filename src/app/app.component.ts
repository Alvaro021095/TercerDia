import { Gift } from './gift.interface';
import { ShowGiftService } from './show-gift.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	gifts: Observable<Gift[]>;
	constructor(private showGift: ShowGiftService) {
		this.gifts = this.showGift.getGift();
	}
	update() {
		this.gifts = this.showGift.getGift();
	}
}

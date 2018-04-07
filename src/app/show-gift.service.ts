import { Gift } from './gift.interface';
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable()
export class ShowGiftService {
	url = 'https://yesno.wtf/api';
	constructor(private http: HttpClient) {}
	getGift() {
		return this.http.get<Gift[]>(this.url);
	}
}

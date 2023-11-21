import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private selectedOptionSubject: BehaviorSubject<string> = new BehaviorSubject<string>('topRated');
  selectedOption: Observable<string> = this.selectedOptionSubject.asObservable();

  updateSelectedOption(option: string){
    this.selectedOptionSubject.next(option);
  }
}

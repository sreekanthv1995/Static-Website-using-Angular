import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchText:string = '';

  @Output()
  searchTextChange: EventEmitter<string> = new EventEmitter<string>();

  onSearchChangeEvent(){
    
  }

  // updateSearchText(event:any){
  //   this.searchText = event.target.value
  // }

  updateSearchText(inputEL: HTMLInputElement){
    // console.log(inputEL.value);
    this.searchText = inputEL.value;
    this.searchTextChange.emit(this.searchText);
  }

}

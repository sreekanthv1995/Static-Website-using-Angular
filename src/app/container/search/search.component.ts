import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

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
  @ViewChild('searchInput')
  searchInputEl: ElementRef;

  // updateSearchText(event:any){
  //   this.searchText = event.target.value
  // }

  updateSearchText(){
    this.searchText = this.searchInputEl.nativeElement.value;
    this.searchTextChange.emit(this.searchText);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap,  } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GridService {
  
   headerDict = {
    
    'Ocp-Apim-Subscription-Key': 'e050c6ce6012470e8b61603ccb47c890',
    
  }
  
  requestOptions = {                                                                                                                                                                                 
    headers: new Headers(this.headerDict), 
  };
  
  constructor(private http:HttpClient) { }
  getRequest(skip:number,take:number)
  {
    console.log(skip,take)
    var url = "https://ideaelaninfinitydevapimg.azure-api.net/v1/customers/?skip="+skip+"&take="+take+"";
     return this.http.get(url,  { headers: this.headerDict}).pipe(
       tap((x:any)=>{
          console.log(x)
       }))
  }
  public editHandler({dataItem}) {
    console.log(dataItem)
    // this.editDataItem = dataItem;
    //     this.isNew = false;
}
}

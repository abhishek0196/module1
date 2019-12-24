import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GridService {
  url = "https://ideaelaninfinitydevapimg.azure-api.net/v1/customers/";
   headerDict = {
    
    'Ocp-Apim-Subscription-Key': 'e050c6ce6012470e8b61603ccb47c890',
    
  }
  
  requestOptions = {                                                                                                                                                                                 
    headers: new Headers(this.headerDict), 
  };
  
  constructor(private http:HttpClient) { }
  getRequest()
  {
    this.http.get(this.url,  { headers: this.headerDict}).subscribe((response)=>{
      console.log("data"+JSON.stringify(response))
    })
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  headerDict = {
    
    'Ocp-Apim-Subscription-Key': 'e050c6ce6012470e8b61603ccb47c890',
    
  }
  
  requestOptions = {                                                                                                                                                                                 
    headers: new Headers(this.headerDict), 
  };
  constructor(private http:HttpClient) { }
  postRequest(params)
  {
    var url = "https://ideaelaninfinitydevapimg.azure-api.net/v1/customers";
    
    return this.http.post(url,params,{headers: this.headerDict});
  }
}

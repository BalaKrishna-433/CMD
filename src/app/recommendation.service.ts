import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import {  recommendation } from './recommendation/model';



@Injectable({
  providedIn: 'root'
})


export class RecommendationService {

url='https://localhost:44398/api/doctor';
Rurl='https://localhost:44344/api/appointment/Recommendation'

constructor(private http:HttpClient) { }

 getAllData(){
    return this.http.get(this.url);
  }

  

  addRecommendation(R:any){
    
   return this.http.post(this.Rurl,R);
    

  }

  // removeRecommendation(id:number){
  //   this.http.delete(this.url+ id).subscribe({
  //     complete:()=>console.log("deleted",id)
  //   })
  // }


  deleteTest( test)
  
  {return this.http.delete(this.Rurl+"/"+test);}//  


}



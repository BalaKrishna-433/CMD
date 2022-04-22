import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  



@Injectable({
  providedIn: 'root'
})


export class RecommendationService {

url='https://localhost:44314/api/recommendation';

constructor(private http:HttpClient) { }

 getAllData(){
  var durl=this.url+"/doctor"
    return this.http.get(durl);
  }

  addRecommendation(R:any){
    
   return this.http.post(this.url,R);
    

  }

  removeRecommendation(id:number){
    this.http.delete(this.url+ id).subscribe({
      complete:()=>console.log("deleted",id)
    })
  }

}



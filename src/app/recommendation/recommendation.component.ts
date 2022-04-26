import { Component, Input, OnInit } from '@angular/core';
import { recommendation } from './model';
import reco from './data.json';
import { RecommendationService } from '../recommendation.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css'],
})
export class RecommendationComponent implements OnInit {
  // recom: recommendation[] = reco;

  // constructor(private sevrvice:RecommendationService) {}

  recoForm: FormGroup;
  Doctor = [];
  DocName = [];



  term: string;
  searchText: string;
  AppointmentId = 2;

  Doctors = [];
  FilterDoctor=[];

  constructor(
    private data: RecommendationService,
    private builder: FormBuilder

  ) { }

  ngOnInit(): void {
    this.recoForm = this.builder.group({
      inputField: new FormControl(),
    });

    this.data.getAllData().subscribe((allData: any) => {
      // console.log(allData);

      // this.commentData=allData;
      this.Doctors=allData;
      // allData.forEach((element) => {
      //   this.Doctors.push(element)
      // });

      // console.log(allData);
    });
    this.FilterDoctor=this.Doctors
    // console.log(this.FilterDoctor)
  }
  displayFn(reco: recommendation): string {
    return reco && reco.Name ? reco.Name : '';
  }

  onselect() 
  {
    
    
    var recommendationdata = {
      AppointmentId: this.AppointmentId,
      DoctorId: this.recoForm.get('inputField').value.DoctorId
      // RecommendationId: Number,
    };

    // if (!this.Doctor.includes(this.recoForm.get('inputField').value)) 
    // for (var i = 0; i < this.Doctors.length; i++) {
    //   if (this.Doctors[i].RecommendationId == recommendationdata.DoctorId) this.Doctors.splice(i, 1);
    // }
    if (!this.Doctor.includes(this.recoForm.get('inputField').value)) 
    {
      this.data.addRecommendation(recommendationdata).subscribe({
        next: (response) => {
          // console.log(response);
          this.Doctor.push(response);

          if (!this.DocName.includes(this.recoForm.get('inputField').value))
            this.DocName.push(this.recoForm.get('inputField').value);
        },
        complete: () => console.log(recommendationdata),
        
      });
    }
  }

  removeselection(t) {
    console.log(t);
    console.log(this.DocName);

    for (var i = 0; i < this.Doctor.length; i++) {
      if (this.Doctor[i].RecommendationId == t) this.Doctor.splice(i, 1);
    }
    this.data.deleteTest(t).subscribe((data) => console.log(data));
  }


  search(){



    this.FilterDoctor=this.Doctors.filter(doc=>doc.DoctorName.toLowerCase().includes(this.searchText.toLowerCase()))

    console.log("searchcalled")




  }
}


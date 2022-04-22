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

  term: string;
  searchText: string;
  patientdetailId = 1;

  Doctors: recommendation[] = [];

  constructor(
    private data: RecommendationService,
    private builder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.recoForm = this.builder.group({
      inputField: new FormControl(),
    });

    this.data.getAllData().subscribe((allData: any) => {
      // console.log(allData);

      // this.commentData=allData;
      allData.forEach((element) => {
        this.Doctors.push(new recommendation(element.Id, element.Name));
      });

      console.log(allData);
    });
  }
  displayFn(reco: recommendation): string {
    return reco && reco.Name ? reco.Name : '';
  }

  onselect(e) {
    // if (!this.Doctor.includes(e.target.value)) this.Doctor.push(e.target.value);
    // this.data.addRecommendation({ DoctorName: e.target.value }).subscribe({
    //   next: (response) => this.Doctor.push(response),
    //   complete: () => console.log(this.Doctor),
    // });
    // //  this.data.addRecommendation(e.target.value)
    // e.target.value = '';
    // console.log(e.target.value);
    var recommendationdata = {
      PatientDetialId: this.patientdetailId,
      RecommendedDoctorId: this.recoForm.get('inputField').value.Id,
    };

    if (!this.Doctor.includes(this.recoForm.get('inputField').value)) {
      this.data.addRecommendation(recommendationdata).subscribe({
        next: (response) =>
          this.Doctor.push(this.recoForm.get('inputField').value),
        complete: () => console.log(this.Doctor)
      });
    }
    // console.log(recommendationdata
  }

  

  removeselection(d) {
    
console.log(d)
    
    
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostingService } from 'src/app/services/posting.service';

@Component({
  selector: 'app-posting-add',
  templateUrl: './posting-add.component.html',
  styleUrls: ['./posting-add.component.css']
})
export class PostingAddComponent implements OnInit {

  message:string = "";
  postingAddForm:FormGroup;
  constructor(private postingService:PostingService,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createPostingAddForm();
  }

  createPostingAddForm(){
    this.postingAddForm = this.formBuilder.group({
      title:['',Validators.required],
      description:['',Validators.required],
      phoneNumber:['',Validators.required],
      price:['',Validators.required],
      squareMeter:['',Validators.required],
      location:['',Validators.required],
      image:['',Validators.required]
    })
  }

  async add(){
    if (this.postingAddForm.valid) {
      const postingFormValue = Object.assign({},this.postingAddForm.value);
      (await this.postingService.add({
        id:new Date().getTime().toString(),
        title:postingFormValue.title,
        image:postingFormValue.image,
        location:postingFormValue.location,
        price:postingFormValue.price,
        squareMeter:postingFormValue.squareMeter + " m2",
        phoneNumber:postingFormValue.phoneNumber,
        description:postingFormValue.description
      })).subscribe(()=>{
        this.message = "Ekleme başarılı"
      })
    } else {
      
      this.message = "Lütfen formları boş geçmeyiniz!"
    }
  }
}

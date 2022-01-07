import { Component, OnInit } from '@angular/core';
import { Posting } from 'src/app/models/posting';
import { PostingService } from 'src/app/services/posting.service';

@Component({
  selector: 'app-posting-list',
  templateUrl: './posting-list.component.html',
  styleUrls: ['./posting-list.component.css']
})
export class PostingListComponent implements OnInit {

  postings:Posting[] = [];
  constructor(private postingService:PostingService) { }

  ngOnInit(): void {
    this.getAll();
  }

  async getAll(){
    (await this.postingService.getAll()).subscribe((response)=>{
      response.forEach((responseData)=>{
        this.postings.push(
          {
            id:responseData.get("id"),
            title:responseData.get("title"),
            description:responseData.get("description"),
            phoneNumber:responseData.get("phoneNumber"),
            price:responseData.get("price"),
            squareMeter:responseData.get("squareMeter"),
            location:responseData.get("location"),
            image:responseData.get("image")
          
        })
      })
    })
  }

}

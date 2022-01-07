import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  getUser$ = this.authSerice.currentUser$;
  constructor(private authSerice:AuthenticationService) { }

  ngOnInit(): void {
  }

}

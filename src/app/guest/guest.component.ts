import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

  constructor(private router: Router, private guestService: GuestService) { }

  ngOnInit(): void {
    if (localStorage.getItem('role') == null || localStorage.getItem('role') != 'USER') {
      this.router.navigate(['/admin']);
    }
    this.guestService.dummyApiCall().subscribe(responseDate => {});
  }

}
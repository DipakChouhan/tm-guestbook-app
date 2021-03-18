import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router, private guestService: GuestService) { }

  ngOnInit(): void {
    if (localStorage.getItem('role') == null || localStorage.getItem('role') != 'ADMIN') {
      this.router.navigate(['/guest']);
    }
    this.guestService.dummyApiCall().subscribe(responseDate => {});
  }
}

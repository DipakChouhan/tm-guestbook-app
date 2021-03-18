import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { GuestService } from 'src/app/guest.service';

@Component({
  selector: 'app-list-guest-entries',
  templateUrl: './list-guest-entries.component.html',
  styleUrls: ['./list-guest-entries.component.css']
})
export class ListGuestEntriesComponent implements OnInit {

  guesBookEntires = [];

  constructor(private guestService: GuestService, private dataService: DataService) { }

  ngOnInit(): void {
    this.getGuestBookentryList();
  }

  getGuestBookentryList() {
    this.guesBookEntires = [];
    this.guestService.getGuestEntryList().subscribe(response => {
      this.guesBookEntires = response["payloads"];
    });
  }

  onDeleteEntry(entry: any) {
    console.log(entry);
    this.dataService.buildModelDataObject(entry, 'delete', this, null, null);
  }

  onViewEntry(entry: any) {
    this.dataService.buildModelDataObject(entry, 'view', this, null, null);
  }

  onEditEntry(entry: any) {
    this.dataService.buildModelDataObject(entry, 'edit', this, null, null);
  }

}

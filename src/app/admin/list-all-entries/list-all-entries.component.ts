import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-list-all-entries',
  templateUrl: './list-all-entries.component.html',
  styleUrls: ['./list-all-entries.component.css']
})
export class ListAllEntriesComponent implements OnInit {

  guesBookEntires = [];

  constructor(private adminService: AdminService, private dataService: DataService) { }

  ngOnInit(): void {
    this.getGuestBookentryList();
  }

  getGuestBookentryList() {
    this.guesBookEntires = [];
    this.adminService.getGuestEntryList().subscribe(response => {
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

  onApproveEntry(entry: any) {
    this.dataService.buildModelDataObject(entry, 'approve', this, null, null);
  }

}

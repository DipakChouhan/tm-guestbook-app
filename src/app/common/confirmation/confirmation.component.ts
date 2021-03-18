import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  public guestEntry: any;
  public mode: String;
  context: any;

  constructor(private adminService: AdminService, private dataService: DataService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataService.modelDataObject.subscribe(modelObject => {
      this.guestEntry = modelObject.data;
      this.mode = modelObject.mode;
      this.context = modelObject.context;
    });
  }

  onYes() {
    if (this.mode == 'delete') {
      this.adminService.deleteGuestEntry(this.guestEntry.guestBookEntryId).subscribe(responseData => {
        this.context.getGuestBookentryList();
        // this.dataService.buildModelDataObject(null, null, this.dataService.context, responseData['infoMessages'], null);
      }, error => {
        this.dataService.buildModelDataObject(null, null, this.context, null, error.error.errorMessages);
      });
    } else if (this.mode == 'approve') {
      this.adminService.approveGuestEntry(this.guestEntry.guestBookEntryId).subscribe(responseData => {
        this.context.getGuestBookentryList();
        // this.dataService.buildModelDataObject(null, null, this.dataService.context, responseData['infoMessages'], null);
      }, error => {
        this.dataService.buildModelDataObject(null, null, this.context, null, error.error.errorMessages);
      });
    }

  }

}

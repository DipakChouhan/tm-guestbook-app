import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { GuestService } from 'src/app/guest.service';

@Component({
  selector: 'app-guest-book-form',
  templateUrl: './guest-book-form.component.html',
  styleUrls: ['./guest-book-form.component.css']
})
export class GuestBookFormComponent implements OnInit {

  mode: String;
  guestEntryForm: FormGroup;
  guestEntryImageForm: FormGroup;
  guestEntry: any = {};
  entry: any = {};
  context: any;
  selectImage: boolean = false;
  selectedFile: File= null;
  constructor(private  guestService: GuestService, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.modelDataObject.subscribe(modelObject => {
      this.createGuestEntryForm(modelObject.data);
      this.mode = modelObject.mode;
      this.entry = modelObject.data;
      this.context = modelObject.context;
    });
    if (this.entry != null) {
      this.createGuestEntryForm(this.entry);
      this.createGuestEntryImageForm(this.entry);
    }
  }

  private createGuestEntryForm(data:any) {
    // binding data with form
    this.guestEntryForm = new FormGroup({
      guestBookEntryText: new FormControl(data.guestBookEntryText, Validators.required),
      guestBookEntryId: new FormControl(data.guestBookEntryId, Validators.required),
    });
  }

  private createGuestEntryImageForm(data: any) {
    this.guestEntryImageForm = new FormGroup({
      file: new FormControl(null, Validators.required),
      guestBookEntryId: new FormControl(data == null? null:data.guestBookEntryId, Validators.required),
    });
  }

  onEntryUpdate(closeModal: any) {
    
    if (this.mode == 'edit') {
      this.guestService.updateGuestEntryText(this.guestEntryForm.value).subscribe(response => {
        // Refreshing the list, calling method from the context
        this.context.getGuestBookentryList();
        closeModal.click();
      });
   }
  }

  onOptionChange($event: Event) {
    this.selectImage = $event.target['checked'] == true;
    this.dataService.buildModelDataObject(null, null, this, null, null);
  }

  onFileChanged($event: Event) {
    console.log($event.target['files'][0])
    this.selectedFile = $event.target['files'][0];
  }

  onEntryImageFormSubmit(closeModal: any) {
    console.log(this.selectedFile);
    const uploadImageData = new FormData();
    uploadImageData.append('file', this.selectedFile);
    uploadImageData.append('guestBookEntryId', this.entry.guestBookEntryId+"");
    this.guestService.createGuestBookEntryImage(uploadImageData).subscribe(responseData => {
      console.log(responseData);
      this.createGuestEntryImageForm(null);
      this.context.getGuestBookentryList();
        closeModal.click();
    });
  }

  clearImageSelection() {
    this.selectedFile = null;
  }

}

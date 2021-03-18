import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GuestService } from 'src/app/guest.service';

@Component({
  selector: 'app-guest-book-entry',
  templateUrl: './guest-book-entry.component.html',
  styleUrls: ['./guest-book-entry.component.css']
})
export class GuestBookEntryComponent implements OnInit {

  guestEntryForm: FormGroup;
  guestEntryImageForm: FormGroup;
  selectImage: boolean = false;
  selectedFile: File= null;
  entryTypes = [ 'Text Entry', 'Image Entry'];
  isImageEntry = false;
  displayMsg = false;
  

  constructor(private guestService: GuestService) { }

  ngOnInit(): void {
    this.isImageEntry = false;
    this.displayMsg = false;
    this.createGuestEntryForm();
    this.createGuestEntryImageForm();
  }

  private createGuestEntryForm() {
    // binding data with form
    this.guestEntryForm = new FormGroup({
      guestBookEntryText: new FormControl(null, Validators.required)
    });
  }

  private createGuestEntryImageForm() {
    this.guestEntryImageForm = new FormGroup({
      file: new FormControl(null, Validators.required)
    });
  }

  onOptionChange($event: Event) {
    this.selectImage = $event.target['checked'] == true;
  }

  onFileChanged($event: Event) {
    console.log($event.target['files'][0])
    this.selectedFile = $event.target['files'][0];
  }

  onEntryImageFormSubmit() {
    console.log(this.selectedFile);
    const uploadImageData = new FormData();
    uploadImageData.append('file', this.selectedFile);
    this.guestService.createGuestBookEntryImage(uploadImageData).subscribe(responseData => {
      console.log(responseData);
      this.createGuestEntryImageForm();
      this.displayMsg = true;
    });
  }

  clearImageSelection() {
    this.selectedFile = null;
    this.displayMsg = false;
  }

  onChange($event: Event) {
    console.log($event.target['value']);
    if ($event.target['value'] == 'Image Entry') {
      this.isImageEntry = true;
    } else {
      this.isImageEntry = false;
    }
    this.displayMsg = false;
  }

  onEntryTextCreate() {
    console.log(this.guestEntryForm.value);
    this.guestService.createGuestBookEntryOnlyText(this.guestEntryForm.value).subscribe(responseData => {
      this.createGuestEntryForm();
      this.displayMsg = true;
    });
  }

}

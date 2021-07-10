import { Address } from './../../../models/address';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  open: boolean;
  addressForm: FormGroup;
  @Output() modalAddress = new EventEmitter();
  educationForm: FormGroup;
  @Output() modalEducation = new EventEmitter();
  constructor() {

    this.addressForm = new FormGroup({
        city: new FormControl(null, Validators.required),
        street: new FormControl(null, Validators.required),
        postal: new FormControl(null, Validators.required),
        country: new FormControl(null, Validators.required),
        type: new FormControl("Billing", Validators.required)
    });
    this.educationForm = new FormGroup({
      nomFaculte: new FormControl(null, Validators.required),
      dateDebut: new FormControl(null, Validators.required),
      dateFin: new FormControl(null, Validators.required),
      nomDiplome: new FormControl(null, Validators.required),
      specialite: new FormControl(null, Validators.required),
      niveau: new FormControl(null, Validators.required),
      photo: new FormControl(null, Validators.required),
      pays: new FormControl(null, Validators.required)
    });

   }

  ngOnInit(): void {
  }

  createAddress() {

    this.modalAddress.emit(this.addressForm.value);
    this.addressForm.reset();
  }
  createEducation() {

    this.modalEducation.emit(this.educationForm.value);
    this.educationForm.reset();
  }
}

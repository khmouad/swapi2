import { Component,Input  } from '@angular/core';

@Component({
  selector: 'app-resident-details-modal',
  standalone: true,
  imports: [],
  templateUrl: './resident-details-modal.component.html',
  styleUrl: './resident-details-modal.component.css'
})
export class ResidentDetailsModalComponent {
  @Input() resident: any;
  closeModal(){

  }
}

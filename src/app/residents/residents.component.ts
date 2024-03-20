import { Component,OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef  } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ResidentsService } from '../residents.service';
import { HttpClient } from '@angular/common/http';
import { ResidentDetailsModalComponent } from '../resident-details-modal/resident-details-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-residents',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './residents.component.html',
  styleUrl: './residents.component.css'
})
export class ResidentsComponent implements OnInit{
  @ViewChild('modalContainer', { read: ViewContainerRef }) modalContainer!: ViewContainerRef;
  residentsList:any[]=[];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  constructor(private residents:ResidentsService,private http:HttpClient,private dialog: MatDialog,private resolver: ComponentFactoryResolver){}
  ngOnInit(){
    this.fetchResidents();
  }
  fetchResidents() {
    this.residents.getResidents().subscribe((data: any) => {
      data.residents.forEach((url:string) => {
        this.http.get(url).subscribe((data:any)=>{
          this.residentsList.push(data);
        })
      });
    });

  }
  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  openDetailsModal(resident: any) {
    this.modalContainer.clear();
    const factory = this.resolver.resolveComponentFactory(ResidentDetailsModalComponent);
    const componentRef = this.modalContainer.createComponent(factory);
    componentRef.instance.resident = resident;
  }
}

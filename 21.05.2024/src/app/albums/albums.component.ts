import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Album } from '../Album';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  providers:[HttpService],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {
  albums: Album[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getAllAlbums().subscribe(res => {
      this.albums = res;
      console.log('After transformation:', res);
    });
  }







}

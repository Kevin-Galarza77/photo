import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor(public photoService: PhotoService) { }

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  deletePhoto(position: number) {
    // Eliminar la imagen del arreglo de fotos
    this.photoService.photos.splice(position, 1);

    // Guardar el nuevo arreglo de fotos en las preferencias
    Preferences.set({
      key: this.photoService.PHOTO_STORAGE,
      value: JSON.stringify(this.photoService.photos),
    });
  }


}

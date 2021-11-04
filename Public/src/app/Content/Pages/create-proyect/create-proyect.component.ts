import { Component, OnInit, ViewChild } from '@angular/core';

import { FilePondOptions } from 'filepond';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ProyectsService } from '../../Services/proyects.service';

@Component({
  selector: 'app-create-proyect',
  templateUrl: './create-proyect.component.html',
  styleUrls: ['./../main.component.css'],
})
export class CreateProyectComponent implements OnInit {
  @ViewChild('myPond') myPond: any;
  pondOptions: FilePondOptions = {
    labelIdle: 'Deja caer tu imagen aqui o abre el explorador',
    allowDrop: true,
  };

  createForm: FormGroup;
  imageB64: string;

  constructor(
    private store: AngularFireStorage,
    private fb: FormBuilder,
    private firestore: AngularFirestore,
    private proyectsService: ProyectsService
  ) {
    this.createForm = this.fb.group({});
    this.imageB64 = '';
  }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      title: [''],
      category: ['Arte'],
      description: [''],
      meta: [''],
    });
  }

  pondHandleAddFile(event: any) {
    // console.log('A file was added', event.file.getFileEncodeBase64String());
    this.imageB64 = event.file.getFileEncodeBase64String();
  }

  async submitProyect() {
    try {
      const dataUser = JSON.parse(localStorage.getItem('uid') || '');

      const upload = await this.store
        .ref('posters')
        .child(this.createForm.value.title)
        .putString(this.imageB64, 'base64', {
          contentType: 'image/jpg',
        });
      const urlDownload = await upload.ref.getDownloadURL();
      const sendProyect = {
        ...this.createForm.value,
        poster: urlDownload,
        uid: dataUser,
      };
      await this.proyectsService.insertOne(sendProyect);
      Swal.fire(
        'Proyecto Enviado correctamente',
        'Espere a que un administrador lo revise por favor',
        'success'
      );
    } catch (error: any) {
      Swal.fire('Algo fallo', error.message, 'success');
    }
    this.createForm.reset();
  }
}

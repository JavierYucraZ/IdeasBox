import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProyectsService {
  private uriBase: string =
    'http://localhost/IdeasBox/controllers/proyecto.php?service=';

  constructor() {}

  async getAllProyects() {
    const request = await fetch(`${this.uriBase}getAll`);
    return request.json();
  }

  async getAllByCategory(category: string) {}

  async getAllByUser(uid: string) {}

  async getAllById(id: number) {}

  async insertOne(body: any) {
    try {
      const request = await fetch(`${this.uriBase}insertOne`, {
        method: 'POST',
        body: JSON.stringify(body),
      });
      return request.json();
    } catch (error) {
      console.log(error);
    }
  }
}

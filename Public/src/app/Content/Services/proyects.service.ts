import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class ProyectsService {
  private uriBase: string =
    'http://localhost/IdeasBox/controllers/proyecto.php?service=';

  constructor() {}

  async getAllProyects() {
    try {
      const request = await fetch(`${this.uriBase}getAllAccepted`);
      return request.json();
    } catch (error: any) {
      Swal.fire('Error', error.message, 'error');
    }
  }

  async getAllByCategory(category: string) {
    try {
      const request = await fetch(`${this.uriBase}getAllByCategory`, {
        method: 'POST',
        body: JSON.stringify({ category: category }),
      });
      return request.json();
    } catch (error: any) {
      Swal.fire('Error', error.message, 'error');
    }
  }

  async getOneByID(id: number) {
    try {
      const request = await fetch(`${this.uriBase}getOneByID`, {
        method: 'POST',
        body: JSON.stringify({ id: id }),
      });
      return await request.json();
    } catch (error: any) {
      Swal.fire('Error', error.message, 'error');
    }
  }

  async getAllByUser(uid: string) {
    try {
      const request = await fetch(`${this.uriBase}getAllByUser`, {
        method: 'POST',
        body: JSON.stringify({ uid: uid }),
      });
      return await request.json();
    } catch (error: any) {
      Swal.fire('Error', error.message, 'error');
    }
  }

  async getBestsByCategory(category: string) {
    try {
      const request = await fetch(`${this.uriBase}getBestsByCategory`, {
        method: 'POST',
        body: JSON.stringify({ category: category }),
      });
      return request.json();
    } catch (error: any) {
      Swal.fire('Error', error.message, 'error');
    }
  }

  async getBests() {
    try {
      const request = await fetch(`${this.uriBase}getBests`);
      return request.json();
    } catch (error: any) {
      Swal.fire('Error', error.message, 'error');
    }
  }

  async insertOne(body: any) {
    try {
      const request = await fetch(`${this.uriBase}insertOne`, {
        method: 'POST',
        body: JSON.stringify(body),
      });
      return request.json();
    } catch (error: any) {
      Swal.fire('Error', error.message, 'error');
    }
  }

  async voteUp(id: number) {
    try {
      const request = await fetch(`${this.uriBase}vote_up`, {
        method: 'POST',
        body: JSON.stringify({ id: id }),
      });
      return await request.json();
    } catch (error: any) {
      Swal.fire('Error', error.message, 'error');
    }
  }

  async voteDown(id: number) {
    try {
      const request = await fetch(`${this.uriBase}vote_down`, {
        method: 'POST',
        body: JSON.stringify({ id: id }),
      });
      return await request.json();
    } catch (error: any) {
      Swal.fire('Error', error.message, 'error');
    }
  }

  async sponsorProyect(id: number, amount: number) {
    try {
      const request = await fetch(`${this.uriBase}sponsorProyect`, {
        method: 'POST',
        body: JSON.stringify({ id: id, amount: amount }),
      });
      return await request.json();
    } catch (error: any) {
      Swal.fire('Error', error.message, 'error');
    }
  }

  async deleteProyect(id: number) {
    try {
      const request = await fetch(`${this.uriBase}deleteOne`, {
        method: 'POST',
        body: JSON.stringify({ id: id }),
      });
      return await request.json();
    } catch (error: any) {
      Swal.fire('Error', error.message, 'error');
    }
  }
}

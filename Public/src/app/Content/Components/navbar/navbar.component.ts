import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public name: string;
  constructor(private authFire: AngularFireAuth) {
    this.name = '';
  }

  ngOnInit(): void {
    this.name = JSON.parse(localStorage.getItem('userLog') || '').user;
  }

  async logout() {
    localStorage.clear();
    await this.authFire.signOut();
    window.location.reload();
  }
}

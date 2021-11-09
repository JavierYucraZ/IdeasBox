import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  @ViewChild('containerAuth') containerAuth: any;
  @ViewChild('lockSignIn') lockSignIn: any;
  @ViewChild('lockSignUp1') lockSignUp1: any;
  @ViewChild('lockSignUp2') lockSignUp2: any;
  @ViewChild('loading') loading: any;

  loginForm: FormGroup;
  registerForm: FormGroup;
  patternEmail: string;

  constructor(
    private fb: FormBuilder,
    private authFire: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {
    this.loginForm = this.fb.group({});
    this.registerForm = this.fb.group({});
    this.patternEmail = '[A-Za-z0-9._-]+@[A-Za-z0-9_-]+\\.[a-z]{2,10}';
  }

  ngOnInit(): void {
    document.title = 'IdeasBox | Bienvenido';
    if (localStorage.getItem('userLog')) {
      this.router.navigate(['']);
    }

    this.loginForm = this.fb.group({
      emailSignIn: [
        '',
        [Validators.required, Validators.pattern(this.patternEmail)],
      ],
      passwordSignIn: ['', [Validators.required]],
    });

    this.registerForm = this.fb.group({
      nombreSignUp: ['', Validators.required],
      emailSignUp: [
        '',
        [Validators.required, Validators.pattern(this.patternEmail)],
      ],
      paisSignUp: ['Bolivia', Validators.required],
      rolSignUp: ['Empresario', Validators.required],
      password1: ['', Validators.required],
      password2: ['', Validators.required],
      genero: ['Hombre', Validators.required],
    });
  }

  async onLoginSubmit() {
    try {
      this.loading.nativeElement.classList.remove('d-none');
      const { user } = await this.authFire.signInWithEmailAndPassword(
        this.loginForm.value.emailSignIn,
        this.loginForm.value.passwordSignIn
      );
      if (user?.emailVerified) {
        localStorage.setItem('uid', JSON.stringify(user.uid));
        this.firestore
          .collection('users')
          .doc(user.uid)
          .get()
          .toPromise()
          .then((snapshot: any) => {
            localStorage.setItem('userLog', JSON.stringify(snapshot.data()));
            if (snapshot.data().rol === 'Admin') {
              window.location.href =
                'http://localhost/IdeasBox/views/index.php';
            } else {
              this.router.navigate(['']);
            }
          });
      } else {
        Swal.fire(
          'Atencion',
          'Verifique su correo antes de iniciar sesion por favor',
          'warning'
        );
      }
    } catch (error: any) {
      Swal.fire('Error', error.message, 'error');
    }
    this.loading.nativeElement.classList.add('d-none');
  }

  async onRegisterSubmit() {
    const dataRegister = {
      user: this.registerForm.value.nombreSignUp,
      pais: this.registerForm.value.paisSignUp,
      rol: this.registerForm.value.rolSignUp,
      genero: this.registerForm.value.genero,
      saldo: 1000,
    };
    this.loading.nativeElement.classList.remove('d-none');
    if (
      this.registerForm.value.password1 !== this.registerForm.value.password2
    ) {
      Swal.fire('Error', 'Las contraseñas no coiniciden', 'error');
      return;
    }
    try {
      const { user } = await this.authFire.createUserWithEmailAndPassword(
        this.registerForm.value.emailSignUp,
        this.registerForm.value.password1
      );
      await this.firestore.collection('users').doc(user?.uid).set(dataRegister);
      user?.sendEmailVerification();
      Swal.fire(
        'Registro correcto',
        'Verifique su correo e inicie sesion por favor',
        'success'
      );
      this.modeSignIn();
    } catch (error: any) {
      Swal.fire('Error', error.message, 'error');
    }
    this.loading.nativeElement.classList.add('d-none');
  }

  modeSignUp() {
    this.containerAuth.nativeElement.classList.add('sign-up-mode');
  }

  modeSignIn() {
    this.containerAuth.nativeElement.classList.remove('sign-up-mode');
  }

  togglePassword(icon: any, password: any) {
    const tipo = password.getAttribute('type');
    if (tipo === 'password') {
      password.setAttribute('type', 'text');
      icon.classList.remove('fa', 'fa-eye-slash');
      icon.classList.add('fa', 'fa-eye');
    } else {
      password.setAttribute('type', 'password');
      icon.classList.remove('fa', 'fa-eye');
      icon.classList.add('fa', 'fa-eye-slash');
    }
  }
}

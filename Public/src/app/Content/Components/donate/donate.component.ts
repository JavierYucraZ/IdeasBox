import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { ProyectsService } from '../../Services/proyects.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css'],
})
export class DonateComponent implements OnInit {
  sponsorForm: FormGroup;
  id: number;
  constructor(
    private fb: FormBuilder,
    private proyects: ProyectsService,
    private route: ActivatedRoute
  ) {
    this.sponsorForm = this.fb.group({});
    this.id = 0;
  }

  ngOnInit(): void {
    this.sponsorForm = this.fb.group({
      amount: [''],
    });
    this.id = this.route.snapshot.params['id'];
  }

  async onSponsorSubmit() {
    const response = await this.proyects.sponsorProyect(
      this.id,
      this.sponsorForm.value.amount
    );
    Swal.fire({
      title: response,
      text: 'Con tu gran aporte este proyecto podrá crecer',
      icon: 'success',
    }).then((some) => {
      window.location.reload();
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      Nombre: ['', [Validators.required]],
      Telefono: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      Mensaje: ['', [Validators.required]],
      sell: ['', [Validators.required]],
      Presupuesto: ['', [Validators.required]]
    });

    this.contactForm.get('Presupuesto')?.disable();
  }

  resetPres(){
    this.contactForm.get('Presupuesto')?.reset();
    this.contactForm.get('Presupuesto')?.disable();
  }

  enablePres(){
    this.contactForm.get('Presupuesto')?.enable();
  }
  sendData(){
    let formData = this.contactForm?.value;
    if(this.contactForm.get('Presupuesto')?.enabled){
      if(!this.contactForm.get('Presupuesto')?.value){
        return
      }
    }

    if(this.contactForm.get('sell')){
      if(formData.sell === 'yes'){
        delete formData.sell;
        formData.Vender = `Quiero Vender: Si`;
      }else{
        delete formData.sell;
        formData.Comprar = `Quiero Comprar: Si`;
      }
    }

    formData._template = 'basic';
    formData._subject = 'Cliente Elida';
    formData._captcha = 'false';
    formData = JSON.stringify(formData);
    this.http.post(`https://formsubmit.co/elida@elidahouses.com`, formData,
      {
        headers: 
        {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    ).subscribe((res: any) => {
      console.log(res);
      this.contactForm.reset();
      alert('Tu mensaje se ha enviado exitosamente');
    }, (err: any) => {
      this.contactForm.reset();
      alert('Tu mensaje se ha enviado exitosamente');
      return
    })
  }
}

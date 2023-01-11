import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-vali',
  templateUrl: './forms-vali.component.html',
  styleUrls: ['./forms-vali.component.css']
})
export class FormsValiComponent {

  form
  constructor() {
    this.form = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(10)]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'message': new FormControl('', [Validators.required, Validators.maxLength(500)])
    });
  }
  
  onSubmit() {
    if (this.form.valid) {
        // Aquí puedes enviar los datos del formulario a tu servidor o realizar cualquier otra acción necesaria
        alert('Todo esta correcto!');
    } else {
        alert('Por favor verifica los campos');
    }
}
confirm() {
  // Validamos los datos ingresados y mostramos un mensaje de confirmación
  if (this.form) {
    alert('Se a enviado con exito, Todo esta Correcto');
    console.log(this.form)
  } else {
    alert('Hay errores en el formulario');
  }
}
onClear() {
  this.form.reset();
}

}


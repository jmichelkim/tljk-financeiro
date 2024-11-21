import { Component, OnInit } from '@angular/core';

declare var bootstrap: any

@Component({
  selector: 'app-root1',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    // Inicializando os popovers após o componente ser carregado
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map((popoverTriggerEl) => {
      new bootstrap.Popover(popoverTriggerEl);
    });
  }
}

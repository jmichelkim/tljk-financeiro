import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrl: './rodape.component.css'
})
export class RodapeComponent implements OnInit {
  ngOnInit(): void {
    console.log("RodapeComponent inicialized.");
  }
}



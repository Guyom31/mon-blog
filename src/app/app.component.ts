import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {
      title: 'Mon premier voyage',
      content: 'Ardeo, mihi credite, Patres conscripti (id quod vosmet de me existimatis et facitis ipsi) incredibili quodam amore patriae, qui me amor et subvenire',
    },
    {
      title: 'Ma première voiture',
      content: 'olim impendentibus periculis maximis cum dimicatione capitis, et rursum, cum omnia tela undique esse intenta in patriam viderem, subire coegit',
    },
    {
      title: 'Ma troisième femme',
      content: 'atque excipere unum pro universis. Hic me meus in rem publicam animus pristinus ac perennis cum C. Caesare reducit, reconciliat, restituit in gratiam.',
    },
    {
      title: 'Comment j ai fais pour...',
      content: 'atque excipere unum pro universis. Hic me meus in rem publicam animus pristinus ac perennis cum C. Caesare reducit, reconciliat, restituit in gratiam.',
    }
  ];

  constructor() {
  }
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-evento-detalle',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './evento-detalle.html',
  styleUrl: './evento-detalle.css'
})
export class EventoDetalle {
  evento: any;
  comentarios: string = '';

  eventosMock = [
    {
      id: 1,
      titulo: 'Concierto de Rock',
      fecha: '15 de mayo, 2023',
      hora: '10:00 AM - 6:00 PM',
      lugar: 'Estadio Nacional',
      capacidad: '100 personas',
      estado: 'Verificado',
      categoria: 'Música',
      descripcion: 'Vive la mejor experiencia musical con bandas en vivo y un ambiente único.',
      imagen: '🎸'
    },
    {
      id: 2,
      titulo: 'Hackathon Innovate',
      fecha: '15 de mayo, 2023',
      hora: '10:00 AM - 6:00 PM',
      lugar: 'Campus San Isidro Edificio A',
      capacidad: '100 personas',
      estado: 'Verificado',
      categoria: 'Tecnología',
      descripcion: 'Únete a este emocionante hackathon donde podrás desarrollar soluciones innovadoras a problemas reales. Trabaja en equipo, aprende nuevas tecnologías y compite por increíbles premios.',
      imagen: '💻'
    },
    {
      id: 3,
      titulo: 'Exposición de Arte',
      fecha: '25 de Diciembre, 2024',
      hora: '11:00 AM - 4:00 PM',
      lugar: 'Museo de Arte Moderno',
      capacidad: '50 personas',
      estado: 'Verificado',
      categoria: 'Arte',
      descripcion: 'Disfruta de las mejores obras de arte contemporáneo en una exposición única.',
      imagen: '🎨'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.evento = this.eventosMock.find(e => e.id === id);
  }

  volver() {
    history.back();
  }
} 
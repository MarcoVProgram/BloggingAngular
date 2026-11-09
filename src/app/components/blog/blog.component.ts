import { Component, Input } from '@angular/core';
import { Inoticia } from '../../interfaces/inoticia.interface';

@Component({
  imports: [],
  selector: 'app-blog',
  styleUrl: './blog.component.css',
  templateUrl: './blog.component.html',
})
export class BlogComponent {
  protected error: string;
  private listaNoticias: Inoticia[];
  protected listaNoticiasDisplay: Inoticia[];
  private textoFiltro: string;

  constructor() {
    this.listaNoticias = [
      {
        titulo: 'La Navidad se acerca con fuerza',
        imagen:
          'https://lalunadelhenares.com/wp-content/uploads/2026/11/teatro-navidad-programacion-690x450.jpeg',
        cuerpo:
          'Las entradas para todos los espectáculos de la programación navideña del Teatro Auditorio Buero Vallejo y del Teatro Moderno saldrán a la venta este martes, 10 de noviembre.',
        fecha: new Date('2026-11-30'),
      },
      {
        titulo: 'Sale la nueva version Bootstrap 6',
        imagen:
          'https://external-preview.redd.it/bootstrap-6-alpha-v0-k_9DPt4_BIhBCVxhE85LYIduFNEr3RI4yz9vxrNMmQY.png?auto=webp&s=6677ae0e7b9b15352df37e26156943ca2ba17039',
        cuerpo:
          'Tras estar bajo desarrollo, la nueva versión de Bootstrap 6 ha sido lanzada en forma de alpha, con nuevos componentes y mejoras de rendimiento, así como nuevas funcionalidades.',
        fecha: new Date('2026-11-10'),
      },
    ];
    this.listaNoticiasDisplay = [...this.listaNoticias];
    this.error = '';
    this.textoFiltro = '';
  }

  publicar(
    titulo: string,
    imagen: string,
    cuerpo: string,
    fecha: string,
    form: HTMLFormElement,
  ): void {
    if (!titulo.trim() || !imagen.trim() || !cuerpo.trim() || !fecha) {
      this.error = 'Todos los campos son obligatorios.';
      return;
    }

    this.listaNoticias.push({
      titulo: titulo.trim(),
      imagen: imagen.trim(),
      cuerpo: cuerpo.trim(),
      fecha: new Date(fecha),
    });

    this.error = '';
    form.reset();
    this.actualizarFiltro(this.textoFiltro);
  }

  @Input() set filtro(valor: string) {
    this.textoFiltro = valor;
    this.actualizarFiltro(valor);
  }

  actualizarFiltro(filtro: string): void {
    if (!filtro.trim()) {
      this.listaNoticiasDisplay = [...this.listaNoticias];
      return;
    }
    this.listaNoticiasDisplay = this.listaNoticias.filter(
      (noticia) =>
        noticia.titulo.toLowerCase().includes(filtro.toLowerCase()) ||
        noticia.cuerpo.toLowerCase().includes(filtro.toLowerCase()),
    );
  }
}

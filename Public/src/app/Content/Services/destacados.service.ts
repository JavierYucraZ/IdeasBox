import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DestacadosService {
  destacadosTotal = [
    {
      id: 1,
      categoria: 'Arte',
      author: 'Autor Arte 1',
      collected: 125,
      sponsors: 4,
      url: 'https://picsum.photos/id/96/800/500',
      urlLarge: 'https://picsum.photos/id/96/550/550',
      title: 'Arte 1',
      longDescription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            deleniti natus magnam ullam enim sint iure suscipit vero provident
            itaque! Cupiditate quo fugit magnam ut, assumenda facere, enim esse
            nam recusandae corrupti, modi eaque. Deserunt ex repudiandae
            eveniet, illum iure quidem quam impedit aliquam laboriosam ullam
            fugiat harum vel hic odio. Provident quibusdam, molestiae fugit in
            quae voluptates corrupti? Incidunt distinctio magni tenetur cumque.
            Quis placeat accusamus ut deserunt in.`,
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente, laudantium. Expedita',
    },
    {
      id: 2,
      categoria: 'Arte',
      author: 'Autor Arte 2',
      collected: 485,
      sponsors: 3,
      url: 'https://picsum.photos/id/258/800/500',
      urlLarge: 'https://picsum.photos/id/258/550/550',
      title: 'Arte 2',
      longDescription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            deleniti natus magnam ullam enim sint iure suscipit vero provident
            itaque! Cupiditate quo fugit magnam ut, assumenda facere, enim esse
            nam recusandae corrupti, modi eaque. Deserunt ex repudiandae
            eveniet, illum iure quidem quam impedit aliquam laboriosam ullam
            fugiat harum vel hic odio. Provident quibusdam, molestiae fugit in
            quae voluptates corrupti? Incidunt distinctio magni tenetur cumque.
            Quis placeat accusamus ut deserunt in.`,
      shortDescription:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dolores accusamus voluptate veniam optio amet. Saepe eius fugiat ad ea soluta?',
    },
    {
      id: 3,
      categoria: 'Arte',
      author: 'Autor Arte 3',
      collected: 101,
      sponsors: 1,
      url: 'https://picsum.photos/id/180/800/500',
      urlLarge: 'https://picsum.photos/id/180/550/550',
      title: 'Arte 3',
      longDescription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            deleniti natus magnam ullam enim sint iure suscipit vero provident
            itaque! Cupiditate quo fugit magnam ut, assumenda facere, enim esse
            nam recusandae corrupti, modi eaque. Deserunt ex repudiandae
            eveniet, illum iure quidem quam impedit aliquam laboriosam ullam
            fugiat harum vel hic odio. Provident quibusdam, molestiae fugit in
            quae voluptates corrupti? Incidunt distinctio magni tenetur cumque.
            Quis placeat accusamus ut deserunt in.`,
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente, laudantium. Expedita',
    },
    {
      id: 4,
      categoria: 'LibrosComics',
      author: 'Autor Comics y libros 1',
      collected: 230,
      sponsors: 3,
      url: 'https://picsum.photos/id/75/800/500',
      urlLarge: 'https://picsum.photos/id/75/550/550',
      title: 'Comics 1',
      longDescription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            deleniti natus magnam ullam enim sint iure suscipit vero provident
            itaque! Cupiditate quo fugit magnam ut, assumenda facere, enim esse
            nam recusandae corrupti, modi eaque. Deserunt ex repudiandae
            eveniet, illum iure quidem quam impedit aliquam laboriosam ullam
            fugiat harum vel hic odio. Provident quibusdam, molestiae fugit in
            quae voluptates corrupti? Incidunt distinctio magni tenetur cumque.
            Quis placeat accusamus ut deserunt in.`,
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente, laudantium. Expedita',
    },
    {
      id: 5,
      categoria: 'LibrosComics',
      author: 'Autor Comics y libros 2',
      collected: 404,
      sponsors: 5,
      url: 'https://picsum.photos/id/12/800/500',
      urlLarge: 'https://picsum.photos/id/12/550/550',
      title: 'Comics 2',
      longDescription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            deleniti natus magnam ullam enim sint iure suscipit vero provident
            itaque! Cupiditate quo fugit magnam ut, assumenda facere, enim esse
            nam recusandae corrupti, modi eaque. Deserunt ex repudiandae
            eveniet, illum iure quidem quam impedit aliquam laboriosam ullam
            fugiat harum vel hic odio. Provident quibusdam, molestiae fugit in
            quae voluptates corrupti? Incidunt distinctio magni tenetur cumque.
            Quis placeat accusamus ut deserunt in.`,
      shortDescription:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dolores accusamus voluptate veniam optio amet. Saepe eius fugiat ad ea soluta?',
    },
    {
      id: 6,
      categoria: 'LibrosComics',
      author: 'Autor Comics y libros 1',
      collected: 550,
      sponsors: 7,
      url: 'https://picsum.photos/id/9/800/500',
      urlLarge: 'https://picsum.photos/id/9/550/550',
      title: 'Comics 3',
      longDescription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            deleniti natus magnam ullam enim sint iure suscipit vero provident
            itaque! Cupiditate quo fugit magnam ut, assumenda facere, enim esse
            nam recusandae corrupti, modi eaque. Deserunt ex repudiandae
            eveniet, illum iure quidem quam impedit aliquam laboriosam ullam
            fugiat harum vel hic odio. Provident quibusdam, molestiae fugit in
            quae voluptates corrupti? Incidunt distinctio magni tenetur cumque.
            Quis placeat accusamus ut deserunt in.`,
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente, laudantium. Expedita',
    },
    {
      id: 7,
      categoria: 'Cine',
      author: 'Autor Cine 1',
      collected: 60,
      sponsors: 1,
      url: 'https://picsum.photos/id/65/800/500',
      urlLarge: 'https://picsum.photos/id/65/550/550',
      title: 'Cine 1',
      longDescription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            deleniti natus magnam ullam enim sint iure suscipit vero provident
            itaque! Cupiditate quo fugit magnam ut, assumenda facere, enim esse
            nam recusandae corrupti, modi eaque. Deserunt ex repudiandae
            eveniet, illum iure quidem quam impedit aliquam laboriosam ullam
            fugiat harum vel hic odio. Provident quibusdam, molestiae fugit in
            quae voluptates corrupti? Incidunt distinctio magni tenetur cumque.
            Quis placeat accusamus ut deserunt in.`,
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente, laudantium. Expedita',
    },
    {
      id: 8,
      categoria: 'Cine',
      author: 'Autor Cine 1',
      collected: 770,
      sponsors: 4,
      url: 'https://picsum.photos/id/23/800/500',
      urlLarge: 'https://picsum.photos/id/23/550/550',
      title: 'Cine 2',
      longDescription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            deleniti natus magnam ullam enim sint iure suscipit vero provident
            itaque! Cupiditate quo fugit magnam ut, assumenda facere, enim esse
            nam recusandae corrupti, modi eaque. Deserunt ex repudiandae
            eveniet, illum iure quidem quam impedit aliquam laboriosam ullam
            fugiat harum vel hic odio. Provident quibusdam, molestiae fugit in
            quae voluptates corrupti? Incidunt distinctio magni tenetur cumque.
            Quis placeat accusamus ut deserunt in.`,
      shortDescription:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dolores accusamus voluptate veniam optio amet. Saepe eius fugiat ad ea soluta?',
    },
    {
      id: 9,
      categoria: 'Cine',
      author: 'Autor Cine 2',
      collected: 830,
      sponsors: 9,
      url: 'https://picsum.photos/id/7/800/500',
      urlLarge: 'https://picsum.photos/id/7/550/550',
      title: 'Cine 3',
      longDescription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            deleniti natus magnam ullam enim sint iure suscipit vero provident
            itaque! Cupiditate quo fugit magnam ut, assumenda facere, enim esse
            nam recusandae corrupti, modi eaque. Deserunt ex repudiandae
            eveniet, illum iure quidem quam impedit aliquam laboriosam ullam
            fugiat harum vel hic odio. Provident quibusdam, molestiae fugit in
            quae voluptates corrupti? Incidunt distinctio magni tenetur cumque.
            Quis placeat accusamus ut deserunt in.`,
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente, laudantium. Expedita',
    },
    {
      id: 10,
      categoria: 'Comida',
      author: 'Autor Comida 5',
      collected: 120,
      sponsors: 2,
      url: 'https://picsum.photos/id/1010/800/500',
      urlLarge: 'https://picsum.photos/id/1010/550/550',
      title: 'Comida 1',
      longDescription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            deleniti natus magnam ullam enim sint iure suscipit vero provident
            itaque! Cupiditate quo fugit magnam ut, assumenda facere, enim esse
            nam recusandae corrupti, modi eaque. Deserunt ex repudiandae
            eveniet, illum iure quidem quam impedit aliquam laboriosam ullam
            fugiat harum vel hic odio. Provident quibusdam, molestiae fugit in
            quae voluptates corrupti? Incidunt distinctio magni tenetur cumque.
            Quis placeat accusamus ut deserunt in.`,
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente, laudantium. Expedita',
    },
    {
      id: 11,
      categoria: 'Comida',
      author: 'Autor Comida 2',
      collected: 110,
      sponsors: 1,
      url: 'https://picsum.photos/id/159/800/500',
      urlLarge: 'https://picsum.photos/id/159/550/550',
      title: 'Comida 2',
      longDescription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            deleniti natus magnam ullam enim sint iure suscipit vero provident
            itaque! Cupiditate quo fugit magnam ut, assumenda facere, enim esse
            nam recusandae corrupti, modi eaque. Deserunt ex repudiandae
            eveniet, illum iure quidem quam impedit aliquam laboriosam ullam
            fugiat harum vel hic odio. Provident quibusdam, molestiae fugit in
            quae voluptates corrupti? Incidunt distinctio magni tenetur cumque.
            Quis placeat accusamus ut deserunt in.`,
      shortDescription:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dolores accusamus voluptate veniam optio amet. Saepe eius fugiat ad ea soluta?',
    },
    {
      id: 12,
      categoria: 'Comida',
      author: 'Autor Comida 5',
      collected: 1020,
      sponsors: 10,
      url: 'https://picsum.photos/id/62/800/500',
      urlLarge: 'https://picsum.photos/id/62/550/550',
      title: 'Comida 3',
      longDescription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            deleniti natus magnam ullam enim sint iure suscipit vero provident
            itaque! Cupiditate quo fugit magnam ut, assumenda facere, enim esse
            nam recusandae corrupti, modi eaque. Deserunt ex repudiandae
            eveniet, illum iure quidem quam impedit aliquam laboriosam ullam
            fugiat harum vel hic odio. Provident quibusdam, molestiae fugit in
            quae voluptates corrupti? Incidunt distinctio magni tenetur cumque.
            Quis placeat accusamus ut deserunt in.`,
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente, laudantium. Expedita',
    },
    {
      id: 13,
      categoria: 'Juegos',
      author: 'Autor Juegos 2',
      collected: 220,
      sponsors: 2,
      url: 'https://picsum.photos/id/29/800/500',
      urlLarge: 'https://picsum.photos/id/29/550/550',
      title: 'Juegos 1',
      longDescription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            deleniti natus magnam ullam enim sint iure suscipit vero provident
            itaque! Cupiditate quo fugit magnam ut, assumenda facere, enim esse
            nam recusandae corrupti, modi eaque. Deserunt ex repudiandae
            eveniet, illum iure quidem quam impedit aliquam laboriosam ullam
            fugiat harum vel hic odio. Provident quibusdam, molestiae fugit in
            quae voluptates corrupti? Incidunt distinctio magni tenetur cumque.
            Quis placeat accusamus ut deserunt in.`,
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente, laudantium. Expedita',
    },
    {
      id: 14,
      categoria: 'Juegos',
      author: 'Autor Juegos 2',
      collected: 310,
      sponsors: 4,
      url: 'https://picsum.photos/id/33/800/500',
      urlLarge: 'https://picsum.photos/id/33/550/550',
      title: 'Juegos 2',
      longDescription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            deleniti natus magnam ullam enim sint iure suscipit vero provident
            itaque! Cupiditate quo fugit magnam ut, assumenda facere, enim esse
            nam recusandae corrupti, modi eaque. Deserunt ex repudiandae
            eveniet, illum iure quidem quam impedit aliquam laboriosam ullam
            fugiat harum vel hic odio. Provident quibusdam, molestiae fugit in
            quae voluptates corrupti? Incidunt distinctio magni tenetur cumque.
            Quis placeat accusamus ut deserunt in.`,
      shortDescription:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dolores accusamus voluptate veniam optio amet. Saepe eius fugiat ad ea soluta?',
    },
    {
      id: 15,
      categoria: 'Juegos',
      author: 'Autor Juegos 2',
      collected: 320,
      sponsors: 6,
      url: 'https://picsum.photos/id/20/800/500',
      urlLarge: 'https://picsum.photos/id/20/550/550',
      title: 'Juegos 3',
      longDescription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            deleniti natus magnam ullam enim sint iure suscipit vero provident
            itaque! Cupiditate quo fugit magnam ut, assumenda facere, enim esse
            nam recusandae corrupti, modi eaque. Deserunt ex repudiandae
            eveniet, illum iure quidem quam impedit aliquam laboriosam ullam
            fugiat harum vel hic odio. Provident quibusdam, molestiae fugit in
            quae voluptates corrupti? Incidunt distinctio magni tenetur cumque.
            Quis placeat accusamus ut deserunt in.`,
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente, laudantium. Expedita',
    },
    {
      id: 16,
      categoria: 'Musica',
      author: 'Autor Musica 1',
      collected: 450,
      sponsors: 6,
      url: 'https://picsum.photos/id/10/800/500',
      urlLarge: 'https://picsum.photos/id/10/550/550',
      title: 'Musica 1',
      longDescription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            deleniti natus magnam ullam enim sint iure suscipit vero provident
            itaque! Cupiditate quo fugit magnam ut, assumenda facere, enim esse
            nam recusandae corrupti, modi eaque. Deserunt ex repudiandae
            eveniet, illum iure quidem quam impedit aliquam laboriosam ullam
            fugiat harum vel hic odio. Provident quibusdam, molestiae fugit in
            quae voluptates corrupti? Incidunt distinctio magni tenetur cumque.
            Quis placeat accusamus ut deserunt in.`,
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente, laudantium. Expedita',
    },
    {
      id: 17,
      categoria: 'Musica',
      author: 'Autor Musica 4',
      collected: 560,
      sponsors: 8,
      url: 'https://picsum.photos/id/90/800/500',
      urlLarge: 'https://picsum.photos/id/90/550/550',
      title: 'Musica 2',
      longDescription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            deleniti natus magnam ullam enim sint iure suscipit vero provident
            itaque! Cupiditate quo fugit magnam ut, assumenda facere, enim esse
            nam recusandae corrupti, modi eaque. Deserunt ex repudiandae
            eveniet, illum iure quidem quam impedit aliquam laboriosam ullam
            fugiat harum vel hic odio. Provident quibusdam, molestiae fugit in
            quae voluptates corrupti? Incidunt distinctio magni tenetur cumque.
            Quis placeat accusamus ut deserunt in.`,
      shortDescription:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dolores accusamus voluptate veniam optio amet. Saepe eius fugiat ad ea soluta?',
    },
    {
      id: 18,
      categoria: 'Musica',
      author: 'Autor Musica 1',
      collected: 660,
      sponsors: 9,
      url: 'https://picsum.photos/id/60/800/500',
      urlLarge: 'https://picsum.photos/id/60/550/550',
      title: 'Musica 3',
      longDescription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            deleniti natus magnam ullam enim sint iure suscipit vero provident
            itaque! Cupiditate quo fugit magnam ut, assumenda facere, enim esse
            nam recusandae corrupti, modi eaque. Deserunt ex repudiandae
            eveniet, illum iure quidem quam impedit aliquam laboriosam ullam
            fugiat harum vel hic odio. Provident quibusdam, molestiae fugit in
            quae voluptates corrupti? Incidunt distinctio magni tenetur cumque.
            Quis placeat accusamus ut deserunt in.`,
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente, laudantium. Expedita',
    },
  ];

  constructor() {}

  getOneById(id: number) {
    return this.destacadosTotal.find((item) => item.id === id);
  }

  
}

<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-between
      .col-lg-7
        p La producción gráfica es uno de los grandes cimientos de la comunicación del mundo actual; se puede definir como el proceso por el cual se lleva a cabo la reproducción de cualquier proyecto gráfico, desde el diseño o boceto de una idea, hasta elaborar el producto final, utilizando como herramientas diferentes medios tecnológicos, sistemas de impresión, variedad de materiales, técnicas y acabados.
          br
          br
          |Es importante para el estudio de este componente formativo comprender que inmerso en la producción se encuentran elementos principales y funcionales del diseño, como el color, la tipografía, la geometría, diagramación, el uso de programas esenciales y diversas técnicas utilizadas durante todo el proceso creativo. Este proceso es un pilar básico en el desarrollo gráfico, empieza con la observación del mundo externo y las exigencias que el mercado actual demanda. Cualquier proyecto surge a partir de las necesidades estipuladas por un cliente, enfocándose en dar solución efectiva a una problemática o necesidad, a partir de la cual se desarrolla una propuesta gráfica, que apunta a la elaboración de piezas, prototipos y elementos que cumplan con la calidad, y objetivos requeridos, y con base en los parámetros universales de efectividad, funcionalidad y de uso.
        .cajon.color-acento-botones.p-4.mb-4
          p El desarrollo de cualquier pieza gráfica requiere en primera instancia de un proceso de investigación, observación y comunicación con el cliente, donde se concretan e identifican varias soluciones a una problemática particular, seguido a esto, se da paso a la invención por medio del desarrollo de bocetos, que pasan a ser prototipos, perfeccionados en diversos programas de diseño; posteriormente ejecuta el proceso de preprensa hasta llegar a la impresión y acabados finales.
        p Por lo anterior, en este componente formativo profundiza en el prototipado de empaques, miles de productos nacientes y existentes en el mercado necesitan del desarrollo de empaques, y elementos de protección e identificación, que resalten sus cualidades y los hagan únicos e inigualables ante el resto de la competencia existente, teniendo como prioridad las exigencias y uso de materiales convenientes no solo para los productos sino para el cuidado del medio ambiente. 

      .col-lg-5
          img(src='@/assets/curso/img1.jpg', alt='Texto que describa la imagen')
            
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>

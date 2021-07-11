<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    //Muestras
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Prototipado
    p.mb-5 Es la representación de una idea de producto o servicio, como modelo de prueba para estudiar su viabilidad e implementación. Lo invito a revisar el siguiente video para conocer más sobre este tema:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    #t_1_1.titulo-segundo
      h2 1.1  Del boceto al prototipo
    .row.mb-5
      .col-lg-7
        p Para obtener información sobre cómo realizar un proyecto gráfico, se debe iniciar llevando a cabo una lluvia de ideas, la cual se puede reforzar a través de la consulta bibliográfica, revisión de información en la web, observación del tipo de piezas gráficas que se manejan en algunos sitios y lugares en la calle, también, a través del intercambio de ideas con el equipo de trabajo. El boceto es considerado como un modelo de representación o el primer dibujo del prototipo, en donde se proyectan diferentes ideas con un mismo fin, con el propósito de dar diferentes soluciones al diseño requerido. Esto da la posibilidad de conceptualizar y materializar las ideas; es utilizado como la base esencial de prototipos, croquis, planos, gráficos, maquetas, entre otros. 
          br
          br
          |Así, el prototipo se puede definir como la versión real de una matriz, patrón o diseño de un producto, para hacer una demostración del elemento que se está elaborando, realizando pruebas de viabilidad, uso y pertinencia, por ejemplo, en el empaque de un producto. Siendo una propuesta inicial, el prototipo tiene en cuenta los elementos que funcionan y aquellos que presentan dificultad o inconveniencia, entonces en forma oportuna se realizan las correcciones, con el fin de reducir posibles pérdidas de insumos y dinero.
          br
          br
          |En el desarrollo y proceso de diseño de un producto, se pueden utilizar diferentes métodos de dibujo, para lograr plasmar la idea gráficamente y que sea entendida por el público al cual va dirigido, entre estos se encuentran:
      .col-lg-5
          img(src='@/assets/curso/img2.svg', alt='Texto que describa la imagen')
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-4
        .row.justify-content-center.mb-4
          .col-12
            figure
              img(src='@/assets/curso/img3.svg', alt='Texto que describa la imagen')
          
        h2.text-center El croquis
        p Es un dibujo realizado a mano alzada, que contiene información detallada sobre las dimensiones (medidas) y la forma de un objeto, para que pueda ser fabricado bajo esas indicaciones. Es un muestreo gráfico, con más detalles que en el boceto y su desarrollo necesita exactitud y claridad. A manera de ejemplo se presenta el siguiente croquis:

      .col-md.tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-4
          .col-12
            figure
              img(src='@/assets/curso/img4.jpg', alt='Texto que describa la imagen')
          
        h2.text-center Planos 
        p Son representaciones geográficas que indican o marcan ubicaciones, desde el plano de una ciudad hasta el desarrollo de un barrio. Es un concepto basado en el manejo de la geometría y su ejecución junto a la de mapas, siendo una de las finalidades de la cartografía. Un plano se define como un objeto que posee dos dimensiones y contiene infinitos puntos y rectas. No posee volumen, es bidimensional.

      .col-md.tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-4
          .col-12
            figure
              img(src='@/assets/curso/img5.jpg', alt='Texto que describa la imagen')
        h2.text-center Gráfica
        p Son designaciones que representan la información de datos por lo general numéricos, mediante recursos gráficos como líneas, vectores, superficies o símbolos, para que se manifieste visualmente la relación matemática o correlación estadística que tienen entre sí. 
    Separador
    #t_1_2.titulo-segundo
      h2 1.2  Propuesta de diseño
    p.mb-5 Es un documento que utilizan diseñadores independientes (freelance), agencias de diseño y publicidad, entre otros, mediante el cual acuerdan con sus clientes detalles sobre proyectos de diseño y publicidad.
      br
      br
      |Una propuesta de diseño tiene que ser clara, profesional e iniciar con un concepto y un sentido creativo, ya que identificará al negocio que así lo demanda. Por otro lado, debe trabajar de la mano con el concepto de marca, filosofía, objetivos y sentido de pertenencia, aspectos relacionados con la identidad de la organización y que deben estar plasmados en el brief.
      br
      br
      |A continuación, se indican los pasos a tener en cuenta para presentar una propuesta exitosa: 
    PasosA.color-acento-contenido.mb-5(tipo="n")
      .row
        h3 Definir alcance del proyecto:
        p Determinar los objetivos de lo que se hará, siendo claros y delimitados, con el fin de llegar a acuerdos con el cliente en cuanto a diseño, tiempo y costos. 
        
      .row
        h3 Brief 
        p Este posibilita un mejor entendimiento entre las partes y la concepción de la idea a plasmar; contiene información necesaria para  iniciar a planificar o ejecutar el proyecto.
      .row
        h3 Lluvia de ideas
        p Junto con el equipo de trabajo, se debe generar una lluvia de ideas, que permita identificar varias alternativas que apunten a solucionar la problemática.
      .row
        h3 Estrategia
        p  Este punto se desarrollan las estrategias (acciones) que se llevarán a cabo para la consecución del proyecto. La estrategia es el plan para lograr los objetivos. 
      .row
        h3 Bocetación
        p Es el primer paso de todo diseño, en el cual se desarrollan diversas propuestas previas al prototipo final. Generalmente es una ilustración que carece de definición y detalles. 
      .row
        h3 Artes finales
        p Esta etapa materializa la realización del producto final, con todos los requerimientos, materiales y cambios finales, para garantizar que el contenido no tiene errores y está listo para la impresión.
      .row
        h3 Retroalimentación final
        p Es importante realizar un ultimo repaso de lo que se va a hacer con los clientes y el equipo de trabajo, para mejorar procesos a futuro y destacar los aciertos en la planificación y ejecución del proyecto. 
    #t_1_3.titulo-segundo
      h2 1.3. Ajustes y correcciones tempranas
    p.mb-5 La optimización de los tiempos de ejecución del proyecto gráfico, el cumplimiento de las tareas y reporte de avances, deben ser la prioridad de todo diseñador. Los ajustes y correcciones tempranas son de suma importancia en el mundo del diseño y las artes gráficas, ya que una vez aprobada una propuesta y llevada al campo de acción no se puede arreglar, por ejemplo, en la impresión, es muy difícil realizar correcciones tardías, lo cual implica una pérdida de tiempo, dinero, material y credibilidad por parte del cliente. 
    .row.mb-5
      .col-lg-7
        p Se debe determinar con precisión todas las aristas y fases del proyecto, como los costos, tiempos de entrega, materiales, diseño, modos de impresión, partes finales, etc., una vez se compromete el diseñador o la empresa, los gastos extras incurridos por errores que no se anticiparon, pueden llegar a ser asumidos por el diseñador encargado. 
          br
          br
          |Es importante elaborar un cronograma, para cumplir con el desarrollo y entregas de las actividades propuestas y tener el tiempo justo en caso de requerir realizar ajustes o correcciones, solicitadas por el diseñador o cliente.
          br
          br
          |Estas son algunas recomendaciones importantes para tener en cuenta:
      .col-lg-5
          img(src='@/assets/curso/img6.svg', alt='Texto que describa la imagen')
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Planificación del cronograma de entregas").justify-content-center
        .col-md-2
          figure
            img(src='@/assets/curso/img7.svg', alt='Texto que describa la imagen')
        .col-md-9.mb-4.mb-md-0
          p Cuando está aprobado el presupuesto se puede elaborar detenidamente un cronograma de entrega de diseños, propuestas, aplicaciones de branding, diseño de packaging, etc. Programar los diferentes departamentos o entes que participan (responsables en la empresa de la revisión de proyecto, diseñadores, redactores de estilo, encargados de la fotografía y video, etc.), y a las áreas que se encargarán de la publicación de los diseños como imprentas, proveedores, etc.
            br
            br
            |Se puede concluir que el trabajo en equipo y el cumplimiento del cronograma es de vital importancia. Es claro que también se incluirá en el planning, las posibles revisiones de diseño y modificaciones previas a las entregas.
      .row(titulo="Propuestas de diseño").justify-content-center
        .col-md-2
          figure
            img(src='@/assets/curso/img8.svg', alt='Texto que describa la imagen')
        .col-md-9.mb-4.mb-md-0
          p En las fechas previamente agendadas y acordadas, debe hacerse la respectiva entrega de las propuestas, en esta fase de creación, el briefing ayudará a orientar el diseño hacia sus objetivos comunicativos. El éxito también depende de preguntar y aclarar con el cliente las dudas que surjan durante la conversación, así se evitarán errores y el diseño estará mejor enfocado, lo que conlleva a la satisfacción del cliente.
            br
            br
            |Se recomienda igualmente, la realización de un check list, para que el cliente firme su aprobación, y se registre la fecha y la entrega de las partes finales aprobadas e impresas. Este es un soporte válido en caso de posibles reclamos.
      .row(titulo="Entrega de archivos finales").justify-content-center
        .col-md-2
          figure
            img(src='@/assets/curso/img9.svg', alt='Texto que describa la imagen')
        .col-md-9.mb-4.mb-md-0
          p Por lo general, a los impresores se les hace entrega de los archivos en formato PDF, y son preparados con marcas de corte y sangrado, mientras que para pantalla son habituales los formatos: JPG, PNG y GIF.
      .row(titulo="Pruebas de impresión y publicación").justify-content-center
        .col-md-2
          figure
            img(src='@/assets/curso/img10.svg', alt='Texto que describa la imagen')
        .col-md-9.mb-4.mb-md-0
          p Primero se realiza una prueba de impresión previa, con el fin de revisar colores, calidad de imágenes y parámetros técnicos.
      .row(titulo="Comprobación y valoración de eficacia").justify-content-center
        .col-md-2
          figure
            img(src='@/assets/curso/img11.svg', alt='Texto que describa la imagen')
        .col-md-9.mb-4.mb-md-0
          p Es recomendable revisar las piezas y productos gráficos, si funcionan correctamente y qué aspectos se pueden mejorar. Una planeación minuciosa aunada a la ejecución y cumplimiento del cronograma de trabajo y entregas, así como la conformación de un equipo de trabajo comprometido y creativo, serán la base sólida del crecimiento profesional y corporativo.
    Separador
    #t_1_4.titulo-segundo
      h2 1.4. Orden de producción
    p.mb-5 Es un formato o soporte, que se realiza a partir de la organización y requerimientos del producto que se va a imprimir, algo similar a un check list técnico previo a la impresión, donde se revisan elementos como los siguientes: 
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/img12.svg' alt='AvatarTop')
          .tarjeta.color_contenido--claro
            .p-4
              h4.pe-5 Clase de producto: 
              p Cuál es el producto que se va a desarrollar, sus características en cuanto a sustratos, formatos y usos. Algunos de estos productos pueden ser: periódico, libro, revista, folleto, etiquetas, sobre, libretas, complejos, bolsas, formularios. 

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/img13.svg' alt='AvatarTop')
          .tarjeta.color_contenido--claro
            .p-4
              h4.pe-5 Originales y posibles datos aportados por el cliente:
              ul.lista-ul--color
                li 
                  i.fas.fa-check
                  | Soportes de impresión.
                li 
                  i.fas.fa-check
                  | Cantidad de tintas, duotono, tritono, cuatricromía.

                li 
                  i.fas.fa-check
                  | Cantidad de ejemplares que se van a imprimir.

                li 
                  i.fas.fa-check
                  | Tiempos, plazos y costos estimados.

                li 
                  i.fas.fa-check
                  | Características básicas en cuanto a todas las variables de diseño.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/img14.svg' alt='AvatarTop')
          .tarjeta.color_contenido--claro
            .p-4
              h4.pe-5 Observación del producto gráfico a partir de las siguientes variables:
              ul.lista-ul--color
                li 
                  i.fas.fa-check
                  | Tamaño y formato del documento, número de páginas, columnas, paginación, cabeceras.

                li 
                  i.fas.fa-check
                  | Tipografías, familias, interlineados, sangrías, textos.

                li 
                  i.fas.fa-check
                  | Tipo y cantidad de tintas.

                li 
                  i.fas.fa-check
                  | Tipo de papel, sustrato y materiales.
    .row.mb-5
      .col-lg-4
        a.anexo.mb-4(:href="obtenerLink('/downloads/orden_de_produccion.jpg')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Orden de producción. 




































</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Prototipado de empaques
    figure
      img(src='@/assets/curso/img52.jpg', alt='Texto que describa la imagen' )
    p.mb-5 Se puede definir como la presentación comercial de un producto, es un sistema de protección, hecho con materiales acordes a las necesidades requeridas por el mismo. Protege, conserva y exhibe el producto, para una mejor presentación. 
      br
      br
      |A continuación, algunas funciones del empaque:
    ul.lista-ul--color
          li 
            i.fas.fa-box-open
            p.mb-0
              b Contiene el producto.

          li 
            i.fas.fa-box-open
            p.mb-0
              b Conserva y protege las cualidades y características del producto.

          li 
            i.fas.fa-box-open
            p.mb-0
              b Resguarda el producto de factores externos que puedan dañar o alterar sus cualidades.

          li 
            i.fas.fa-box-open
            p.mb-0
              b Su diseño, impacto visual y características, promueven la rotación y venta de los productos.

          li 
            i.fas.fa-box-open
            p.mb-0
              b Facilita su transporte, embalaje y almacenamiento.
    .titulo-quinto.color-acento-contenido
      h4 Funciones comerciales del empaque
    .row.justify-content-center.mb-5
      .col-lg-8
          figure(data-aos="fade-down")
            img(src='@/assets/curso/img53.svg', alt='Texto que describa la imagen' )
    .titulo-quinto.color-acento-contenido
      h4 Un excelente empaque cumple las siguientes funciones
    .row.justify-content-center.mb-5
      .col-lg-8
          figure(data-aos="fade-up")
            img(src='@/assets/curso/img54.svg', alt='Texto que describa la imagen' )
    p.mb-5 Para desarrollar el prototipo de empaques es necesario tener en cuenta:
    TabsA.color-acento-contenido.mb-5
      .tarjeta.color_contenido--claro.p-4(titulo="a. Contenido")
        h3 a. Contenido
        p Determinar cuál será el contenido que va a llevar el empaque, sólido, líquido, fluido, pulverizado, esto ayuda a concebir la idea creativa, elegir insumos, sustratos, colores, forma, tamaño, peso. Por ejemplo, la gelatina viene en una caja de cartoncillo que a su vez está empacada en una bolsa por sus características físicas
      .tarjeta.color_contenido--claro.p-4(titulo="b. Materiales a utilizar")
        h3 b. Materiales a utilizar
        p El empaque protege el producto, al escoger los materiales a utilizar se deben tener en cuenta las propiedades del mismo, especialmente los empaques de alimentos y bebidas que deben cumplir con requerimientos específicos por sus características de durabilidad, el crecimiento de bacterias, patógenos, duración de sabor y color. Es fundamental escoger los materiales correctos ya que no es lo mismo un empaque para leche, que uno para atún. 
      .tarjeta.color_contenido--claro.p-4(titulo="c. Tamaño y capacidad")
        h3 c. Tamaño y capacidad
        p Calcular el tamaño de un empaque, suele ser uno de los problemas más comunes en su diseño. Por lo general se realizan cambios en el prototipo por la dificultad de calcular el volumen de los productos. Por ejemplo, se realiza una caja para zapatos, sin embargo, se debe tener en cuenta que las tallas para adulto van del número 34 hasta el 44, aproximadamente. 
      .tarjeta.color_contenido--claro.p-4(titulo="d. Temperatura")
        h3 d. Temperatura
        p Tener presente la temperatura a la cual debe estar un producto dentro de su empaque es importante, ya que puede limitar el diseño y los materiales a utilizar. La temperatura en el interior, puede generar por ejemplo gases que dañan el producto como tal, incluso al empaque en algunas ocasiones. 
      .tarjeta.color_contenido--claro.p-4(titulo="e. Complementos")
        h3 e. Complementos
        p Antes de tener en cuenta un prototipo final, es importante saber que complementos van a acompañar al mismo, por ejemplo, el uso de etiquetas o pestañas, esto puede cambiar el diseño por completo.
      .tarjeta.color_contenido--claro.p-4(titulo="f. Ensambles")
        h3 f. Ensambles
        p Algunos empaques tienen ensambles en su construcción, estos procesos pueden requerir técnicas adicionales en la impresión o materiales a utilizar. 
      .tarjeta.color_contenido--claro.p-4(titulo="g. Recursos")
        h3 g. Recursos
        p El proceso de producción puede requerir de diversos métodos y medios tecnológicos, que deben de estar presente en la concepción misma del proyecto.
    p.mb-5 Es importante considerar que: 
    .row.justify-content-center.mb-5
      .col-lg-8
          figure(data-aos="fade-up")
            img(src='@/assets/curso/img55.svg', alt='Texto que describa la imagen' )
    p.mb-5 Los prototipos se pueden clasificar en:
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img56.svg' alt='AvatarTop')
          .tarjeta.color_contenido--claro
            .p-4
              h5 ● Modelos funcionales: 
              p Se enfocan en las características funcionales del producto, independientemente de cómo luzca desde el punto de vista estético.
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img56.svg' alt='AvatarTop')
          .tarjeta.color_contenido--claro
            .p-4
              h5 ● Modelos formales: 
              p A través de ellos se puede conocer la forma en que reacciona un cliente ante el producto
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img56.svg' alt='AvatarTop')
          .tarjeta.color_contenido--claro
            .p-4
              h5 ● Baja fidelidad: 
              p Materializan la idea en papel o cartón.
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img56.svg' alt='AvatarTop')
          .tarjeta.color_contenido--claro
            .p-4
              h5 ● Impresión 3D: 
              p Este prototipo crea modelos en corto tiempo y se utiliza la tecnología actual, permitiendo que se acerque a la realidad del producto final.
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img56.svg' alt='AvatarTop')
          .tarjeta.color_contenido--claro
            .p-4
              h5 ● Prototipo exploratorio: 
              p Consiste en probar algunas características del producto, como su funcionalidad y atractivo a los clientes, siendo esa comprobación informal. Sin embargo, cuando se hacen los ajustes y correcciones propuestas sobre el prototipo, este prototipo exploratorio se desecha. Se utiliza para dar claridad a las metas del proyecto, determinar los requerimientos, revisar alternativas o modificaciones.
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img56.svg' alt='AvatarTop')
          .tarjeta.color_contenido--claro
            .p-4
              h5 ● Prototipo estructural: 
              p Se encarga de aproximarse mucho más al producto final, escogiendo los materiales, el tipo de impresión o troquelado, creando el empaque que satisfaga las necesidades del cliente y por supuesto teniendo en cuenta el producto que va a contener, así como las características de la materia prima en que se elaborará, tipo de cierre, estilo de caja, acabados y el uso final del mismo. Es un prototipo más elaborado y cercano al producto final.
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img56.svg' alt='AvatarTop')
          .tarjeta.color_contenido--claro
            .p-4
              h5 ● Prototipo operacional: 
              p Por medio del cual se va perfeccionando el prototipo hasta que se convierte en el producto final.
    figure.mb-5
      img(src='@/assets/curso/img57.jpg', alt='Texto que describa la imagen' )
    p.mb-5 
      b Funcionalidad y usos de los prototipos:
      b-none como el proceso de prototipado puede resultar muy costoso, debido a las herramientas utilizadas y a la elaboración de muchas pruebas, se recomienda evaluar la necesidad del prototipo y qué tan importante es que se pre visualice con el máximo realismo el producto terminado. 
      br
      br
      |Los prototipos se utilizan para reducir el margen de riesgo, la incertidumbre del cliente respecto al producto terminado y su viabilidad, el aspecto y la percepción del producto a través de su vista previa.
      br
      br
      |Así mismo, el prototipo permite seleccionar la propuesta de diseño a través del 3D, se pueden verificar las aristas, superficies, estabilidad, empaque, las zonas de etiquetado, los colores, los dobleces, los códigos de barra, la revisión de los acabados, el análisis de las dimensiones, el ensamble y la capacidad interna del producto y la usabilidad entre otros aspectos, etc. 
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-a.color-primario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              h2.mb-0 Teniendo un prototipo, se puede realizar la presentación al cliente para conocer su satisfacción, así como estudios con los consumidores.
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p  El análisis de estos aspectos permitirá ajustar el prototipo, lo que conduce a tener un producto final de excelente calidad y así reducir el margen de error y ahorrar en costos, pues se tomarán buenas decisiones desde la etapa de creación hasta la producción final.
                  br
                  br
                  | Hoy se habla de los dummies que son prototipos a escala natural de un producto, conservando todas las características visuales, de diseño, color, textura, dimensiones y son un medio muy importante para comunicar una marca o un producto. También se habla con frecuencia de los renders, que son prototipos que consisten en una visualización digital en 3D de un producto.
    p.mb-5 
      b Materiales: 
      b-none los prototipos pueden elaborarse en los siguientes materiales:
    .row.justify-content-center.mb-5
      .col-lg-10
        .contenedor-imagenes.color_botones--claro.p-3.d-flex.justify-content-center
          .contenedor-imagenes__imagen.m-4 
            img.mb-3(src='@/assets/curso/img58.svg', alt='Texto que describa la imagen' )
            h5.text-center Papel.
          .contenedor-imagenes__imagen.m-4 
            img.mb-3(src='@/assets/curso/img59.svg', alt='Texto que describa la imagen' )
            h5.text-center Cartón.
          .contenedor-imagenes__imagen.m-4 
            img.mb-3(src='@/assets/curso/img60.svg', alt='Texto que describa la imagen' )
            h5.text-center Plástico metalizado
          .contenedor-imagenes__imagen.m-4 
            img.mb-3(src='@/assets/curso/img61.svg', alt='Texto que describa la imagen' )
            h5.text-center Celofán
          .contenedor-imagenes__imagen.m-4 
            img.mb-3(src='@/assets/curso/img62.svg', alt='Texto que describa la imagen' )
            h5.text-center Polipropileno
          .contenedor-imagenes__imagen.m-4 
            img.mb-3(src='@/assets/curso/img63.svg', alt='Texto que describa la imagen' )
            h5.text-center Vidrio
          .contenedor-imagenes__imagen.m-4 
            img.mb-3(src='@/assets/curso/img64.svg', alt='Texto que describa la imagen' )
            h5.text-center Metal
          .contenedor-imagenes__imagen.m-4 
            img.mb-3(src='@/assets/curso/img65.svg', alt='Texto que describa la imagen' )
            h5.text-center Madera
          .contenedor-imagenes__imagen.m-4 
            img.mb-3(src='@/assets/curso/img66.svg', alt='Texto que describa la imagen' )
            h5.text-center Tela
          .contenedor-imagenes__imagen.m-4 
            img.mb-3(src='@/assets/curso/img67.svg', alt='Texto que describa la imagen' )
            h5.text-center Impresión 3D
    .row.justify-content-between.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/img68.jpg', alt='Texto que describa la imagen')
      .col-lg-6
        p 
          b Estructuras: 
          b-none el prototipo de empaque puede ser elaborado en cualquier material y es utilizado para envolver un producto, aunque muchas veces no tenga contacto directo con el mismo y se convierta en una segunda capa que lo envuelve. Generalmente protegen al envase, y a veces tienen una estructura flexible de celofán, papel o tela, por ejemplo, como en el caso de las bolsas, cajas o costales, que pueden contener impresos gráficos resultando muchas veces muy atractivos para los clientes y normalmente se le considera un empaque secundario. Sin embargo, el empaque puede tener estructura rígida si es de polietileno, PVC o metalizado, o una estructura semirrígida por ejemplo si es de aluminio
    .row.justify-content-between.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/img69.jpg', alt='Texto que describa la imagen')
      .col-lg-6
        p 
          b Conceptos de diseño: 
          b-none el elemento más importante de contacto con el consumidor es el empaque, pues constituye un motivo para la venta del producto, al atraer la atención y la curiosidad del comprador. El diseño del empaque da un valor agregado al producto, ya que es vital que lo identifique y sea armonioso con el contenido. Es trascendental que se adecúe a las necesidades del cliente por su practicidad, ergonomía, seguridad e higiene, pues genera emociones que llevan al posicionamiento de una marca y se convierte en un componente del producto, y coadyuva en la exhibición y competitividad en los estantes. El diseño del empaque varía desde un envoltorio en plástico o papel, hasta una caja o tambor de madera o acero. El diseño determina si el empaque es primario, el cual contiene al producto, secundario si contiene uno o más paquetes primarios o terciario si contiene uno o más paquetes secundarios
    p.mb-5 El empaque debe ser atractivo para el comprador, por lo que al diseñar es decisivo tener en cuenta también lo que se presenta a continuación:
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Forma" :icono="require('@/assets/curso/img70.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Forma
            p Está directamente relacionada con el diseño estructural y funcional del empaque, pues debe cumplir con los requerimientos técnicos de acuerdo con cada producto.

          .col-md-6
            figure
              img(src='@/assets/curso/img74.jpg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Imágenes" :icono="require('@/assets/curso/img71.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Imágenes
            p Son ilustraciones y símbolos que ayudan a reforzar el contenido y comunican un mensaje por asociación respecto al producto, generando recordación en el consumidor.
          .col-md-6
            figure
              img(src='@/assets/curso/img75.jpg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Colores" :icono="require('@/assets/curso/img72.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Colores
            p Visualmente el empaque debe atraer al consumidor o generarle curiosidad, es el contacto emotivo y psicológico con el producto. El color permite transmitir un mensaje o emoción concreta. 

          .col-md-6
            figure
              img(src='@/assets/curso/img76.jpg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Tipografía" :icono="require('@/assets/curso/img73.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Tipografía
            p Debe ser de fácil lectura, y se adjuntará la información relacionada con el tipo de contenido, la composición del producto, forma de utilización, registro de marca y normas legales.
          .col-md-6
            figure
              img(src='@/assets/curso/img77.jpg', alt='Texto que describa la imagen')
    Separador 
    #t_3_1.titulo-segundo
      h3 3.1 Clasificación de empaques
    p.mb-5 Los tipos de empaques suelen diferenciarse a partir del producto o elemento que contienen o envasan, en relación con sus características y cantidad. En el siguiente cuadro se presenta la clasificación por empaques primarios, secundarios y terciarios: 
    .tabla-a.color-acento-contenido.mb-5 
      table
        thead
          tr
            th Primarios
            th Secundarios
            th Terciarios
        tbody
          tr
            td El empaque tiene contacto directo con el producto. En su etiqueta tiene información relevante como su fecha de vencimiento, ingredientes, cantidad, etc.
            td Contiene varias unidades del empaque primario.
            td Puede contener y agrupar varios empaques primarios o secundarios.
            
          tr
            td 
              figure
                img(src='@/assets/curso/img78.jpg', alt='Texto que describa la imagen')
            td 
              figure
                img(src='@/assets/curso/img79.jpg', alt='Texto que describa la imagen')
            td 
              figure
                img(src='@/assets/curso/img80.jpg', alt='Texto que describa la imagen')
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img81.svg' alt='AvatarTop')
          .tarjeta.color_contenido--claro
            .p-4
              h5 Envase: 
              p Recipiente que tiene contacto directo con el producto específico, con la función de envasarlo y protegerlo.
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img82.svg' alt='AvatarTop')
          .tarjeta.color_contenido--claro
            .p-4
              h5 Empaque:
              p Recipiente o envoltura que contiene un producto de manera temporal. 
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img83.svg' alt='AvatarTop')
          .tarjeta.color_contenido--claro
            .p-4
              h5 Embalaje:
              p El embalaje contiene varias unidades de un producto y prepara la carga en la forma más adecuada para el modo de transporte elegido para su despacho. El embalaje ofrece algunas ventajas como: 
              ul.lista-ul--color2
                li.mb-2
                  i.fas.fa-check.me-2
                  | Facilitar el traslado de la carga y permitir su transporte en las mejores condiciones, según el modo que se utilice.

                li.mb-2 
                  i.fas.fa-check.me-2
                  | Manipular de manera adecuada los productos. 

                li.mb-2 
                  i.fas.fa-check.me-2
                  | Facilitar el almacenamiento.

                li 
                  i.fas.fa-check.me-2
                  | Facilitar las condiciones idóneas para su distribución.
    Separador
    #t_3_2.titulo-segundo
      h2 3.2 Tipos de empaque, funcionalidad y usos
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/img84.svg', alt='Texto que describa la imagen').efecto__hover
          
        h2.text-center Empaque natural
        p.text-center Está compuesto principalmente por materiales o medios amigables con el medio ambiente. Un ejemplo claro de este tipo de empaques se encentra en la misma naturaleza, como la envoltura natural de la mazorca de maíz. 
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/img85.svg', alt='Texto que describa la imagen').efecto__hover
          
        h2.text-center Empaque artificial
        p.text-center Es todo aquel que se obtiene a partir de un proceso generado por la transformación del hombre y cuya materia prima es tomada de la naturaleza. Ejemplo de este tipo de recursos son los cartones, el papel, o los polímeros.
    p.mb-5 Se describen a continuación, algunas funcionalidades y usos de acuerdo con el tipo de empaque utilizado: 
    SlyderB.mb-5(:datos="datosSlyder")
    p.mb-5 El empaque protege al producto de los siguientes riesgos:
    .row.mb-3.justify-content-center
      .col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/img92.svg' alt='AvatarTop')
          .tarjeta.color_contenido--claro
            .p-4.text-center
              h4 Mecánicos
              p Protege en el momento de la carga y embalaje al producto, de sobrecargas, golpes y maltrato generado en el almacenamiento y distribución, deterioro en el set de exhibición. 
      .col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/img93.svg' alt='AvatarTop')
          .tarjeta.color_contenido--claro
            .p-4.text-center
              h4 Químicos
              p Protege de contaminación aerobia o anaerobia de microbios, virus y demás patógenos que puedan estar en el ambiente, y de la reacción de los componentes de un empaque con otro, por exposición con diferentes materiales.
    .row.mb-5.justify-content-center
      .col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/img94.svg' alt='AvatarTop')
          .tarjeta.color_contenido--claro
            .p-4.text-center
              h4 Térmicos:
              p Protege de los cambios abruptos de temperatura durante el transporte o exhibición, y a la exposición de frío o calor excesivo, a veces por mal funcionamiento de los aparatos electrónicos. 
      .col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/img95.svg' alt='AvatarTop')
          .tarjeta.color_contenido--claro
            .p-4.text-center
              h4 Comerciales
              p Protege durante la exhibición y promoción del producto en el área de venta, por maltrato del empaque, pueden ser sustraídos, destapados, probados, alterados y manipulados.  
    p.mb-5 El empaque cumple la función de protección a:
    .row.justify-content-center.mb-5
      .col-lg-10
        .contenedor-imagenes.color_botones--claro.p-5.d-flex
          ul.lista-ul--color2
            li.d-flex.mb-3   
              i.fas.fa-square-full.me-2
              p.mb-0
                b Producto: 
                b-none el empaque protege principalmente las características esenciales del producto, como lo pueden ser el color, olor, textura, calidad, peso, sus cualidades organolépticas.

            li.d-flex.mb-3   
              i.fas.fa-square-full.me-2
              p.mb-0
                b Consumidor:
                b-none permite que el consumidor encuentre un producto con características físicas y microbiológicas de buena calidad, en el caso de los alimentos, con el peso y precio justo.

            li.d-flex.mb-3    
              i.fas.fa-square-full.me-2
              p.mb-0
                b Humano:
                b-none el empaque debe contar con medidas estándar de calificación que permitan garantizar la estabilidad organoléptica del producto, sea un alimento o un producto médico.
            li.d-flex.mb-3    
              i.fas.fa-square-full.me-2
              p.mb-0
                b Productor:
                b-none beneficia el trabajo e inversión que realiza el productor, para hacer que sus productos lleguen al mercado, sean apetecidos, valorados y vendidos. 
            li.d-flex.mb-3    
              i.fas.fa-square-full.me-2
              p.mb-0
                b Comercializador:
                b-none  por el cuidado que provee la mercancía, puede obtener un mejor margen de ganancia dentro de la cadena de venta, al tener productos de buena calidad en un excelente empaque.
            li.d-flex.mb-3    
              i.fas.fa-square-full.me-2
              p.mb-0
                b Distribuidor - transportador:
                b-none podrán realizar el trabajo de una manera más rápida, ágil y segura, debido a que un empaque adecuado puede ahorrar tiempos de movilización y mano de obra.
            li.d-flex.mb-3    
              i.fas.fa-square-full.me-2
              p.mb-0
                b Medio ambiente:
                b-none se debe propender por garantizar que el empaque cause el menor impacto ambiental, tratando de que sus materiales sean biodegradables o reciclables.
            li.d-flex.mb-3    
              i.fas.fa-square-full.me-2
              p.mb-0
                b Asegurador:
                b-none es posible que los empaques con un diseño pensado en las necesidades de bodegaje, transporte y distribución, generan menos riesgos y accidentes dentro de los espacios de trabajo.
            li.d-flex.mb-3    
              i.fas.fa-square-full.me-2
              p.mb-0
                b Vendedor:
                b-none  en el área de estanterías de ventas, un empaque con un diseño funcional y en realizado con los materiales correctos, permitirá el ahorro de espacio, ser llamativo dentro de las demás marcas y así generar mejores ganancias al dueño. 
            li.d-flex.mb-3    
              i.fas.fa-square-full.me-2
              p.mb-0
                b Estado:
                b-none el estado se beneficia de todas las transacciones mercantiles y de venta que realicen los particulares ya que por ellas cobra impuestos e IVA, entre otros.
    p.mb-5 Principales materiales para envases, empaques y embalajes:
    .tabla-a.color-acento-contenido.mb-5 
      table
        thead
          tr
            th Material
            th Tipo
            th Ejemplo
            th Ventajas
            th Desventajas
        tbody
          tr
            td
              b Papel 
            td N/A
            td 
              .contenedor_modal.d-flex
                a.boton.color-acento-botones.indicador__container(@click="modal1 = true").me-2.my-auto
                  i.fas.fa-eye.text-white
                  .indicador--click(v-if="mostrarIndicador")
                p.my-auto Bolsas
            td Bajos costos, fácil de reciclar.
            td Frágil, sensible al calor y humedad.
          tr
            td
              b Madera
            td Madera en bruto, descortezada, cepillada, contrachapada, aglomerada.
            td 
              .contenedor_modal.d-flex
                a.boton.color-acento-botones.indicador__container(@click="modal2 = true").me-2.my-auto
                  i.fas.fa-eye.text-white
                p.my-auto Cajas, pallet, canastas, huacales.
            td Fácil de manipular y estibar.
            td Altos costos, sensible al sol y humedad, contaminante, sensible a plagas, voluminoso, pesado e inflamable.
          tr
            td
              b Cartón 
            td Sólido, ondulado, corrugado, gris, fibra, cartoncillo.
            td 
              .contenedor_modal.d-flex
                a.boton.color-acento-botones.indicador__container(@click="modal3 = true").me-2.my-auto
                  i.fas.fa-eye.text-white
                p.my-auto Cajas de cartón
            td Económico, reciclable, biodegradable, de fácil manipulación.
            td Frágil y sensible a la humedad y calor, poco sólido, no reutilizable.
          tr
            td
              b Plástico 
            td Poliestireno, poliestireno anticalórico, espuma de poliestireno, poliestireno antichoque, policarbonato, poliuretano, polietileno HD, LD, polipropileno.
            td 
              .contenedor_modal.d-flex
                a.boton.color-acento-botones.indicador__container(@click="modal4 = true").me-2.my-auto
                  i.fas.fa-eye.text-white
                p.my-auto Bolsas, toneles, bidones, cajas, contenedores semirrígidos y rígidos, botellas, garrafas.
            td Impermeabilidad, diversidad y fácil manipulación. 
            td Inflamable, costoso de eliminación difícil.
          tr
            td
              b Metales
            td Lámina de aluminio y acero.
            td 
              .contenedor_modal.d-flex
                a.boton.color-acento-botones.indicador__container(@click="modal5 = true").me-2.my-auto
                  i.fas.fa-eye.text-white
                p.my-auto Bidones, contenedores, recipientes, cajas metálicas
            td Solidez, reutilizable.
            td Costo elevado, corrosión difícil, voluminoso.
          tr
            td
              b Vidrio 
            td 
            td 
              .contenedor_modal.d-flex
                a.boton.color-acento-botones.indicador__container(@click="modal6 = true").me-2.my-auto
                  i.fas.fa-eye.text-white
                p.my-auto Botellas, frascos, botellones.
            td Visibilidad del contenido, reciclable de fácil eliminación.
            td Frágil a golpes, pesado y voluminosos.
    ModalA(:abrir-modal.sync="modal1")
      img(src='@/assets/curso/img96.jpg' alt='AvatarTop')
    ModalA(:abrir-modal.sync="modal2")
      img(src='@/assets/curso/img97.jpg' alt='AvatarTop')
    ModalA(:abrir-modal.sync="modal3")
      img(src='@/assets/curso/img98.jpg' alt='AvatarTop')
    ModalA(:abrir-modal.sync="modal4")
      img(src='@/assets/curso/img99.jpg' alt='AvatarTop')
    ModalA(:abrir-modal.sync="modal5")
      img(src='@/assets/curso/img100.jpg' alt='AvatarTop')
    ModalA(:abrir-modal.sync="modal6")
      img(src='@/assets/curso/img101.jpg' alt='AvatarTop')
    Separador
    #t_3_3.titulo-segundo
      h2 3.3 Materiales
    .row.mb-5.align-items-center
      .col-lg-6.mb-5.mb-lg-0
        //- .bloque-texto-b debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        .bloque-texto-b.color-acento-contenido.p-4
          .bloque__bf
            .bloque-texto-b__texto
              h2.mb-0.ms-5 En la industria se utilizan gran diversidad de materiales, especialmente derivados de fibras de celulosa procedentes de la pulpa de la madera.
      .col-lg-6.mb-5.mb-lg-0
        p La impresión flexo gráfica, es el método que utiliza una plancha en relieve flexible que permite imprimir sobre diferentes tipos de sustrato; la industria del empaque ha tenido un gran desarrollo, lo que ha hecho que sus costos se reduzcan. En diseño, la selección apropiada del sustrato (papel, tela, material de reciclaje, plástico o metal) es muy importante. Se debe tener en cuenta al momento de elegir el sustrato, la terminación o textura de la superficie, color, gramaje y características de la impresión. Igualmente, las planchas flexibles fácilmente se adaptan a superficies ligeramente desiguales por lo que se puede imprimir en sustratos como el cartón, sin ejercer mucha presión. Uno de los sustratos que se encuentran en el mercado es el cartón recubierto, que es la materia prima esencial para producir empaques plegables.  
    p.mb-5 El cartón es un sustrato formado por la transposición de papeles, como en capas, lo que le otorga mayor resistencia y dureza; existen básicamente cuatro variedades de cartón recubierto: reciclado recubierto, cartón sólido blanqueado, kraft no blanqueado recubierto y plegadizo para cajas:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      div(titulo="1. Cartón Reciclado Recubierto (CRR), o cartón dúplex y de respaldo gris. En inglés se conoce como CCN y WLC: ").px-5
        p Esta referencia es la predominante en la industria, es importante destacar que cuando se está imprimiendo es menos flexible que otras variedades. 
          br
          br
          |Es el cartón más económico se usa en empaques que no requieran una excelente impresión, resistencia o limpieza, pues se elabora con una mezcla de fibras que han sido recicladas, del papel periódico impreso, cajas o contenedores corrugados, que tienen un recubrimiento multicapa. 
      div(titulo="2. El Cartón Sólido Blanqueado o CSB: ").px-5
        p Tradicionalmente esta es la referencia más costosa, Este tipo de cartón puede tener un pigmento blanco con una capa de estuco que puede ser doble o triple en la parte superior, y una o dos en el reverso. El CSB, en la prensa, ofrece excelente impresión, buenas propiedades de formado y procesado y como su estructura es homogénea es ideal para la elaboración de empaques premium, tiene gran consistencia y no tiene polvo de papel que le genere imperfecciones, por eso se usa en empaques de lujo. Así mismo, las fibras delgadas y cortas de esta madera hacen que se obtenga una superficie muy lisa, lo que ayuda a alcanzar empaques lujosos de alta calidad de impresión, se usa en productos cosméticos, farmacéuticos, publicidad y artes gráficas, instrumentos médicos y cigarrillos entre otros.
          br
          br
          |También puede combinarse con otros materiales y utilizarse en elaboración de empaques para líquidos. Se utiliza especialmente para productos que requieran olor y gusto neutro.
      div(titulo="3. Cartón Recubierto No Blanqueado (CRNB) o Kraft, o CNK o SUS en inglés: ").px-5
        p Este cartón es más económico que el CSB. Normalmente se fabrica exclusivamente con pasta química no blanqueada, de dos o tres capas de estuco en la cara superior, a veces se coloca una capa de estuco en el reverso. Los espesores de este cartón varían entre 14 y 30 puntos, por lo que son utilizados en empaques de alimentos congelados. 
      div(titulo="4. Cartón folding o para cajas plegables o FBB/GC/UC: ").px-5
        p También se conoce como cartón cromo estucado, se fabrica a base de varias capas de fibras vírgenes cortas, gruesas y rígidas Tiene máximo tres capas de estucado en el anverso y en algunos casos también está estucado en el reverso. Se utiliza en empaques en que los que la rigidez en el empaque o envase son muy importantes. Sus aplicaciones gráficas pueden ser postales y tarjetas o sobres para diferentes ocasiones, así como en empaques de productos de belleza, productos farmacéuticos, cigarrillos, alimentos y envases sofisticados para dulces, confites y bebidas.
    p.mb-5 Se listan a continuación otros materiales diferentes al papel:
    .row
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img102.svg' alt='AvatarTop')
          .tarjeta.color_botones--claro
            .p-4
              h2 Metal
              p Se emplea como material rígido, especialmente para contener tanto elementos sólidos como líquidos, ya que permiten un sellamiento total. Estos envases por lo general están hechos en aluminio y hojalata. Por sus características físicas, este tipo de empaques ofrecen una mayor durabilidad y capacidad de conservación. Entre los productos que se pueden encontrar con este tipo de empaques se encuentran, las gaseosas, aceites, pinturas, dulces, entre muchos otros. 
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img103.svg' alt='AvatarTop')
          .tarjeta.color_botones--claro
            .p-4
              h2 Vidrio
              p El vidrio es utilizado por sus características específicas, ya que es una opción reutilizable y muy higiénica la cual permite conservar las características organolépticas de vinos, medicamentos entre otros.  
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img104.svg' alt='AvatarTop')
          .tarjeta.color_botones--claro
            .p-4
              h2 Textil
              p Este tipo de materia prima es utilizada principalmente en bolsas promocionales y de almacenes de cadena. 
      .col-lg-6          
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img105.svg' alt='AvatarTop')
          .tarjeta.color_botones--claro
            .p-4
              h2 Madera
              p Utilizado principalmente en embalaje de productos, por su gran durabilidad, resistencia y protección. 
    Separador
    #t_3_4.titulo-segundo
      h2 3.4 Estructuras y diseño
    p.mb-5 Muchos productos por su naturaleza y características físicas, necesitan donde reposar. Un buen empaque determina en gran medida el éxito o fracaso de un producto, más allá de las cualidades y características del producto mismo, el primer contacto del cliente es de carácter visual, algo que es aprovechado por el diseño y el marketing en general. 
      br
      br
      |Al crear el prototipo de cualquier empaque, se deben de identificar diversos factores concernientes al diseño y a su funcionalidad; aunque el empaque es lo primero que observa el consumidor, detrás de su desarrollo hay un sinfín de variables y problemáticas por resolver. Más allá del diseño, la imagen o la forma, el diseño de empaques requiere incorporar en tiempos modernos una experiencia sensorial.
      br
      br
      | Antes de diseñar el empaque se debe tener en cuenta:
    .row.justify-content-center.mb-5
      .col-lg-4
        .tarjeta-iconos--azul.p-3.d-flex.align-items-center
          img(src='@/assets/curso/img106.svg' alt='AvatarTop' style='width:78px').me-3
          h4.text-white.mb-0 Características<br>del producto.
      
      .col-lg-4
        .tarjeta-iconos--azul.p-3.d-flex.align-items-center
          img(src='@/assets/curso/img107.svg' alt='AvatarTop' style='width:78px').me-3
          h4.text-white.mb-0 Finalidad del<br>del producto.
      
      .col-lg-4
        .tarjeta-iconos--azul.p-3.d-flex.align-items-center
          img(src='@/assets/curso/img108.svg' alt='AvatarTop' style='width:78px').me-3
          h4.text-white.mb-0 Medios de transporte y<br>condiciones del mismo.
    p.mb-5 La ingeniería de empaques busca proteger de manera segura los productos, para ser embalados y transportados, estudiando su desarrollo, fallas estructurales y funcionales. Elementos como el uso, la competencia, las estrategias de mercado y los materiales que están en auge, se tiene en cuenta en la elaboración del empaque, a partir de estos parámetros básicos, se empiezan a realizar bocetos y prototipos, los cuales pueden ir cambiando de aspecto durante este proceso. 
    .contenedor-imagen--salida.p-5.mb-5 
      .row.justify-content-center.align-items-center
        .col-lg-3
          img(src='@/assets/curso/img109.svg' alt='AvatarTop')
        .col-lg-5
          h4 Diversas preguntas nacen al inicio de este proceso, algunas de ellas:
          p ¿Cuál va a ser su uso?
            br
            | ¿Cuál material se va a utilizar?
            br
            | ¿Cuáles son los procesos que se van a requerir?
            br
            | ¿Cuál es el presupuesto y el costo de elaboración?
            br
            | ¿Cuenta con algún tipo de barrera o protección especial? 
    p.mb-5 Aunque estas sean algunas consideraciones de tipo técnico, se deben tener en cuenta desde el primer momento en el que diseñamos, esto con el fin de evitar demoras y sobrecostos en la operación.
    Separador
    #t_3_5.titulo-segundo
      h2  3.5 Fases de producción
    p.mb-5 El proceso de producción gráfica consta de muchas variables que hacen parte de la estrategia de producción, entre ellas se tienen: 
    TabsA.color-acento-contenido.mb-5
      .tarjeta.color_contenido--claro.p-4(titulo="a. Planificación estratégica")
        .row
          .col-lg-6: img(src='@/assets/curso/img110.jpg' alt='AvatarTop')
          .col-lg-6
            h3 a. Planificación estratégica
            p El primer paso para el desarrollo de cualquier proyecto en producción gráfica, es el encuentro entre el diseñador y el cliente, donde se realiza el brief, documento guía que describe el producto o servicio y su comercialización. En esta fase es relevante establecer el presupuesto, los costos, sustratos, sistemas de impresión y tiempos establecidos de entrega y desarrollo de las piezas a trabajar.
      .tarjeta.color_contenido--claro.p-4(titulo="b. Propuesta creativa")
        .row
          .col-lg-6: img(src='@/assets/curso/img111.jpg' alt='AvatarTop')
          .col-lg-6
            h3 b. Propuesta creativa
            p Es la propuesta que presenta el diseñador como solución al problema requerido por el cliente, a través  de bocetos que se ajusten a los parámetros y estándares establecidos, y al presupuesto estipulado en la primera fase de producción; en algunos casos primero se diseña la pieza gráfica, para poder tener una idea más cercana del presupuesto requerido. Así mismo, los acabados inciden en el precio, no es lo mismo una pieza que requiere un plastificado que un barnizado.
      .tarjeta.color_contenido--claro.p-4(titulo="c. Artes finales")
        .row
          .col-lg-6: img(src='@/assets/curso/img112.jpg' alt='AvatarTop')
          .col-lg-6
            h3 c. Artes finales
            p Una vez establecidos todos los estándares del proyecto, y aprobados los bocetos, el diseñador se dispone a realizar las artes finales con la ayuda de programas de diseño. Es aquí donde aparece el proceso de preimpresión o preprensa, donde se revisa, ajusta y prepara el documento, normalmente en formato PDF para su reproducción física, utilizando un sistema de impresión digital, offset o serigrafía. El arte final asegura que el proyecto sea exitoso o no.
      .tarjeta.color_contenido--claro.p-4(titulo="d. Pruebas de color")
        .row
          .col-lg-6: img(src='@/assets/curso/img113.jpg' alt='AvatarTop')
          .col-lg-6
            h3 d. Pruebas de color
            p Es una simulación de los colores que pueden ser obtenidos por un sistema de impresión para poder previsualizar el resultado final que se obtendrá. Una correcta simulación del resultado esperado en la impresión permitirá realizar cambios de diseño o de color en un archivo antes de proceder a la impresión final (Martínez, s.f.). 
      .tarjeta.color_contenido--claro.p-4(titulo="e. Impresión")
        .row
          .col-lg-6: img(src='@/assets/curso/img114.jpg' alt='AvatarTop')
          .col-lg-6
            h3 e. Impresión
            p En este paso se realiza la reproducción del documento original sobre papel; sin embargo, existen variedad de materiales sobre los cuales imprimir, siendo necesario emplear diferentes procesos de impresión.
              br
              |Sistemas convencionales de impresión: 
              br
              |Offset
              br
              |Flexografía
              br
              |Tampografía
              br
              |Serigrafía
              br
              br
              |Sistemas digitales de impresión:
              br
              |Inyección de tinta
              br
              |Láser
      .tarjeta.color_contenido--claro.p-4(titulo="f. Acabados")
        .row
          .col-lg-6: img(src='@/assets/curso/img115.jpg' alt='AvatarTop')
          .col-lg-6
            h3 f. Acabados
            p Se refiere a los procesos posteriores a la impresión para dar diferentes tipos de terminados al producto, dentro de los que se destacan:
            p.ps-3 Barniz UV, parcial o total, generalmente utilizado en tarjetas, carpetas, revistas, entre otros. 
                br
                br
                |Tintas especiales, para destacar o dar algún tipo de efecto especial.
                br
                br
                |Uso de plastificados, para proteger y dar durabilidad a los elementos, como cuadernos, cartillas, etc.
                br
                br
                |Uso de barnice litográfico parcial o total. 
                br
                br
                |Troquelados, repujados, efectos con estampados al calor, entre otros.
    Separador
    h3 Requisitos técnicos y planimetría
    p.mb-5 Como ya se ha mencionado el empaque constituye en una herramienta de mercadeo, distribución y venta de un producto, pues coadyuva en fortalecer la imagen corporativa, posicionar la marca, influir en la decisión de compra por el consumidor; igualmente, el empaque sirve para proteger el producto, facilitando la manipulación y la conservación de éste, preservando su calidad, además que debe ser funcional, innovador y amigable con el medio ambiente. En general, el empaque está orientado hacia el marketing y deben cumplir con varios requisitos. 
    .row.mb-5 
      .col-lg-6
        p Al tener en cuenta todos estos aspectos, dependiendo del tipo de producto para el que se diseñe el empaque, es necesario consultar las diferentes normas, que el Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC), ha establecido para cada tipo de producto, en lo relacionado con el diseño del empaque, de conformidad con las Normas Técnicas Colombianas (NTC). Así mismo, se deben tener en cuenta las normas expedidas por el Organismo Internacional de Estandarización (ISO). Igualmente, la Superintendencia de Industria y Comercio (SIC), así como algunos ministerios que profieren normas relacionadas con el diseño técnico de los empaques, que es necesario tener en cuenta antes de realizar el diseño respectivo. Todas estas normas deben aplicarse al diseño del empaque, especialmente si se trata de productos para exportar, debido a los altos estándares exigidos por numerosos países.
      .col-lg-6
        .cajon.color-acento-botones.px-5.py-4
          p Por ejemplo, el Ministerio de Agricultura y Desarrollo Rural y el Ministerio de Comercio, Industria y Turismo, por medio de la Resolución 0224 de 2007, expidieron el Reglamento Técnico No. RTC-002 MADR, por medio del cual regularon los requisitos mínimos que deben cumplir los empaques de los productos agrícolas para consumo humano que se importen, se produzcan y se comercialicen en el territorio colombiano.
    p.mb-5 Igualmente, algunos ejemplos relacionados con las normas establecidas por el ICONTEC, en relación con el tema, son:
    .row.mb-5.justify-content-center
      .col-lg-4
        .tarjeta.color_secundario--claro
            .p-4.text-center
              h4 NTC 1257 
              p Establece los requisitos que deben cumplir las películas de polietileno de baja densidad para el empaque de alimentos, debe estar libre de burbujas, de contaminantes, de materias tóxicas, que no tengan color y establece su ancho máximo.
      .col-lg-4
        .tarjeta.color_secundario--claro
            .p-4.text-center
              h4 NTC 1468 
              p Estableció los requisitos que deben tener los ensayos a los cuales se deben someter los envases de papel o cartón que se usan para envasar la leche, lácteos y jugos. La norma habla del material en que se deben diseñar los empaques, las tintas a usar para su impresión, espesor y en general el cuidado con la salud de las personas.
      .col-lg-4
        .tarjeta.color_secundario--claro
            .p-4.text-center
              h4 NTC 512-1 y NTC 512-2 
              p Establecen cómo deben ser rotulados o etiquetados en cuanto a sus elementos mínimos, que deben aparecer en los empaques de productos alimenticios.
    p.mb-5 El no cumplimiento de estas normas implica la aplicación de sanciones y multas y la inconformidad de los clientes, aunada a posibles pérdidas económicas.
      br
      br
      |Por otra parte, el diseño del empaque debe tener en cuenta la etiqueta, cuya función es que el consumidor pueda identificar fácilmente el producto, allí aparecen además datos como la fecha de caducidad, información o tabla nutricional, instrucción sobre condiciones de uso almacenamiento, nombre y dirección del fabricante, identificación del lote, etc. En el empaque puede contener el país de origen, peso del producto, puerto de salida o, de entrada. Igualmente, contendrá el código de barras, que es un elemento indispensable, pues permite mantener el inventario actualizado y además contiene información acerca de las características del producto.
    Separador 
    h3 Preprensa
    p.mb-5 Son todos los pasos anteriores a la impresión, en los cuales se realizan las correcciones y cambios concernientes a un archivo original, para su correcta impresión. En preprensa se revisan, ajustan y aprueban, diferentes componentes como: composición, dimensiones del documento, textos, paginación, sangrado de las piezas a imprimir, modo de color CMYK, peso y calidad de las imágenes a utilizar, para así llegar al quemado de planchas, hoy en día se puede dividir la preprensa en convencional y digital.
      br
      br
      |La preprensa hace parte del proceso gráfico, el cual se puede resumir en cuatro pasos principales:  
    .row
      .col-lg-6
        .row.mb-3
          .col-md-6
            .color-card.cuadro-color-tres.pe-5.ps-4.py-3
              .card-title 
                h2 01
              h3.mb-1 Diseño
              p El primer paso de cualquier proyecto es el diseño, en esta etapa se planifica y se da solución a un problema, en la etapa creativa. 
          .col-md-6
            figure
              img(src='@/assets/curso/img60.jpg', alt='Texto que describa la imagen')
        .row.mb-md-3
          .col-md-6.order-lg-1.order-sm-2
            figure
              img(src='@/assets/curso/img117.jpg', alt='Texto que describa la imagen')
          .col-md-6.order-md-1
            .color-card.cuadro-color-cuatro.pe-4.ps-4.py-3
              .card-title
                h2 02
              h3.mb-1 Preprensa
              p.small-text El segundo paso y anterior a la producción es el de la preprensa, donde se revisan y ajustan todos los componentes necesarios para la impresión, como el color, tipografía, tipo de papel, entre otros, para que la producción tenga éxito. 
      .col-lg-6.contenedor-flecha
        .row.mb-3
          .col-md-6.contenedor-flecha__interno
            .color-card.cuadro-color-dos.pe-5.ps-4.py-3
              .card-title 
                h2 03
              h3.mb-0 Producción (impresión)
              p El paso a producción, en esta etapa todo el material gráfico empieza el proceso de impresión, las piezas toman un carácter físico. 
          .col-md-6.contenedor-flecha__interno
            figure
              img(src='@/assets/curso/img118.jpg', alt='Texto que describa la imagen')
        .row.mb-5
          .col-md-6.contenedor-flecha__interno.order-lg-1.order-sm-2
            figure
              img(src='@/assets/curso/img119.jpg', alt='Texto que describa la imagen')
          .col-md-6.contenedor-flecha__interno.order-md-1
            .color-card.cuadro-color-uno.pe-4.ps-4.py-3
              .card-title
                h2 04
              h3.mb-1 Acabados
              p.small-text Es el último paso en el proceso gráfico, una vez finalice la impresión, se realizan los acabados como: plastificado, barniz UV, troquelado, cortes y dobleces, y demás procesos que requiera la pieza.
    p.mb-5 La preparación de un archivo para preprensa requiere de la observación de todos los elementos concernientes al diseño, y que afectarán directamente el proceso de impresión. Otros aspectos para considerar hacen referencia a tipografías, colores, e imágenes.
    h4 a. Preparación de tipografías
    .row.mb-5
      .col-lg-7
        p Existen gran variedad de tipografías, diversas familias tipográficas con variables en cuanto al tamaño, estilo, tipo, diseño, grosor, color e inclinación. Es importante verificar que todo documento cuente con una carpeta con las tipografías utilizadas en el mismo, para que pueda ser descargada por el equipo que realiza la preprensa, ya que reemplazar una tipografía puede variar todos los aspectos del diseño, en cuanto a forma, espacio e impacto. 
          br
          br
          |Aunque los textos se puedan convertir a curvas “convertir el texto a líneas”, es óptimo contar con las fuentes originales, en caso de tener que realizar, por ejemplo, una corrección ortográfica. 
      .col-lg-5
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img120.jpg', alt='Texto que describa la imagen')
    h4 b. Color
    p.mb-5 Conocer la naturaleza del color, su función, cualidades, características y usos es primordial en el proceso gráfico.
    .row.mb-5
      .col-lg-7
        .cajon.color-acento-botones.px-5.py-4
          p
            b Colores luz o mezcla aditiva (RGB): 
            b-none si se mezclan luces se trata de una mezcla aditiva y el resultado de la combinación total es la luz blanca. La luz “blanca” del sol o de una fuente de luz artificial se forma con la combinación de todos los colores del espectro, que se pueden descomponer en los tres colores “primarios aditivos” (RGB), es decir, rojo (red), verde (green) y azul (blue). en el proceso de producción gráfica.
      .col-lg-5
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img121.jpg', alt='Texto que describa la imagen')
    .row.mb-5
      .col-lg-7
        .cajon.color-acento-botones.px-5.py-4
          p
            b Colores pigmento o mezcal sustractiva (CMYK): 
            b-none por otra parte, si se mezclan pigmentos (como pinturas y rotuladores), se trata de una mezcla sustractiva y el resultado de esta mezcla es la ausencia de luz, es decir, el negro. Los colores primarios de la mezcla sustractiva son el amarillo, magenta y cian (Ferrada, 2018).
      .col-lg-5
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img122.jpg', alt='Texto que describa la imagen')
    .row.mb-5
      .col-lg-7
        .cajon.color-acento-botones.px-5.py-4
          p
            b Separación de color:  
            b-none este método generalmente utilizado en serigrafía, usa la separación por puntos de color directo, distribuidos por color en 4 planchas. Hay que tener en cuenta que los códigos de color presentes en la pantalla, sean calibrados con los códigos de color de impresión.  
            br
            br
            |Queda claro entonces que el modo de color para la pantalla de nuestro dispositivo es RGB y para impresión es CMYK. 
      .col-lg-5
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img123.jpg', alt='Texto que describa la imagen')
    h4 c. Imágenes
    .row.mb-5
      .col-lg-7
        p Las imágenes utilizadas tienen que contar con una excelente resolución, pero más allá de esta, una buena imagen está concebida por otros parámetros como la luz, la calidad del color, inclusive el tamaño del sensor de la cámara que se utilice, el cual aportará mayor o menor calidad a la foto. La resolución de una imagen está dada por la cantidad de pixeles por pulgada que contiene. 
          br
          br
          |No siempre a mayor resolución hay mejor calidad. 
          br
          br
          b 1 pulgada = 2,54 cm, la cual es expresada en PPP, o puntos por pulgada. 
          br
          br
          |En impresión una imagen con 300 ppp, tiene un número estándar de calidad. 
          br
          br
          |Existen dos tipos de imágenes, mapa de bits y otras imágenes vectoriales, que son las que generalmente se realizan en el programa Illustrator.
      .col-lg-5
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img124.jpg', alt='Texto que describa la imagen')
    p.mb-5
      b El tamaño de una imagen se puede medir de la siguiente manera:
    .row.mb-5 
      .col-lg-6
        .contenedor-imagenes.color_botones--claro.p-5.d-flex.justify-content-center
          h3 Imagen = anchura en píxeles x altura en píxeles.
          figure(data-aos="fade-left").px-5.mx-5
            img(src='@/assets/curso/img125.svg', alt='Texto que describa la imagen')
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img16.svg' alt='AvatarTop')
          .tarjeta.color_contenido--claro
            .p-4
              h2 DPI (Dots per inch). 
              p Puntos por pulgada. Esta unidad de medida se emplea en la evaluación de la resolución de impresoras y plotters.
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img16.svg' alt='AvatarTop')
          .tarjeta.color_contenido--claro
            .p-4
              h2 LPI (Lines Per Inch).
              p Líneas por pulgada. Se utilizan como medida de la resolución de un sistema de lentes o de un medio, como la película o el papel. Cuantas más líneas puedan discriminarse, mayor será la nitidez de la imagen, y por tanto la resolución (Colorenelmedio, s.f).
    Separador 
    h3 Preparación de archivos para montaje
    p.mb-5 En este punto es importante tener presente cuáles serán los medios de reproducción que se van a utilizar en el proceso de impresión, el presupuesto formulado, la cantidad de ejemplares y acabados o terminados que dichas piezas van a requerir.
      br
      br
      |Antes de pasar al procedimiento, es importante revisar algunas definiciones básicas sobre los conceptos de preprensa
    ul.lista-ul--color.mb-5
          li 
            i.fas.fa-file-archive
            p.mb-0
              b Tintas: 
              b-none cantidad de colores en que se separa el archivo en planchas. 

          li 
            i.fas.fa-file-archive
            p.mb-0
              b Vínculo: 
              b-none imagen enlazada o incrustada en un programa de ilustración.
          li 
            i.fas.fa-file-archive
            p.mb-0
              b Lineatura: 
              b-none  puntos por pulgada que generan tramas en una separación de color digital. 
          li 
            i.fas.fa-file-archive
            p.mb-0
              b RIP: 
              b-none sistema que interpreta archivos digitales para ser convertidos en tramas a ciertas lineaturas.
          li 
            i.fas.fa-file-archive
            p.mb-0
              b Prueba digital: 
              b-none impresión perfilada en papel fotográfico, que simula una impresión en prensa. 
          li 
            i.fas.fa-file-archive
            p.mb-0
              b Traping: 
              b-none capacidad de una tinta de mezclarse sobre otra, o manipulación para eliminar espacios en blanco entre colores (por dilatación de papel o registro). 
          li 
            i.fas.fa-file-archive
            p.mb-0
              b Sobreimpresión: 
              b-none superposición de un color sobre otro (ayuda a evitar el desregistro) contaminándose entre sí.
          li 
            i.fas.fa-file-archive
            p.mb-0
              b Montaje: 
              b-none distribución de una hoja o pieza de diseño en un área para fines de optimización de papel plegado.  
          li 
            i.fas.fa-file-archive
            p.mb-0
              b Pantone:
              b-none colores de simulación de estándares de tintas, preparadas por fabricantes determinados. 
          li 
            i.fas.fa-file-archive
            p.mb-0
              b CTP (Computer to plate - del computador a la plancha): 
              b-none sistema de impresión de separaciones digitales en plancha. 
          li 
            i.fas.fa-file-archive
            p.mb-0
              b Formato de plancha: 
              b-none  tamaño en mm, de las planchas referenciadas por el fabricante de la impresora litográfica. 
          li 
            i.fas.fa-file-archive
            p.mb-0
              b Guías de corte: 
              b-none líneas delimitantes de ancho y largo de un diseño impreso.
          li 
            i.fas.fa-file-archive
            p.mb-0
              b Guías de registro: 
              b-none  elementos que ayuden al correcto ajuste entre colores de una misma separación. 
          li 
            i.fas.fa-file-archive
            p.mb-0
              b Sangrado:
              b-none extensión del archivo final en tamaño fuera de las guías de corte, que busca disminuir los riesgos de corte o finalización de un trabajo.
          li 
            i.fas.fa-file-archive
            p.mb-0
              b Pinza:
              b-none Espacio de reserva entre el borde de la plancha y el inicio de la superficie impresora, esta pinza permite enganchar la plancha. 
    p.mb-5 Se deben tener en cuenta los siguientes pasos para el proceso de preprensa, estas acciones son generales y aplica para todo archivo digital que se envíe a preprensa en cualquier programa:
    ol.lista-ol--cuadro.mb-5
      li 
        .lista-ol--cuadro__vineta
          span 1
        | Abrir el archivo en el programa, versión y plataforma indicada por el creador del diseño.
      li 
        .lista-ol--cuadro__vineta
          span 2
        | Guardar el archivo original y trabajar sobre una copia.  

      li 
        .lista-ol--cuadro__vineta
          span 3
        | Confirmar las medidas del archivo.

      li 
        .lista-ol--cuadro__vineta
          span 4
        | Dejar sangrado en el documento.

      li 
        .lista-ol--cuadro__vineta
          span 5
        | Generar el sangrado requerido según tamaño de papel a imprimir. 

      li 
        .lista-ol--cuadro__vineta
          span 6
        | Perfiles y modos de color.

      li 
        .lista-ol--cuadro__vineta
          span 7
        | Verificar que las guías de corte estén en los colores en los cuales está compuesto el archivo. 

      li 
        .lista-ol--cuadro__vineta
          span 8
        | Colocar las guías de registro fuera de la zona de corte. 

      li.d-inline-block
        .lista-ol--cuadro__vineta
          span 9
        | Verificar vínculos: modelo de color (CMYK):
        ul.ms-5.lista-ul--color2
            li.mb-2
              i.fas.fa-check.me-2
              | Resolución  

            li.mb-2
              i.fas.fa-check.me-2
              | Extensión  

            li.mb-2
              i.fas.fa-check.me-2
              | Tamaño 
            li.mb-2
              i.fas.fa-check.me-2
              | Peso
      li 
        .lista-ol--cuadro__vineta
          span 10
        | Manejo y uso de tinta negra y las tintas especiales. Tener en cuenta las tintas especiales como Pantones, ya que el sistema tradicional solo está concebido para tintas en CMYK verificando el código que lo caracteriza, por ejemplo, el negro que se utiliza en impresión realmente no es profundo y denso, por esta razón hay que utilizar la mezcla en CMYK, para potencializarlo y que se vea realmente negro, para esto realice una combinación de porcentajes así: C 75 %, M 55 %, Y 40%, K 100%.
      li 
        .lista-ol--cuadro__vineta
          span 11
        | Tamaño y resolución de las imágenes. Tener en cuenta el tamaño y resolución de las imágenes, esto con el fin de preservar la calidad, hay que recordar que una buena resolución para impresión es de 300 ppp (píxeles por pulgada).
      li 
        .lista-ol--cuadro__vineta
          span 12
        | Revisar vínculos a tipografías, imágenes y gráficos.
    .row.justify-content-center
      .col-lg-6 
        .cajon.color-secundario.px-5.py-4
          h5 Con el propósito de ampliar la información, se sugiere revisar en el material complementario los recursos concernientes a este tema. 











</template>

<script>
import AOS from 'aos'

export default {
  name: 'Tema3',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    datosSlyder: [
      {
        titulo: 'Empaque de papel: ',
        texto:
          'Se utiliza como un envoltorio que se encuentra dentro o fuera de otros empaques como bolsas, botes y cajas plegables de cartoncillo.',
        imagen: require('@/assets/curso/img86.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Empaque de cartón corrugado:',
        texto:
          'Este tipo de empaque se usa para calzado, frutas y hortalizas, artesanías, decoración, maquinaria industrial, electrodomésticos, mercancías a semigranel, entre otros.',
        imagen: require('@/assets/curso/img87.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Empaque metálico: ',
        texto:
          'Los materiales que se utilizan son el acero y el aluminio, funcionan para alimentos enlatados o bebidas con gas. Estos empaques son resistentes, protegen los productos.',
        imagen: require('@/assets/curso/img88.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Empaque de plástico: ',
        texto:
          'se utilizan en alimentos, cosméticos, productos de aseo, aceites, entre otros, los materiales que se utilizan son PET, PEAD, PP, PVC, entre otros. Los más comunes son bolsas, frascos, tubos, cajas, botes, bandejas.',
        imagen: require('@/assets/curso/img89.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Empaque de vidrio: ',
        texto:
          'los más comunes son las botellas y frascos que son de un cuerpo transparente, sólido y frágil. Permiten la visibilidad del contenido, como bebidas, salsas, productos cosméticos o farmacéuticos y son reutilizables. ',
        imagen: require('@/assets/curso/img90.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Empaque de madera: ',
        texto:
          'De todos los tipos de empaque que más se utilizan, el de madera suele ser el más solicitado cuando se trata de exportar productos pesados. También funciona cuando se requieren de empaques hechos a la medida, debido a que brinda una mejor protección durante la transportación. Utilizar la madera ofrece otros beneficios como tener mayor resistencia, ser reutilizable, tener un control sanitario adecuado (Madererianasa, 2020).',
        imagen: require('@/assets/curso/img91.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),

  mounted() {
    AOS.init()
  },
}
</script>

<style lang="sass" scoped></style>

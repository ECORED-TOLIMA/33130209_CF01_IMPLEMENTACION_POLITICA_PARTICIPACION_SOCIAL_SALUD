<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Desarrollo y fortalecimiento de la participación social
    figure.mb-4
      img(src='@/assets/curso/temas/tema6/img1.png', alt='')
    p El desarrollo y fortalecimiento de la participación social en salud constituye un proceso fundamental para consolidar la intervención efectiva de la ciudadanía en la gestión del sistema de salud. Este proceso implica no solo la existencia de mecanismos formales de participación, sino también el fortalecimiento de capacidades, la articulación entre actores y la generación de condiciones que permitan una incidencia real en la toma de decisiones.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En Colombia, la participación social ha presentado avances significativos, especialmente a partir del reconocimiento normativo y la implementación de la Política de Participación Social en Salud. Estos avances se reflejan en la creación de espacios de participación, el fortalecimiento del control social y el desarrollo de estrategias orientadas a la inclusión de la ciudadanía en los procesos de gestión pública (Ministerio de Salud y Protección Social, 2017).
    p A pesar de los avances logrados en la participación social, aún persisten desafíos que afectan su efectividad en los territorios. Estos aspectos deben reconocerse para fortalecer los procesos participativos y orientar acciones de mejora:
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.BG04.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema6/img3.svg' alt='AvatarTop')
        h5.text-center Limitada incidencia de algunos espacios de participación
        p.text-center No siempre las propuestas de la ciudadanía logran influir en las decisiones institucionales.
      .tarjeta.BG04.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema6/img4.svg' alt='AvatarTop')
        h5.text-center Brechas en el acceso a la información
        p.text-center En algunos territorios, la información sobre derechos, mecanismos y procesos participativos no llega de manera clara ni oportuna.
      .tarjeta.BG04.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema6/img5.svg' alt='AvatarTop')
        h5.text-center Debilidades en la formación ciudadana
        p.text-center La falta de orientación limita la capacidad de la comunidad para participar con argumentos, propuestas y conocimiento del sistema.
      .tarjeta.BG04.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema6/img6.svg' alt='AvatarTop')
        h5.text-center Baja articulación entre actores
        p.text-center La coordinación insuficiente entre instituciones, organizaciones sociales y comunidad puede generar acciones aisladas o poco sostenibles.
      .tarjeta.BG04.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema6/img7.svg' alt='AvatarTop')
        h5.text-center Necesidad de seguimiento permanente
        p.text-center Los procesos participativos requieren continuidad, evaluación y ajustes para garantizar resultados reales en beneficio de la población.
    .row.justify-content-center.mb-4
      .col-lg-10
        .p-4.cajon.color-secundario
          p.mb-0 El reconocimiento de estos desafíos permite orientar acciones de fortalecimiento, especialmente en formación ciudadana, acceso a la información, articulación institucional y seguimiento permanente. De esta manera, la participación social puede avanzar hacia procesos más efectivos, incluyentes y sostenibles en los territorios.
    p El desarrollo de la participación social puede comprenderse a partir de diferentes niveles, los cuales reflejan el grado de involucramiento de la ciudadanía en la gestión pública. En un nivel inicial, la participación se limita al acceso a la información; en niveles intermedios, se incorporan procesos de consulta y diálogo; y, en niveles más avanzados, se evidencia una participación activa con capacidad de incidencia en la toma de decisiones y en el control social.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.order-2.order-lg-1
        .row.justify-content-center
          .col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema6/img8.svg', alt='')
          .col-lg-10
            p Frente a este contexto, el fortalecimiento de la participación social requiere estrategias orientadas al desarrollo de capacidades ciudadanas, la promoción del liderazgo comunitario y el fortalecimiento de los espacios de diálogo entre la ciudadanía y las instituciones. Estas estrategias deben responder a las características territoriales y a las necesidades específicas de la población, con el fin de garantizar su pertinencia y efectividad.
        .p-4.cajon.color-primario
          p.mb-0 El fortalecimiento de la participación social requiere ciudadanía informada, instituciones abiertas al diálogo y espacios sostenibles para construir decisiones públicas más transparentes, corresponsables y cercanas a las necesidades del territorio.
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema6/img9.png', alt='')
    p Un elemento clave en este proceso es la formación y educación para la participación, la cual permite dotar a la ciudadanía de conocimientos, habilidades y herramientas para intervenir de manera informada en la gestión del sistema de salud. Estos procesos formativos contribuyen al empoderamiento de las comunidades, fortalecen el ejercicio del control social y promueven una participación más crítica y propositiva.
    p Para consolidar procesos participativos más efectivos, se deben considerar los siguientes aspectos:
    .BG03.px-5.p-5.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-4.col-8.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/tema6/img10.svg', alt='')
        .col-lg-8
          ol.lista-ol--cuadro.lista-ol--separador
            li 
              .lista-ol--cuadro__vineta
                span A
              | Garantizar información clara, accesible y oportuna para la ciudadanía.
            li 
              .lista-ol--cuadro__vineta
                span B
              | Fortalecer procesos de formación ciudadana sobre derechos y mecanismos de participación.
            li 
              .lista-ol--cuadro__vineta
                span C
              | Promover espacios de diálogo entre instituciones, organizaciones sociales y comunidad.
            li 
              .lista-ol--cuadro__vineta
                span D
              | Impulsar el liderazgo comunitario en los territorios.
            li 
              .lista-ol--cuadro__vineta
                span E
              | Articular acciones entre actores institucionales y sociales.
            li 
              .lista-ol--cuadro__vineta
                span F
              | Realizar seguimiento permanente a los compromisos y resultados alcanzados.
    p.mb-4 Estos aspectos permiten comprender que la participación social no depende solo de la existencia de normas o espacios formales, sino de la manera como se organizan, se sostienen y se articulan las acciones en cada territorio:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema6/img11.png', alt='')
      .col-lg-7
         LineaTiempoD.color-acento-botones
          p(numero="1" titulo="Información clara")
            | Permite que la ciudadanía conozca sus derechos, los canales de participación y las decisiones institucionales que afectan su bienestar.
          p(numero="2" titulo="Diálogo permanente")
            | Favorece la construcción de acuerdos entre instituciones y comunidad, a partir del reconocimiento de necesidades, propuestas y prioridades territoriales.
          p(numero="3" titulo="Formación ciudadana")
            | Fortalece las capacidades de la población para participar con argumentos, comprender el funcionamiento del sistema y ejercer control social.
          p(numero="4" titulo="Articulación de actores")
            | Permite coordinar esfuerzos entre entidades, organizaciones sociales, líderes comunitarios y ciudadanía, evitando acciones aisladas o poco sostenibles.
          p(numero="5" titulo="Seguimiento participativo")
            | Facilita la revisión de avances, el cumplimiento de compromisos y la identificación de oportunidades de mejora en la gestión pública.
    p De igual manera, el rol de las instituciones y la comunidad resulta fundamental para consolidar procesos participativos sostenibles. Las instituciones deben garantizar condiciones adecuadas para la participación, promoviendo la transparencia, el acceso a la información y la apertura de espacios de diálogo. Por su parte, la comunidad debe asumir un papel activo, participando en los procesos de toma de decisiones y ejerciendo control sobre la gestión del sistema de salud.
    .row.justify-content-center.align-items-center
      .col-lg-10
        .p-4.cajon.color-primario
          .row.justify-content-center
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema6/img12.svg', alt='')
            .col-lg-10
              p.mb-0 El fortalecimiento de la participación social en salud permite avanzar hacia un modelo de gestión más democrático, en el cual la ciudadanía no solo es beneficiaria de los servicios, sino también protagonista en la construcción de políticas públicas. Este enfoque contribuye a mejorar la calidad de las acciones institucionales, fortalecer la gobernanza y garantizar el ejercicio efectivo del derecho a la salud.
    Separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.1 Situación actual: avances y desafíos
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img13.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El desarrollo de la participación social en salud en Colombia ha evidenciado avances importantes en el fortalecimiento del control social, la apertura de espacios de diálogo y la inclusión de la ciudadanía en la gestión del sistema de salud. Estos progresos se han consolidado a partir del reconocimiento normativo y la implementación de políticas públicas orientadas a promover la intervención activa de la comunidad en los procesos de toma de decisiones (Ministerio de Salud y Protección Social, 2017).
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema6/img14.svg', alt='')
      .col-lg-8
        p Entre los principales avances se destaca el fortalecimiento de las capacidades ciudadanas, el impulso de procesos de formación para la participación y la promoción de la articulación entre las instituciones del sector salud y la comunidad. Estos elementos han permitido mejorar la comprensión del sistema de salud, facilitar el acceso a la información y generar condiciones para una participación más informada y organizada.
    p.mb-4 Para comprender de manera clara los avances alcanzados, a continuación, se presentan tres aspectos clave que muestran cómo se ha fortalecido la intervención ciudadana en la gestión pública. Estos elementos permiten reconocer la importancia de las capacidades ciudadanas, la educación para la participación y la articulación entre instituciones y comunidad:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema6/img15.svg' alt='AvatarTop')
          .tarjeta.color-primario.w-100
            .p-4
              h4.text-center Fortalecer las capacidades ciudadanas.
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema6/img16.svg' alt='AvatarTop')
          .tarjeta.color-primario.w-100
            .p-4
              h4.text-center Impulsar procesos de educación para la participación. 
      .col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema6/img17.svg' alt='AvatarTop')
          .tarjeta.color-primario.w-100
            .p-4
              h4.text-center Promover la articulación entre las instituciones del sector salud. 
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.cajon.color-secundario
          p.mb-0 Estos avances permiten reconocer que la participación se fortalece cuando la ciudadanía cuenta con información, formación y espacios reales de diálogo. Sin embargo, su consolidación requiere continuidad, seguimiento y mayor articulación entre los actores, con el fin de responder a las necesidades de los territorios y mejorar la incidencia en la toma de decisiones.
    p A pesar de estos avances, el desarrollo de la participación social enfrenta diversos desafíos que limitan su efectividad en algunos territorios. Estas dificultades se relacionan con factores estructurales, institucionales y sociales que afectan la continuidad y el impacto de los procesos participativos.
    p A continuación, se presentan algunos de los principales desafíos identificados en la implementación de la participación social en salud.
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Principales retos de la participación social en salud
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-b.color-acento-contenido 
          .tabla-b
            table
              thead
                tr.encabezadotabla
                  th Reto identificado
                  th Reto identificado
              tbody
                tr
                  th Limitado conocimiento ciudadano.
                  td Parte de la población desconoce sus derechos en salud y los mecanismos de participación disponibles, lo que reduce su intervención en los procesos de decisión.
                tr
                  th Débil articulación institucional.
                  td En algunos territorios existe poca coordinación entre las instituciones del sector salud y las organizaciones comunitarias.
                tr
                  th Escasa formación en participación.
                  td Falta fortalecer procesos de educación y capacitación dirigidos a líderes comunitarios y ciudadanía.
                tr
                  th Participación formal pero no efectiva.
                  td Algunos espacios participativos funcionan de manera formal, pero con poca incidencia real en la toma de decisiones.
                tr
                  th Limitaciones de recursos.
                  td En algunos territorios se presentan restricciones institucionales y logísticas para el desarrollo de procesos participativos.
                tr
                  th Baja continuidad de los procesos.
                  td La rotación de actores institucionales o comunitarios puede afectar la sostenibilidad de los espacios de participación.
    .row.justify-content-center.align-items-center.bg4.mb-4
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema6/img18.png', alt='')
      .col-lg-7.tarjeta.color-primario.p-4
        .row
          .col-lg-auto.d-none.d-lg-block
            figure.mb-2
              img(src='@/assets/curso/temas/tema6/img19.svg', alt='')
          .col-lg-12
            p Los desafíos identificados evidencian la necesidad de fortalecer la participación social desde un enfoque integral, que incluya el desarrollo de capacidades, la mejora en la articulación institucional y la consolidación de procesos sostenibles en el tiempo. La superación de estas limitaciones es fundamental para garantizar una participación con incidencia real en la gestión del sistema de salud.
    .row.justify-content-center.mb-4
      .col-lg-10
        .p-4.cajon.color-primario
          p.mb-0 Los desafíos de la participación social requieren fortalecer la formación ciudadana, el acceso a información clara y la articulación entre instituciones y comunidad, para lograr procesos sostenibles con mayor incidencia en la gestión pública.
    p El análisis de los avances y desafíos permite comprender el estado actual de la participación social en salud y orientar la formulación de estrategias que fortalezcan su desarrollo. A partir de este diagnóstico, resulta pertinente profundizar en los niveles de desarrollo de la participación, con el fin de identificar su grado de consolidación en los diferentes contextos.
    Separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.2 Niveles de desarrollo de la participación
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema6/img20.png', alt='')
      .col-lg-8
        p.mb-4 El nivel de desarrollo de la participación social en salud hace referencia al grado de consolidación de los procesos participativos en los territorios y a su capacidad de incidir de manera efectiva en la gestión del sistema de salud. Este nivel no depende únicamente de la existencia de mecanismos formales, sino de factores como la organización comunitaria, el fortalecimiento institucional, el acceso a la información y el desarrollo de capacidades ciudadanas orientadas a la intervención en los asuntos públicos relacionados con la salud.
        .p-4.cajon.color-secundario.mb-4
          p.mb-0 En el contexto colombiano, los procesos participativos presentan un desarrollo heterogéneo, condicionado por las características sociales, territoriales e institucionales de cada región. Mientras algunos territorios evidencian procesos organizativos sólidos y espacios de participación con capacidad de incidencia, en otros contextos se identifican dinámicas incipientes, con baja articulación entre actores y limitada participación efectiva de la ciudadanía.
        .row.justify-content-center.align-items-center
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema6/img25.svg', alt='')
          .col-lg-10
            p.mb-0 Desde esta perspectiva, la participación social en salud puede analizarse como un proceso progresivo, en el cual se transita por diferentes niveles de desarrollo que reflejan el grado de madurez de los procesos participativos y su impacto en la toma de decisiones.
    p A continuación, se presentan los principales niveles de desarrollo de la participación social y sus características, con el fin de reconocer cómo evoluciona la intervención ciudadana en los procesos de gestión pública:
    .BG02.px-5.p-5.mb-4
      .tarjeta.tarjeta--blanco.p-4
        PasosB.color-acento-contenido
          .row(titulo="")
            .col-lg-5.col.mb-4.mb-lg-0
              figure
                img(
                  src="@/assets/curso/temas/tema6/img21.png"  alt="Imagen decorativa")
            .col-lg-7
              h5 Nivel inicial
              p.mb-0 La participación se limita principalmente al acceso a la información sobre decisiones institucionales. En este nivel, la ciudadanía recibe comunicados, orientaciones o reportes, pero su intervención en la toma de decisiones es baja. Ejemplo: una entidad informa a la comunidad sobre una campaña de salud, pero no abre espacios para recibir propuestas o ajustar la estrategia según las necesidades del territorio.
          .row(titulo="")
            .col-lg-5.col.mb-4.mb-lg-0
              figure
                img(
                  src="@/assets/curso/temas/tema6/img22.png"  alt="Imagen decorativa")
            .col-lg-7
              h5 Nivel en desarrollo
              p.mb-0 Existen espacios de participación y organizaciones comunitarias que comienzan a intervenir en procesos de diálogo con las instituciones. La ciudadanía expresa necesidades, plantea inquietudes y participa en algunas actividades de consulta. Ejemplo: líderes comunitarios asisten a una mesa territorial para exponer dificultades en la atención y solicitar mejoras en los horarios, rutas de acceso o canales de información.
          .row(titulo="")
            .col-lg-5.col.mb-4.mb-lg-0
              figure
                img(
                  src="@/assets/curso/temas/tema6/img23.png"  alt="Imagen decorativa")
            .col-lg-7
              h5 Nivel consolidado
              p.mb-0 La ciudadanía participa activamente en la planeación, seguimiento y evaluación de acciones públicas. En este nivel, los espacios participativos tienen mayor organización y capacidad para incidir en las decisiones. Ejemplo: una asociación de usuarios revisa el cumplimiento de acuerdos, aporta recomendaciones y participa en la evaluación de una estrategia orientada a mejorar la atención en salud.
          .row(titulo="")
            .col-lg-5.col.mb-4.mb-lg-0
              figure
                img(
                  src="@/assets/curso/temas/tema6/img24.png"  alt="Imagen decorativa")
            .col-lg-7
              h5 Nivel fortalecido
              p.mb-0 La participación tiene incidencia real en la toma de decisiones, la formulación de políticas territoriales y el control social. En este nivel, la ciudadanía no solo aporta información, sino que contribuye a definir prioridades, vigilar la gestión y proponer soluciones. Ejemplo: una veeduría ciudadana presenta hallazgos, solicita ajustes institucionales y logra que se modifique una acción pública para responder mejor a la comunidad.
    .row.justify-content-center.align-items-center
      .col-lg-10
        .p-4.cajon.color-primario.mb-4
          p.mb-0 Estos niveles permiten comprender que la participación social se desarrolla de manera progresiva. Su fortalecimiento requiere información clara, espacios de diálogo, organización comunitaria y capacidad de incidencia. A medida que estos elementos se consolidan, la ciudadanía puede pasar de recibir información a participar activamente en decisiones que afectan el bienestar colectivo.
        .row.justify-content-center
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema6/img25.svg', alt='')
          .col-lg-10
            p.mb-0 A partir del análisis de los niveles de desarrollo, se requiere abordar las estrategias de fortalecimiento que permiten mejorar la participación social en los territorios. Estas estrategias orientan acciones para fortalecer capacidades ciudadanas, consolidar espacios de diálogo y promover una mayor incidencia en la toma de decisiones.
    Separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.3 Estrategias de fortalecimiento
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-2.order-lg-1
        p El fortalecimiento de la participación social en salud requiere la implementación de estrategias orientadas a mejorar la capacidad de incidencia de la ciudadanía, consolidar los procesos organizativos y garantizar condiciones adecuadas para la intervención en la gestión del sistema de salud. Estas estrategias deben responder a las necesidades del contexto territorial y a los desafíos identificados en los procesos participativos.
        .p-4.cajon.color-secundario
          p.mb-0 El desarrollo de estas acciones implica un enfoque integral que articule el acceso a la información, el fortalecimiento organizativo, la generación de espacios de diálogo y el ejercicio del control social. La implementación de estas estrategias permite avanzar hacia niveles más consolidados de participación, en los cuales la ciudadanía interviene de manera activa en la toma de decisiones (Ministerio de Salud y Protección Social, 2017).
      .col-lg-5.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema6/img26.png', alt='')
    p Para comprender las estrategias orientadas al fortalecimiento de la participación social, es necesario reconocer las acciones que permiten mejorar la incidencia ciudadana en los territorios. Estas estrategias articulan el acceso a la información, la organización comunitaria, el diálogo entre actores y el seguimiento a la gestión pública:
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema6/img27.svg', alt='Texto que describa la imagen')
          
        h5.text-center Información y acceso a datos públicos
        p.mb-0.text-center Permite que la ciudadanía conozca sus derechos, los mecanismos de participación, las decisiones institucionales y los resultados de la gestión pública. Esta estrategia favorece una participación informada y reduce barreras para intervenir en los asuntos del territorio.
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema6/img28.svg', alt='Texto que describa la imagen')
          
        h5.text-center Organización comunitaria
        p.mb-0.text-center Fortalece la capacidad de las comunidades para agruparse, identificar necesidades comunes y presentar propuestas ante las instituciones. Su aplicación permite canalizar intereses colectivos, evitar acciones aisladas y consolidar procesos participativos más sostenibles.
      .col-md.tarjeta.bg1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema6/img29.svg', alt='Texto que describa la imagen')
          
        h5.text-center Espacios de diálogo territorial
        p.mb-0.text-center Promueven encuentros entre ciudadanía, organizaciones sociales e instituciones para analizar problemáticas, priorizar necesidades y construir acuerdos. Estos espacios favorecen la confianza, la escucha activa y la toma de decisiones acordes con la realidad local.
      .col-md.tarjeta.bg2.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema6/img30.svg', alt='Texto que describa la imagen')
          
        h5.text-center Control social y seguimiento ciudadano
        p.mb-0.text-center Permite verificar el cumplimiento de compromisos, revisar el uso de recursos públicos y evaluar los resultados de las acciones implementadas. Esta estrategia fortalece la transparencia, la corresponsabilidad y la mejora continua de la gestión pública.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.cajon.color-primario
          p.mb-0 En conjunto, estas estrategias permiten fortalecer la participación social como un proceso organizado, informado y orientado a resultados. Su aplicación contribuye a mejorar la relación entre instituciones y comunidad, ampliar la incidencia ciudadana y promover decisiones más pertinentes para el bienestar de la población.
    p Para avanzar en la aplicación de estas estrategias, es necesario reconocer los aspectos que facilitan una intervención ciudadana más informada, organizada y sostenible. Estos elementos orientan la gestión participativa y permiten fortalecer la capacidad de incidencia en los territorios:
    .row.justify-content-center.align-items-center.mb-4
        .col-lg-4.col-8.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/tema6/img31.png', alt='')
        .col-lg-6
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span A
              | Garantizar el acceso a información clara, oportuna y comprensible. 
            li 
              .lista-ol--cuadro__vineta
                span B
              | Promover el uso de datos públicos para apoyar decisiones informadas.
            li 
              .lista-ol--cuadro__vineta
                span C
              | Fortalecer la organización comunitaria y la participación colectiva. 
            li 
              .lista-ol--cuadro__vineta
                span D
              | Generar espacios de diálogo entre instituciones y comunidad.
            li 
              .lista-ol--cuadro__vineta
                span E
              | Impulsar procesos de concertación territorial. 
            li 
              .lista-ol--cuadro__vineta
                span F
              | Fortalecer el control social y el seguimiento ciudadano. 
            li 
              .lista-ol--cuadro__vineta
                span G
              | Evaluar la gestión institucional y el uso de los recursos públicos. 
            li 
              .lista-ol--cuadro__vineta
                span H
              | Consolidar capacidades ciudadanas para una participación más activa.
    .row.justify-content-center
      .col-lg-10
        .row
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema6/img32.svg', alt='')
          .col-lg-10
            p La implementación de estas estrategias permite fortalecer la participación social desde una perspectiva progresiva e integral, orientada a consolidar procesos con mayor capacidad de incidencia. A partir de este enfoque, resulta fundamental analizar el papel de la formación y la educación en la participación, como elementos clave para el desarrollo de capacidades ciudadanas.
    Separador
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.4 Formación y educación para la participación
    .row.justify-content-center.align-items-center.bg4.mb-4
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema6/img33.png', alt='')
      .col-lg-7.tarjeta.color-primario.p-4
        .row
          .col-lg-auto.d-none.d-lg-block
            figure.mb-2
              img(src='@/assets/curso/temas/tema6/img34.svg', alt='')
          .col-lg-12
            p La formación y educación para la participación social en salud constituyen componentes esenciales para el fortalecimiento de las capacidades ciudadanas, permitiendo a las personas comprender el funcionamiento del sistema de salud y ejercer de manera efectiva su derecho a participar en los procesos de toma de decisiones. Estos procesos formativos no se limitan a la transmisión de información, sino que buscan desarrollar habilidades, actitudes y competencias que favorezcan una participación crítica, informada y propositiva.
    p.mb-4 El desarrollo de procesos educativos fortalece la participación social, porque permite que la ciudadanía comprenda sus derechos, reconozca los mecanismos disponibles y participe con mayor seguridad en la gestión pública. Estos procesos favorecen una intervención informada, crítica y orientada a la construcción de soluciones colectivas:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-2.order-lg-1
         LineaTiempoD.color-acento-botones
          p(numero="A" titulo="Apropiación de conocimientos")
            | Permite que la ciudadanía comprenda sus derechos, deberes y mecanismos de participación en el sistema.
          p(numero="B" titulo="Fortalecimiento del control social")
            | Favorece el seguimiento ciudadano a la gestión pública y al cumplimiento de los compromisos institucionales.
          p(numero="C" titulo="Análisis de problemáticas")
            | ayuda a las comunidades a identificar necesidades, causas y posibles soluciones en su territorio.
          p(numero="D" titulo="Formulación de propuestas")
            | promueve que la ciudadanía plantee alternativas viables para mejorar las condiciones de salud y bienestar.
          p(numero="E" titulo="Incidencia en la gestión pública")
            | permite que la comunidad participe de manera informada en decisiones que afectan su calidad de vida.
      .col-lg-5.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema6/img35.png', alt='')
    .row.justify-content-center.mb-4
      .col-lg-10
        .p-4.cajon.color-secundario
          p.mb-0 Estos procesos educativos ayudan a que la ciudadanía pase de recibir información a participar con mayor seguridad y organización. Cuando las personas comprenden sus derechos, conocen el sistema y desarrollan liderazgo, pueden aportar propuestas, ejercer control social e incidir en decisiones que mejoran el bienestar de la comunidad.
    p Para comprender el proceso de fortalecimiento de capacidades en la participación social, se presenta una secuencia que organiza los momentos clave de la formación ciudadana. Esta secuencia permite reconocer cómo la información básica, la comprensión del sistema, el liderazgo comunitario y la incidencia en decisiones públicas contribuyen a una participación más activa y efectiva.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Proceso formativo para la participación social en salud
        .d-none.d-lg-block.mb-4
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema6/img36.svg', alt='Figura 2. Proceso formativo para la participación social en salud. Pirámide que representa el proceso formativo para la participación social. Incluye cuatro niveles: información básica sobre derechos en salud, comprensión del sistema de salud, desarrollo de liderazgo comunitario e incidencia en decisiones públicas.')
        .d-block.d-lg-none
          figure
            img(src='@/assets/curso/temas/tema6/img36_1.svg', alt='Figura 2. Proceso formativo para la participación social en salud. Pirámide que representa el proceso formativo para la participación social. Incluye cuatro niveles: información básica sobre derechos en salud, comprensión del sistema de salud, desarrollo de liderazgo comunitario e incidencia en decisiones públicas.')
        p La figura anterior ilustra la formación para la participación como un proceso progresivo, en el cual las personas avanzan desde el acceso a información básica hasta el desarrollo de capacidades para incidir en la toma de decisiones públicas en salud.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img37.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p En un primer nivel, la formación se orienta al acceso a información básica sobre derechos en salud, lo que permite a la ciudadanía reconocer sus garantías y responsabilidades dentro del sistema. Este nivel constituye la base para el desarrollo de procesos participativos, ya que facilita la comprensión inicial del entorno institucional.
        br
        br
        p.mb-0 Posteriormente, se fortalece la comprensión del sistema de salud, incluyendo su organización, actores, funcionamiento y mecanismos de participación. Este conocimiento permite a la ciudadanía identificar oportunidades de intervención y comprender los espacios en los cuales puede ejercer su derecho a participar.
    p En un nivel más avanzado, se promueve el desarrollo de liderazgo comunitario, fortaleciendo habilidades de organización, comunicación y gestión que permiten a los actores sociales representar intereses colectivos y dinamizar procesos participativos en los territorios.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.order-2.order-lg-1
        .row.justify-content-center.mb-2
          .col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema6/img38.svg', alt='')
          .col-lg-10
            p.mb-0 Finalmente, la formación permite avanzar hacia la incidencia en decisiones públicas, donde la ciudadanía participa de manera activa en la formulación de propuestas, el seguimiento de políticas y la toma de decisiones relacionadas con la gestión del sistema de salud.
        .p-4.cajon.color-primario
          p.mb-0 La formación para la participación convierte el conocimiento ciudadano en acción colectiva, fortalece el liderazgo comunitario y favorece decisiones públicas más informadas, corresponsables y cercanas a las necesidades del territorio.
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema6/img39.png', alt='')
    p A partir del fortalecimiento de la formación ciudadana, resulta necesario analizar el rol de las instituciones y la comunidad. Estos actores cumplen funciones esenciales para garantizar espacios de participación, promover el diálogo y sostener procesos participativos en los territorios.
    Separador
    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.5 Rol de las instituciones y la comunidad
    p El fortalecimiento de la participación social en salud requiere la acción articulada de las instituciones del sector salud y de la comunidad, en un marco de corresponsabilidad orientado a garantizar el ejercicio efectivo del derecho a la salud. Este proceso implica reconocer que la participación no depende únicamente de la disposición de la ciudadanía, sino también de las condiciones que generan las instituciones para facilitar su intervención en la gestión del sistema.
    .row.justify-content-center.align-items-center.bg4.mb-4
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema6/img40.png', alt='')
      .col-lg-7.tarjeta.color-primario.p-4
        .row
          .col-lg-auto.d-none.d-lg-block
            figure.mb-2
              img(src='@/assets/curso/temas/tema6/img41.svg', alt='')
          .col-lg-12
            p Desde el ámbito institucional, las entidades del sector salud tienen la responsabilidad de promover escenarios de participación incluyentes, garantizar el acceso a la información pública y fortalecer los mecanismos de diálogo con la ciudadanía. Esto implica no solo la apertura de espacios formales, sino también el desarrollo de estrategias que permitan una participación real, con capacidad de incidencia en la toma de decisiones. Asimismo, las instituciones deben fomentar procesos de formación, acompañar a las organizaciones sociales y asegurar la continuidad de los procesos participativos en los territorios (Ministerio de Salud y Protección Social, 2017).
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.cajon.color-secundario
          p.mb-0 Por su parte, la comunidad desempeña un papel activo en la identificación de necesidades, la formulación de propuestas y el ejercicio del control social sobre la gestión del sistema de salud. La participación comunitaria implica organización, compromiso y capacidad de interlocución con las instituciones, lo que permite fortalecer los procesos de concertación y contribuir al mejoramiento de las condiciones de salud de la población.
    p Para comprender la relación entre instituciones y comunidad, se presentan los aportes de cada actor en el fortalecimiento de los procesos participativos y en la construcción de respuestas acordes con las necesidades del territorio:
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema6/img42.svg', alt='Texto que describa la imagen')
          
        h5.text-center Instituciones
        p.mb-0 Tienen la responsabilidad de promover espacios de participación, garantizar el acceso a información clara y fortalecer procesos de formación ciudadana. Además, deben facilitar el diálogo con la comunidad y acompañar el seguimiento de las acciones públicas. #[b Ejemplo]: una secretaría municipal de salud convoca mesas de participación para socializar planes de intervención y recoger propuestas de la ciudadanía.
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema6/img43.svg', alt='Texto que describa la imagen')
          
        h5.text-center Comunidad
        p.mb-0 Participa activamente en la identificación de necesidades, la formulación de propuestas y el ejercicio del control social. Su intervención permite que las decisiones públicas respondan a las condiciones reales del territorio. #[b Ejemplo]: una asociación de usuarios presenta observaciones sobre la oportunidad en la atención y solicita mejoras en los canales de servicio de una entidad prestadora.
    p La articulación entre instituciones y comunidad permite consolidar procesos participativos más efectivos, basados en la confianza, el diálogo y la corresponsabilidad. Cuando las entidades facilitan condiciones para participar y la ciudadanía interviene de manera organizada, se fortalece la gestión pública y se promueven respuestas más pertinentes frente a las necesidades de la población.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.cajon.color-primario
          p.mb-0 En este contexto, el fortalecimiento de la participación social requiere que las instituciones generen condiciones adecuadas para la intervención ciudadana y que la comunidad participe de manera activa, informada y responsable. Esta relación permite construir una gestión más democrática, en la que la ciudadanía aporta a las decisiones y al mejoramiento del sistema de salud.
    p Para avanzar en este fortalecimiento, es necesario reconocer los elementos que permiten organizar la participación, mejorar la intervención ciudadana y sostener los procesos participativos en los territorios como:
    .BG05.px-5.p-5.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/tema6/img44.png', alt='')
        .col-lg-6
          ul.lista-ul--color
            li 
              i.fas.fa-hand-holding-medical
              | Crear espacios de participación claros y accesibles.
            li 
              i.fas.fa-hand-holding-medical
              | Garantizar información oportuna y comprensible.
            li 
              i.fas.fa-hand-holding-medical
              | Promover el diálogo entre instituciones y comunidad.
            li 
              i.fas.fa-hand-holding-medical
              | Fortalecer la formación ciudadana.
            li 
              i.fas.fa-hand-holding-medical
              | Impulsar el control social y el seguimiento a la gestión pública.
            li 
              i.fas.fa-hand-holding-medical
              | Reconocer a la ciudadanía como actor clave en la toma de decisiones.
          p El reconocimiento de estos elementos permite comprender que la participación social requiere condiciones claras para su desarrollo. Cuando existen espacios accesibles, información comprensible, diálogo permanente, formación ciudadana y seguimiento a la gestión pública, la comunidad puede participar de manera más organizada, responsable y con mayor capacidad de incidencia en las decisiones que afectan su bienestar.            
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-2.order-lg-1
        p Con el propósito de profundizar en el rol de las instituciones y la comunidad en el fortalecimiento de la participación social, se propone el siguiente recurso de audio. Este material explica, de manera clara y contextualizada, cómo la acción articulada entre entidades del sector salud, organizaciones sociales y ciudadanía favorece el diálogo, el control social, la toma de decisiones y la construcción de respuestas acordes con las necesidades del territorio.
        .tarjeta.bg3.p-4
          .row.justify-content-center.align-items-center
            .col-lg-4.col-8.mb-4.mb-lg-0
              img(src='@/assets/curso/temas/tema6/img45.svg', alt='')
            .col-lg-6
              TarjetaAudio.color-primario.mb-3(
                texto="Instituciones y comunidad: trabajando juntos por la participación en salud"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema6/img46.png', alt='')
    .row.justify-content-center.mb-4
      .col-lg-10
        .row.justify-content-center.p-4.cajon.color-secundario
          .col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema6/img47.svg', alt='')
          .col-lg-10
            p.mb-0 El recurso de audio permite reforzar la importancia del trabajo conjunto entre instituciones y comunidad para fortalecer la participación social. Su contenido facilita la comprensión del tema mediante ejemplos cercanos al contexto colombiano y resalta que una participación efectiva requiere información clara, diálogo permanente, organización comunitaria y corresponsabilidad en la gestión pública.
    p El desarrollo y fortalecimiento de la participación social en salud constituye un proceso integral que articula el reconocimiento normativo, la implementación de estrategias, la formación ciudadana y la corresponsabilidad entre instituciones y comunidad. Estos elementos permiten avanzar hacia una participación más efectiva, con capacidad de incidencia en la gestión del sistema de salud y en la garantía del derecho fundamental a la salud.
</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

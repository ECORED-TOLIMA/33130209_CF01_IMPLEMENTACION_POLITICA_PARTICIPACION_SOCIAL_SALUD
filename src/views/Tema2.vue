<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Participación social en salud en Colombia

    .BG02.px-5.p-5
      .tarjeta.tarjeta--blanco.p-4
        PasosB.color-acento-contenido
          .row(titulo="")
            .col-lg-5.col-8.mb-4.mb-lg-0
              figure
                img(
                  src="@/assets/curso/temas/tema2/img2.png"  alt="Imagen decorativa")
            .col-lg-7
              h5 Intervención ciudadana
              p.mb-0 permite que las personas y organizaciones participen en espacios de diálogo, consulta y decisión sobre asuntos de salud. Su finalidad es aportar necesidades, experiencias y propuestas que orienten acciones pertinentes para la comunidad y el territorio local colombiano. 
          .row(titulo="")
            .col-lg-5.col-8.mb-4.mb-lg-0
              figure
                img(
                  src="@/assets/curso/temas/tema2/img3.png"  alt="Imagen decorativa")
            .col-lg-7
              h5 Control social
              p.mb-0 facilita el seguimiento ciudadano a la gestión pública, al uso de los recursos y al cumplimiento de las acciones en salud. Este ejercicio fortalece la transparencia, la rendición de cuentas y la confianza entre instituciones y comunidad organizada. 
          .row(titulo="")
            .col-lg-5.col-8.mb-4.mb-lg-0
              figure
                img(
                  src="@/assets/curso/temas/tema2/img4.png"  alt="Imagen decorativa")
            .col-lg-7
              h5 Construcción colectiva
              p.mb-0 promueve la identificación de necesidades y la búsqueda de soluciones mediante el diálogo entre ciudadanía, organizaciones sociales e instituciones. Esta forma de trabajo permite responder mejor a los problemas de salud desde la experiencia y realidad del territorio. 
          .row(titulo="")
            .col-lg-5.col-8.mb-4.mb-lg-0
              figure
                img(
                  src="@/assets/curso/temas/tema2/img5.png"  alt="Imagen decorativa")
            .col-lg-7
              h5 Corresponsabilidad
              p.mb-0 reconoce que la garantía del derecho a la salud requiere compromisos compartidos entre el Estado, las instituciones y la ciudadanía. Cada actor aporta desde su función para fortalecer el cuidado, la participación y el bienestar colectivo comunitario en salud. 
          .row(titulo="")
            .col-lg-5.col-8.mb-4.mb-lg-0
              figure
                img(
                  src="@/assets/curso/temas/tema2/img6.png"  alt="Imagen decorativa")
            .col-lg-7
              h5 Incidencia en decisiones
              p.mb-0 permite que la comunidad influya en la planeación, ejecución, seguimiento y evaluación de políticas o acciones en salud. Esta participación busca que las decisiones públicas respondan a necesidades reales y favorezcan mayor equidad e inclusión territorial efectiva.
            
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1 Concepto de participación social en salud

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.2 Marco conceptual de la participación social

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.3 Objetivos de la participación social en salud
</template>

<script>
export default {
  name: 'Tema2',
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

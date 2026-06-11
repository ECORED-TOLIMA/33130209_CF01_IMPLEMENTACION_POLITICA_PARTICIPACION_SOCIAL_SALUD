<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Desarrollo y fortalecimiento de la participación social

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Acceso a servicios")
            .col
              p.mb-0 Corresponde a la posibilidad de recibir atención oportuna, eficaz y de calidad, sin barreras administrativas, económicas, geográficas o culturales. Ejemplo: una comunidad rural cuenta con jornadas de atención primaria que facilitan controles preventivos y orientación sobre rutas de atención.
          .row(titulo="Participación social")
            .col
              p.mb-0 Permite que la ciudadanía intervenga en los procesos de planeación, seguimiento y evaluación de las acciones institucionales. Ejemplo: líderes comunitarios participan en una mesa territorial para expresar necesidades, proponer mejoras y priorizar acciones relacionadas con la atención de la población.
          .row(titulo="Control ciudadano")
            .col
              p.mb-0 Consiste en el seguimiento que realiza la ciudadanía a la gestión pública, al uso de los recursos y al cumplimiento de compromisos institucionales. Ejemplo: una veeduría ciudadana revisa si una entidad cumple los acuerdos establecidos para mejorar la atención en un territorio.[
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema5/img9.png', alt='Texto que describa la imagen')

    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.1 Situación actual: avances y desafíos

    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.2 Niveles de desarrollo de la participación

    Separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.3 Estrategias de fortalecimiento

    Separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.4 Formación y educación para la participación

    Separador
    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.5 Rol de las instituciones y la comunidad
</template>

<script>
export default {
  name: 'Tema5',
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

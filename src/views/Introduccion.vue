<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(
            src="@/assets/curso/temas/intro/img1.svg"  alt="Imagen decorativa")
      .col-lg-9
        .cajon.color-primario.p-4.mb-4
          p.mb-0 La participación social en salud constituye un componente fundamental para la garantía del derecho a la salud y el fortalecimiento de la gestión pública en Colombia. En el marco del Estado social de derecho, la ciudadanía, las organizaciones sociales y las comunidades son reconocidas como actores clave en la toma de decisiones relacionadas con la planeación, implementación y evaluación de las políticas públicas en salud, lo que contribuye a una gestión más democrática, transparente e incluyente.
        p Desde una perspectiva normativa, el país ha consolidado un conjunto de disposiciones que promueven la participación ciudadana como un derecho y un deber en la construcción del bienestar colectivo. En este contexto, la Ley Estatutaria 1751 de 2015 reconoce la salud como un derecho fundamental autónomo e irrenunciable, incorporando la participación social como un principio esencial para su garantía. De igual manera, la Política de Participación Social en Salud, adoptada mediante la Resolución 2063 de 2017, establece lineamientos orientados a fortalecer la incidencia de la ciudadanía en la gestión del sistema de salud y a promover procesos de corresponsabilidad entre el Estado y la sociedad.
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/intro/img2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En este componente formativo se abordan los fundamentos conceptuales, normativos y estratégicos de la participación social en salud en Colombia, incluyendo el análisis del marco normativo, los principios y enfoques de la participación, así como los mecanismos, estrategias y procesos para su implementación en los diferentes niveles territoriales. Estos elementos permiten comprender el papel de la ciudadanía en el fortalecimiento del sistema de salud y en la garantía del derecho a la salud.
    p A partir de este enfoque, el desarrollo de los contenidos se orienta a fortalecer las capacidades de los actores sociales y comunitarios para participar de manera informada en los procesos de gestión en salud, promoviendo el control social, la corresponsabilidad y la construcción colectiva de soluciones frente a las necesidades de la población.
    p.mb-4 Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    figure.mb-3
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({}),
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

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4(v-for="(paragraph, index) in paragraphs" :key="index") {{ paragraph }}

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(
            src="@/assets/curso/sintesis.svg"
            alt="Síntesis del componente sobre participación social en salud: marco normativo, participación ciudadana, derecho fundamental a la salud, implementación, fortalecimiento de capacidades, control social y corresponsabilidad entre instituciones y comunidad."
          )
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis
</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    paragraphs: [
      'La participación social en salud en Colombia se configura como un proceso fundamental para el fortalecimiento del sistema de salud y la garantía del derecho fundamental a la salud, en el cual la ciudadanía, las organizaciones sociales y las instituciones interactúan de manera articulada. Su desarrollo se sustenta en un marco normativo sólido que reconoce la participación como un elemento esencial en la gestión pública, promoviendo la intervención activa de la comunidad en la toma de decisiones, el control social y la construcción de políticas orientadas al bienestar colectivo.',
      'A lo largo del desarrollo del contenido, se evidencia que la participación social no se limita a la existencia de mecanismos formales, sino que requiere procesos progresivos de fortalecimiento, incluyendo el desarrollo de capacidades ciudadanas, la consolidación de estructuras organizativas y la implementación de estrategias que permitan una incidencia real en la gestión del sistema de salud. En este sentido, los niveles de desarrollo de la participación, las estrategias de fortalecimiento y los procesos formativos constituyen elementos clave para avanzar hacia una participación más efectiva, inclusiva y sostenible en los territorios.',
      'El análisis de la situación actual permite identificar avances significativos, así como desafíos que requieren acciones articuladas entre instituciones y comunidad. La corresponsabilidad, el acceso a la información, la formación para la participación y el fortalecimiento del control social emergen como factores determinantes para consolidar una ciudadanía activa y un sistema de salud más democrático, equitativo y orientado a las necesidades de la población.',
    ],
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

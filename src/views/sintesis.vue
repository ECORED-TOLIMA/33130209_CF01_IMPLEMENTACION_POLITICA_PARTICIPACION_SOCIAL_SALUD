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
            alt="Mapa conceptual titulado “Fundamentos normativos de la participación social en salud”. Presenta cinco ejes temáticos: marco normativo, participación social en salud, derecho fundamental a la salud, política de participación social, e implementación y fortalecimiento. Cada eje organiza subtemas que explican las normas, conceptos, principios, mecanismos y estrategias necesarias para comprender la intervención de la ciudadanía, las instituciones y la comunidad en la gestión pública. En síntesis, el mapa muestra que la participación social en salud requiere conocimiento normativo, formación ciudadana, corresponsabilidad y articulación territorial para fortalecer el derecho fundamental a la salud y el bienestar colectivo."
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
      'La participación social en salud fortalece la garantía del derecho fundamental a la salud y la incidencia de la ciudadanía en la gestión pública. A lo largo del componente se analizan el marco normativo, la Ley Estatutaria de Salud, la Política de Participación Social en Salud, los mecanismos de participación y las estrategias de implementación y fortalecimiento como elementos relacionados que orientan la toma de decisiones, el control social y la construcción colectiva de soluciones. La comprensión de estos contenidos permite reconocer la participación como un proceso organizado, incluyente y corresponsable, orientado al bienestar de la población y al fortalecimiento de la gobernanza en los territorios. A continuación, el mapa conceptual presenta, de manera visual, la organización de los contenidos y la relación entre sus ejes temáticos.',
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

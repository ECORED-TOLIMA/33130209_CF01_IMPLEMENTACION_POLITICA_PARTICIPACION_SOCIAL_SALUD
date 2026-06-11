<template lang="pug">
.contenido-tema
  p.mb-4(
    v-for="(paragraph, index) in introduccion"
    :key="`intro-${index}`"
  ) {{ paragraph }}

  .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(
    v-if="destacado"
  )
    .bloque-texto-g__img(:style="{ 'background-image': `url(${destacado.imagen})` }")
    .bloque-texto-g__texto.p-4
      p.mb-0 {{ destacado.texto }}

  .tema-bloque(v-for="section in sections" :key="section.id || section.titulo")
    Separador(v-if="section.id")
    .titulo-segundo.color-acento-contenido(
      v-if="section.id"
      :id="section.id"
      data-aos="fade-left"
    )
      h2 {{ section.numero }} {{ section.titulo }}

    p.mb-4(
      v-for="(paragraph, index) in section.paragraphs"
      :key="`${section.id || section.titulo}-p-${index}`"
    ) {{ paragraph }}

    .tarjeta.color-primario.p-4.mb-4(v-if="section.figure")
      .row.align-items-center
        .col-auto
          i.fas.fa-project-diagram.fa-2x
        .col
          p.fw-bold.mb-1 {{ section.figure }}
          p.mb-0(v-if="section.note") {{ section.note }}

    p.mb-4(
      v-for="(paragraph, index) in section.afterFigure"
      :key="`${section.id || section.titulo}-pf-${index}`"
    ) {{ paragraph }}

    .tabla-a.color-acento-contenido.mb-5(v-if="section.table")
      table
        caption(v-if="section.table.caption") {{ section.table.caption }}
        thead
          tr
            th(v-for="head in section.table.headers" :key="head") {{ head }}
        tbody
          tr(v-for="(row, rowIndex) in section.table.rows" :key="rowIndex")
            td(v-for="(cell, cellIndex) in row" :key="cellIndex") {{ cell }}

    p.mb-4(
      v-for="(paragraph, index) in section.afterTable"
      :key="`${section.id || section.titulo}-pt-${index}`"
    ) {{ paragraph }}
</template>

<script>
export default {
  name: 'TemaContenido',
  props: {
    introduccion: {
      type: Array,
      default: () => [],
    },
    destacado: {
      type: Object,
      default: null,
    },
    sections: {
      type: Array,
      required: true,
    },
  },
}
</script>

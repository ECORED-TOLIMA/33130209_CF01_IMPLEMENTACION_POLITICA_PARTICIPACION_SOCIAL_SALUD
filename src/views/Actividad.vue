<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    #Actividad
      <Actividad :cuestionario="cuestionario"/>
</template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'

const imagenActividad = id => require(`@/assets/actividad/imagen${id}.png`)

export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos normativos de la participación social en salud',
      titulo: 'Desafío Ciudadano en Salud',
      introduccion:
        '<b>Objetivo:</b> Evaluar la apropiación de los conocimientos relacionados con el derecho a la salud, el marco normativo, la Ley Estatutaria de Salud, la Política de Participación Social en Salud y los mecanismos de participación ciudadana.',
      barajarPreguntas: true,
      titulo_aprobado: '¡Buen trabajo!',
      titulo_reprobado: 'Vuelva a intentarlo.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal de la participación social en salud?',
          imagen: imagenActividad(1),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar la cobertura hospitalaria',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mejorar la infraestructura médica',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Fortalecer la incidencia de la ciudadanía en la gestión del sistema de salud',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Reducir costos del sistema', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! La participación social busca fortalecer la incidencia de la ciudadanía en la gestión del sistema de salud y en la toma de decisiones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué norma reconoce la salud como un derecho fundamental en Colombia?',
          imagen: imagenActividad(2),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Decreto 1757 de 1994', esCorrecta: false },
            { id: 'b', texto: 'Ley 1751 de 2015', esCorrecta: true },
            { id: 'c', texto: 'Ley 100 de 1993', esCorrecta: false },
            { id: 'd', texto: 'Ley 1438 de 2011', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! La Ley 1751 de 2015 establece la salud como un derecho fundamental autónomo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: 'La participación social en salud permite principalmente:',
          imagen: imagenActividad(3),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Reducir personal médico', esCorrecta: false },
            {
              id: 'b',
              texto: 'Controlar hospitales privados',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Intervenir en la gestión del sistema de salud',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Intervenir en la gestión del sistema de salud',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Permite a la ciudadanía intervenir en la planeación, gestión y evaluación del sistema de salud.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de los siguientes es un mecanismo de participación social en salud?',
          imagen: imagenActividad(4),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Medicamentos', esCorrecta: false },
            { id: 'b', texto: 'COPACOS', esCorrecta: true },
            { id: 'c', texto: 'EPS', esCorrecta: false },
            { id: 'd', texto: 'Historias clínicas', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Bien hecho! Los COPACOS son espacios de participación comunitaria en salud.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: '¿Qué promueve la participación social en salud?',
          imagen: imagenActividad(5),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Corresponsabilidad entre Estado y ciudadanía',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Privatización del sistema', esCorrecta: false },
            { id: 'c', texto: 'Exclusión social', esCorrecta: false },
            {
              id: 'd',
              texto: 'Centralización de decisiones',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Promueve la corresponsabilidad entre los diferentes actores del sistema.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: 'El Decreto 1757 de 1994 se relaciona con:',
          imagen: imagenActividad(6),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Emergencias médicas', esCorrecta: false },
            {
              id: 'b',
              texto: 'Participación social en salud',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Medicamentos', esCorrecta: false },
            {
              id: 'd',
              texto: 'Infraestructura hospitalaria',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Este decreto regula la participación social en el sistema de salud.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: '¿Qué permite el control social en salud?',
          imagen: imagenActividad(7),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Reducir participación', esCorrecta: false },
            { id: 'b', texto: 'Aumentar precios', esCorrecta: false },
            { id: 'c', texto: 'Vigilar la gestión pública', esCorrecta: true },
            { id: 'd', texto: 'Eliminar normas', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! El control social permite hacer seguimiento a la gestión pública y uso de recursos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'La Política de Participación Social en Salud fue adoptada mediante:',
          imagen: imagenActividad(8),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Resolución 2063 de 2017', esCorrecta: true },
            { id: 'b', texto: 'Decreto 1757 de 2017', esCorrecta: false },
            { id: 'c', texto: 'Ley 1757 de 2018', esCorrecta: false },
            { id: 'd', texto: 'Ley 100 de 2017', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente! La Resolución 2063 de 2017 establece la PPSS.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: 'Un objetivo de la participación social es:',
          imagen: imagenActividad(9),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Reducir participación', esCorrecta: false },
            {
              id: 'b',
              texto: 'Fortalecer capacidades ciudadanas',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Limitar la información', esCorrecta: false },
            { id: 'd', texto: 'Eliminar comunidades', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! Busca fortalecer las capacidades de la ciudadanía para participar activamente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Qué caracteriza la participación social en salud?',
          imagen: imagenActividad(10),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Aislamiento', esCorrecta: false },
            { id: 'b', texto: 'Incidencia en decisiones', esCorrecta: true },
            { id: 'c', texto: 'Centralización', esCorrecta: false },
            { id: 'd', texto: 'Pasividad', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! La participación implica incidencia real en la toma de decisiones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Qué enfoque reconoce a las personas como sujetos de derechos?',
          imagen: imagenActividad(1),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Intersectorial', esCorrecta: false },
            { id: 'b', texto: 'Territorial', esCorrecta: false },
            { id: 'c', texto: 'Comunitario', esCorrecta: false },
            { id: 'd', texto: 'De derechos', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Correcto! El enfoque de derechos reconoce a las personas como sujetos activos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: 'Las veedurías ciudadanas permiten:',
          imagen: imagenActividad(2),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Privatizar servicios', esCorrecta: false },
            { id: 'b', texto: 'Reducir normas', esCorrecta: false },
            { id: 'c', texto: 'Comprar servicios', esCorrecta: false },
            {
              id: 'd',
              texto: 'Supervisar la gestión pública',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Bien hecho! Son mecanismos de control social sobre la gestión pública.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: 'La participación social contribuye a:',
          imagen: imagenActividad(3),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Exclusión', esCorrecta: false },
            { id: 'b', texto: 'Gobernanza en salud', esCorrecta: true },
            { id: 'c', texto: 'Centralización', esCorrecta: false },
            { id: 'd', texto: 'Desigualdad', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! Fortalece la gobernanza del sistema de salud.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: 'La Ley 1757 de 2015 regula:',
          imagen: imagenActividad(4),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Medicamentos', esCorrecta: false },
            { id: 'b', texto: 'Hospitales', esCorrecta: false },
            { id: 'c', texto: 'Participación ciudadana', esCorrecta: true },
            { id: 'd', texto: 'Servicios médicos', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! Regula los mecanismos de participación democrática.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Cuál es un objetivo del control social?',
          imagen: imagenActividad(5),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ocultar información', esCorrecta: false },
            { id: 'b', texto: 'Garantizar transparencia', esCorrecta: true },
            { id: 'c', texto: 'Reducir participación', esCorrecta: false },
            { id: 'd', texto: 'Eliminar normas', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! El control social promueve transparencia en la gestión pública.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: 'La participación social permite:',
          imagen: imagenActividad(6),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Construir soluciones colectivas',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Aislar comunidades', esCorrecta: false },
            { id: 'c', texto: 'Reducir derechos', esCorrecta: false },
            { id: 'd', texto: 'Centralizar decisiones', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente! Favorece la construcción colectiva de soluciones en salud.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: '¿Qué promueve la educación en participación social?',
          imagen: imagenActividad(7),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Exclusión', esCorrecta: false },
            { id: 'b', texto: 'Aislamiento', esCorrecta: false },
            { id: 'c', texto: 'Capacidades ciudadanas', esCorrecta: true },
            { id: 'd', texto: 'Desinformación', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! La educación fortalece las capacidades para participar activamente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: 'Los COPACOS son:',
          imagen: imagenActividad(8),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Hospitales', esCorrecta: false },
            {
              id: 'b',
              texto: 'Espacios de participación comunitaria',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Medicamentos', esCorrecta: false },
            { id: 'd', texto: 'EPS', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! Son espacios clave para la participación comunitaria en salud.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: 'La participación social en salud busca:',
          imagen: imagenActividad(9),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Reducir ciudadanía', esCorrecta: false },
            { id: 'b', texto: 'Eliminar instituciones', esCorrecta: false },
            {
              id: 'c',
              texto: 'Mejorar condiciones de salud',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Limitar acceso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! Busca mejorar las condiciones de salud de la población.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: 'La gobernanza en salud se fortalece mediante:',
          imagen: imagenActividad(10),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Privatización', esCorrecta: false },
            { id: 'b', texto: 'Exclusión', esCorrecta: false },
            { id: 'c', texto: 'Participación social', esCorrecta: true },
            { id: 'd', texto: 'Centralización', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente! La participación social es clave para una gobernanza más democrática.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Buen trabajo! Ha demostrado una comprensión adecuada de los fundamentos de la participación social en salud, reconociendo su importancia en la garantía del derecho a la salud y en el fortalecimiento de la gestión del sistema. Continúe fortaleciendo sus conocimientos para una participación más activa y consciente.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>

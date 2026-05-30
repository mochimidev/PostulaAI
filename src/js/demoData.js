export const demoResume = `Maya Chen
Analista Senior de Producto
Santiago, Chile | maya.chen@example.com | linkedin.com/in/mayachen

RESUMEN
Analista de producto con 6 anos de experiencia ayudando a equipos SaaS a mejorar activacion, retencion y monetizacion. Solida experiencia en SQL, experimentacion, diseno de dashboards, storytelling ejecutivo y descubrimiento de producto con equipos multidisciplinarios.

EXPERIENCIA
Analista Senior de Producto, Brightlane Cloud
2022 - Presente
- Colabore con product managers y equipos de lifecycle marketing para aumentar la activacion de nuevos usuarios en 18% mediante analisis de embudos, segmentacion de cohortes y experimentos de onboarding.
- Construí dashboards self-service en Looker y Tableau utilizados semanalmente por liderazgo de producto, ventas y customer success.
- Disene pruebas A/B para cambios en pagina de precios, nudges de trial e hitos de onboarding; mejore la conversion de trial a pago en 11%.
- Cree un modelo de salud de retencion usando SQL, dbt y datos de eventos del warehouse para identificar cuentas en riesgo.

Analista de Datos de Producto, Northstar Labs
2019 - 2022
- Analice adopcion de funcionalidades y recorridos de clientes para una plataforma B2B de colaboracion con 45k usuarios activos mensuales.
- Estandarice definiciones de KPI y trabaje con ingenieria para mejorar la instrumentacion analitica.
- Presente insights a stakeholders senior e influí en la priorizacion del roadmap.

HABILIDADES
SQL, Python, dbt, Looker, Tableau, Amplitude, Mixpanel, pruebas A/B, analisis de cohortes, analitica de producto, analitica de ciclo de vida, comunicacion con stakeholders, experimentacion, storytelling con datos`;

export const demoJobDescription = `Analista Senior de Producto - Growth

Buscamos un Analista Senior de Producto para trabajar junto a nuestros equipos de Growth y Lifecycle. Esta persona identificara oportunidades en adquisicion, activacion, conversion y retencion, y traducira insights en experimentos y recomendaciones de producto.

Responsabilidades:
- Analizar embudos de producto, cohortes, comportamiento de usuarios y patrones de retencion.
- Disenar lecturas de experimentos y colaborar con product managers en estrategia de pruebas A/B.
- Construir dashboards y reportes recurrentes para equipos ejecutivos y operativos.
- Trabajar con ingenieria para definir instrumentacion analitica y tracking de eventos.
- Comunicar recomendaciones con claridad a audiencias tecnicas y no tecnicas.

Requisitos:
- 5+ anos en analitica de producto, growth analytics o business intelligence.
- SQL avanzado y experiencia con cloud data warehouses.
- Experiencia con experimentacion, pensamiento estadistico y metricas de producto.
- Familiaridad con Looker, Tableau, Amplitude, Mixpanel, dbt y Python.
- Comunicacion solida, criterio de negocio y storytelling ejecutivo.

Deseable:
- Experiencia con SaaS PLG, lifecycle marketing, analisis de churn, reverse ETL y segmentacion de clientes.
- Certificaciones en Google Analytics, Tableau o plataformas cloud de datos.`;

export const baseAnalysis = {
  score: 84,
  strengths: [
    "Alta alineacion con analitica de producto, embudos de growth y experimentacion de ciclo de vida.",
    "El curriculum incluye resultados medibles en activacion y conversion.",
    "El stack tecnico coincide bien con SQL, Looker, Tableau, dbt, Amplitude y Mixpanel.",
    "Hay evidencia clara de comunicacion con stakeholders y reporteria ejecutiva."
  ],
  missingSkills: ["Reverse ETL", "Nombre explicito del cloud data warehouse", "Lenguaje formal de pruebas estadisticas"],
  keywords: [
    "growth analytics",
    "SaaS PLG",
    "activacion",
    "retencion",
    "tracking de eventos",
    "segmentacion de clientes",
    "analisis de churn",
    "storytelling ejecutivo"
  ],
  improvements: [
    "Agrega un bullet que nombre el entorno de cloud warehouse usado, como Snowflake, BigQuery o Redshift.",
    "Menciona confianza estadistica, potencia o metodos de diseno experimental cuando corresponda.",
    "Incluye una linea breve de herramientas cerca del inicio para facilitar el escaneo ATS.",
    "Usa la frase exacta growth analytics si representa correctamente tu experiencia reciente."
  ],
  technologies: ["Snowflake", "BigQuery", "Hightouch", "Census", "dbt Metrics", "Segment"],
  certifications: [
    "Tableau Certified Data Analyst",
    "Google Analytics Certification",
    "SnowPro Core Certification",
    "dbt Analytics Engineering Certification"
  ],
  progress: [
    { label: "Cobertura de palabras clave", value: 78 },
    { label: "Afinidad de experiencia", value: 92 },
    { label: "Alineacion de herramientas", value: 86 },
    { label: "Claridad de impacto", value: 88 },
    { label: "Estructura ATS", value: 81 }
  ],
  skills: [
    { name: "SQL", status: "matched", fit: "Avanzado" },
    { name: "Pruebas A/B", status: "matched", fit: "Solido" },
    { name: "Looker/Tableau", status: "matched", fit: "Solido" },
    { name: "Metricas de producto", status: "matched", fit: "Solido" },
    { name: "Reverse ETL", status: "missing", fit: "Agregar evidencia" },
    { name: "Cloud warehouse", status: "missing", fit: "Nombrar herramienta" }
  ],
  radar: [
    { label: "Habilidades", value: 86 },
    { label: "Herramientas", value: 82 },
    { label: "Impacto", value: 90 },
    { label: "Keywords", value: 78 },
    { label: "Seniority", value: 88 },
    { label: "Claridad", value: 84 }
  ],
  ai: {
    summary:
      "El curriculum presenta a una analista senior de producto con fuerte experiencia en growth SaaS, resultados medibles y buen dominio de herramientas analiticas.",
    compatibility:
      "El perfil coincide bien con los requisitos centrales del rol, especialmente en analisis de embudos, experimentacion, dashboards y comunicacion con stakeholders. Las brechas principales son el lenguaje explicito de cloud warehouse y la exposicion a reverse ETL.",
    suggestions:
      "Agrega un resumen tecnico mas preciso, incorpora de forma natural las palabras clave relevantes de la oferta y refuerza los bullets de experimentacion con contexto estadistico cuando sea correcto.",
    recruiter:
      "Un reclutador probablemente veria a esta candidata como apta para una primera entrevista. El curriculum seria mas fuerte si nombrara el stack de datos con mayor precision y conectara el trabajo de growth con resultados SaaS PLG."
  }
};

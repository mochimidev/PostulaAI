# PostulaAI

PostulaAI es un agente inteligente para comparar un currículum en PDF con una descripción de empleo y devolver un análisis ATS estructurado con OpenAI.

## Descripcion

La aplicacion extrae el texto de un PDF, lo compara con la vacante objetivo y genera una respuesta JSON con puntaje de compatibilidad, fortalezas, habilidades faltantes y mejoras sugeridas.

## Funcionalidades

- Extraccion de texto desde PDF.
- Analisis de compatibilidad con `gpt-4o-mini`.
- Respuesta obligatoriamente estructurada en JSON.
- Panel visual con puntaje ATS, radar y desgloses de analisis.
- Carga de datos demo para demostraciones rapidas.

## Capturas del Proyecto

### 1. Panel Principal de Bienvenida
Aqui se presenta la propuesta de valor y el resumen global del analisis de compatibilidad.

![Panel Principal](docs/screenshots/dashboard_principal.png)

### 2. Area de Trabajo e Ingreso de Datos
Seccion donde el usuario carga su curriculo en formato PDF y pega el texto de la descripcion del empleo objetivo.

![Area de Trabajo](docs/screenshots/area_trabajo.png)

### 3. Panel de Resultados y Analisis de la IA
Visualizacion del puntaje ATS final, radar de afinidad, desglose de fortalezas, palabras clave faltantes y la perspectiva detallada del reclutador generada por el agente.

![Panel de Resultados](docs/screenshots/panel_resultados.png)

## Arquitectura de la Solucion

1. Extraccion de Texto: la aplicacion recibe el archivo PDF del curriculo y extrae su contenido textual.
2. Construccion del Contexto: se estructura el CV y la descripcion del empleo dentro de un prompt orientado a evaluacion ATS.
3. Procesamiento del Agente: el backend realiza una llamada a la API de OpenAI usando `gpt-4o-mini`.
4. Garantia de Estructura: la respuesta se fuerza en modo JSON con `response_format: { type: "json_object" }`.

## Estructura JSON Esperada

```json
{
  "puntaje_compatibilidad": 0,
  "fortalezas": [],
  "habilidades_faltantes": [],
  "mejoras_sugeridas": []
}
```

## Tecnologias

- HTML5
- CSS3
- JavaScript ES Modules
- Node.js
- Express
- Multer
- pdf-parse
- OpenAI API

## Requisitos Previos

- Node.js 18 o superior
- Variable de entorno `OPENAI_API_KEY` configurada

## Instalacion

```bash
npm install
```

## Variables de Entorno

Crear un archivo `.env` en la raiz del proyecto:

```bash
OPENAI_API_KEY=tu_api_key
PORT=3001
```

## Ejecucion

### Backend

```bash
npm run dev
```

### Frontend

Abrir `index.html` con un servidor local o integrar el frontend con el backend segun tu entorno de despliegue.

## Endpoint de Analisis

`POST /api/analyze`

### Form-data

- `resumePdf`: archivo PDF del curriculo.
- `jobDescription`: texto de la descripcion del empleo.

### Respuesta

```json
{
  "puntaje_compatibilidad": 84,
  "fortalezas": [
    "..."
  ],
  "habilidades_faltantes": [
    "..."
  ],
  "mejoras_sugeridas": [
    "..."
  ],
  "resumeText": "...",
  "pdfPages": 2
}
```

## Flujo de Uso

1. Cargar el curriculo en PDF.
2. Pegar la descripcion del empleo.
3. Enviar el analisis.
4. Revisar el puntaje ATS y las recomendaciones.

## Estructura del Proyecto

```text
.
├── index.html
├── package.json
├── README.md
├── server
│   ├── analyzeResumeController.js
│   └── index.js
└── src
    ├── js
    │   ├── analyzer.js
    │   ├── charts.js
    │   ├── demoData.js
    │   ├── main.js
    │   ├── openaiClient.js
    │   ├── theme.js
    │   └── ui.js
    └── styles.css
```

## Notas

- La API Key debe permanecer solo en el backend.
- El modelo usado para el analisis es `gpt-4o-mini`.
- La salida del modelo se valida y normaliza antes de devolverse al cliente.

## Autor

Proyecto desarrollado como solucion para el Challenge Alura Agente.

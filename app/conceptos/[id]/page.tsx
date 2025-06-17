import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, BookOpen, Star } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Contenido de ejemplo basado en el archivo snippet.txt
const conceptsContent: Record<string, any> = {
  "que-es-ia": {
    title: "¿Qué es la Inteligencia Artificial?",
    category: "Fundamentos",
    readTime: "8 min",
    difficulty: "Básico",
    rating: 4.7,
    content: `
# ¿Qué es la Inteligencia Artificial?

La **Inteligencia Artificial (IA)** es un área de la informática que se encarga de desarrollar sistemas capaces de realizar tareas que normalmente requieren inteligencia humana. Estas tareas incluyen aprender, razonar, resolver problemas, comprender el lenguaje natural, percibir el entorno, entre otras.

## Ejemplo Práctico
Un asistente como Google Assistant puede entender preguntas, buscar información y responderte como lo haría una persona.


## ¿Qué necesita la IA para funcionar?

Para funcionar, la IA necesita tres elementos fundamentales:

### 1. Adquirir conocimientos
**Ejemplo:** Un sistema que analiza datos médicos para aprender síntomas de enfermedades.

### 2. Almacenar conocimientos  
**Ejemplo:** Un sistema experto guarda reglas médicas y casos clínicos para hacer diagnósticos.

### 3. Usar esos conocimientos para actuar o razonar
**Ejemplo:** Un coche autónomo usa sensores e información previa para frenar ante un peatón.

## Características Principales

- **Aprendizaje:** Capacidad de mejorar el rendimiento con la experiencia
- **Razonamiento:** Aplicación de reglas lógicas para llegar a conclusiones
- **Resolución de problemas:** Encontrar soluciones a situaciones complejas
- **Percepción:** Interpretar información del entorno
- **Interacción:** Comunicarse de manera natural con humanos

La IA representa uno de los avances más significativos de la tecnología moderna, con aplicaciones que van desde asistentes virtuales hasta sistemas de diagnóstico médico.
    `,
  },
  "tipos-ia": {
    title: "Tipos de Inteligencia Artificial",
    category: "Conceptos",
    readTime: "12 min",
    difficulty: "Básico",
    rating: 4.6,
    content: `
# Tipos de Inteligencia Artificial

La Inteligencia Artificial se puede clasificar de diferentes maneras según su capacidad y funcionalidad.

## IA Débil (Estrecha) vs IA Fuerte (General)

### IA Débil (Estrecha)
Es una IA enfocada en **tareas específicas**. No tiene conciencia ni pensamiento general.

**Ejemplos:**
- **Siri:** entiende comandos de voz, pero no puede mantener una conversación profunda
- **Filtros de spam:** detectan correos basura, pero no pueden hacer tareas diferentes

### IA Fuerte (General)
Simula completamente la inteligencia humana. Puede aprender, adaptarse y razonar en múltiples contextos. **Aún no existe**, pero se investiga activamente.

**Ejemplos ficticios:**
- **Jarvis** (Iron Man): Aprende, interactúa, toma decisiones y razona como un humano
- **Samantha** (Her): Asistente de voz con personalidad y sentimientos
- **Ava** (Ex Machina): Robot humanoide con inteligencia, emociones y conciencia

## Niveles Funcionales de IA

### 1. Máquinas Reactivas
- No tienen memoria
- Responden solo al presente
- **Ejemplo:** Deep Blue (IBM) que venció a Kasparov en ajedrez

### 2. Memoria Limitada
- Usan experiencias recientes para tomar decisiones
- **Ejemplo:** Coches autónomos que recuerdan el comportamiento de otros vehículos

### 3. Teoría de la Mente (Futuro)
- Capacidad para comprender emociones e intenciones humanas
- **Ejemplo ficticio:** Robot que detecta tristeza y cambia su comportamiento

### 4. Autoconsciencia (Futuro)
- IA que se reconoce como entidad individual
- **Ejemplo ficticio:** IA de Ex Machina que comprende su propia existencia

## Modelos según Russell y Norvig

### Sistemas que Piensan como Humanos
Intentan replicar el pensamiento humano.

### Sistemas que Actúan como Humanos  
Imitan comportamientos humanos (Test de Turing).

### Sistemas que Piensan Racionalmente
Aplican lógica formal para razonar.

### Sistemas que Actúan Racionalmente
Toman decisiones óptimas según la situación.
    `,
  },
"machine-learning": {
    title: "Aprendizaje Automático (Machine Learning)",
    category: "Técnicas",
    readTime: "15 min",
    difficulty: "Intermedio",
    rating: 4.8,
    content: `
# Aprendizaje Automático (Machine Learning)

El **Machine Learning (ML)** es una rama de la Inteligencia Artificial que permite a las máquinas aprender y mejorar automáticamente a partir de la experiencia sin ser programadas explícitamente para cada tarea específica.

## ¿Cómo funciona?

En lugar de programar reglas específicas, el ML utiliza **algoritmos** que analizan datos, identifican patrones y toman decisiones con mínima intervención humana.

### Ejemplo Simple
Imagina que quieres enseñar a una computadora a reconocer si un email es spam:
- **Método tradicional:** Escribir miles de reglas ("si contiene 'ganador', es spam")
- **Machine Learning:** Mostrar miles de emails etiquetados como spam/no spam y dejar que el algoritmo encuentre los patrones

## Tipos de Machine Learning

### 1. Aprendizaje Supervisado
El algoritmo aprende con **ejemplos etiquetados** (entrada y salida correcta).

**Ejemplos prácticos:**
- **Diagnóstico médico:** Mostrar rayos X con diagnósticos correctos para que aprenda a detectar fracturas
- **Filtro de spam:** Entrenar con emails ya clasificados como spam/no spam
- **Reconocimiento de voz:** Usar grabaciones de audio con sus transcripciones correctas

**Algoritmos comunes:** Regresión lineal, árboles de decisión, SVM, redes neuronales

### 2. Aprendizaje No Supervisado
El algoritmo encuentra **patrones ocultos** en datos sin etiquetas.

**Ejemplos prácticos:**
- **Segmentación de clientes:** Agrupar usuarios por comportamiento de compra similar
- **Detección de anomalías:** Identificar transacciones bancarias sospechosas
- **Sistemas de recomendación:** Netflix agrupa usuarios con gustos similares para recomendar películas

**Algoritmos comunes:** K-means, clustering jerárquico, PCA

### 3. Aprendizaje por Refuerzo
El algoritmo aprende mediante **prueba y error**, recibiendo recompensas o castigos.

**Ejemplos prácticos:**
- **Videojuegos:** AlphaGo aprendió Go jugando millones de partidas contra sí mismo
- **Coches autónomos:** Aprenden a conducir mediante simulaciones, recibiendo recompensas por conducir bien
- **Trading automático:** Sistemas que aprenden a invertir basándose en ganancias/pérdidas

## Aplicaciones Reales del Machine Learning

### En tu vida diaria:
- **Netflix/Spotify:** Recomendaciones personalizadas
- **Google Maps:** Cálculo de rutas y tiempo de llegada
- **Cámaras de fotos:** Reconocimiento facial automático
- **Asistentes virtuales:** Siri, Alexa comprenden tu voz
- **Redes sociales:** Feed personalizado, detección de contenido inapropiado

### En la industria:
- **Medicina:** Diagnóstico por imágenes, descubrimiento de medicamentos
- **Finanzas:** Detección de fraudes, trading algorítmico
- **Manufactura:** Control de calidad, mantenimiento predictivo
- **Marketing:** Segmentación de audiencias, precios dinámicos

## Proceso típico de Machine Learning

### 1. Recolección de datos
**Ejemplo:** Para predecir precios de casas, recopilar datos de ubicación, tamaño, año de construcción, etc.

### 2. Limpieza y preparación
**Ejemplo:** Eliminar datos incompletos, convertir texto a números, normalizar valores.

### 3. Selección del algoritmo
**Ejemplo:** Para clasificar imágenes, usar redes neuronales convolucionales.

### 4. Entrenamiento
**Ejemplo:** Mostrar al algoritmo 10,000 fotos de gatos y perros etiquetadas.

### 5. Evaluación
**Ejemplo:** Probar con 1,000 fotos nuevas y medir qué porcentaje clasifica correctamente.

### 6. Implementación
**Ejemplo:** Integrar el modelo en una app móvil que clasifica fotos automáticamente.

## Herramientas y Lenguajes

### Lenguajes populares:
- **Python:** Más popular, fácil de aprender
- **R:** Excelente para estadística y análisis
- **Java/Scala:** Para sistemas empresariales
- **JavaScript:** ML en el navegador

### Bibliotecas principales:
- **Scikit-learn:** Perfecto para empezar, algoritmos tradicionales
- **TensorFlow/Keras:** Deep learning, desarrollado por Google
- **PyTorch:** Investigación avanzada, desarrollado por Meta
- **Pandas:** Manipulación de datos
- **NumPy:** Operaciones numéricas

## Conceptos Clave

### Sobreajuste (Overfitting)
Cuando el modelo memoriza los datos de entrenamiento pero falla con datos nuevos.
**Analogía:** Estudiante que memoriza respuestas pero no entiende los conceptos.

### Datos de entrenamiento vs. datos de prueba
- **Entrenamiento:** Datos para enseñar al algoritmo
- **Prueba:** Datos para evaluar qué tan bien aprendió
**Analogía:** Estudiar con ejercicios vs. hacer el examen final.

### Características (Features)
Las variables de entrada que usa el algoritmo.
**Ejemplo:** Para predecir precio de casa: ubicación, tamaño, habitaciones, etc.

El Machine Learning está transformando todas las industrias y se ha vuelto una habilidad esencial en el mundo tecnológico actual.
    `,
  },
"redes-neuronales": {
    title: "Redes Neuronales y Deep Learning",
    category: "Avanzado",
    readTime: "18 min",
    difficulty: "Avanzado",
    rating: 4.9,
    youtubeUrl: "https://www.youtube.com/watch?v=aircAruvnKk",
    content: `
# Redes Neuronales y Deep Learning

Las **Redes Neuronales** son sistemas computacionales inspirados en el funcionamiento del cerebro humano. Son la base del **Deep Learning**, la tecnología detrás de los avances más impresionantes en IA como ChatGPT, reconocimiento de imágenes y coches autónomos.

## ¿Qué es una Red Neuronal?

Una red neuronal es un conjunto de **neuronas artificiales** conectadas entre sí, que procesan información de manera similar a como lo hace el cerebro humano.

### Analogía con el Cerebro Humano
- **Neurona biológica:** Recibe señales, las procesa y envía una respuesta
- **Neurona artificial:** Recibe números, los procesa matemáticamente y produce un resultado

## Estructura de una Red Neuronal

### Componentes básicos:

#### 1. Neuronas (Nodos)
Unidades de procesamiento que reciben, procesan y transmiten información.

#### 2. Conexiones (Pesos)
Enlaces entre neuronas que tienen un "peso" que determina la importancia de la conexión.

#### 3. Capas
- **Capa de entrada:** Recibe los datos iniciales
- **Capas ocultas:** Procesan la información (aquí ocurre la "magia")
- **Capa de salida:** Produce el resultado final

### Ejemplo Visual Simple
Entrada → [Capa Oculta 1] → [Capa Oculta 2] → Salida

### Tipos de Redes Neuronales
Las redes neuronales se pueden clasificar en diferentes tipos según su estructura y propósito. Aquí te presento las más comunes:

### 1. Redes Feedforward (Hacia adelante)
La información fluye en una sola dirección.

**Ejemplo práctico:** Clasificar si una imagen es un gato o un perro
- **Entrada:** Píxeles de la imagen
- **Proceso:** Cada capa identifica características (bordes, formas, patrones)
- **Salida:** Probabilidad de ser gato o perro

### 2. Redes Convolucionales (CNN)
Especializadas en **procesamiento de imágenes**.

**Ejemplos prácticos:**
- **Instagram:** Filtros que detectan caras automáticamente
- **Medicina:** Análisis de radiografías para detectar tumores
- **Coches autónomos:** Reconocimiento de señales de tráfico y peatones
- **Google Fotos:** Búsqueda de fotos por contenido ("muéstrame fotos de perros")

**¿Cómo funciona?**
1. **Detección de bordes:** Primera capa identifica líneas y bordes
2. **Formas básicas:** Segunda capa combina bordes para formar formas
3. **Características complejas:** Capas profundas reconocen objetos completos

### 3. Redes Recurrentes (RNN)
Tienen "memoria" para procesar **secuencias de datos**.

**Ejemplos prácticos:**
- **Traductor de Google:** Traduce oraciones completas considerando el contexto
- **Siri/Alexa:** Comprenden comandos de voz en tiempo real
- **Autocompletado:** Predice la siguiente palabra mientras escribes
- **Análisis de sentimientos:** Determina si un comentario es positivo o negativo

### 4. Transformers
Arquitectura revolucionaria detrás de **ChatGPT, GPT-4, BERT**.

**Ejemplos prácticos:**
- **ChatGPT:** Conversaciones naturales
- **GitHub Copilot:** Autocompletado de código
- **Jasper/Copy.ai:** Generación de contenido marketing
- **DeepL:** Traducción de alta calidad

## Deep Learning vs. Machine Learning Tradicional

### Machine Learning Tradicional:

**Ejemplo:** Para reconocer spam, manualmente definir reglas como "si contiene 'ganador', es spam"

### Deep Learning:


**Ejemplo:** Mostrar millones de emails y dejar que la red aprenda automáticamente qué los hace spam

## Aplicaciones Revolucionarias

### 1. Procesamiento de Lenguaje Natural
- **GPT-4/ChatGPT:** Conversación, escritura, programación
- **Google Translate:** Traducción en tiempo real con cámara
- **Grammarly:** Corrección avanzada de gramática y estilo

### 2. Visión por Computadora
- **Tesla Autopilot:** Conducción autónoma
- **Face ID:** Desbloqueo facial en smartphones
- **Amazon Go:** Tiendas sin cajeros, reconocimiento de productos

### 3. Generación de Contenido
- **DALL-E 2/Midjourney:** Generación de imágenes desde texto
- **Stable Diffusion:** Arte digital personalizado
- **RunwayML:** Edición de video con IA

### 4. Juegos y Entretenimiento
- **AlphaGo:** Venció al campeón mundial de Go
- **OpenAI Five:** Domina Dota 2
- **DeepFake:** Síntesis de video realista (con implicaciones éticas)

## Conceptos Técnicos Clave

### Función de Activación
Determina si una neurona se "activa" o no.
**Analogía:** Como un interruptor que decide si pasa la electricidad.

### Backpropagation (Retropropagación)
Proceso de aprendizaje donde la red ajusta sus pesos basándose en errores.
**Analogía:** Como corregir errores en un examen y aprender de ellos.

### Gradient Descent
Algoritmo que encuentra la mejor configuración de pesos.
**Analogía:** Bajar una montaña siguiendo la pendiente más pronunciada.

### Epochs e Iteraciones
- **Epoch:** Una pasada completa por todos los datos de entrenamiento
- **Iteración:** Cada actualización de pesos
**Analogía:** Estudiar todo el libro (epoch) vs. estudiar cada página (iteración).

## Herramientas y Frameworks

### Para Principiantes:
- **Teachable Machine (Google):** Crear modelos sin código
- **Scratch for AI:** Programación visual para IA
- **Keras:** API de alto nivel, fácil de usar

### Para Profesionales:
- **TensorFlow:** Más popular, desarrollado por Google
- **PyTorch:** Preferido en investigación, desarrollado por Meta
- **Hugging Face:** Modelos preentrenados listos para usar

### Hardware Requerido:
- **CPU:** Suficiente para modelos pequeños
- **GPU:** Esencial para deep learning serio (NVIDIA)
- **Cloud:** Google Colab, AWS, Azure para potencia extra

## Desafíos y Limitaciones

### 1. Datos
**Problema:** Necesitan enormes cantidades de datos etiquetados
**Ejemplo:** Entrenar un modelo de reconocimiento facial requiere millones de fotos

### 2. Interpretabilidad
**Problema:** "Caja negra" - difícil entender por qué toman ciertas decisiones
**Ejemplo:** ¿Por qué rechazó este préstamo bancario?

### 3. Sesgos
**Problema:** Pueden perpetuar sesgos presentes en los datos de entrenamiento
**Ejemplo:** Sistemas de contratación que discriminan por género o raza

### 4. Recursos Computacionales
**Problema:** Requieren mucha potencia de cálculo y energía
**Ejemplo:** Entrenar GPT-3 costó millones de dólares en computación

## El Futuro de las Redes Neuronales

### Tendencias Emergentes:
- **Multimodalidad:** Modelos que procesan texto, imagen y audio simultáneamente
- **Few-shot Learning:** Aprender con pocos ejemplos
- **Federated Learning:** Entrenamiento distribuido preservando privacidad
- **Neuromorphic Computing:** Hardware que imita el cerebro

### Impacto Social:
Las redes neuronales están transformando medicina, educación, transporte y prácticamente todas las industrias, prometiendo un futuro donde la IA amplifica las capacidades humanas.

**¿El próximo paso?** Inteligencia Artificial General (AGI) - sistemas que rivalizan con la inteligencia humana en todas las tareas.
    `,
  },
}


  



export default function ConceptoPage({ params }: { params: { id: string } }) {
  const concept = conceptsContent[params.id];

  if (!concept) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/conceptos">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a Conceptos
            </Link>
          </Button>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{concept.title}</h1>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {concept.readTime}
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-1" />
                  {concept.difficulty}
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1 text-yellow-500 fill-current" />
                  {concept.rating}
                </div>
              </div>
            </div>
            <Badge variant="outline" className="w-fit">
              {concept.category}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <Card>
          <CardContent className="p-8">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{
                __html: concept.content
                  .replace(/\n/g, "<br>")
                  .replace(/#{1,6}\s/g, "<h2>")
                  .replace(/<h2>/g, '<h2 class="text-2xl font-bold mt-8 mb-4">')
                  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
              }}
            />
          </CardContent>
        </Card>

        {/* Rating Section (Placeholder) */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Califica este contenido</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Tu calificación:</span>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Button
                    key={star}
                    variant="ghost"
                    size="sm"
                    className="p-1 opacity-50 cursor-not-allowed"
                    disabled
                    title="Próximamente - Sistema de calificación"
                  >
                    <Star className="w-5 h-5" />
                  </Button>
                ))}
              </div>
              <span className="text-sm text-gray-500">(Próximamente)</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

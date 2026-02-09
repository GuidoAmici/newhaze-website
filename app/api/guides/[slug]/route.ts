import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  // Mock data - replace with actual database or API calls
  const guides: Record<string, any> = {
    "guia-cultivo-hidroponico": {
      title: "Guía Completa de Cultivo Hidropónico",
      excerpt: "Aprende los fundamentos del cultivo hidropónico y maximiza tus cosechas con técnicas comprobadas.",
      coverImage: "/hydroponic-cultivation-indoor.jpg",
      slug: "guia-cultivo-hidroponico",
      content: `
El cultivo hidropónico es una de las técnicas más efectivas para cultivadores modernos.

## ¿Qué es el cultivo hidropónico?

La hidroponía es un método de cultivo en el que las plantas crecen en una solución nutriente acuosa en lugar de en tierra. Este sistema permite un control preciso de los nutrientes, pH y condiciones ambientales que recibe cada planta.

## Ventajas del cultivo hidropónico

- Mayor rendimiento por metro cuadrado
- Ahorro de agua del 90% comparado con cultivo en tierra
- Control preciso de nutrientes
- Crecimiento más rápido
- Menor incidencia de plagas

## Tipos de sistemas hidropónicos

### Sistema NFT (Nutrient Film Technique)

Las raíces se nutren de una película delgada de solución nutritiva que fluye constantemente.

### Sistema DWC (Deep Water Culture)

Las raíces se sumergen directamente en la solución nutritiva oxigenada.

### Sistema Ebb & Flow

La solución nutritiva inunda y drena cíclicamente el área de raíces.

## Pasos para comenzar

1. Elige el sistema que mejor se adapte a tus necesidades
2. Selecciona un lugar con acceso a electricidad y agua
3. Instala tu sistema siguiendo las instrucciones
4. Prepara la solución nutritiva con la concentración correcta
5. Planta tus semillas o esquejes
6. Monitorea regularmente los niveles de pH y EC

Con dedicación y los conocimientos correctos, lograrás cultivos extraordinarios usando hidroponía.
      `,
      author: "Team New Haze",
      publishedDate: "15 de Octubre, 2024",
    },
    "optimizacion-luz-led": {
      title: "Optimización de Luz LED para Máximo Rendimiento",
      excerpt: "Descubre cómo elegir y posicionar luces LED para obtener los mejores resultados en tu cultivo.",
      coverImage: "/led-lights-indoor-growing.jpg",
      slug: "optimizacion-luz-led",
      content: `Las luces LED han revolucionado el cultivo indoor.

## Espectro de luz

El espectro correcto es crucial para el desarrollo.

### Luz azul

Promueve crecimiento vegetativo compacto.

### Luz roja

Estimula floración y fructificación.

Con la combinación correcta lograrás máximos rendimientos.`,
      author: "Team New Haze",
      publishedDate: "10 de Octubre, 2024",
    },
    "control-ph-nutrientes": {
      title: "Control de pH y Nutrientes: Ciencia Exacta",
      excerpt: "Domina el control de pH y la nutrición para plantas sanas y cosechas de calidad excepcional.",
      coverImage: "/nutrient-solutions-ph-control.jpg",
      slug: "control-ph-nutrientes",
      content: `
El control de pH y nutrientes es la base de cualquier cultivo exitoso.

## ¿Por qué es importante el pH?

El pH determina la disponibilidad de nutrientes para tus plantas. Un pH incorrecto puede causar deficiencias nutricionales incluso si los nutrientes están presentes.

## Rango óptimo de pH

### Para cultivos hidropónicos

- Rango ideal: 5.5 - 6.5 pH
- Este rango maximiza la absorción de nutrientes

### Para cultivos en tierra

- Rango ideal: 6.0 - 7.0 pH
- Permite buena disponibilidad de macro y micronutrientes

## Medición del pH

Utiliza un medidor de pH digital calibrado regularmente:

1. Calibra tu medidor con soluciones patrón
2. Mide el pH de tu solución nutriente diariamente
3. Registra los valores en un cuaderno
4. Ajusta gradualmente si es necesario

## Corrección de pH

### pH muy bajo (ácido)

- Agrega cal (carbonato de calcio)
- Aumenta gradualmente hasta el rango deseado

### pH muy alto (alcalino)

- Agrega ácido fosfórico o cítrico
- Reduce lentamente hasta el rango óptimo

## Nutrientes esenciales

### Macronutrientes

- Nitrógeno (N): Crecimiento vegetativo
- Fósforo (P): Desarrollo de raíces y flores
- Potasio (K): Fortaleza general de la planta

### Micronutrientes

- Calcio, Magnesio, Azufre
- Hierro, Manganeso, Zinc, Cobre, Boro, Molibdeno

## Conductividad eléctrica (CE)

Mide la cantidad total de sales disueltas:

- CE bajo: Plantas desnutridas
- CE alto: Quemadura de nutrientes
- Mantén un rango de 1.2 - 2.0 mS/cm según el cultivo

Con estos conocimientos tendrás plantas vigorosas y cosechas abundantes.
      `,
      author: "Team New Haze",
      publishedDate: "5 de Octubre, 2024",
    },
    "gestion-plagas-indoor": {
      title: "Gestión de Plagas en Cultivos Indoor",
      excerpt: "Estrategias naturales y efectivas para prevenir y controlar plagas sin químicos dañinos.",
      coverImage: "/pest-control-indoor-gardening.jpg",
      slug: "gestion-plagas-indoor",
      content: `
La prevención es mejor que la cura en cultivos indoor.

## Plagas comunes en cultivos indoor

### Ácaros araña

Criaturas microscópicas que se alimentan de la savia.

- Síntoma: Hojas pálidas y telarañas finas
- Prevención: Mantén humedad relativa entre 50-60%

### Trips

Insectos diminutos que dañan hojas y flores.

- Síntoma: Marcas plateadas en hojas
- Prevención: Inspecciona plantas nuevas antes de introducirlas

### Mosca blanca

Pequeños insectos voladores blancos.

- Síntoma: Hojuelas amarillentas
- Prevención: Mantén ventilación adecuada

## Estrategias de prevención

1. Higiene estricta del ambiente
2. Cuarentena de plantas nuevas
3. Monitoreo regular con lupa
4. Ventilación y circulación de aire
5. Humedad y temperatura controladas

## Tratamientos naturales

### Aceite de neem

- Efectivo contra múltiples plagas
- Aplicar cada 7 días
- No usar durante floración avanzada

### Jabón potásico

- Ideal para infestaciones leves
- Pulverizar en envés de hojas
- Repetir cada 3-5 días si es necesario

### Control biológico

- Introduce depredadores naturales
- Mariquitas y ácaros depredadores
- Efectivo a largo plazo

Con vigilancia constante y prevención, mantendrás tus cultivos libres de plagas.
      `,
      author: "Team New Haze",
      publishedDate: "28 de Septiembre, 2024",
    },
  }

  const guide = guides[params.slug]

  if (!guide) {
    return NextResponse.json({ error: "Guide not found" }, { status: 404 })
  }

  return NextResponse.json(guide)
}

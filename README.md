# The Simpsons Next

Una aplicación Next.js que proporciona información detallada sobre el universo de Los Simpsons, incluyendo personajes, episodios y ubicaciones. Construida con características modernas de React y TypeScript para una experiencia de usuario fluida.

## Características

- **Personajes**: Navega y ve detalles de los personajes de Los Simpsons con imágenes y descripciones.
- **Episodios**: Explora la lista completa de episodios con información detallada.
- **Ubicaciones**: Descubre varias ubicaciones del mundo de Los Simpsons.
- **Diseño Responsivo**: Optimizado para escritorio y dispositivos móviles.
- **Carga Rápida**: Construida con Next.js para un rendimiento óptimo.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd the-simpsons-next
   ```

2. Instala las dependencias:
   ```bash
   pnpm install
   ```

3. Ejecuta el servidor de desarrollo:
   ```bash
   pnpm dev
   ```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Uso

Navega por la aplicación usando el menú principal:
- `/` - Página de inicio
- `/characters` - Navegar todos los personajes
- `/characters/[id]` - Ver detalles de un personaje específico
- `/episodes` - Ver lista de episodios
- `/locations` - Navegar ubicaciones

## Tecnologías Utilizadas

- **Framework**: Next.js 16
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Cliente HTTP**: Axios
- **Linting**: ESLint

## 📁 Estructura del Proyecto

```
the-simpsons-next/
├── .vscode/                    # Configuración de VS Code
├── public/                     # Activos estáticos (SVGs, imágenes)
├── src/
│   ├── app/                    # Páginas del App Router de Next.js
│   │   ├── characters/         # Página de personajes y rutas dinámicas
│   │   ├── episodes/           # Página de episodios
│   │   ├── locations/          # Página de ubicaciones
│   │   ├── layout.tsx          # Layout raíz
│   │   └── page.tsx            # Página de inicio
│   ├── components/             # Componentes reutilizables de UI
│   │   ├── ui/                 # Componentes básicos de UI
│   │   │   └── GitHub.tsx      # Componente de enlace a GitHub
│   │   └── Header.tsx          # Componente de encabezado
│   ├── features/               # Módulos basados en características
│   │   ├── characters/         # Característica de personajes
│   │   │   ├── components/     # Componentes específicos de la característica
│   │   │   ├── services/       # Servicios API y mapeadores
│   │   │   └── types/          # Tipos TypeScript
│   │   ├── episodes/           # Característica de episodios (estructura similar)
│   │   └── locations/          # Característica de ubicaciones (estructura similar)
│   ├── lib/                    # Librerías de utilidad
│   │   ├── axios.ts            # Configuración de Axios
│   │   └── image.ts            # Utilidades de imágenes
│   └── globals.css             # Estilos globales
├── .gitignore                  # Reglas de ignorar archivos de Git
├── eslint.config.mjs           # Configuración de ESLint
├── next.config.ts              # Configuración de Next.js
├── package.json                # Dependencias y scripts
├── pnpm-lock.yaml              # Archivo de bloqueo de pnpm
├── postcss.config.mjs          # Configuración de PostCSS
├── README.md                   # Este archivo
└── tsconfig.json               # Configuración de TypeScript
```

## Scripts

- `pnpm dev` - Iniciar servidor de desarrollo
- `pnpm build` - Construir para producción
- `pnpm start` - Iniciar servidor de producción
- `pnpm lint` - Ejecutar ESLint

## Contribuyendo

¡Las contribuciones son bienvenidas! Por favor, siéntete libre de enviar un Pull Request.

## Licencia

Este proyecto es publico y para fines educativos.
# WauWau Mascotas

Monorepo para la plataforma WauWau Mascotas usando Turborepo, Next.js y Supabase.

## 🏗 Estructura

\\\
apps/
  ├── dashboard/    # Panel de administración
  └── web/         # Sitio web principal
packages/
  ├── config/      # Configuraciones compartidas
  ├── database/    # Capa de base de datos (Supabase)
  └── ui/          # Componentes UI compartidos
\\\

## 🚀 Desarrollo

### Prerrequisitos

- Node.js 18+
- Yarn
- Supabase CLI (opcional)

### Instalación

1. Clonar el repositorio:
   \\\ash
   git clone https://github.com/mrdpcreation/wauwaumascota.com.git
   cd wauwaumascota
   \\\

2. Instalar dependencias:
   \\\ash
   yarn install
   \\\

3. Configurar variables de entorno:
   \\\ash
   cp .env.example .env
   \\\

### Comandos

- \yarn dev\: Iniciar en modo desarrollo
- \yarn build\: Construir todos los apps y paquetes
- \yarn lint\: Ejecutar linting
- \yarn test\: Ejecutar tests

## 📦 Apps y Paquetes

### Apps

- \web\: Sitio web principal
- \dashboard\: Panel de administración

### Paquetes Compartidos

- \@wauwau/ui\: Componentes UI compartidos
- \@wauwau/database\: Cliente y schemas de Supabase
- \@wauwau/config\: Configuraciones compartidas

## 📝 License

MIT

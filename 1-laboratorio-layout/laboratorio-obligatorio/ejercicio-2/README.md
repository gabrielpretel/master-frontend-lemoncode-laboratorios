# Ejercicio 2

Este es un proyecto de Vite con soporte para Sass para la realización del laboratorio de layout.

## Requisitos

- Node.js v14 o superior
- npm v6 o superior

## Instalación

1. Clona el repositorio:

   ```sh
   git clone git@github.com:gabrielpretel/master-frontend-lemoncode-laboratorios.git
   ```

2. Navega al directorio del proyecto:

   ```sh
   cd 1-laboratorio-layout/laboratorio-obligatorio/ejercicio-2
   ```

3. Instala las dependencias:

   ```sh
   npm install
   ```

## Uso

Para iniciar el servidor de desarrollo:

```sh
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador para ver la aplicación.

### Para cambiar entre los dos temas

Simplemente modificar el archivo `src/style.scss` la primera línea:

```SCSS
@use "_theme_a" as *;
```

por:

```SCSS
@use "_theme_b" as *;
```

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

---

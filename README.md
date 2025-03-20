# FairRent

## Everybody deserves a HOME

## Descripción

FairRent es una plataforma diseñada para facilitar el alquiler de pisos y apartamentos, enfocada en apoyar a personas que enfrentan barreras para encontrar un hogar. Como dice nuestro lema: "Everybody deserves a HOME. Público: jóvenes, inmigrantes, sacando a las inmobiliarias de la ecuación." Nos dirigimos a comunidades autónomas y ofrecemos precios máximos accesibles, optando por el inglés como idioma principal para que extranjeros también puedan optar por esta solución en España.

Nuestra misión es conectar directamente a propietarios y arrendatarios, eliminando intermediarios. Además, ofrecemos una funcionalidad para cambiar el idioma, asegurando que tanto locales como extranjeros puedan navegar fácilmente.

## Características principales

- **Listado de apartamentos:** Visualiza apartamentos disponibles con detalles como precio (en euros), ubicación, descripción, etiquetas (tags), y más.
- **Filtrado y búsqueda:** Permite filtrar por ubicación y etiquetas para encontrar el apartamento ideal.
- **Publicación de anuncios:** Los propietarios pueden publicar sus apartamentos de manera sencilla.
- **Diseño responsivo:** Construido con Tailwind CSS para una experiencia fluida en todos los dispositivos.
- **Integración con backend:** Se conecta con un backend en Laravel para gestionar los datos de los apartamentos.
- **Soporte multilingüe:** Opción para cambiar el idioma(Proximamente) (inglés por defecto).

## Tecnologías utilizadas

- **React:** Biblioteca para construir la interfaz de usuario.
- **Vite:** Herramienta de construcción rápida para el desarrollo frontend.
- **Tailwind CSS:** Framework de estilos utilitarios para un diseño moderno y responsivo.
- **React Router:** Para la navegación entre páginas.
- **Axios:** Para realizar peticiones HTTP al backend.
- **Lucide React:** Biblioteca de íconos ligeros y personalizables.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js:** Versión 18.x o superior. Descarga desde [nodejs.org](https://nodejs.org/).
- **Git:** Para clonar el repositorio. Descarga desde [git-scm.com](https://git-scm.com/).
- **Backend de Laravel:** Asegúrate de que el backend esté configurado y corriendo en `http://127.0.0.1:8000`. Consulta el repositorio del backend para más detalles.

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local:

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Hackathon-F5/ApartamentHub_FE.git
   cd ApartamentHub_FE
   ```

2. **Instalar dependencias**
   Instala todas las dependencias necesarias con npm:
   ```bash
   npm install
   ```

3. **Configurar Tailwind CSS (si no está configurado)**
   Asegúrate de que Tailwind CSS esté configurado correctamente:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```
   Edita el archivo `tailwind.config.js` para incluir tus archivos:
   ```js
   module.exports = {
     content: ['./src/**/*.{js,jsx,ts,tsx}'],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```
   Asegúrate de que `src/index.css` incluya las directivas de Tailwind:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

4. **Instalar dependencias adicionales**
   El proyecto utiliza varias bibliotecas adicionales. Instálalas si no se instalaron automáticamente:
   ```bash
   npm install react-router-dom axios lucide-react
   ```

5. **Configurar la conexión con el backend**
   El frontend se conecta al backend de Laravel en `http://127.0.0.1:8000`. Asegúrate de que el backend esté corriendo:
   ```bash
   # En el directorio del backend
   php artisan serve
   ```
   Si el backend utiliza un puerto o URL diferente, ajusta las peticiones en los componentes (por ejemplo, en `ListingsSection.jsx`).

6. **Ejecutar el proyecto**
   Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   Abre tu navegador en [http://localhost:3000](http://localhost:3000) para ver la aplicación.

## Estructura del proyecto

```plaintext
ApartamentHub_FE/
├── src/
│   ├── components/
│   │   ├── apartmentCard/
│   │   │   └── ApartmentCard.jsx   # Tarjeta individual de apartamento
│   │   ├── listingsSection/
│   │   │   └── ListingsSection.jsx # Sección de listados destacados
│   │   ├── header/
│   │   │   └── Header.jsx          # Encabezado con navegación
│   │   ├── footer/
│   │   │   └── Footer.jsx          # Pie de página
│   │   ├── heroSection/
│   │   │   └── HeroSection.jsx     # Sección hero de la página de inicio
│   │   ├── Button.jsx              # Componente de botón reutilizable
│   │   └── Badge.jsx               # Componente de etiquetas (tags)
│   ├── pages/
│   │   ├── homePage/
│   │   │   └── HomePage.jsx        # Página principal
│   │   ├── apartmentDetail/
│   │   │   └── ApartmentDetail.jsx # Página de detalles de un apartamento
│   │   ├── postAd/
│   │   │   └── PostAd.jsx          # Página para publicar un anuncio
│   ├── App.jsx                     # Componente raíz con enrutamiento
│   ├── main.jsx                    # Punto de entrada
│   └── index.css                   # Estilos globales con Tailwind
├── package.json
└── README.md
```

## Uso

- **Página principal (`/`):**  
  Muestra un encabezado, una sección hero y los listados destacados de apartamentos.  
  Los apartamentos se obtienen del backend mediante la petición `GET api/apartment`.  
  Incluye filtros por ubicación y etiquetas, y muestra etiquetas populares.

- **Detalles del apartamento (`/apartments/:id`):**  
  Muestra información detallada de un apartamento específico mediante `GET api/apartment/{id}`.

- **Publicar un anuncio (`/post-ad`):**  
  Permite a los propietarios publicar un nuevo apartamento utilizando `POST api/apartment`.

- **Cambio de idioma:**  
  *(Pendiente de implementar)* Se añadirá un botón o selector en el Header para cambiar entre inglés y otros idiomas.

## Solución de problemas

- **Error de CORS:**  
  Si el frontend no puede conectar con el backend, asegúrate de que éste tenga configurado CORS. Para ello, instala `fruitcake/laravel-cors` en el backend:
  ```bash
  composer require fruitcake/laravel-cors
  ```
  Luego, publica la configuración y ajusta el archivo `config/cors.php` según sea necesario.

- **No se cargan los datos:**  
  - Verifica que el backend esté corriendo en `http://127.0.0.1:8000`.
  - Revisa la consola del navegador para identificar errores de red.
  - Asegúrate de que el endpoint `GET api/apartment` esté devolviendo datos.



## Contribución

1. Clona el repositorio y crea una nueva rama:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

2. Realiza tus cambios y haz commit:
   ```bash
   git commit -m "feat: Descripción de la nueva funcionalidad"
   ```

3. Envía un pull request para revisión.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Documentación adicional

Para obtener información adicional y detalles sobre el funcionamiento del proyecto, revisa la [documentación en Atlassian](https://gaviriayeferson2.atlassian.net/wiki/spaces/HA/overview?homepageId=31097112).

## Contacto

Si tienes preguntas o necesitas soporte, contáctanos a través del repositorio en GitHub .

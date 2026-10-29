# Widget: Avance de Obra (Escena) para ArcGIS Experience Builder

Widget para **ArcGIS Experience Builder (v1.17 - v1.21)** que implementa avance de obra 4D sobre el web scene «Avance de obra - PLMB» (portal SDP), en el propio widget o sincronizado con un widget Mapa: colorea modelos Revit de E15, I16 y E16 por estado o por cronograma, con fecha de corte, reproducción animada, curva programada, corte y volumetría de contexto.

## 🚀 Registro en ArcGIS Enterprise Portal o ArcGIS Online

Para registrar este widget en tu organización:

1. Inicia sesión en **ArcGIS Enterprise Portal** o **ArcGIS Online**.
2. Ve a **Contenido** ➔ **Nuevo elemento** ➔ **Aplicación** ➔ **Widget de Experience Builder**.
3. Pega la URL del manifiesto público:

```text
https://dureyes97.github.io/avance-obra-escena/manifest.json
```

4. Haz clic en **Guardar**.

---

## 📁 Estructura del Repositorio

```text
avance-obra-escena/
├── manifest.json              # Manifiesto y metadatos oficiales del widget
├── config.json                # Configuración inicial del widget
├── icon.svg                   # Ícono oficial para la paleta de herramientas
├── index.html                 # Página de aterrizaje de GitHub Pages
├── .nojekyll                  # Permite servir dist/ sin interferencia de Jekyll
├── dist/                      # Código JavaScript compilado para producción
│   ├── runtime/
│   │   ├── widget.js          # Lógica principal del widget en ejecución (228 KB)
│   │   └── translations/
│   └── setting/
│       ├── setting.js         # Panel de configuración en Experience Builder (30 KB)
│       └── translations/
└── src/                       # Código fuente original en TypeScript / React
```

---

## 🛠️ Tecnologías y Compatibilidad
* **ArcGIS Maps SDK for JavaScript**: 4.31+
* **ArcGIS Experience Builder**: 1.17 a 1.21
* **UI**: React 18, Jimu Core, Calcite Design System
* **Autor**: Esri Colombia / EMB

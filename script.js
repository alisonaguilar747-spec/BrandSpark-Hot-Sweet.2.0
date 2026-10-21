
/* =========================================
   BRANDSPARK: HOT & SWEET
   Hoja de estilos principal
   Colores: celeste, rosa pastel y lila
========================================= */

:root {
  --blue: #bce8f5;
  --blue-dark: #5ba9c6;
  --pink: #f8c9dc;
  --pink-dark: #d96c9d;
  --lilac: #d9c7f3;
  --lilac-dark: #9474c7;
  --cream: #fffaf7;
  --white: #ffffff;
  --text: #443b50;
  --muted: #777083;
  --border: #eee5f2;
  --success: #3f956d;
  --danger: #cf5c71;
  --shadow: 0 10px 30px rgba(91, 68, 119, 0.09);
  --radius: 20px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 100px;
}

body {
  font-family: "Segoe UI", Arial, sans-serif;
  background: var(--cream);
  color: var(--text);
  line-height: 1.65;
  overflow-x: hidden;
}

img {
  max-width: 100%;
  height: auto;
}

button,
input,
select,
textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

a {
  color: var(--lilac-dark);
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  color: var(--pink-dark);
}

h1,
h2,
h3,
h4 {
  line-height: 1.25;
  color: var(--text);
}

h1 {
  font-size: clamp(2.3rem, 5vw, 4.2rem);
}

h2 {
  font-size: clamp(1.8rem, 3vw, 2.7rem);
}

h3 {
  font-size: 1.2rem;
}

p {
  margin-bottom: 12px;
}

.container,
.section-container {
  width: min(1160px, 92%);
  margin-inline: auto;
}

/* ENCABEZADO Y MENÚ */

.site-header,
header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 250, 247, 0.96);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(217, 199, 243, 0.5);
}

.header-inner,
.header-content,
.nav-container {
  width: min(1200px, 94%);
  min-height: 78px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
}

.logo,
.brand,
.logo-text {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: var(--text);
  font-weight: 800;
  font-size: 1.35rem;
  letter-spacing: -0.5px;
}

.logo span,
.brand span,
.logo-text span {
  color: var(--pink-dark);
}

.logo-mark {
  display: inline-grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--blue), var(--pink), var(--lilac));
  color: #574568;
}

nav,
.main-nav,
#mainNav {
  display: flex;
  align-items: center;
  gap: 20px;
}

nav a,
.main-nav a,
#mainNav a {
  color: var(--text);
  font-size: 0.91rem;
  font-weight: 600;
}

nav a:hover,
.main-nav a:hover,
#mainNav a:hover {
  color: var(--pink-dark);
}

#menuToggle,
.menu-toggle {
  display: none;
  border: 0;
  border-radius: 12px;
  background: var(--lilac);
  color: var(--text);
  padding: 10px 13px;
}

/* BOTONES */

.btn,
button.btn,
button,
.button,
.btn-primary,
.btn-secondary {
  transition: transform 0.2s ease, box-shadow 0.2s ease,
    background 0.2s ease;
}

.btn,
.button,
.btn-primary,
.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  border: 0;
  border-radius: 13px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
}

.btn-primary,
.btn.primary,
.button-primary {
  background: var(--lilac-dark);
  color: var(--white);
  box-shadow: 0 5px 15px rgba(148, 116, 199, 0.2);
}

.btn-primary:hover,
.btn.primary:hover,
.button-primary:hover {
  background: #8060b5;
  color: var(--white);
  transform: translateY(-2px);
}

.btn-secondary,
.btn.secondary,
.button-secondary {
  background: var(--white);
  color: var(--text);
  border: 1px solid var(--border);
}

.btn-secondary:hover,
.btn.secondary:hover,
.button-secondary:hover {
  background: var(--blue);
  transform: translateY(-2px);
}

button:not(.btn):not(.tab-button):not(.view-tab) {
  border-radius: 10px;
}

button:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.button-row,
.button-group,
.actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
}

/* PORTADA PRINCIPAL */

.hero {
  position: relative;
  padding: 95px 0 85px;
  background:
    radial-gradient(circle at 10% 20%, rgba(188, 232, 245, 0.7), transparent 28%),
    radial-gradient(circle at 90% 20%, rgba(248, 201, 220, 0.6), transparent 27%),
    radial-gradient(circle at 70% 100%, rgba(217, 199, 243, 0.5), transparent 30%),
    var(--cream);
  overflow: hidden;
}

.hero-content,
.hero-inner {
  width: min(1160px, 92%);
  margin: auto;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 55px;
}

.hero h1 {
  margin: 15px 0 22px;
  letter-spacing: -1.5px;
}

.hero h1 span,
.hero .highlight {
  color: var(--lilac-dark);
}

.hero p {
  max-width: 650px;
  color: var(--muted);
  font-size: 1.08rem;
}

.hero .eyebrow,
.eyebrow,
.section-tag {
  display: inline-block;
  padding: 7px 13px;
  border-radius: 30px;
  background: var(--pink);
  color: #804663;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.4px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 25px;
}

.hero-visual,
.hero-card {
  padding: 28px;
  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.78);
  box-shadow: var(--shadow);
}

.hero-visual .visual-icon,
.hero-icon {
  font-size: 4rem;
  text-align: center;
  margin-bottom: 10px;
}

.hero-visual h3,
.hero-card h3 {
  text-align: center;
  margin-bottom: 10px;
}

.hero-visual p,
.hero-card p {
  text-align: center;
  font-size: 0.95rem;
}

.hero-stats,
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 25px;
}

.stat-card {
  padding: 15px 10px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
}

.stat-card strong {
  display: block;
  font-size: 1.4rem;
  color: var(--lilac-dark);
}

.stat-card span {
  font-size: 0.8rem;
  color: var(--muted);
}

/* SECCIONES GENERALES */

section {
  scroll-margin-top: 95px;
}

.section,
.content-section {
  padding: 78px 0;
}

.section-heading {
  max-width: 760px;
  margin: 0 auto 38px;
  text-align: center;
}

.section-heading h2 {
  margin: 12px 0;
}

.section-heading p {
  color: var(--muted);
  margin: 0 auto;
}

.section-subtitle,
.subheading {
  color: var(--muted);
  font-size: 1rem;
}

.section-alt,
.alt-section {
  background: #f5f0fb;
}

.section-blue {
  background: #f0faff;
}

.section-pink {
  background: #fff2f7;
}

/* TARJETAS Y COLUMNAS */

.grid,
.cards-grid,
.services-grid,
.plans-grid,
.preview-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.card,
.service-card,
.plan-card,
.preview-card,
.feature-card,
.team-card,
.collaborator-card {
  min-width: 0;
  padding: 25px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.card h3,
.service-card h3,
.plan-card h3,
.preview-card h3,
.feature-card h3 {
  margin-bottom: 10px;
}

.card p,
.service-card p,
.preview-card p {
  color: var(--muted);
}

.card-icon,
.service-icon,
.feature-icon {
  display: grid;
  place-items: center;
  width: 55px;
  height: 55px;
  margin-bottom: 18px;
  border-radius: 17px;
  background: linear-gradient(135deg, var(--blue), var(--lilac));
  font-size: 1.6rem;
}

.card:hover,
.service-card:hover,
.preview-card:hover,
.collaborator-card:hover {
  transform: translateY(-4px);
  transition: transform 0.2s ease;
}

/* SERVICIOS Y PLANES */

.service-card:nth-child(3n + 1) .card-icon,
.service-card:nth-child(3n + 1) .service-icon {
  background: var(--pink);
}

.service-card:nth-child(3n + 2) .card-icon,
.service-card:nth-child(3n + 2) .service-icon {
  background: var(--blue);
}

.service-card:nth-child(3n) .card-icon,
.service-card:nth-child(3n) .service-icon {
  background: var(--lilac);
}

.plan-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.plan-card .price {
  font-size: 2rem;
  font-weight: 800;
  color: var(--lilac-dark);
}

.plan-card ul,
.card ul {
  padding-left: 20px;
  color: var(--muted);
}

.plan-card li,
.card li {
  margin-bottom: 8px;
}

.plan-card .btn,
.plan-card button {
  margin-top: auto;
}

.plan-card.featured,
.plan-card.popular {
  border: 2px solid var(--lilac-dark);
  background: linear-gradient(180deg, #fff, #faf6ff);
}

.plan-badge,
.popular-badge {
  align-self: flex-start;
  padding: 5px 10px;
  border-radius: 20px;
  background: var(--pink);
  color: #804663;
  font-size: 0.78rem;
  font-weight: 800;
}

/* FORMULARIOS */

.form-card,
.form-container,
.contact-form,
.advice-form {
  padding: 28px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

form {
  width: 100%;
}

.form-grid,
.form-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 17px;
}

.form-group,
.field,
label.form-label {
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 16px;
}

label,
.form-group label,
.field label {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text);
}

input,
select,
textarea {
  width: 100%;
  min-width: 0;
  padding: 12px 13px;
  color: var(--text);
  background: #fffdfd;
  border: 1px solid #e5dce9;
  border-radius: 11px;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

input:focus,
select:focus,
textarea:focus {
  border-color: var(--lilac-dark);
  box-shadow: 0 0 0 3px rgba(148, 116, 199, 0.13);
}

input::placeholder,
textarea::placeholder {
  color: #a59cac;
}

textarea {
  min-height: 110px;
  resize: vertical;
}

input[type="checkbox"],
input[type="radio"] {
  width: auto;
}

.form-help,
.help-text,
small {
  color: var(--muted);
  font-size: 0.83rem;
}

/* ESPACIO DE TRABAJO Y HERRAMIENTAS */

.workspace,
.tool-workspace,
.dashboard {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

.workspace-panel,
.tool-panel,
.dashboard-panel,
.movement-panel {
  min-width: 0;
  padding: 25px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.workspace-panel h3,
.tool-panel h3,
.dashboard-panel h3,
.movement-panel h3 {
  margin-bottom: 15px;
}

.tool-tabs,
.view-tabs,
.tab-list {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-bottom: 24px;
}

.tool-tabs button,
.view-tabs button,
.tab-button,
.view-tab {
  padding: 10px 16px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--white);
  color: var(--text);
  font-weight: 700;
}

.tool-tabs button.active,
.view-tabs button.active,
.tab-button.active,
.view-tab.active {
  background: var(--lilac-dark);
  color: var(--white);
  border-color: var(--lilac-dark);
}

.tool-view {
  display: none;
}

.tool-view.active {
  display: block;
}

.preview-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-bottom: 25px;
}

.preview-card {
  padding: 20px;
}

.preview-card .preview-number {
  display: block;
  margin-top: 8px;
  font-size: 1.65rem;
  font-weight: 800;
  color: var(--lilac-dark);
  overflow-wrap: anywhere;
}

.preview-card.income .preview-number {
  color: var(--success);
}

.preview-card.expense .preview-number {
  color: var(--danger);
}

/* TABLAS */

.table-wrap,
.table-container {
  width: 100%;
  overflow-x: auto;
  margin-top: 18px;
  border: 1px solid var(--border);
  border-radius: 13px;
  background: var(--white);
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 620px;
  font-size: 0.91rem;
}

thead {
  background: #f4eefb;
}

th,
td {
  padding: 13px 15px;
  border-bottom: 1px solid #eee8f2;
  text-align: left;
  vertical-align: middle;
}

th {
  color: #59496f;
  font-size: 0.84rem;
  font-weight: 800;
  white-space: nowrap;
}

td {
  overflow-wrap: anywhere;
}

tbody tr:hover {
  background: #fdfaff;
}

tbody tr:last-child td {
  border-bottom: 0;
}

.table-empty,
.empty-state {
  padding: 25px;
  text-align: center;
  color: var(--muted);
}

/* ETIQUETAS DE ESTADO */

.badge,
.status,
.pill {
  display: inline-block;
  padding: 4px 9px;
  border-radius: 20px;
  background: #f0e8fa;
  color: #70549a;
  font-size: 0.78rem;
  font-weight: 800;
}

.badge-success,
.status-success {
  background: #e2f5eb;
  color: #28784e;
}

.badge-danger,
.status-danger {
  background: #ffeaee;
  color: #ad4057;
}

.badge-warning,
.status-warning {
  background: #fff3d7;
  color: #946b1c;
}

/* MOVIMIENTOS DE INVENTARIO */

.movement-panel {
  margin-top: 24px;
}

.movement-panel .form-grid {
  margin-top: 15px;
}

.stock-summary,
.inventory-summary {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin: 20px 0;
}

.stock-summary > div,
.inventory-summary > div {
  padding: 17px;
  border-radius: 14px;
  background: #f7f2fc;
}

.stock-summary strong,
.inventory-summary strong {
  display: block;
  font-size: 1.3rem;
  color: var(--lilac-dark);
}

.stock-summary span,
.inventory-summary span {
  font-size: 0.83rem;
  color: var(--muted);
}

/* VENTAS Y TOTALES */

.total-preview,
.sale-total,
.total-box {
  margin: 14px 0;
  padding: 17px 20px;
  border-radius: 14px;
  background: #effaff;
  border: 1px solid #d9f0f8;
}

.total-preview strong,
.sale-total strong,
.total-box strong {
  color: var(--blue-dark);
  font-size: 1.3rem;
}

.total-preview span,
.sale-total span {
  display: block;
  color: var(--muted);
  font-size: 0.86rem;
}

/* ARCHIVOS DIGITALES */

.file-list,
#fileList,
.files-list {
  display: grid;
  gap: 12px;
  margin-top: 18px;
}

.file-item,
.file-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 13px;
  background: #fffdfd;
}

.file-item h4,
.file-card h4 {
  margin-bottom: 4px;
  overflow-wrap: anywhere;
}

.file-item p,
.file-card p {
  margin: 0;
  color: var(--muted);
  font-size: 0.84rem;
}

.file-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.file-actions button,
.small-button,
.btn-small {
  padding: 8px 11px;
  border: 1px solid var(--border);
  border-radius: 9px;
  background: var(--white);
  color: var(--text);
  font-size: 0.83rem;
  font-weight: 700;
}

.file-actions button:hover,
.small-button:hover,
.btn-small:hover {
  background: var(--blue);
}

/* RESUMEN FINANCIERO */

.finance-summary,
.summary-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.finance-summary > div,
.summary-grid > div {
  padding: 20px;
  border-radius: 15px;
  background: #f8f3fc;
}

.finance-summary .income,
.summary-grid .income {
  background: #eaf8f0;
}

.finance-summary .expense,
.summary-grid .expense {
  background: #fff0f3;
}

.finance-summary span,
.summary-grid span {
  display: block;
  color: var(--muted);
  font-size: 0.86rem;
}

.finance-summary strong,
.summary-grid strong {
  display: block;
  margin-top: 5px;
  font-size: 1.35rem;
  overflow-wrap: anywhere;
}

.income-text {
  color: var(--success);
}

.expense-text {
  color: var(--danger);
}

/* EQUIPO */

.team-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.team-card {
  text-align: center;
}

.team-avatar {
  display: grid;
  place-items: center;
  width: 75px;
  height: 75px;
  margin: 0 auto 16px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--pink), var(--lilac));
  font-size: 2rem;
}

.team-card p {
  color: var(--muted);
  font-size: 0.92rem;
}

/* COLABORADORES */

#colaboradores {
  padding: 80px 0;
  background:
    radial-gradient(circle at 10% 10%, rgba(248, 201, 220, 0.35), transparent 28%),
    radial-gradient(circle at 90% 90%, rgba(188, 232, 245, 0.4), transparent 30%),
    #fffafd;
}

.collaborator-grid,
.collaborators-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: stretch;
  gap: 28px;
}

.collaborator-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 28px;
  overflow: hidden;
}

.collaborator-card h3 {
  margin: 20px 0 10px;
  font-size: 1.45rem;
}

.collaborator-copy {
  max-width: 430px;
  color: var(--muted);
  font-size: 0.94rem;
}

.collaborator-card .collaborator-tag,
.collaborator-tag {
  display: inline-block;
  margin-top: 10px;
  padding: 6px 12px;
  border-radius: 20px;
  background: #f4eefb;
  color: #73579b;
  font-size: 0.78rem;
  font-weight: 800;
}

/* LOGO ILUSTRATIVO DE KRIBELA'S SWEET */

.logo-placeholder {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 370px;
  min-height: 245px;
  padding: 25px;
  overflow: hidden;
  border-radius: 20px;
}

.logo-kribela {
  background: #fff7f0;
  border: 2px solid #f3d9d4;
  color: #563c40;
}

.cupcake-art {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 110px;
  height: 115px;
  margin-bottom: 8px;
}

.frosting {
  position: absolute;
  top: 17px;
  width: 80px;
  height: 56px;
  border-radius: 48% 48% 25% 25%;
  background: #fffdfb;
  border: 2px solid #edcbd6;
  box-shadow:
    0 -11px 0 -2px #fffdfb,
    0 -20px 0 -7px #fffdfb;
}

.frosting::before {
  content: "";
  position: absolute;
  top: 12px;
  left: 20px;
  width: 38px;
  height: 27px;
  border-radius: 50%;
  border-top: 3px solid #f2dce3;
  transform: rotate(-20deg);
}

.wrapper {
  position: absolute;
  bottom: 4px;
  width: 74px;
  height: 47px;
  background: repeating-linear-gradient(
    90deg,
    #ef91b6 0,
    #ef91b6 9px,
    #f8b6cf 9px,
    #f8b6cf 18px
  );
  clip-path: polygon(0 0, 100% 0, 83% 100%, 17% 100%);
  border-radius: 3px 3px 10px 10px;
}

.cherry {
  position: absolute;
  z-index: 2;
  top: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #ed4c83;
  box-shadow: inset -4px -3px 0 rgba(128, 20, 66, 0.13);
}

.cherry::before {
  content: "";
  position: absolute;
  left: 12px;
  top: -8px;
  width: 14px;
  height: 12px;
  border-top: 2px solid #71966a;
  border-radius: 50%;
  transform: rotate(-35deg);
}

.whisk {
  position: absolute;
  right: 22px;
  top: 37px;
  width: 25px;
  height: 65px;
  border-right: 3px solid #ed8eb4;
  border-radius: 50%;
  transform: rotate(25deg);
}

.whisk::before,
.whisk::after {
  content: "";
  position: absolute;
  top: 0;
  width: 14px;
  height: 32px;
  border: 2px solid #ed8eb4;
  border-radius: 50%;
}

.whisk::before {
  left: -9px;
}

.whisk::after {
  left: 1px;
}

.kribela-script {
  color: #6a4149;
  font-family: Georgia, "Times New Roman", serif;
  font-style: italic;
  font-weight: 700;
  font-size: clamp(1.45rem, 3vw, 1.9rem);
  line-height: 1.2;
  text-align: center;
}

.kribela-sub {
  margin-top: 5px;
  color: #d86c98;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 4px;
  text-align: center;
}

/* LOGO ILUSTRATIVO DE HOT DOGS MARISTAS */

.logo-hotdogs {
  position: relative;
  background: #941e2b;
  border: 3px solid #e7b94f;
  color: #f9d56f;
}

.logo-hotdogs::before,
.logo-hotdogs::after {
  content: "✦";
  position: absolute;
  color: #f9d56f;
  font-size: 2rem;
}

.logo-hotdogs::before {
  top: 15px;
  left: 20px;
}

.logo-hotdogs::after {
  right: 20px;
  bottom: 15px;
}

.hotdogs-title {
  position: relative;
  z-index: 1;
  margin-bottom: 10px;
  color: #ffda73;
  font-weight: 1000;
  font-size: clamp(1.7rem, 4vw, 2.5rem);
  line-height: 1.05;
  text-align: center;
  text-shadow: 2px 3px 0 #5f1520;
  letter-spacing: 2px;
}

.dachshund {
  position: relative;
  width: 165px;
  height: 70px;
  margin: 8px auto 17px;
  border-radius: 45% 50% 35% 35%;
  background: #a95b32;
  border: 3px solid #f0bd55;
  box-shadow: inset 0 -8px 0 rgba(80, 30, 20, 0.15);
}

.dachshund::before {
  content: "";
  position: absolute;
  right: -27px;
  top: 12px;
  width: 46px;
  height: 37px;
  border-radius: 55% 45% 50% 45%;
  background: #a95b32;
  border: 3px solid #f0bd55;
}

.dachshund::after {
  content: "";
  position: absolute;
  left: -23px;
  top: 10px;
  width: 32px;
  height: 8px;
  border-radius: 50%;
  background: #a95b32;
  border-top: 3px solid #f0bd55;
  transform: rotate(-30deg);
}

.dachshund .dog-eye {
  position: absolute;
  z-index: 2;
  right: -12px;
  top: 22px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #321a16;
}

.dachshund .dog-leg {
  position: absolute;
  bottom: -15px;
  width: 13px;
  height: 24px;
  border-radius: 0 0 8px 8px;
  background: #a95b32;
  border: 2px solid #f0bd55;
}

.dachshund .dog-leg:first-of-type {
  left: 27px;
}

.dachshund .dog-leg:last-of-type {
  right: 30px;
}

.sparkles {
  color: #ffdc78;
  text-align: center;
  letter-spacing: 7px;
  font-size: 1.3rem;
}

.hotdogs-banner {
  width: 100%;
  margin-top: 13px;
  padding: 10px;
  background: #f5cd66;
  color: #77202a;
  border-radius: 9px;
  font-size: 0.84rem;
  font-weight: 900;
  text-align: center;
}

.logo-note {
  margin-top: 12px;
  color: var(--muted);
  font-size: 0.75rem;
  text-align: center;
}

/* CONTACTO */

.contact-grid,
.contact-layout {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 30px;
  align-items: start;
}

.contact-info {
  padding: 28px;
  border-radius: var(--radius);
  background: linear-gradient(145deg, var(--blue), var(--lilac));
}

.contact-info h3 {
  margin-bottom: 15px;
}

.contact-info p {
  margin-bottom: 15px;
}

.contact-info a {
  color: #574568;
  font-weight: 700;
  overflow-wrap: anywhere;
}

/* AVISOS Y MENSAJES */

.toast,
.notification,
.message {
  padding: 13px 16px;
  border-radius: 12px;
  background: #f1eafa;
  color: #684e8d;
  font-size: 0.9rem;
}

.toast {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 2000;
  max-width: min(400px, calc(100% - 40px));
  padding: 15px 19px;
  background: #4e3c65;
  color: var(--white);
  border-radius: 13px;
  box-shadow: var(--shadow);
}

.success-message {
  background: #e6f7ed;
  color: #286f4b;
}

.error-message {
  background: #ffedf0;
  color: #a33b50;
}

/* PIE DE PÁGINA */

footer,
.site-footer {
  padding: 32px 0;
  background: #41364f;
  color: #f8f2ff;
}

.footer-inner,
.footer-content {
  width: min(1160px, 92%);
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 18px;
}

footer p,
.site-footer p {
  margin: 0;
  color: #e3d9ef;
  font-size: 0.88rem;
}

footer a,
.site-footer a {
  color: #f6c7dc;
}

/* ACCESIBILIDAD */

:focus-visible {
  outline: 3px solid var(--blue-dark);
  outline-offset: 3px;
}

::selection {
  background: var(--pink);
  color: var(--text);
}

/* ANIMACIONES SUAVES */

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card,
.service-card,
.preview-card,
.collaborator-card {
  animation: fadeUp 0.35s ease both;
}

/* TABLET */

@media (max-width: 950px) {
  .header-inner,
  .header-content,
  .nav-container {
    min-height: 72px;
  }

  nav,
  .main-nav,
  #mainNav {
    gap: 12px;
  }

  nav a,
  .main-nav a,
  #mainNav a {
    font-size: 0.83rem;
  }

  .hero-content,
  .hero-inner {
    gap: 30px;
  }

  .grid,
  .cards-grid,
  .services-grid,
  .plans-grid,
  .team-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .preview-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .contact-grid,
  .contact-layout {
    grid-template-columns: 1fr 1.2fr;
  }
}

/* CELULARES */

@media (max-width: 700px) {
  html {
    scroll-padding-top: 78px;
  }

  .header-inner,
  .header-content,
  .nav-container {
    min-height: 68px;
  }

  #menuToggle,
  .menu-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  nav,
  .main-nav,
  #mainNav {
    display: none;
    position: absolute;
    top: 68px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 10px 4% 18px;
    background: var(--cream);
    border-bottom: 1px solid var(--border);
    box-shadow: var(--shadow);
  }

  nav.open,
  .main-nav.open,
  #mainNav.open {
    display: flex;
  }

  nav a,
  .main-nav a,
  #mainNav a {
    display: block;
    padding: 12px;
    border-radius: 10px;
    font-size: 0.95rem;
  }

  nav a:hover,
  .main-nav a:hover,
  #mainNav a:hover {
    background: #f5eefb;
  }

  .hero {
    padding: 60px 0;
  }

  .hero-content,
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .hero h1 {
    letter-spacing: -0.8px;
  }

  .hero-visual,
  .hero-card {
    max-width: 520px;
    width: 100%;
    margin: auto;
  }

  .section,
  .content-section {
    padding: 55px 0;
  }

  .section-heading {
    margin-bottom: 28px;
  }

  .grid,
  .cards-grid,
  .services-grid,
  .plans-grid,
  .team-grid,
  .preview-grid,
  .collaborator-grid,
  .collaborators-grid,
  .contact-grid,
  .contact-layout {
    grid-template-columns: 1fr;
  }

  .form-grid,
  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .form-card,
  .form-container,
  .contact-form,
  .advice-form,
  .workspace-panel,
  .tool-panel,
  .dashboard-panel,
  .movement-panel {
    padding: 20px;
  }

  .stock-summary,
  .inventory-summary,
  .finance-summary,
  .summary-grid {
    grid-template-columns: 1fr;
  }

  .stock-summary > div,
  .inventory-summary > div,
  .finance-summary > div,
  .summary-grid > div {
    padding: 15px;
  }

  .button-row,
  .button-group,
  .actions {
    flex-direction: column;
    align-items: stretch;
  }

  .button-row .btn,
  .button-row button,
  .button-group .btn,
  .button-group button,
  .actions .btn,
  .actions button {
    width: 100%;
  }

  .tool-tabs,
  .view-tabs,
  .tab-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .tool-tabs button,
  .view-tabs button,
  .tab-button,
  .view-tab {
    padding: 10px 8px;
    font-size: 0.84rem;
  }

  .file-item,
  .file-card {
    align-items: flex-start;
    flex-direction: column;
  }

  .file-actions {
    width: 100%;
  }

  .file-actions button {
    flex: 1;
  }

  .collaborator-card {
    padding: 20px;
  }

  .logo-placeholder {
    min-height: 225px;
  }

  .footer-inner,
  .footer-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .hero-stats,
  .stats-grid {
    gap: 8px;
  }

  .stat-card {
    padding: 12px 7px;
  }

  .stat-card strong {
    font-size: 1.15rem;
  }
}

/* CELULARES PEQUEÑOS */

@media (max-width: 380px) {
  .container,
  .section-container,
  .hero-content,
  .hero-inner {
    width: 94%;
  }

  .logo,
  .brand,
  .logo-text {
    font-size: 1.12rem;
  }

  .hero h1 {
    font-size: 2.1rem;
  }

  .tool-tabs,
  .view-tabs,
  .tab-list {
    grid-template-columns: 1fr;
  }

  .hero-actions {
    flex-direction: column;
  }

  .hero-actions .btn,
  .hero-actions a {
    width: 100%;
  }
}

/* REDUCIR MOVIMIENTO SI EL DISPOSITIVO LO SOLICITA */

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

import {
  payments,
  dotnet,
  csharp,
  abp,
  angular,
  typescript,
  react,
  nestjs,
  postgresql,
  sqlserver,
  docker,
  gitlab,
  dokploy,
  n8n,
  metrodev,
  ctoweb,
  nocountry,
  comprasB2B,
  ecommerceVinos,
  gastronomia,
  inmobiliaria,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Introducción",
  },
  {
    id: "work",
    title: "Experiencia",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Full-Stack .NET / ABP",
    icon: dotnet,
  },
  {
    title: "Integración de Pagos",
    icon: payments,
  },
  {
    title: "CI/CD & DevOps",
    icon: dokploy,
  },
  {
    title: "Automatización (n8n)",
    icon: n8n,
  },
];

const technologies = [
  { name: ".NET", icon: dotnet },
  { name: "C#", icon: csharp },
  { name: "ABP Framework", icon: abp },
  { name: "Angular", icon: angular },
  { name: "TypeScript", icon: typescript },
  { name: "React", icon: react },
  { name: "NestJS", icon: nestjs },
  { name: "PostgreSQL", icon: postgresql },
  { name: "SQL Server", icon: sqlserver },
  { name: "Docker", icon: docker },
  { name: "GitLab CI", icon: gitlab },
  { name: "Dokploy", icon: dokploy },
  { name: "n8n", icon: n8n },
];

const experiences = [
  {
    title: "Full-Stack Dev (.NET / Angular / ABP)",
    company_name: "MetroDev — Remoto",
    icon: metrodev,
    iconBg: "#050816",
    date: "Ene 2025 - Presente",
    points: [
      "Migración de un sistema legacy basado en Navision hacia una arquitectura modular con ABP Framework.",
      "Portal B2B para mercado europeo: gestión de catálogos, pricing y reglas de negocio multi-país.",
      "Integración de pasarelas de pago en producción: Payway/Decidir (detección de marca por BIN, ambientes por configuración) y Mercado Pago (checkout de cuotas).",
      "CI/CD y operación: despliegue automático tras cada MR en dev y prod (GitLab CI + Dokploy / Portainer sobre Docker Swarm), alta de tenants y soporte de incidencias en producción.",
      "Automatizaciones e integraciones backend (n8n) con autenticación propia (JWT / API Key) y pipelines de procesamiento de emails y documentos (OCR / DOCX).",
    ],
  },
  {
    title: "Full-Stack Developer (Freelance)",
    company_name: "CTO Web — Remoto",
    icon: ctoweb,
    iconBg: "#E6DEDD",
    date: "Ene 2024 - Presente",
    points: [
      "Desarrollo de soluciones web full-stack para clientes.",
      "Diseño e implementación de APIs y frontend en Angular.",
      "Despliegue y mantenimiento de aplicaciones productivas.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "No-Country — Remoto",
    icon: nocountry,
    iconBg: "#383E56",
    date: "Sep 2023 - Oct 2023",
    points: [
      "Desarrollo colaborativo en equipo ágil (metodología de simulación laboral).",
      "Implementación de funcionalidades full-stack y testeo de APIs en .NET Core.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Es un placer recomendar a Nicolás Arteaga, un desarrollador backend con quien he tenido el gusto de trabajar en proyectos de No Country. Es sumamente colaborador y dedicado: gestionó desde el testeo de una API hasta el desarrollo de los endpoints en .NET Core. Su aporte en colaboraciones de Git y otras tareas técnicas fue invaluable.",
    name: "Deivison Jimenez",
    designation: "Developer SSr",
    company: "No Country",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "Es un placer recomendar a Nicolás como desarrollador backend. Durante nuestra colaboración en No Country siempre estuvo dispuesto a colaborar, con dedicación al éxito del equipo y del proyecto.",
    name: "Rodrigo Kohnen",
    designation: "Developer",
    company: "No Country",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const projects = [
  {
    name: "Plataforma de Compras B2B",
    description:
      "Sistema multi-tenant para el sector salud: campañas de cotización, adjudicación por ítem, portal de proveedores y alta de clientes con subdominio propio y DNS wildcard.",
    tags: [
      { name: ".NET / ABP", color: "blue-text-gradient" },
      { name: "Angular", color: "green-text-gradient" },
      { name: "multi-tenant", color: "pink-text-gradient" },
    ],
    image: comprasB2B,
    source_code_link: "https://b2b.kavehome.com",
  },
  {
    name: "E-commerce de Vinos + Sommelier",
    description:
      "Tienda online con catálogo, carrito asistido por un sommelier y checkout con la pasarela Payway/Decidir: detección de marca de tarjeta por BIN y ambientes por configuración.",
    tags: [
      { name: ".NET", color: "blue-text-gradient" },
      { name: "Angular", color: "green-text-gradient" },
      { name: "Payway", color: "pink-text-gradient" },
    ],
    image: ecommerceVinos,
    source_code_link: "https://winepassport.com.ar",
  },
  {
    name: "Gestión Gastronómica / Food-cost",
    description:
      "Planificación de menús, control de stock por depósito, órdenes de compra y KPIs de costo por comensal. Backend NestJS + React sobre PostgreSQL.",
    tags: [
      { name: "NestJS", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "PostgreSQL", color: "pink-text-gradient" },
    ],
    image: gastronomia,
    source_code_link: "https://app.mirasoles-srl.com",
  },
  {
    name: "Fintech Inmobiliaria — Pago de Cuotas",
    description:
      "Flujo de aprobación de créditos con firma digital, auditoría de etapas y pago de cuotas integrando Mercado Pago (Checkout API).",
    tags: [
      { name: "NestJS", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "Mercado Pago", color: "pink-text-gradient" },
    ],
    image: inmobiliaria,
    source_code_link: "https://novalis.metrodev.ar",
  },
];

export { services, technologies, experiences, testimonials, projects };

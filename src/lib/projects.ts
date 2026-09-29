import type { StaticImageData } from "next/image";
import lassaSem from "@/assets/lassa-sem.jpg";
import ctXray from "@/assets/ct-xray.jpg";
import lassaSeries from "@/assets/lassa-series.png";
import liverBacteria from "@/assets/liver-bacteria.jpg";
import activeMoving from "@/assets/247activemoving.png";
import labtrack from "@/assets/labtrack.png";

export type Project = {
  image: StaticImageData;
  alt: string;
  // Charts are shown whole; photos and screenshots are cropped to fill the card.
  fit?: "contain";
  category: string;
  year: string;
  title: string;
  href: string;
  linkLabel: string;
  body: string;
  tags: string[];
};

export const ML_PROJECTS: Project[] = [
  {
    image: lassaSem,
    alt: "Scanning electron micrograph of virus-infected cells",
    category: "Forecasting",
    year: "2025",
    title: "Lassa fever forecasting for public health action",
    href: "https://github.com/EmmanuelNiyi/Data-Driven-Surveillance-Lassa-Fever-Forecasting-for-Public-Health-Action",
    linkLabel: "GitHub",
    body: "ETS, SARIMA and machine learning models evaluated for weekly case forecasting, with XGBoost strongest over the short horizon. SHAP analysis isolates seasonal effect from recent case momentum.",
    tags: ["Time series", "XGBoost", "SHAP"],
  },
  {
    image: ctXray,
    alt: "Cross-sectional brain imaging on a light box",
    category: "Medical imaging",
    year: "2025",
    title: "CT hematoma classifier — multi-class",
    href: "https://github.com/EmmanuelNiyi/CT-Hematoma-Classifier-Multi-class",
    linkLabel: "GitHub",
    body: "A multi-class deep learning model for intracranial hematoma on CT, evaluated on internal and external data. Grad-CAM confirms the model attends to clinically relevant regions rather than artefacts.",
    tags: ["Deep learning", "FastAI", "Grad-CAM"],
  },
  {
    image: lassaSeries,
    alt: "Weekly confirmed Lassa fever cases 2020–2026 with four-week rolling mean",
    fit: "contain",
    category: "Dataset",
    year: "2025",
    title: "NCDC Lassa fever weekly time series, Nigeria 2020–2025",
    href: "https://www.kaggle.com/datasets/emmanuelniyioriolowo/ncdc-lassa-fever-timeseries-20202025",
    linkLabel: "Kaggle",
    body: "A reproducible pipeline turning inconsistent NCDC situation reports into a cleaned, standardised weekly series, published with its gaps and limitations documented.",
    tags: ["Python", "Data engineering", "Epidemiology"],
  },
  {
    image: liverBacteria,
    alt: "Illustration of flagellated bacteria",
    category: "Replication",
    year: "2025",
    title: "Liver disease classification with data augmentation",
    href: "https://github.com/EmmanuelNiyi/Replication-of-Liver-Disease-Classification",
    linkLabel: "GitHub",
    body: "A replication using SMOTE and GAN-based augmentation, with Matthews correlation coefficient added to test robustness. GAN augmentation inflated reported performance; SMOTE improved reliability.",
    tags: ["Scikit-learn", "Class imbalance", "Model evaluation"],
  },
];

export const OTHER_PROJECTS: Project[] = [
  {
    image: activeMoving,
    alt: "247 Active Moving website home page",
    category: "Freelance website",
    year: "2025",
    title: "247 Active Moving",
    href: "https://www.247activemoving.com/",
    linkLabel: "Live site",
    body: "Website for a moving company, designed and built as freelance client work.",
    tags: ["Next.js", "Client work"],
  },
  {
    image: labtrack,
    alt: "LabTrack sample management dashboard",
    category: "Product demo",
    year: "2025",
    title: "Histopathology sample tracking",
    href: "https://said-production-ada2.up.railway.app/",
    linkLabel: "Live demo",
    body: "A working demo of a platform that tracks laboratory samples from intake through to reported result.",
    tags: ["Django", "Healthcare ops"],
  },
];

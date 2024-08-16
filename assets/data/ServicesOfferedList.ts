export interface ServiceOffered {
  label: string;
  keywords: string[];
}

export const ServicesOffered: ServiceOffered[] = [
  {
    label: "Co-occuring Care",
    keywords: ["medically monitered", "hiv", "pregnant", "co-occuring"],
  },
  {
    label: "Residential",
    keywords: ["residential", "ambulatory", "level I", "partial hospitalization"],
  },
  {
    label: "Outpatient",
    keywords: ['outpatient', 'ambulatory', 'level i', 'level 1', ]
  },
  {
    label: "Detox",
    keywords: ['detox']
  },
  {
    label: "MAT",
    keywords: ['medically monitered', 'opioid maintenance therapy']
  },
  {
    label: "Recovery Housing",
    keywords: ['housing']
  },
  {
    label: "Faith Based Services",
    keywords: ['christ', 'christ-centered', 'faith', 'faith-based']
  }
]


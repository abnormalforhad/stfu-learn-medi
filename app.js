/* ============================================================
   STFU AND LEARN MEDI — Data + Rendering Engine
   ============================================================ */

// ─── SVG Icons ───
const ICONS = {
  chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>`,
  clipboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>`,
  pill: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.5 1.5H8A6.5 6.5 0 001.5 8v0A6.5 6.5 0 008 14.5h8a6.5 6.5 0 006.5-6.5v0A6.5 6.5 0 0016 1.5h-2.5"/><line x1="12" y1="1.5" x2="12" y2="14.5"/></svg>`,
  alert: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  info: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>`,
  stethoscope: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/></svg>`,
  ban: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>`,
  zap: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
};

// ─── Form type icons + labels ───
const FORM_CONFIG = {
  vial:         { icon: '💉', label: 'Vial' },
  ampule:       { icon: '🧪', label: 'Ampule' },
  tablet:       { icon: '💊', label: 'Tablet' },
  capsule:      { icon: '💊', label: 'Capsule' },
  syrup:        { icon: '🧴', label: 'Syrup' },
  infusion:     { icon: '🩸', label: 'Infusion' },
  nebulization: { icon: '💨', label: 'Nebulization' },
  cream:        { icon: '🧴', label: 'Cream' },
  ointment:     { icon: '🧴', label: 'Ointment' },
  lotion:       { icon: '🧴', label: 'Lotion' },
  inhaler:      { icon: '💨', label: 'Inhaler' },
  vaccine:      { icon: '💉', label: 'Vaccine' },
  sachet:       { icon: '📦', label: 'Sachet' },
  drops:        { icon: '💧', label: 'Drops' },
  suppository:  { icon: '💊', label: 'Suppository' },
  prefilled:    { icon: '💉', label: 'Prefilled Syringe' },
  solution:     { icon: '💧', label: 'Solution' },
};

// ─── CASE DATA ───
const CASES = [
  // ═══════════════════════════════════════
  // CASE 1: Acute Abdominal Pain
  // ═══════════════════════════════════════
  {
    id: 1,
    title: "Acute Abdominal Pain",
    categories: ["gi", "emergency"],
    severity: "high",
    catColor: "cat-gi",
    complaint: "Acute Abdominal Pain, Vomiting 3 times",
    details: [
      { label: "Diet", value: "NPO → TFO when tolerated" },
      { label: "IV Fluids", value: "Infusion 5% DNS (1L) + 5% DA (1L) + H/S (1L) Stat @ 30 drops/min" },
      { label: "Investigations", value: "Urine R/M/E, USG of W/A" }
    ],
    alerts: [],
    medications: [
      {
        name: "Inj. Ceftriaxone",
        dose: "1gm",
        form: "vial",
        quantity: "1 vial",
        route: "I/V",
        timing: "Stat",
        frequency: "BD",
        drugClass: "3rd-gen Cephalosporin — Antibacterial",
        alternatives: "Cefotaxime, Cefuroxime, Cefixime (PO), Amoxicillin-Clavulanate",
        dosing: [
          ["Neonate (≤14d)", "20–50 mg/kg/day", "IV/IM", "OD", "50 mg/kg/day"],
          ["Neonate (15–28d)", "50–80 mg/kg/day", "IV/IM", "OD", "80 mg/kg/day"],
          ["Infant–Child", "50–75 mg/kg/day", "IV/IM", "OD or BD", "2 g/day"],
          ["Adolescent/Adult", "1–2 g", "IV/IM", "OD or BD", "4 g/day"],
          ["Elderly", "1 g (adjust renal)", "IV/IM", "OD", "2 g/day"]
        ],
        warnings: ["CONTRAINDICATED in neonates receiving IV calcium — risk of fatal ceftriaxone-calcium precipitates. Use Cefotaxime instead."]
      },
      {
        name: "Inj. Algin",
        dose: "5mg",
        form: "ampule",
        quantity: "1 amp",
        route: "I/V",
        timing: "Stat",
        frequency: "TDS",
        drugClass: "Antispasmodic",
        alternatives: "Hyoscine Butylbromide, Drotaverine, Dicyclomine, Mebeverine",
        dosing: [
          ["Child (6–12y)", "5–10 mg", "IM/IV", "TDS", "30 mg/day"],
          ["Adolescent/Adult", "10–20 mg", "IM/IV", "TDS–QDS", "100 mg/day"],
          ["Elderly", "10 mg (start low)", "IM/IV", "TDS", "60 mg/day"]
        ],
        warnings: ["Avoid antispasmodics in children <6 years unless specifically indicated."]
      },
      {
        name: "Inj. Rolac",
        dose: "30mg",
        form: "ampule",
        quantity: "1 amp",
        route: "I/V",
        timing: "Stat",
        frequency: "TDS → SOS",
        drugClass: "NSAID — Analgesic (Ketorolac)",
        alternatives: "Diclofenac, Ketorolac (PO), Tramadol, Paracetamol IV, Ibuprofen",
        dosing: [
          ["Child (2–16y)", "0.5 mg/kg", "IV/IM", "q6h (single dose first)", "Max 2 days"],
          ["Adult (<65y, >50 kg)", "30 mg IV / 60 mg IM", "IV/IM", "q6h", "≤5 days; 120 mg/day"],
          ["Adult (<50 kg) / Elderly", "15 mg IV / 30 mg IM", "IV/IM", "q6h", "≤5 days; 60 mg/day"]
        ],
        warnings: ["Max 5 days use. Contraindicated in renal impairment, active GI bleed, children <2y. Co-prescribe PPI.", "Tramadol: Avoid in children <12 years."]
      },
      {
        name: "Inj. Paracetamol",
        dose: "1g",
        form: "vial",
        quantity: "1 vial",
        route: "I/V",
        timing: "Stat",
        frequency: "q6h",
        drugClass: "Analgesic / Antipyretic (Extra Alternative)",
        alternatives: "Can be used alongside or instead of NSAIDs",
        dosing: [
          ["Neonate", "7.5 mg/kg", "IV", "q6–8h", "30 mg/kg/day"],
          ["Infant/Child", "15 mg/kg", "IV/PO", "q4–6h", "60 mg/kg/day (max 2g)"],
          ["Adult (>50 kg)", "1 g", "IV/PO", "q4–6h", "4 g/day"],
          ["Elderly / <50 kg", "500 mg–1 g", "IV/PO", "q6h", "3 g/day"]
        ],
        warnings: ["Hepatotoxic at high doses. Avoid if liver disease."]
      }
    ]
  },

  // ═══════════════════════════════════════
  // CASE 2: Vomiting & Abdominal Pain
  // ═══════════════════════════════════════
  {
    id: 2,
    title: "Vomiting & Abdominal Pain",
    categories: ["gi"],
    severity: "mod",
    catColor: "cat-gi",
    complaint: "Vomiting 3 times, Abd - Pain",
    details: [
      { label: "Diet", value: "Normal diet + water" },
      { label: "IV Fluids", value: "Infusion C/S (500ml) Stat @ 20 drops/min" }
    ],
    alerts: [{ type: "tip", text: "WHO recommends Zinc supplementation for all children with diarrhea for 10–14 days to reduce severity and duration." }],
    medications: [
      {
        name: "Tab. Xinc",
        dose: "20mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "OD",
        drugClass: "Micronutrient — Zinc Sulfate",
        alternatives: "Any Zinc Sulfate supplement, Zinc Gluconate, Zinc Acetate",
        dosing: [
          ["Infant (<6 mo)", "10 mg", "PO", "OD", "10–14 days"],
          ["Child (6 mo–5y)", "20 mg", "PO", "OD", "10–14 days"],
          ["Child (>5y)", "20 mg", "PO", "OD", "10–14 days"],
          ["Adult", "20–40 mg", "PO", "OD", "As needed"]
        ],
        warnings: []
      },
      {
        name: "Syp. Enterogermina",
        dose: "5mL",
        form: "syrup",
        quantity: "1 vial",
        route: "PO",
        timing: "—",
        frequency: "BD",
        drugClass: "Probiotic — Bacillus clausii",
        alternatives: "Bacillus clausii probiotics, Lactobacillus, Saccharomyces boulardii (250 mg BD)",
        dosing: [
          ["Infant/Toddler", "1 vial (5 mL)", "PO", "BD", "—"],
          ["Child (3–12y)", "1–2 vials", "PO", "BD–TDS", "—"],
          ["Adult", "2 vials (10 mL)", "PO", "BD–TDS", "—"]
        ],
        warnings: []
      },
      {
        name: "Inj. Emistat",
        dose: "8mg",
        form: "ampule",
        quantity: "1 amp",
        route: "I/V",
        timing: "Stat",
        frequency: "TDS",
        drugClass: "5-HT3 Antagonist — Antiemetic (Ondansetron)",
        alternatives: "Ondansetron, Granisetron, Domperidone, Metoclopramide (adults only)",
        dosing: [
          ["Infant/Child (6 mo–12y)", "0.1–0.15 mg/kg", "IV slow", "q8h (TDS)", "4 mg/dose"],
          ["Adolescent/Adult", "4–8 mg", "IV/IM/PO", "q8h (TDS)", "16 mg/dose; 32 mg/day"],
          ["Elderly", "4 mg (start low)", "IV/PO", "q8h", "16 mg/day"]
        ],
        warnings: ["Can prolong QT interval. Use with caution with other QT-prolonging drugs. ECG monitoring in elderly."]
      }
    ]
  },

  // ═══════════════════════════════════════
  // CASE 3: Road Traffic Accident (R.T.A.)
  // ═══════════════════════════════════════
  {
    id: 3,
    title: "Road Traffic Accident (R.T.A.)",
    categories: ["trauma"],
    severity: "high",
    catColor: "cat-trauma",
    complaint: "Trauma from road traffic accident",
    details: [
      { label: "Advice", value: "Remove stitches after 7 days" }
    ],
    alerts: [{ type: "warning", text: "Assess for internal hemorrhage, fractures, and head injury. Primary survey (ABCDE) first." }],
    medications: [
      {
        name: "Inj. T.T.",
        dose: "0.5mL",
        form: "vaccine",
        quantity: "1 amp",
        route: "I/M",
        timing: "Stat",
        frequency: "—",
        drugClass: "Vaccine — Tetanus Toxoid",
        alternatives: "Tetanus Immunoglobulin (TIG) 250–500 IU IM for high-risk wounds",
        dosing: [
          ["Child (as DPT)", "0.5 mL", "IM (anterolateral thigh)", "6,10,14 wks + boosters", "—"],
          ["Child (>7y as Td)", "0.5 mL", "IM (deltoid)", "Booster q10 years", "—"],
          ["Adult", "0.5 mL", "IM (deltoid)", "Booster q10 years", "—"],
          ["Unvaccinated wound", "0.5 mL TT + TIG 250 IU", "IM", "Stat", "—"]
        ],
        warnings: []
      },
      {
        name: "Cap. Flex",
        dose: "500mg",
        form: "capsule",
        quantity: "1 cap",
        route: "PO",
        timing: "—",
        frequency: "q6h",
        drugClass: "1st-gen Cephalosporin — Cephalexin",
        alternatives: "Cephalexin, Amoxicillin-Clavulanate, Cefadroxil, Clindamycin (penicillin allergy)",
        dosing: [
          ["Child", "25–50 mg/kg/day", "PO", "Divided q6–8h", "100 mg/kg/day"],
          ["Adult", "250–500 mg", "PO", "q6h", "4 g/day"]
        ],
        warnings: []
      },
      {
        name: "Tab. Rolac",
        dose: "10mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "q4–6h",
        drugClass: "NSAID — Ketorolac (Oral)",
        alternatives: "Ibuprofen, Naproxen, Diclofenac, Paracetamol",
        dosing: [
          ["Adolescent (>16y)/Adult", "10 mg", "PO", "q4–6h", "≤5 days; 40 mg/day PO"],
          ["Elderly", "10 mg", "PO", "q6–8h", "≤5 days; 40 mg/day"]
        ],
        warnings: ["Max 5 days total (including IV + PO). Co-prescribe PPI."]
      },
      {
        name: "Cap. OP / Dextac",
        dose: "20mg / 30mg",
        form: "capsule",
        quantity: "1 cap",
        route: "PO",
        timing: "—",
        frequency: "OD",
        drugClass: "PPI — Gastroprotective (Omeprazole / Lansoprazole)",
        alternatives: "Pantoprazole, Esomeprazole, Rabeprazole",
        dosing: [
          ["Child (1–11y, 10–20 kg)", "10 mg", "PO", "OD", "—"],
          ["Child (1–11y, >20 kg)", "20 mg", "PO", "OD", "—"],
          ["Adolescent/Adult", "20–40 mg", "PO", "OD (before breakfast)", "—"],
          ["Elderly", "20 mg (start low)", "PO", "OD", "—"]
        ],
        warnings: []
      },
      {
        name: "Tab. Cevit / Vasco",
        dose: "250mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "BD",
        drugClass: "Vitamin C — Ascorbic Acid (Wound Healing)",
        alternatives: "Generic Ascorbic Acid, any Vitamin C supplement",
        dosing: [
          ["Child (1–3y)", "15–40 mg", "PO", "OD", "—"],
          ["Child (4–8y)", "25–650 mg", "PO", "OD", "—"],
          ["Child (9–13y)", "45–1200 mg", "PO", "OD", "—"],
          ["Adult", "250–500 mg", "PO", "BD", "—"]
        ],
        warnings: []
      },
      {
        name: "Trego / Bactrocin",
        dose: "—",
        form: "ointment",
        quantity: "Thin layer",
        route: "Topical",
        timing: "—",
        frequency: "TDS",
        drugClass: "Topical Antibiotic",
        alternatives: "Mupirocin, Fusidic Acid 2% cream/ointment, Silver Sulfadiazine, Neosporin",
        dosing: [
          ["Child (>2 months)", "Thin layer to wound", "Topical", "TDS", "5–10 days"],
          ["Adult", "Thin layer to wound", "Topical", "TDS", "5–10 days"]
        ],
        warnings: []
      }
    ]
  },

  // ═══════════════════════════════════════
  // CASE 4: COPD / Respiratory Distress
  // ═══════════════════════════════════════
  {
    id: 4,
    title: "COPD / Respiratory Distress",
    categories: ["resp"],
    severity: "high",
    catColor: "cat-resp",
    complaint: "Respiratory distress in known COPD patient",
    details: [
      { label: "Intervention", value: "O₂ inhalation 3L/min" },
      { label: "Investigations", value: "ECG Stat, Chest X-Ray P/A View, CBC, Urine R/M/E, RBS, S. Creatinine" }
    ],
    alerts: [{ type: "danger", text: "In COPD patients, avoid high-flow O₂ (risk of CO₂ narcosis). Target SpO₂ 88–92%." }],
    medications: [
      {
        name: "Nebulization",
        dose: "5mg + 500mcg",
        form: "nebulization",
        quantity: "1 neb",
        route: "Neb",
        timing: "Stat",
        frequency: "q20min ×3, then q4–6h",
        drugClass: "Bronchodilator Combo",
        alternatives: "Salbutamol + Ipratropium Bromide, Levosalbutamol + Ipratropium",
        dosing: [
          ["Child (<5y)", "2.5 mg Salb + 250 mcg Ipra", "Neb", "q20min ×3, then q4–6h", "—"],
          ["Child (5–12y)", "2.5–5 mg + 250–500 mcg", "Neb", "q20min ×3, then q4–6h", "—"],
          ["Adult", "5 mg + 500 mcg", "Neb", "q20min ×3, then q4–6h", "—"]
        ],
        warnings: []
      },
      {
        name: "Inj. Ceftriaxone",
        dose: "1gm",
        form: "vial",
        quantity: "1 vial",
        route: "I/V",
        timing: "Stat",
        frequency: "BD",
        drugClass: "3rd-gen Cephalosporin",
        alternatives: "Levofloxacin, Azithromycin, Cefotaxime, Amoxicillin-Clavulanate",
        dosing: [["See Case 1", "Full dosing table", "—", "—", "—"]],
        warnings: [],
        crossRef: 1
      },
      {
        name: "Inj. Cortson",
        dose: "100mg",
        form: "vial",
        quantity: "1 vial",
        route: "I/V",
        timing: "Stat",
        frequency: "q6–8h",
        drugClass: "Corticosteroid — Hydrocortisone",
        alternatives: "Methylprednisolone, Dexamethasone, Prednisolone (PO)",
        dosing: [
          ["Neonate", "1–2 mg/kg", "IV", "q8–12h", "Short courses"],
          ["Child", "4–8 mg/kg/day", "IV", "Divided q6–8h", "100 mg/dose initially"],
          ["Adult", "100–200 mg", "IV", "q6–8h", "Taper after 48–72h"],
          ["Elderly", "100 mg (start low)", "IV", "q8h", "Monitor blood glucose"]
        ],
        warnings: []
      },
      {
        name: "Tab. Monas",
        dose: "10mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "OD (evening)",
        drugClass: "Leukotriene Receptor Antagonist — Montelukast",
        alternatives: "Zafirlukast",
        dosing: [
          ["Child (6 mo–5y)", "4 mg granules", "PO", "OD (evening)", "—"],
          ["Child (6–14y)", "5 mg chewable", "PO", "OD (evening)", "—"],
          ["Adolescent/Adult", "10 mg", "PO", "OD (evening)", "—"]
        ],
        warnings: []
      },
      {
        name: "Tab. Docopa",
        dose: "200mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "BD–TDS",
        drugClass: "Bronchodilator — Doxofylline",
        alternatives: "Theophylline, Aminophylline, Deriphylline",
        dosing: [
          ["Child (6–12y)", "6 mg/kg/day", "PO", "Divided BD–TDS", "—"],
          ["Adolescent/Adult", "200–400 mg", "PO", "BD–TDS", "—"],
          ["Elderly", "200 mg", "PO", "BD (start low)", "—"]
        ],
        warnings: ["Theophylline has narrow therapeutic index. Monitor serum levels (10–20 mcg/mL). Toxicity → seizures and arrhythmias."]
      },
      {
        name: "Inj. OP",
        dose: "40mg",
        form: "vial",
        quantity: "1 vial",
        route: "I/V",
        timing: "Stat",
        frequency: "OD",
        drugClass: "PPI — Pantoprazole IV",
        alternatives: "Inj. Pantoprazole 40mg, Omeprazole, Esomeprazole",
        dosing: [["See Case 3", "Full dosing table", "—", "—", "—"]],
        warnings: [],
        crossRef: 3
      },
      {
        name: "Inj. Lasix",
        dose: "20–40mg",
        form: "ampule",
        quantity: "1 amp",
        route: "I/V",
        timing: "Stat",
        frequency: "OD–BD",
        drugClass: "Loop Diuretic — Furosemide",
        alternatives: "Torsemide, Bumetanide, Spironolactone (potassium-sparing)",
        dosing: [
          ["Neonate", "0.5–1 mg/kg", "IV", "q12–24h", "2 mg/kg/dose"],
          ["Infant/Child", "1–2 mg/kg", "IV/PO", "q6–12h", "6 mg/kg/day"],
          ["Adult", "20–80 mg", "IV/PO", "q6–12h", "600 mg/day"],
          ["Elderly", "20 mg (start low)", "IV/PO", "OD", "Titrate slowly"]
        ],
        warnings: ["Monitor K⁺, Na⁺, Mg²⁺. Supplement potassium if K⁺ <3.5 mEq/L. Ototoxicity risk with rapid IV push — administer over 1–2 min."]
      }
    ]
  },

  // ═══════════════════════════════════════
  // CASE 5: Asthma / Drowning / CPR Protocol
  // ═══════════════════════════════════════
  {
    id: 5,
    title: "Asthma / Drowning / CPR Protocol",
    categories: ["resp", "emergency", "cardiac"],
    severity: "high",
    catColor: "cat-emergency",
    complaint: "Respiratory arrest / near-drowning, requires CPR",
    details: [
      { label: "Intervention", value: "O₂ inhalation (SOS), CPR if needed, Electric shock (defibrillation)" },
      { label: "CPR Protocol", value: "CAB: Compressions→Airway→Breathing. Rate 100–120/min. Depth: Adult ≥5 cm, Child ~5 cm, Infant ~4 cm. AED: 2 J/kg (peds), 120–200 J biphasic (adult)" }
    ],
    alerts: [{ type: "danger", text: "NEVER give Aspirin to children <16 years — risk of Reye's Syndrome (except Kawasaki disease under specialist supervision)." }],
    medications: [
      {
        name: "Nebulization Windel Plus",
        dose: "1.25mg + 500mcg",
        form: "nebulization",
        quantity: "1 neb",
        route: "Neb",
        timing: "Stat",
        frequency: "q20min ×3, then q4–6h",
        drugClass: "Bronchodilator — Levosalbutamol + Ipratropium",
        alternatives: "Levosalbutamol + Ipratropium, Standard Salbutamol + Ipratropium",
        dosing: [
          ["Child (<5y)", "0.31–0.63 mg + 250 mcg", "Neb", "q20min ×3, then q4–6h", "—"],
          ["Child (5–12y)", "0.63–1.25 mg + 250–500 mcg", "Neb", "q20min ×3, then q4–6h", "—"],
          ["Adult", "1.25 mg + 500 mcg", "Neb", "q20min ×3, then q4–6h", "—"]
        ],
        warnings: []
      },
      {
        name: "Ecosprin",
        dose: "75mg",
        form: "tablet",
        quantity: "4 tabs (300mg chew)",
        route: "PO",
        timing: "Stat",
        frequency: "then 75mg OD",
        drugClass: "Antiplatelet — Aspirin",
        alternatives: "Generic Aspirin, any Acetylsalicylic Acid",
        dosing: [
          ["Adult (ACS loading)", "300 mg chew", "PO", "Stat, then 75–150 mg OD", "Lifelong"],
          ["Elderly", "75 mg", "PO", "OD", "Higher bleeding risk"]
        ],
        warnings: ["NEVER in children <16 years — Reye's Syndrome risk."]
      },
      {
        name: "Clopid",
        dose: "75mg",
        form: "tablet",
        quantity: "4–8 tabs (loading)",
        route: "PO",
        timing: "Stat",
        frequency: "then 75mg OD",
        drugClass: "Antiplatelet — P2Y12 Inhibitor (Clopidogrel)",
        alternatives: "Ticagrelor (180 mg load → 90 mg BD), Prasugrel (60 mg load → 10 mg OD)",
        dosing: [
          ["Adult (ACS loading)", "300–600 mg", "PO", "Stat", "—"],
          ["Adult (maintenance)", "75 mg", "PO", "OD", "—"]
        ],
        warnings: []
      },
      {
        name: "Inj. Ceftriaxone",
        dose: "1gm",
        form: "vial",
        quantity: "1 vial",
        route: "I/V",
        timing: "Stat",
        frequency: "BD",
        drugClass: "3rd-gen Cephalosporin",
        alternatives: "Cefotaxime",
        dosing: [["See Case 1", "Full dosing table", "—", "—", "—"]],
        warnings: [],
        crossRef: 1
      },
      {
        name: "Atovar",
        dose: "80mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "OD",
        drugClass: "Statin — Atorvastatin",
        alternatives: "Rosuvastatin (5–40 mg OD; 20 mg ≈ atorvastatin 40 mg), Simvastatin, Pitavastatin",
        dosing: [
          ["Adolescent (10–17y)", "10–20 mg", "PO", "OD", "—"],
          ["Adult (ACS)", "40–80 mg", "PO", "OD", "—"],
          ["Elderly", "40 mg (monitor LFT)", "PO", "OD", "—"]
        ],
        warnings: []
      },
      {
        name: "Inj. Cortson",
        dose: "100mg",
        form: "vial",
        quantity: "1 vial",
        route: "I/V",
        timing: "Stat",
        frequency: "q6–8h",
        drugClass: "Corticosteroid — Hydrocortisone",
        alternatives: "Hydrocortisone, Methylprednisolone, Dexamethasone",
        dosing: [["See Case 4", "Full dosing table", "—", "—", "—"]],
        warnings: [],
        crossRef: 4
      },
      {
        name: "Tab. Doxiva",
        dose: "200mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "BD–TDS",
        drugClass: "Bronchodilator — Doxofylline",
        alternatives: "Doxofylline, Theophylline, Aminophylline",
        dosing: [["See Case 4", "Full dosing table", "—", "—", "—"]],
        warnings: [],
        crossRef: 4
      },
      {
        name: "Tab. Monas",
        dose: "10mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "OD (evening)",
        drugClass: "Leukotriene Receptor Antagonist — Montelukast",
        alternatives: "Montelukast, Zafirlukast",
        dosing: [["See Case 4", "Full dosing table", "—", "—", "—"]],
        warnings: [],
        crossRef: 4
      }
    ]
  },

  // ═══════════════════════════════════════
  // CASE 6: Amenorrhoea & P.V. Bleeding
  // ═══════════════════════════════════════
  {
    id: 6,
    title: "Amenorrhoea (3 Months) & P.V. Bleeding",
    categories: ["obgyn", "emergency"],
    severity: "high",
    catColor: "cat-obgyn",
    complaint: "3 month Amenorrhoea, P.V. bleeding for last 8 days",
    details: [
      { label: "Diet", value: "Normal diet" },
      { label: "IV Fluids", value: "Infusion H/S 1L Stat @ 30–40 drops/min" },
      { label: "Investigations", value: "USG of W/A, CBC, Blood Grouping (HBsAg)" }
    ],
    alerts: [{ type: "danger", text: "Rule out ectopic pregnancy as priority. USG and serial β-hCG essential. Cross-match blood if Hb <8 g/dL or hemodynamically unstable." }],
    medications: [
      {
        name: "Inj. Moxin",
        dose: "500mg",
        form: "vial",
        quantity: "1 vial",
        route: "I/V",
        timing: "Stat",
        frequency: "TDS",
        drugClass: "Aminopenicillin — Amoxicillin",
        alternatives: "Amoxicillin, Amoxicillin-Clavulanate, Cefuroxime, Clindamycin",
        dosing: [
          ["Neonate", "25–50 mg/kg", "IV", "q12h", "—"],
          ["Infant/Child", "25–50 mg/kg/day", "IV/PO", "Divided TDS", "—"],
          ["Adult", "500 mg–1 g", "IV/PO", "TDS", "—"]
        ],
        warnings: []
      },
      {
        name: "Inj. Traxyl",
        dose: "500mg",
        form: "ampule",
        quantity: "1 amp",
        route: "I/V",
        timing: "Stat",
        frequency: "TDS",
        drugClass: "Antifibrinolytic — Tranexamic Acid",
        alternatives: "Tranexamic Acid, Ethamsylate, Aminocaproic Acid",
        dosing: [
          ["Child", "10–15 mg/kg", "IV", "q8h", "60 mg/kg/day"],
          ["Adult (IV)", "500 mg–1 g", "IV (slow)", "q8h", "4 g/day"],
          ["Adult (PO)", "1–1.5 g", "PO", "TDS–QDS", "6 g/day"]
        ],
        warnings: ["Contraindicated in active thromboembolic disease. Caution if history of DVT/PE."]
      },
      {
        name: "Inj. Algin",
        dose: "5mg",
        form: "ampule",
        quantity: "1 amp",
        route: "I/V",
        timing: "Stat",
        frequency: "TDS",
        drugClass: "Antispasmodic — Hyoscine Butylbromide",
        alternatives: "Hyoscine Butylbromide, Drotaverine",
        dosing: [["See Case 1", "Full dosing table", "—", "—", "—"]],
        crossRef: 1, warnings: []
      },
      {
        name: "Inj. Emistat",
        dose: "8mg",
        form: "ampule",
        quantity: "1 amp",
        route: "I/V",
        timing: "Stat",
        frequency: "SOS",
        drugClass: "Antiemetic — Ondansetron",
        alternatives: "Ondansetron, Granisetron",
        dosing: [["See Case 2", "Full dosing table", "—", "—", "—"]],
        crossRef: 2, warnings: []
      },
      {
        name: "Inj. OP",
        dose: "40mg",
        form: "vial",
        quantity: "1 vial",
        route: "I/V",
        timing: "Stat",
        frequency: "OD",
        drugClass: "PPI — Omeprazole",
        alternatives: "Omeprazole, Pantoprazole, Esomeprazole",
        dosing: [["See Case 3", "Full dosing table", "—", "—", "—"]],
        crossRef: 3, warnings: []
      },
      {
        name: "Inj. Oxytocin",
        dose: "10 IU",
        form: "ampule",
        quantity: "1 amp",
        route: "I/M or I/V",
        timing: "Stat",
        frequency: "Repeat q15min PRN",
        drugClass: "Uterotonic — For postpartum hemorrhage (Extra Alternative)",
        alternatives: "Misoprostol (sublingual/rectal), Ergometrine",
        dosing: [
          ["Adult (PPH)", "10 IU IM or 5 IU slow IV", "IM/IV", "Stat, repeat q15min PRN", "Max 40 IU"],
          ["Adult (infusion)", "20–40 IU in 1L NS", "IV drip", "Adjusted to response", "—"]
        ],
        warnings: ["Only for postpartum hemorrhage. Do NOT use if cause of bleeding is ectopic/retained products before surgical evaluation."]
      }
    ]
  },

  // ═══════════════════════════════════════
  // CASE 7: Animal Bite (Dog / Cat)
  // ═══════════════════════════════════════
  {
    id: 7,
    title: "Animal Bite (Dog / Cat)",
    categories: ["infect", "trauma"],
    severity: "mod",
    catColor: "cat-infect",
    complaint: "Animal bite wound requiring PEP assessment",
    details: [
      { label: "Note", value: "If deep cat bite → administer Rabipur IG as per schedule" },
      { label: "WHO Cat I", value: "Touch/feed, licks intact skin → No PEP" },
      { label: "WHO Cat II", value: "Minor scratch no bleeding → Vaccine only" },
      { label: "WHO Cat III", value: "Transdermal bite, broken skin, bat → Vaccine + RIG" }
    ],
    alerts: [{ type: "info", text: "Cat bites have ~50% infection rate vs ~15% for dog bites due to deeper puncture wounds. Amoxicillin-Clavulanate is empirical antibiotic of choice." }],
    medications: [
      {
        name: "Inj. Rabipur Vaccine",
        dose: "1mL",
        form: "vaccine",
        quantity: "1 vial",
        route: "I/M",
        timing: "Day 0",
        frequency: "Days 0,3,7,14,28",
        drugClass: "Cell-Culture Rabies Vaccine",
        alternatives: "Verorab, Abhayrab — all equivalent",
        dosing: [
          ["Essen (5-dose IM)", "1 mL", "IM (deltoid/thigh)", "Days 0,3,7,14,28", "—"],
          ["Zagreb (4-dose IM)", "1 mL per site", "IM", "Day 0 (2 sites), 7, 21", "—"],
          ["Thai ID", "0.1 mL per site", "ID", "Days 0,3,7,28 (2 sites each)", "—"]
        ],
        warnings: []
      },
      {
        name: "Rabies Immunoglobulin (RIG)",
        dose: "20 IU/kg",
        form: "vial",
        quantity: "As per weight",
        route: "Infiltrate wound + I/M",
        timing: "Stat",
        frequency: "Once (Cat III only)",
        drugClass: "Passive Immunization",
        alternatives: "Human RIG (HRIG), Equine RIG (ERIG)",
        dosing: [
          ["Human RIG (HRIG)", "20 IU/kg", "Infiltrate wound + IM", "Stat", "—"],
          ["Equine RIG (ERIG)", "40 IU/kg", "Infiltrate wound + IM", "Stat", "—"]
        ],
        warnings: ["Skin test before ERIG administration. Observe 30 min for anaphylaxis."]
      },
      {
        name: "Inj. T.T Vaccine",
        dose: "0.5mL",
        form: "vaccine",
        quantity: "1 amp",
        route: "I/M",
        timing: "Stat",
        frequency: "—",
        drugClass: "Vaccine — Standard Tetanus Toxoid",
        alternatives: "Standard Tetanus Toxoid, TIG for high-risk wounds",
        dosing: [["See Case 3", "Full dosing table", "—", "—", "—"]],
        crossRef: 3, warnings: []
      },
      {
        name: "Cap. Fluclox",
        dose: "500mg",
        form: "capsule",
        quantity: "1 cap",
        route: "PO",
        timing: "—",
        frequency: "QDS",
        drugClass: "Penicillinase-resistant Penicillin — Flucloxacillin",
        alternatives: "Amoxicillin-Clavulanate, Cefuroxime, Doxycycline",
        dosing: [
          ["Neonate", "25 mg/kg", "IV", "q12h", "—"],
          ["Child (<2y)", "62.5 mg", "PO", "QDS", "—"],
          ["Child (2–10y)", "125–250 mg", "PO", "QDS", "—"],
          ["Adult", "250–500 mg", "PO/IV", "QDS", "—"]
        ],
        warnings: []
      },
      {
        name: "Tab. Rolac / Flamex",
        dose: "20mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "TDS",
        drugClass: "NSAID — Analgesic",
        alternatives: "Diclofenac, Ibuprofen, Naproxen, Paracetamol",
        dosing: [["See Case 1", "Full dosing table", "—", "—", "—"]],
        crossRef: 1, warnings: []
      }
    ]
  },

  // ═══════════════════════════════════════
  // CASE 8: AWD, Fever, Dehydration
  // ═══════════════════════════════════════
  {
    id: 8,
    title: "Acute Watery Diarrhea (AWD), Fever, Dehydration",
    categories: ["gi", "infect", "peds"],
    severity: "high",
    catColor: "cat-gi",
    complaint: "AWD, Fever, Vomiting, Dehydration (+++)",
    details: [
      { label: "Diet", value: "Dub Water / ORS" },
      { label: "IV Fluids", value: "Infusion C/S 500ml @ 20 drops/min" },
      { label: "WHO Plan C", value: "30 mL/kg in first 30 min (infant: 1h), then 70 mL/kg in next 2.5h (infant: 5h)" },
      { label: "Investigations", value: "S. Electrolytes, S. Creatinine, CBC, RBS" }
    ],
    alerts: [{ type: "tip", text: "ORS (WHO low-osmolarity): Na 75 mEq/L, K 20 mEq/L, Glucose 75 mmol/L. Give as much as tolerated between IV rounds." }],
    medications: [
      {
        name: "Inj. Ceftriaxone",
        dose: "1gm",
        form: "vial",
        quantity: "1 vial",
        route: "I/V",
        timing: "Stat",
        frequency: "BD",
        drugClass: "3rd-gen Cephalosporin",
        alternatives: "Cefixime, Azithromycin, Ciprofloxacin (adults)",
        dosing: [["See Case 1", "Full dosing table", "—", "—", "—"]],
        crossRef: 1, warnings: []
      },
      {
        name: "Tab. Famotack",
        dose: "20mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "BD",
        drugClass: "H2 Receptor Antagonist — Famotidine",
        alternatives: "Ranitidine, Famotidine, Omeprazole, Pantoprazole",
        dosing: [
          ["Infant/Child", "0.5 mg/kg", "PO/IV", "BD", "—"],
          ["Adolescent/Adult", "20–40 mg", "PO/IV", "BD (or 40 mg HS)", "—"],
          ["Elderly", "20 mg", "PO", "BD (adjust for renal)", "—"]
        ],
        warnings: []
      },
      {
        name: "Tab. Xinc",
        dose: "20mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "OD",
        drugClass: "Micronutrient — Zinc Sulfate",
        alternatives: "Any Zinc Sulfate supplement",
        dosing: [["See Case 2", "Full dosing table", "—", "—", "—"]],
        crossRef: 2, warnings: []
      },
      {
        name: "Inj. Emistat",
        dose: "8mg",
        form: "ampule",
        quantity: "1 amp",
        route: "I/V",
        timing: "Stat",
        frequency: "TDS",
        drugClass: "Antiemetic — Ondansetron",
        alternatives: "Ondansetron, Granisetron, Domperidone",
        dosing: [["See Case 2", "Full dosing table", "—", "—", "—"]],
        crossRef: 2, warnings: []
      },
      {
        name: "ORS + IV Ringer's Lactate",
        dose: "—",
        form: "sachet",
        quantity: "As needed",
        route: "PO / I/V",
        timing: "Stat",
        frequency: "Continuous",
        drugClass: "Fluid & Electrolyte Replacement (Extra Alternative)",
        alternatives: "WHO ORS, Pedialyte, Normal Saline 0.9%",
        dosing: [
          ["Mild dehydration", "50–100 mL/kg ORS", "PO", "Over 4 hours", "Plan A/B"],
          ["Severe dehydration", "100 mL/kg IV (NS or RL)", "IV", "Plan C protocol", "—"],
          ["Maintenance (child)", "Holliday-Segar formula", "IV", "Continuous", "—"]
        ],
        warnings: ["Always reassess hydration status every 1–2 hours."]
      }
    ]
  },

  // ═══════════════════════════════════════
  // CASE 9: AWD (Alternative Protocol)
  // ═══════════════════════════════════════
  {
    id: 9,
    title: "AWD (Alternative Protocol)",
    categories: ["gi", "infect"],
    severity: "mod",
    catColor: "cat-gi",
    complaint: "Acute watery diarrhea — alternative drug regimen",
    details: [
      { label: "Diet", value: "Dub water and ORS" },
      { label: "IV Fluids", value: "Infusion C/S (1L)" }
    ],
    alerts: [{ type: "danger", text: "Fluoroquinolones: FDA black box warning for tendon rupture, peripheral neuropathy. Avoid in children/adolescents (cartilage damage). Avoid in pregnancy." }],
    medications: [
      {
        name: "Inj. Cipro",
        dose: "200mg",
        form: "vial",
        quantity: "1 vial",
        route: "I/V",
        timing: "Stat",
        frequency: "BD",
        drugClass: "Fluoroquinolone — Ciprofloxacin",
        alternatives: "Levofloxacin, Ofloxacin, Azithromycin",
        dosing: [
          ["Child (exceptional use only)", "10–15 mg/kg", "IV", "BD", "Avoid routine peds use"],
          ["Adult", "200–400 mg", "IV", "BD", "—"],
          ["Adult (PO)", "250–500 mg", "PO", "BD", "—"],
          ["Elderly", "200 mg (start low)", "IV", "BD", "Adjust for renal"]
        ],
        warnings: ["Avoid in children/adolescents except life-threatening infections. Avoid in pregnancy."]
      },
      {
        name: "Inj. Metro",
        dose: "500mg",
        form: "vial",
        quantity: "1 bottle",
        route: "I/V",
        timing: "Stat",
        frequency: "TDS",
        drugClass: "Nitroimidazole — Metronidazole",
        alternatives: "Tinidazole, Ornidazole, Secnidazole",
        dosing: [
          ["Neonate", "7.5 mg/kg (load 15 mg/kg)", "IV", "q12h", "7–10 days"],
          ["Child", "7.5 mg/kg (max 500 mg)", "IV/PO", "TDS", "5–7 days"],
          ["Adult", "400–500 mg", "IV/PO", "TDS", "5–10 days"],
          ["Elderly", "400 mg", "PO/IV", "TDS", "Reduce duration"]
        ],
        warnings: ["Metronidazole + Alcohol = Disulfiram-like reaction. Avoid alcohol during and 48h after treatment."]
      },
      {
        name: "Syp. Enterogermina",
        dose: "5mL",
        form: "syrup",
        quantity: "1 vial",
        route: "PO",
        timing: "—",
        frequency: "BD–TDS",
        drugClass: "Probiotic — Bacillus clausii",
        alternatives: "Probiotics (Saccharomyces boulardii), Lactobacillus GG",
        dosing: [["See Case 2", "Full dosing table", "—", "—", "—"]],
        crossRef: 2, warnings: []
      }
    ]
  },

  // ═══════════════════════════════════════
  // CASE 10: Fall from Height
  // ═══════════════════════════════════════
  {
    id: 10,
    title: "Fall from Height",
    categories: ["trauma", "emergency"],
    severity: "high",
    catColor: "cat-trauma",
    complaint: "Fall from height — assess for spinal injury, hemorrhage, fractures",
    details: [
      { label: "IV Fluids", value: "Infusion H/S (1L) @ 20 drops/min" },
      { label: "Protocol", value: "Immobilize C-spine, primary survey (ABCDE), CT if neurological deficit" }
    ],
    alerts: [{ type: "warning", text: "Assess for spinal injury — immobilize C-spine. Check for internal hemorrhage and fractures. Primary survey (ABCDE) first." }],
    medications: [
      {
        name: "Inj. Todol",
        dose: "30mg",
        form: "ampule",
        quantity: "1 amp",
        route: "I/V",
        timing: "Stat",
        frequency: "q6h",
        drugClass: "NSAID — Ketorolac (analgesic)",
        alternatives: "Ketorolac, Diclofenac, Paracetamol IV, Tramadol, Morphine (severe pain)",
        dosing: [["See Case 1", "Full dosing table", "—", "—", "—"]],
        crossRef: 1, warnings: []
      },
      {
        name: "Inj. Mampred",
        dose: "40–125mg",
        form: "vial",
        quantity: "1 vial",
        route: "I/V",
        timing: "Stat",
        frequency: "q6h",
        drugClass: "Corticosteroid — Methylprednisolone",
        alternatives: "Methylprednisolone, Dexamethasone, Hydrocortisone",
        dosing: [
          ["Child", "1–2 mg/kg", "IV", "q6h", "Max 60 mg initial"],
          ["Adult (anti-inflammatory)", "40–125 mg", "IV", "q6h", "Taper 5–7 days"],
          ["Adult (spinal cord — NASCIS)", "30 mg/kg bolus → 5.4 mg/kg/h ×23h", "IV", "Protocol", "Controversial"],
          ["Elderly", "40 mg (start low)", "IV", "q6–8h", "Monitor glucose/BP"]
        ],
        warnings: ["NASCIS spinal cord injury protocol is controversial — discuss with neurosurgery before initiating."]
      },
      {
        name: "Inj. OP",
        dose: "40mg",
        form: "vial",
        quantity: "1 vial",
        route: "I/V",
        timing: "Stat",
        frequency: "OD",
        drugClass: "PPI — Pantoprazole",
        alternatives: "Pantoprazole, Omeprazole, Esomeprazole",
        dosing: [["See Case 3", "Full dosing table", "—", "—", "—"]],
        crossRef: 3, warnings: []
      }
    ]
  },

  // ═══════════════════════════════════════
  // CASE 11: Fever & Cough
  // ═══════════════════════════════════════
  {
    id: 11,
    title: "Fever & Cough",
    categories: ["peds", "infect", "resp"],
    severity: "high",
    catColor: "cat-peds",
    complaint: "Fever & cough in infant",
    details: [
      { label: "Diet", value: "EBF (Exclusive Breast Feeding)" }
    ],
    alerts: [{ type: "warning", text: "EBF indicates neonatal/infant case. Drug choices reflect serious neonatal sepsis protocol. Carbapenems are LAST-RESORT — de-escalate based on culture." }],
    medications: [
      {
        name: "Inj. Xilmex",
        dose: "750mg",
        form: "vial",
        quantity: "1 vial",
        route: "I/V",
        timing: "Stat",
        frequency: "TDS",
        drugClass: "2nd-gen Cephalosporin — Cefuroxime",
        alternatives: "Cefuroxime, Ceftriaxone (avoid in neonates on IV calcium), Ampicillin + Gentamicin",
        dosing: [
          ["Neonate", "25–50 mg/kg", "IV", "q8–12h", "—"],
          ["Infant/Child", "30–100 mg/kg/day", "IV", "Divided TDS (q8h)", "—"],
          ["Adult", "750 mg–1.5 g", "IV", "TDS (q8h)", "—"]
        ],
        warnings: []
      },
      {
        name: "Inj. Meropen",
        dose: "500mg",
        form: "vial",
        quantity: "1 vial",
        route: "I/V",
        timing: "Stat",
        frequency: "q8h",
        drugClass: "Carbapenem — Meropenem (Reserved Antibiotic)",
        alternatives: "Imipenem, Doripenem, Ertapenem",
        dosing: [
          ["Neonate (<7d)", "20 mg/kg", "IV", "q12h", "40 mg/kg/day"],
          ["Neonate (7–28d)", "20 mg/kg", "IV", "q8h", "60 mg/kg/day"],
          ["Infant/Child", "20–40 mg/kg", "IV", "q8h", "2 g/dose (meningitis 40 mg/kg)"],
          ["Adult", "500 mg–1 g", "IV", "q8h", "2 g q8h (meningitis)"]
        ],
        warnings: ["Carbapenems are LAST-RESORT antibiotics. Use only for confirmed MDR infections. Always de-escalate based on culture sensitivity."]
      },
      {
        name: "Syp. Paracetamol",
        dose: "15mg/kg",
        form: "syrup",
        quantity: "As per weight",
        route: "PO",
        timing: "—",
        frequency: "q4–6h",
        drugClass: "Antipyretic / Analgesic (Extra Alternative)",
        alternatives: "Ibuprofen syrup (>3 months), Paracetamol suppository",
        dosing: [
          ["Neonate", "10–15 mg/kg", "PO/PR", "q6–8h", "60 mg/kg/day"],
          ["Infant", "10–15 mg/kg", "PO", "q4–6h", "60 mg/kg/day"],
          ["Child", "15 mg/kg", "PO", "q4–6h", "75 mg/kg/day (max 1g/dose)"]
        ],
        warnings: ["Do not exceed recommended dose. Hepatotoxic at high doses."]
      }
    ]
  },

  // ═══════════════════════════════════════
  // CASE 12: Semi-Unconscious
  // ═══════════════════════════════════════
  {
    id: 12,
    title: "Semi-Unconscious",
    categories: ["neuro", "emergency"],
    severity: "high",
    catColor: "cat-neuro",
    complaint: "Semi-Unconscious for 1 day",
    details: [
      { label: "IV Fluids", value: "Inj. H/S (1L)" },
      { label: "Investigations", value: "CBC, CT scan of Brain, S. Creatinine" },
      { label: "Assessment", value: "GCS immediately. If GCS ≤8 → consider intubation. Rule out: stroke, hypoglycemia, meningitis, poisoning, post-ictal" }
    ],
    alerts: [{ type: "danger", text: "Assess GCS immediately. If GCS ≤8, consider intubation and airway protection. Rule out: stroke, hypoglycemia, meningitis, poisoning, post-ictal state." }],
    medications: [
      {
        name: "Inj. Ceftriaxone",
        dose: "1gm",
        form: "vial",
        quantity: "1 vial",
        route: "I/V",
        timing: "Stat",
        frequency: "BD",
        drugClass: "3rd-gen Cephalosporin",
        alternatives: "Cefotaxime, Cefuroxime, Meropenem (if meningitis suspected)",
        dosing: [["See Case 1", "Full dosing table", "—", "—", "—"]],
        crossRef: 1, warnings: []
      },
      {
        name: "Inj. Oradexon",
        dose: "30mg",
        form: "ampule",
        quantity: "1 amp",
        route: "I/V",
        timing: "Stat",
        frequency: "BD",
        drugClass: "Corticosteroid — Dexamethasone (Cerebral Edema)",
        alternatives: "Dexamethasone, Methylprednisolone, Mannitol 20% (for raised ICP)",
        dosing: [
          ["Child (cerebral edema)", "0.5–1 mg/kg loading", "IV", "Then 0.25–0.5 mg/kg q6h", "Max 16 mg/day"],
          ["Child (croup)", "0.15–0.6 mg/kg", "PO/IM/IV", "Single dose", "Max 10 mg"],
          ["Adult (cerebral edema)", "10 mg loading", "IV", "Then 4 mg q6h", "Taper 5–7 days"],
          ["Adult (anti-inflammatory)", "4–8 mg", "IV/IM", "q8–12h", "—"],
          ["Elderly", "4 mg (start low)", "IV", "q8–12h", "Monitor glucose"]
        ],
        warnings: []
      },
      {
        name: "Inj. OP",
        dose: "40mg",
        form: "vial",
        quantity: "1 vial",
        route: "I/V",
        timing: "Stat",
        frequency: "OD",
        drugClass: "PPI — Pantoprazole",
        alternatives: "Pantoprazole, Omeprazole",
        dosing: [["See Case 3", "Full dosing table", "—", "—", "—"]],
        crossRef: 3, warnings: []
      },
      {
        name: "Inj. Mannitol 20%",
        dose: "100–200mL",
        form: "infusion",
        quantity: "1 bottle",
        route: "I/V",
        timing: "Over 20–30 min",
        frequency: "q4–6h",
        drugClass: "Osmotic Diuretic — For raised ICP (Extra Alternative)",
        alternatives: "Hypertonic saline 3%",
        dosing: [
          ["Child", "0.25–1 g/kg", "IV", "Over 20–30 min, q4–6h", "Monitor serum osmolality"],
          ["Adult", "0.25–1 g/kg (typically 100–200 mL of 20%)", "IV", "Over 20–30 min, q4–6h", "Target osmolality <320"],
          ["Elderly", "0.25 g/kg", "IV", "q6h", "Renal function monitoring"]
        ],
        warnings: ["Contraindicated in severe renal failure and pulmonary edema. Monitor serum osmolality — stop if >320 mOsm/kg."]
      }
    ]
  },

  // ═══════════════════════════════════════
  // CASE 13: Abdominal Pain & Vomiting (Alt)
  // ═══════════════════════════════════════
  {
    id: 13,
    title: "Abdominal Pain & Vomiting (Alternative Protocol)",
    categories: ["gi"],
    severity: "mod",
    catColor: "cat-gi",
    complaint: "Abdominal pain & vomiting — alternative protocol",
    details: [
      { label: "Diet", value: "NPO" },
      { label: "IV Fluids", value: "Infusion 5% DA + 5% DNS + H/S" }
    ],
    alerts: [],
    medications: [
      {
        name: "Inj. Ceftriaxone",
        dose: "1gm",
        form: "vial",
        quantity: "1 vial",
        route: "I/V",
        timing: "Stat",
        frequency: "BD",
        drugClass: "3rd-gen Cephalosporin",
        alternatives: "Cefotaxime, Cefuroxime",
        dosing: [["See Case 1", "Full dosing table", "—", "—", "—"]],
        crossRef: 1, warnings: []
      },
      {
        name: "Inj. Algin",
        dose: "50mg",
        form: "ampule",
        quantity: "1 amp",
        route: "I/V",
        timing: "Stat",
        frequency: "q6–8h",
        drugClass: "Antispasmodic / Analgesic",
        alternatives: "Hyoscine Butylbromide, Drotaverine, Paracetamol",
        dosing: [
          ["Child (>3 mo, >5 kg)", "10–15 mg/kg", "IV/IM", "q6–8h", "60 mg/kg/day"],
          ["Adult", "500–1000 mg", "IV/IM/PO", "q6–8h", "4 g/day"]
        ],
        warnings: ["If Metamizole (Dipyrone): risk of agranulocytosis — banned in some countries. Monitor blood counts if used >7 days."]
      },
      {
        name: "Inj. Metro",
        dose: "400mg",
        form: "vial",
        quantity: "1 bottle",
        route: "I/V",
        timing: "Stat",
        frequency: "TDS",
        drugClass: "Nitroimidazole — Metronidazole",
        alternatives: "Tinidazole, Ornidazole",
        dosing: [["See Case 9", "Full dosing table", "—", "—", "—"]],
        crossRef: 9, warnings: []
      },
      {
        name: "Inj. OP",
        dose: "40mg",
        form: "vial",
        quantity: "1 vial",
        route: "I/V",
        timing: "Stat",
        frequency: "OD",
        drugClass: "PPI — Omeprazole",
        alternatives: "Omeprazole, Pantoprazole, Esomeprazole",
        dosing: [["See Case 3", "Full dosing table", "—", "—", "—"]],
        crossRef: 3, warnings: []
      }
    ]
  },

  // ═══════════════════════════════════════
  // CASE 14: Accidental Cat Injury
  // ═══════════════════════════════════════
  {
    id: 14,
    title: "Accidental Cat Injury",
    categories: ["trauma", "infect"],
    severity: "mod",
    catColor: "cat-infect",
    complaint: "Cat scratch/bite wound",
    details: [],
    alerts: [{ type: "tip", text: "Cat bites have ~50% infection rate vs ~15% for dog bites due to deeper puncture wounds. Amoxicillin-Clavulanate is the empirical antibiotic of choice." }],
    medications: [
      {
        name: "Inj. T.T. Vax",
        dose: "0.5mL",
        form: "vaccine",
        quantity: "1 amp",
        route: "I/M",
        timing: "Stat",
        frequency: "—",
        drugClass: "Vaccine — Tetanus Toxoid",
        alternatives: "Tetanus Toxoid, TIG for high-risk",
        dosing: [["See Case 3", "Full dosing table", "—", "—", "—"]],
        crossRef: 3, warnings: []
      },
      {
        name: "Inj. Fluclox",
        dose: "500mg",
        form: "vial",
        quantity: "1 vial",
        route: "I/V",
        timing: "Stat",
        frequency: "QDS",
        drugClass: "Penicillin — Flucloxacillin",
        alternatives: "Amoxicillin-Clavulanate, Cefuroxime, Doxycycline",
        dosing: [["See Case 7", "Full dosing table", "—", "—", "—"]],
        crossRef: 7, warnings: []
      },
      {
        name: "Inj. Rolac",
        dose: "10mg",
        form: "ampule",
        quantity: "1 amp",
        route: "I/V",
        timing: "Stat",
        frequency: "TDS",
        drugClass: "NSAID — Ketorolac",
        alternatives: "Ketorolac, Diclofenac, Ibuprofen, Paracetamol",
        dosing: [["See Case 1", "Full dosing table", "—", "—", "—"]],
        crossRef: 1, warnings: []
      },
      {
        name: "Inj. Ceftriaxone",
        dose: "1gm",
        form: "vial",
        quantity: "1 vial",
        route: "I/V",
        timing: "Stat",
        frequency: "BD",
        drugClass: "3rd-gen Cephalosporin",
        alternatives: "Cefuroxime, Cefotaxime, Amoxicillin-Clavulanate",
        dosing: [["See Case 1", "Full dosing table", "—", "—", "—"]],
        crossRef: 1, warnings: []
      },
      {
        name: "Inj. Pantonix",
        dose: "40mg",
        form: "vial",
        quantity: "1 vial",
        route: "I/V",
        timing: "Stat",
        frequency: "OD",
        drugClass: "PPI — Pantoprazole",
        alternatives: "Pantoprazole, Omeprazole, Esomeprazole",
        dosing: [["See Case 3", "Full dosing table", "—", "—", "—"]],
        crossRef: 3, warnings: []
      }
    ]
  },

  // ═══════════════════════════════════════
  // CASE 15: Respiratory Distress (Asthma/COPD)
  // ═══════════════════════════════════════
  {
    id: 15,
    title: "Respiratory Distress (Asthma/COPD Exacerbation)",
    categories: ["resp"],
    severity: "high",
    catColor: "cat-resp",
    complaint: "Acute asthma/COPD exacerbation with respiratory distress",
    details: [
      { label: "Intervention", value: "O₂ inhalation (target SpO₂ 88–92% in COPD)" }
    ],
    alerts: [],
    medications: [
      {
        name: "Nebulization Windel Plus / Budicort",
        dose: "5mg Salb + 1mg Bud",
        form: "nebulization",
        quantity: "1 neb",
        route: "Neb",
        timing: "Stat",
        frequency: "q20min ×3, then q4–6h",
        drugClass: "Bronchodilator + Inhaled Corticosteroid",
        alternatives: "Salbutamol + Ipratropium / Fluticasone, Budesonide nebulization",
        dosing: [
          ["Child (<5y)", "2.5 mg Salb + 0.5 mg Bud", "Neb", "q20min ×3, then q4–6h", "—"],
          ["Child (5–12y)", "2.5–5 mg Salb + 0.5–1 mg Bud", "Neb", "q20min ×3, then q4–6h", "—"],
          ["Adult", "5 mg Salb + 1–2 mg Bud", "Neb", "q20min ×3, then q4–6h", "—"]
        ],
        warnings: []
      },
      {
        name: "Inj. Ceftriaxone",
        dose: "1gm",
        form: "vial",
        quantity: "1 vial",
        route: "I/V",
        timing: "Stat",
        frequency: "BD",
        drugClass: "3rd-gen Cephalosporin",
        alternatives: "Levofloxacin, Azithromycin, Amoxicillin-Clavulanate",
        dosing: [["See Case 1", "Full dosing table", "—", "—", "—"]],
        crossRef: 1, warnings: []
      },
      {
        name: "Tab. Bizoran",
        dose: "5/20mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "OD",
        drugClass: "CCB + ARB — Amlodipine + Olmesartan",
        alternatives: "Amlodipine + Olmesartan, Amlodipine alone, Telmisartan + Amlodipine",
        dosing: [
          ["Child (>6y)", "Amlodipine 2.5–5 mg", "PO", "OD", "Olmesartan 10–20 mg"],
          ["Adult", "5/20 mg to 10/40 mg", "PO", "OD", "Fixed-dose"],
          ["Elderly", "Start 5/20 mg", "PO", "OD", "Monitor hypotension"]
        ],
        warnings: []
      },
      {
        name: "Tab. Monas",
        dose: "10mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "OD (evening)",
        drugClass: "LTRA — Montelukast",
        alternatives: "Zafirlukast",
        dosing: [["See Case 4", "Full dosing table", "—", "—", "—"]],
        crossRef: 4, warnings: []
      },
      {
        name: "Tab. Docopa",
        dose: "200mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "BD–TDS",
        drugClass: "Bronchodilator — Doxofylline",
        alternatives: "Doxofylline, Theophylline, Aminophylline",
        dosing: [["See Case 4", "Full dosing table", "—", "—", "—"]],
        crossRef: 4, warnings: []
      },
      {
        name: "Azmasol / Bexitrol Inhaler",
        dose: "100–200mcg",
        form: "inhaler",
        quantity: "1–2 puffs",
        route: "MDI",
        timing: "—",
        frequency: "q4–6h PRN",
        drugClass: "SABA / LABA+ICS — Salbutamol MDI / Salmeterol + Fluticasone",
        alternatives: "Salbutamol MDI, Salmeterol + Fluticasone, Formoterol + Budesonide",
        dosing: [
          ["Child (<5y)", "100 mcg (1 puff)", "MDI + spacer + mask", "q4–6h PRN", "—"],
          ["Child (5–12y)", "100–200 mcg (1–2 puffs)", "MDI + spacer", "q4–6h PRN", "—"],
          ["Adult (SABA)", "100–200 mcg (1–2 puffs)", "MDI ± spacer", "q4–6h PRN", "—"],
          ["Adult (LABA+ICS)", "25/125 or 25/250 mcg", "MDI", "BD", "Maintenance"]
        ],
        warnings: []
      },
      {
        name: "Mucomyst DT",
        dose: "600mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "OD–BD",
        drugClass: "Mucolytic — Acetylcysteine",
        alternatives: "Acetylcysteine, Ambroxol, Bromhexine, Carbocisteine",
        dosing: [
          ["Child (2–7y)", "200 mg", "PO", "BD", "—"],
          ["Child (>7y)", "200 mg", "PO", "TDS", "—"],
          ["Adult", "600 mg", "PO (effervescent)", "OD–BD", "—"]
        ],
        warnings: []
      }
    ]
  },

  // ═══════════════════════════════════════
  // CASE 16: Haemorrhoids / Bleeding
  // ═══════════════════════════════════════
  {
    id: 16,
    title: "Haemorrhoids / Bleeding",
    categories: ["gi", "surgical"],
    severity: "mod",
    catColor: "cat-surgical",
    complaint: "Haemorrhoidal bleeding",
    details: [],
    alerts: [{ type: "warning", text: "Prolonged use of topical steroids on perianal skin → atrophy, telangiectasia. Limit to 7 days." }],
    medications: [
      {
        name: "Tab. Az",
        dose: "500mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "OD",
        drugClass: "Macrolide Antibiotic — Azithromycin",
        alternatives: "Azithromycin, Clarithromycin, Erythromycin, Metronidazole",
        dosing: [
          ["Child", "10 mg/kg D1 → 5 mg/kg", "PO", "OD", "3–5 days"],
          ["Adult", "500 mg D1 → 250 mg", "PO", "OD", "3–5 days"],
          ["Adult (alt)", "500 mg", "PO", "OD", "3 days"]
        ],
        warnings: []
      },
      {
        name: "Erion Cream",
        dose: "—",
        form: "cream",
        quantity: "Apply peri-anally",
        route: "Topical",
        timing: "—",
        frequency: "BD–TDS",
        drugClass: "Topical Anti-haemorrhoidal — Hydrocortisone + Lidocaine",
        alternatives: "Hydrocortisone + Lidocaine cream, Preparation H, Proctosedyl",
        dosing: [
          ["Adult", "Apply peri-anally", "Topical", "BD–TDS", "Max 7 days"]
        ],
        warnings: ["Do not use >7 days — risk of skin atrophy."]
      },
      {
        name: "Daflon",
        dose: "500mg",
        form: "tablet",
        quantity: "3 tabs (acute) / 1 tab (maint.)",
        route: "PO",
        timing: "—",
        frequency: "TDS ×4d → BD ×3d",
        drugClass: "Venoprotective — Diosmin + Hesperidin",
        alternatives: "Diosmin + Hesperidin, Troxerutin, Rutosides",
        dosing: [
          ["Adult (acute attack)", "1000 mg (3 tabs)", "PO", "TDS ×4d → BD ×3d", "Loading"],
          ["Adult (maintenance)", "500 mg", "PO", "BD", "Long-term"]
        ],
        warnings: []
      },
      {
        name: "Ciprocin",
        dose: "500mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "BD",
        drugClass: "Fluoroquinolone — Ciprofloxacin",
        alternatives: "Ciprofloxacin, Levofloxacin, Metronidazole",
        dosing: [["See Case 9", "PO: 250–500 mg BD", "—", "—", "—"]],
        crossRef: 9, warnings: []
      },
      {
        name: "Flamex",
        dose: "400mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "TDS",
        drugClass: "NSAID — Ibuprofen",
        alternatives: "Ibuprofen, Naproxen, Diclofenac, Paracetamol",
        dosing: [
          ["Child (3 mo–12y)", "5–10 mg/kg", "PO", "q6–8h", "40 mg/kg/day"],
          ["Adult", "200–400 mg", "PO", "TDS–QDS", "1200 mg/day OTC; 2400 Rx"],
          ["Elderly", "200 mg", "PO", "TDS", "Lowest effective dose"]
        ],
        warnings: []
      },
      {
        name: "Xorel / OP",
        dose: "20mg",
        form: "capsule",
        quantity: "1 cap",
        route: "PO",
        timing: "—",
        frequency: "OD",
        drugClass: "PPI — Pantoprazole / Omeprazole",
        alternatives: "Pantoprazole, Omeprazole, Rabeprazole",
        dosing: [["See Case 3", "Full dosing table", "—", "—", "—"]],
        crossRef: 3, warnings: []
      },
      {
        name: "Sitz Bath + Stool Softener",
        dose: "—",
        form: "solution",
        quantity: "15–30 mL / warm water",
        route: "PO / Topical",
        timing: "—",
        frequency: "OD–TDS",
        drugClass: "Non-pharmacological + Lactulose (Extra Alternative)",
        alternatives: "Lactulose syrup, Ispaghula husk, Bisacodyl suppository",
        dosing: [
          ["Adult (Lactulose)", "15–30 mL", "PO", "OD–BD", "Adjust to soft stool"],
          ["Adult (Ispaghula)", "1 sachet (3.5g)", "PO", "OD–TDS (with water)", "—"],
          ["Adult (Sitz bath)", "Warm water 15–20 min", "Topical", "BD–TDS", "After bowel movements"]
        ],
        warnings: []
      }
    ]
  },

  // ═══════════════════════════════════════
  // CASE 17: AAMI / Chest Pain
  // ═══════════════════════════════════════
  {
    id: 17,
    title: "Acute Anterior MI (AAMI) / Chest Pain",
    categories: ["cardiac", "emergency"],
    severity: "high",
    catColor: "cat-cardiac",
    complaint: "Chest pain, BP 160/110 — STEMI",
    details: [
      { label: "Vitals", value: "BP 160/110" },
      { label: "Diet", value: "Liquid diet" },
      { label: "Intervention", value: "O₂ inhalation" },
      { label: "Protocol", value: "MONA: Morphine, Oxygen, Nitroglycerin, Aspirin. Primary PCI if available. Door-to-balloon <90 min" }
    ],
    alerts: [{ type: "danger", text: "AAMI is a medical EMERGENCY. Initiate MONA protocol. Activate cath lab for primary PCI if available. Door-to-balloon time <90 min." }],
    medications: [
      {
        name: "Tab. Clopid",
        dose: "75mg",
        form: "tablet",
        quantity: "4–8 tabs (loading)",
        route: "PO",
        timing: "Stat",
        frequency: "then 75mg OD",
        drugClass: "Antiplatelet — Clopidogrel",
        alternatives: "Ticagrelor, Prasugrel",
        dosing: [["See Case 5", "Full dosing table", "—", "—", "—"]],
        crossRef: 5, warnings: []
      },
      {
        name: "Tab. Colostat",
        dose: "10mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "OD",
        drugClass: "Statin — Atorvastatin",
        alternatives: "Rosuvastatin, Atorvastatin, Simvastatin, Pitavastatin",
        dosing: [["See Case 5", "Full dosing table", "—", "—", "—"]],
        crossRef: 5, warnings: []
      },
      {
        name: "Cap. OP",
        dose: "20mg",
        form: "capsule",
        quantity: "1 cap",
        route: "PO",
        timing: "—",
        frequency: "OD",
        drugClass: "PPI — Omeprazole",
        alternatives: "Omeprazole, Pantoprazole",
        dosing: [["See Case 3", "Full dosing table", "—", "—", "—"]],
        crossRef: 3, warnings: []
      },
      {
        name: "Tab. Bizoran",
        dose: "5/40mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "OD",
        drugClass: "CCB + ARB — Amlodipine + Valsartan",
        alternatives: "Amlodipine + Valsartan, Amlodipine + Telmisartan, Losartan + Amlodipine",
        dosing: [
          ["Adult", "5/80 to 10/320 mg", "PO", "OD", "—"],
          ["Elderly", "Start 5/80 mg", "PO", "OD", "Monitor hypotension"]
        ],
        warnings: []
      },
      {
        name: "Inj. Cardinex",
        dose: "60mg",
        form: "prefilled",
        quantity: "1 syringe",
        route: "S/C",
        timing: "Stat",
        frequency: "BD",
        drugClass: "LMWH — Enoxaparin (Anticoagulant)",
        alternatives: "Enoxaparin, Heparin (UFH), Fondaparinux",
        dosing: [
          ["Child", "1 mg/kg", "SC", "BD", "Monitor anti-Xa"],
          ["Adult (STEMI)", "30 mg IV bolus + 1 mg/kg SC", "SC", "BD", "Max 100 mg first 2 doses"],
          ["Adult (NSTEMI)", "1 mg/kg", "SC", "BD", "Until PCI or 8 days"],
          ["Elderly (>75y)", "0.75 mg/kg (no IV bolus)", "SC", "BD", "Max 75 mg first 2 doses"],
          ["Renal (CrCl <30)", "1 mg/kg", "SC", "OD", "Reduce frequency"]
        ],
        warnings: ["Monitor platelet count for HIT — check day 4 and 8. Hold if platelets drop >50%."]
      },
      {
        name: "Tab. Pase",
        dose: "0.5mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "BD–TDS",
        drugClass: "Benzodiazepine — Clonazepam (Anxiolytic)",
        alternatives: "Clonazepam, Lorazepam, Midazolam (prefer short-acting in MI)",
        dosing: [
          ["Child", "0.01–0.03 mg/kg/day", "PO", "Divided BD–TDS", "Rarely used"],
          ["Adult", "0.25–0.5 mg", "PO", "BD–TDS", "Max 4 mg/day"],
          ["Elderly", "0.25 mg", "PO", "HS–BD", "High fall risk"]
        ],
        warnings: ["Use cautiously in MI — may cause respiratory depression."]
      },
      {
        name: "Inj. Morphine",
        dose: "2–4mg",
        form: "ampule",
        quantity: "1 amp",
        route: "I/V slow",
        timing: "Stat",
        frequency: "q5–15 min PRN",
        drugClass: "Opioid Analgesic (Extra Alternative — MONA Protocol)",
        alternatives: "Fentanyl (50–100 mcg IV), Pethidine (avoid in MI)",
        dosing: [
          ["Adult", "2–4 mg IV", "IV slow", "q5–15 min PRN", "Max 10–15 mg"],
          ["Elderly", "1–2 mg IV", "IV slow", "q10–15 min", "Lower doses, monitor closely"]
        ],
        warnings: ["Monitor respiratory rate. Have Naloxone ready. Can cause hypotension and bradycardia."]
      },
      {
        name: "Tab. GTN / Nitroglycerin",
        dose: "0.3–0.6mg",
        form: "tablet",
        quantity: "1 tab",
        route: "SL",
        timing: "Stat",
        frequency: "q5 min ×3 max",
        drugClass: "Nitrate Vasodilator (Extra Alternative — MONA Protocol)",
        alternatives: "Isosorbide dinitrate, Isosorbide mononitrate",
        dosing: [
          ["Adult (sublingual)", "0.3–0.6 mg", "SL", "q5 min ×3 max", "If no relief → cath lab"],
          ["Adult (IV infusion)", "5–200 mcg/min", "IV", "Titrate to pain/BP", "Monitor BP closely"]
        ],
        warnings: ["CONTRAINDICATED if SBP <90 mmHg, severe aortic stenosis, or if PDE5 inhibitor (Sildenafil/Tadalafil) taken within 24–48h."]
      }
    ]
  },

  // ═══════════════════════════════════════
  // CASE 18: Pain in Right Limb & Itching
  // ═══════════════════════════════════════
  {
    id: 18,
    title: "Pain in Right Limb & Itching",
    categories: ["derm"],
    severity: "low",
    catColor: "cat-derm",
    complaint: "Limb pain with generalized itching",
    details: [],
    alerts: [{ type: "tip", text: "2nd-gen antihistamines (fexofenadine, cetirizine, loratadine) preferred over 1st-gen — less sedation, fewer anticholinergic effects." }],
    medications: [
      {
        name: "Tab. Fexofast",
        dose: "120mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "OD",
        drugClass: "2nd-gen Antihistamine — Fexofenadine",
        alternatives: "Cetirizine, Loratadine, Levocetirizine, Desloratadine, Bilastine",
        dosing: [
          ["Child (2–5y)", "30 mg", "PO", "BD", "—"],
          ["Child (6–11y)", "30–60 mg", "PO", "BD", "—"],
          ["Adolescent/Adult", "120 mg (rhinitis) / 180 mg (urticaria)", "PO", "OD", "—"]
        ],
        warnings: []
      },
      {
        name: "Tab. Toramax",
        dose: "10mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "q4–6h",
        drugClass: "NSAID — Ketorolac",
        alternatives: "Ketorolac, Ibuprofen, Diclofenac, Naproxen, Paracetamol",
        dosing: [["See Case 3", "PO: 10 mg q4–6h, max 40 mg/day", "—", "—", "—"]],
        crossRef: 3, warnings: []
      },
      {
        name: "Tab. Xorel",
        dose: "20mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "OD",
        drugClass: "PPI — Rabeprazole",
        alternatives: "Rabeprazole, Omeprazole, Pantoprazole, Esomeprazole",
        dosing: [
          ["Child (1–11y, ≥15 kg)", "5–10 mg", "PO", "OD", "—"],
          ["Adolescent/Adult", "10–20 mg", "PO", "OD", "—"]
        ],
        warnings: []
      },
      {
        name: "Topicon Cream",
        dose: "—",
        form: "cream",
        quantity: "Thin layer",
        route: "Topical",
        timing: "—",
        frequency: "BD",
        drugClass: "Topical Corticosteroid — Betamethasone",
        alternatives: "Betamethasone cream, Mometasone, Clobetasol, Hydrocortisone (milder)",
        dosing: [
          ["Child (>1y)", "Thin layer to affected area", "Topical", "BD, max 5–7 days", "Avoid face/flexures"],
          ["Adult", "Thin layer to affected area", "Topical", "BD, 2–4 weeks max", "Taper to weaker"]
        ],
        warnings: ["Potent topical steroids: Avoid face, groin, axillae. Prolonged use → skin atrophy, striae, adrenal suppression (esp. children). Use FTU dosing."]
      },
      {
        name: "Calamine Lotion",
        dose: "—",
        form: "lotion",
        quantity: "Apply to itchy areas",
        route: "Topical",
        timing: "—",
        frequency: "PRN",
        drugClass: "Topical Anti-pruritic (Extra Alternative)",
        alternatives: "Menthol cream, Crotamiton, Pramoxine",
        dosing: [
          ["All ages", "Apply to itchy areas", "Topical", "PRN (as needed)", "Safe for long-term use"],
        ],
        warnings: []
      }
    ]
  },

  // ═══════════════════════════════════════
  // CASE 19: Snake Bite
  // ═══════════════════════════════════════
  {
    id: 19,
    title: "Snake Bite",
    categories: ["emergency", "infect"],
    severity: "high",
    catColor: "cat-emergency",
    complaint: "Snake bite — assess envenomation, initiate ASV protocol",
    details: [
      { label: "Diet", value: "NPO → TFO" },
      { label: "IV Fluids", value: "Infusion 5% DNS (1L) @ 30 drops/min" },
      { label: "Protocol", value: "1) Immobilize limb 2) 20WBCT — if non-clotting → coagulopathy 3) ASV 10 vials in 200 mL NS over 1h 4) Pre-medicate: Adrenaline 0.25 mg SC + Hydrocortisone + Antihistamine 5) Observe for anaphylaxis" }
    ],
    alerts: [
      { type: "danger", text: "Snake bite is an EMERGENCY. ASV dose is the SAME for adults and children — based on venom load, not body weight. Have adrenaline ready for anaphylaxis during ASV infusion." }
    ],
    medications: [
      {
        name: "Anti-Snake Venom (ASV)",
        dose: "10 vials (100mL)",
        form: "vial",
        quantity: "10 vials in 200mL NS",
        route: "I/V infusion",
        timing: "Over 1 hour",
        frequency: "Repeat 6 vials q6h if needed",
        drugClass: "Polyvalent Antivenom",
        alternatives: "Polyvalent ASV (no substitute — specific treatment)",
        dosing: [
          ["All ages (initial)", "10 vials (100 mL) in 200 mL NS", "IV infusion", "Over 1 hour", "—"],
          ["Repeat if needed", "6 vials q6h", "IV", "If 20WBCT non-clotting at 6h", "Max 30 vials/24h"],
          ["Pediatric dose", "SAME as adult", "IV", "Based on venom load", "Not body weight"]
        ],
        warnings: ["Pre-medicate with Adrenaline 0.25 mg SC + Hydrocortisone + Antihistamine before ASV."]
      },
      {
        name: "Inj. Roxadex",
        dose: "8mg",
        form: "ampule",
        quantity: "1 amp",
        route: "I/V",
        timing: "Stat (before ASV)",
        frequency: "—",
        drugClass: "Corticosteroid — Dexamethasone (ASV Premedication)",
        alternatives: "Dexamethasone, Hydrocortisone, Methylprednisolone",
        dosing: [
          ["Child (snake bite)", "0.5 mg/kg", "IV", "Stat (before ASV)", "—"],
          ["Adult (snake bite)", "8 mg", "IV", "Stat (before ASV)", "—"]
        ],
        warnings: []
      },
      {
        name: "Inj. Avil",
        dose: "10–20mg",
        form: "ampule",
        quantity: "1 amp",
        route: "I/V slow",
        timing: "Stat (pre-ASV)",
        frequency: "then 4mg PO TDS",
        drugClass: "1st-gen Antihistamine — Chlorpheniramine",
        alternatives: "Chlorpheniramine, Promethazine, Diphenhydramine",
        dosing: [
          ["Child (1–5y)", "1 mg", "IM/IV/PO", "BD–TDS", "—"],
          ["Child (6–12y)", "2 mg", "IM/IV/PO", "TDS", "—"],
          ["Adult", "10–20 mg IV slow Stat (pre-ASV), then 4 mg PO TDS", "IV/PO", "TDS", "—"],
          ["Elderly", "4 mg", "PO", "BD", "Sedation risk"]
        ],
        warnings: ["Chlorpheniramine IV must be given SLOWLY (over 1 min). Rapid push → transient hypotension.", "Promethazine contraindicated in <2 years (fatal respiratory depression)."]
      },
      {
        name: "Inj. OP",
        dose: "40mg",
        form: "vial",
        quantity: "1 vial",
        route: "I/V",
        timing: "Stat",
        frequency: "OD",
        drugClass: "PPI — Pantoprazole",
        alternatives: "Pantoprazole, Omeprazole",
        dosing: [["See Case 3", "Full dosing table", "—", "—", "—"]],
        crossRef: 3, warnings: []
      },
      {
        name: "Inj. T.T.",
        dose: "0.5mL",
        form: "vaccine",
        quantity: "1 amp",
        route: "I/M",
        timing: "Stat",
        frequency: "—",
        drugClass: "Vaccine — Tetanus Toxoid",
        alternatives: "Tetanus Toxoid, TIG for high-risk",
        dosing: [["See Case 3", "Full dosing table", "—", "—", "—"]],
        crossRef: 3, warnings: []
      },
      {
        name: "Inj. Adrenaline",
        dose: "0.3–0.5mg",
        form: "ampule",
        quantity: "1 amp",
        route: "I/M (thigh)",
        timing: "Stat",
        frequency: "q5–15 min PRN",
        drugClass: "Sympathomimetic — Epinephrine (Extra — Anaphylaxis Kit)",
        alternatives: "No substitute for anaphylaxis",
        dosing: [
          ["Child (anaphylaxis)", "0.01 mg/kg (1:1000)", "IM (anterolateral thigh)", "q5–15 min PRN", "Max 0.3 mg/dose"],
          ["Adult (anaphylaxis)", "0.3–0.5 mg (1:1000)", "IM (anterolateral thigh)", "q5–15 min PRN", "—"],
          ["Adult (ASV pre-med)", "0.25 mg", "SC", "Stat before ASV", "—"]
        ],
        warnings: ["Always have Adrenaline ready during ASV infusion. IM preferred over SC for anaphylaxis (faster absorption)."]
      }
    ]
  },

  // ═══════════════════════════════════════
  // CASE 20: Pompholyx
  // ═══════════════════════════════════════
  {
    id: 20,
    title: "Pompholyx (Dyshidrotic Eczema)",
    categories: ["derm"],
    severity: "mod",
    catColor: "cat-derm",
    complaint: "Itchy vesicles on hands and feet — Pompholyx",
    details: [],
    alerts: [{ type: "tip", text: "Pompholyx often flares with stress, sweating, or contact allergens. Avoid harsh soaps." }],
    medications: [
      {
        name: "Tab. Fluclox",
        dose: "500mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "QDS (7 days)",
        drugClass: "Penicillinase-resistant Penicillin — Flucloxacillin",
        alternatives: "Amoxicillin-Clavulanate, Cefuroxime, Doxycycline",
        dosing: [["See Case 7", "Full dosing table", "—", "—", "—"]],
        crossRef: 7, warnings: []
      },
      {
        name: "Tab. Esofid Mups",
        dose: "20mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "Before meal",
        frequency: "OD (20 days)",
        drugClass: "PPI — Esomeprazole",
        alternatives: "Omeprazole, Pantoprazole, Rabeprazole",
        dosing: [
          ["Child (1–11y, 10–20 kg)", "10 mg", "PO", "OD", "—"],
          ["Child (>20 kg)", "10–20 mg", "PO", "OD", "—"],
          ["Adolescent/Adult", "20–40 mg", "PO", "OD", "—"]
        ],
        warnings: []
      },
      {
        name: "Tab. Rupa",
        dose: "10mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "BD (20 days)",
        drugClass: "2nd-gen Antihistamine — Rupatadine",
        alternatives: "Fexofenadine, Cetirizine, Loratadine, Bilastine",
        dosing: [
          ["Child (2–11y, >10 kg)", "2.5–5 mg", "PO", "OD", "—"],
          ["Adolescent/Adult", "10 mg", "PO", "OD–BD", "—"]
        ],
        warnings: []
      },
      {
        name: "Zemer Cream",
        dose: "—",
        form: "cream",
        quantity: "Thin layer",
        route: "Topical",
        timing: "—",
        frequency: "BD (20 days)",
        drugClass: "Topical Corticosteroid — Clobetasol/Mometasone",
        alternatives: "Mometasone, Betamethasone, Hydrocortisone (milder)",
        dosing: [
          ["Adult", "Thin layer to affected area", "Topical", "BD", "Max 2–4 weeks"]
        ],
        warnings: ["Potent topical steroid. Limit to 2–4 weeks. Avoid face/flexures."]
      }
    ]
  },

  // ═══════════════════════════════════════
  // CASE 21: Fever & URTI (Outpatient)
  // ═══════════════════════════════════════
  {
    id: 21,
    title: "Fever & URTI (Outpatient)",
    categories: ["infect", "resp"],
    severity: "mod",
    catColor: "cat-infect",
    complaint: "Fever, running nose, cough — 7 days",
    details: [],
    alerts: [],
    medications: [
      {
        name: "Tab. Azithromycin",
        dose: "200mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "After meal",
        frequency: "OD (5 days)",
        drugClass: "Macrolide Antibiotic — Azithromycin",
        alternatives: "Clarithromycin, Erythromycin, Amoxicillin",
        dosing: [["See Case 16", "Full dosing table", "—", "—", "—"]],
        crossRef: 16, warnings: []
      },
      {
        name: "Tab. Dipu",
        dose: "10mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "BD (20 days)",
        drugClass: "2nd-gen Antihistamine — Desloratadine",
        alternatives: "Fexofenadine, Cetirizine, Loratadine, Levocetirizine",
        dosing: [
          ["Child (6–11y)", "2.5 mg", "PO", "OD", "—"],
          ["Adolescent/Adult", "5–10 mg", "PO", "OD–BD", "—"]
        ],
        warnings: []
      },
      {
        name: "Tab. Triulock",
        dose: "10mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "OD (20 days)",
        drugClass: "Leukotriene Receptor Antagonist — Montelukast",
        alternatives: "Montelukast, Zafirlukast",
        dosing: [["See Case 4", "Full dosing table", "—", "—", "—"]],
        crossRef: 4, warnings: []
      },
      {
        name: "Syp. Daykof",
        dose: "10mL",
        form: "syrup",
        quantity: "2 tsp",
        route: "PO",
        timing: "—",
        frequency: "TDS (7 days)",
        drugClass: "Antitussive / Expectorant — Cough Syrup",
        alternatives: "Dextromethorphan, Ambroxol, Bromhexine, Carbocisteine",
        dosing: [
          ["Child (2–6y)", "2.5–5 mL", "PO", "TDS", "—"],
          ["Child (6–12y)", "5 mL", "PO", "TDS", "—"],
          ["Adult", "10 mL (2 tsp)", "PO", "TDS", "—"]
        ],
        warnings: []
      },
      {
        name: "Viodin Mouthwash",
        dose: "—",
        form: "solution",
        quantity: "2 tsp in warm water",
        route: "Gargle",
        timing: "—",
        frequency: "TDS",
        drugClass: "Antiseptic Gargle — Povidone-Iodine",
        alternatives: "Chlorhexidine, Betadine gargle, Warm salt water",
        dosing: [
          ["Adult", "15 mL diluted in warm water", "Gargle", "2–3 times daily", "Do not swallow"]
        ],
        warnings: ["Avoid normal water immediately after use."]
      }
    ]
  },

  // ═══════════════════════════════════════
  // CASE 22: Mumps
  // ═══════════════════════════════════════
  {
    id: 22,
    title: "Mumps",
    categories: ["infect"],
    severity: "mod",
    catColor: "cat-infect",
    complaint: "Parotid gland swelling — Mumps",
    details: [],
    alerts: [{ type: "info", text: "Mumps is self-limiting. Treatment is supportive — analgesics + anti-inflammatory. Watch for complications: orchitis, pancreatitis, meningitis." }],
    medications: [
      {
        name: "Tab. Zerostil Plus",
        dose: "280mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "After meal",
        frequency: "TDS (7 days)",
        drugClass: "NSAID — Aceclofenac + Paracetamol Combo",
        alternatives: "Aceclofenac, Ibuprofen + Paracetamol, Diclofenac",
        dosing: [
          ["Adult", "1 tab", "PO", "TDS", "After meals, max 7 days"]
        ],
        warnings: ["Avoid in children. Co-prescribe PPI."]
      },
      {
        name: "Tab. P/C (Paracetamol)",
        dose: "500mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "After meal",
        frequency: "TDS (5 days)",
        drugClass: "Analgesic / Antipyretic",
        alternatives: "Generic Paracetamol, Ibuprofen",
        dosing: [["See Case 1", "Full dosing table", "—", "—", "—"]],
        crossRef: 1, warnings: []
      },
      {
        name: "Tab. Exore",
        dose: "20mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "OD (7 days)",
        drugClass: "PPI — Esomeprazole",
        alternatives: "Omeprazole, Pantoprazole, Rabeprazole",
        dosing: [["See Case 20", "Full dosing table", "—", "—", "—"]],
        crossRef: 20, warnings: []
      },
      {
        name: "Viodin Mouthwash",
        dose: "—",
        form: "solution",
        quantity: "2 tsp in warm water",
        route: "Gargle",
        timing: "—",
        frequency: "TDS (20 days)",
        drugClass: "Antiseptic Gargle — Povidone-Iodine",
        alternatives: "Chlorhexidine, Betadine",
        dosing: [["See Case 21", "Full dosing table", "—", "—", "—"]],
        crossRef: 21, warnings: ["Avoid normal water after use."]
      }
    ]
  },

  // ═══════════════════════════════════════
  // CASE 23: Boils (Furuncle)
  // ═══════════════════════════════════════
  {
    id: 23,
    title: "Boils (Furuncle)",
    categories: ["derm", "infect"],
    severity: "mod",
    catColor: "cat-derm",
    complaint: "Skin boils — furuncle",
    details: [
      { label: "Investigations", value: "RBS (Random Blood Sugar)" }
    ],
    alerts: [{ type: "tip", text: "Recurrent boils? Check for diabetes (RBS, HbA1c). Consider nasal Mupirocin for S. aureus decolonization." }],
    medications: [
      {
        name: "Tab. Flubex",
        dose: "500mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "After meal",
        frequency: "QDS (7 days)",
        drugClass: "Penicillinase-resistant Penicillin — Flucloxacillin",
        alternatives: "Flucloxacillin, Amoxicillin-Clavulanate, Clindamycin",
        dosing: [["See Case 7", "Full dosing table", "—", "—", "—"]],
        crossRef: 7, warnings: []
      },
      {
        name: "Cap. Exore",
        dose: "20mg",
        form: "capsule",
        quantity: "1 cap",
        route: "PO",
        timing: "Empty stomach",
        frequency: "OD (20 days)",
        drugClass: "PPI — Esomeprazole",
        alternatives: "Omeprazole, Pantoprazole, Rabeprazole",
        dosing: [["See Case 20", "Full dosing table", "—", "—", "—"]],
        crossRef: 20, warnings: []
      },
      {
        name: "Tab. Ace",
        dose: "500mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "After meal",
        frequency: "QDS (5 days)",
        drugClass: "Analgesic / Antipyretic — Paracetamol",
        alternatives: "Generic Paracetamol, Ibuprofen",
        dosing: [["See Case 1", "Full dosing table", "—", "—", "—"]],
        crossRef: 1, warnings: []
      },
      {
        name: "Tab. Calbo-D",
        dose: "—",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "OD (2 months)",
        drugClass: "Calcium + Vitamin D Supplement",
        alternatives: "Calcium Carbonate + Cholecalciferol, Oscal-D",
        dosing: [
          ["Child (>4y)", "½ tab", "PO", "OD", "—"],
          ["Adult", "1 tab", "PO", "OD–BD", "—"]
        ],
        warnings: []
      },
      {
        name: "Bactrosin Ointment",
        dose: "—",
        form: "ointment",
        quantity: "Thin layer",
        route: "Topical",
        timing: "—",
        frequency: "BD (20 days)",
        drugClass: "Topical Antibiotic — Mupirocin",
        alternatives: "Mupirocin, Fusidic Acid, Neosporin",
        dosing: [["See Case 3", "Full dosing table", "—", "—", "—"]],
        crossRef: 3, warnings: []
      }
    ]
  },

  // ═══════════════════════════════════════
  // CASE 24: Tinea / Fungal Infection
  // ═══════════════════════════════════════
  {
    id: 24,
    title: "Tinea / Fungal Infection",
    categories: ["derm"],
    severity: "mod",
    catColor: "cat-derm",
    complaint: "Fungal skin infection — tinea corporis / cruris",
    details: [],
    alerts: [{ type: "tip", text: "Complete full antifungal course (often 2–4 weeks). Itraconazole requires acidic environment — take with food/cola. Monitor LFT if prolonged use." }],
    medications: [
      {
        name: "Cap. Itracon",
        dose: "100mg",
        form: "capsule",
        quantity: "1 cap",
        route: "PO",
        timing: "After meal",
        frequency: "OD (2 months)",
        drugClass: "Triazole Antifungal — Itraconazole",
        alternatives: "Fluconazole, Terbinafine, Griseofulvin",
        dosing: [
          ["Child (>3y)", "3–5 mg/kg/day", "PO", "OD", "—"],
          ["Adult (tinea)", "100–200 mg", "PO", "OD", "2–4 weeks (corporis), 2–4 months (unguium)"],
          ["Elderly", "100 mg", "PO", "OD", "Monitor LFT"]
        ],
        warnings: ["Monitor LFT if course >1 month. Drug interactions with CYP3A4 substrates. Take with food."]
      },
      {
        name: "Tab. Dipu",
        dose: "10mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "OD (20 days)",
        drugClass: "2nd-gen Antihistamine — Desloratadine",
        alternatives: "Fexofenadine, Cetirizine, Loratadine",
        dosing: [["See Case 21", "Full dosing table", "—", "—", "—"]],
        crossRef: 21, warnings: []
      },
      {
        name: "Cap. DLP",
        dose: "30mg",
        form: "capsule",
        quantity: "1 cap",
        route: "PO",
        timing: "—",
        frequency: "OD (1 month)",
        drugClass: "PPI — Dexlansoprazole",
        alternatives: "Lansoprazole, Omeprazole, Pantoprazole",
        dosing: [
          ["Adult", "30–60 mg", "PO", "OD", "—"]
        ],
        warnings: []
      },
      {
        name: "Keto Gold Soap",
        dose: "—",
        form: "solution",
        quantity: "Use for bathing",
        route: "Topical",
        timing: "—",
        frequency: "Daily",
        drugClass: "Antifungal Soap — Ketoconazole",
        alternatives: "Ketoconazole soap, Zinc Pyrithione, Selenium Sulfide",
        dosing: [
          ["All ages", "Lather on affected area, leave 3–5 min, rinse", "Topical", "Daily", "—"]
        ],
        warnings: []
      },
      {
        name: "Enface Cream",
        dose: "—",
        form: "cream",
        quantity: "Thin layer",
        route: "Topical",
        timing: "—",
        frequency: "BD (1 month)",
        drugClass: "Topical Antifungal — Sertaconazole / Luliconazole",
        alternatives: "Clotrimazole, Miconazole, Terbinafine cream, Ketoconazole cream",
        dosing: [
          ["All ages (>2y)", "Thin layer to affected area", "Topical", "BD", "2–4 weeks"]
        ],
        warnings: []
      }
    ]
  },

  // ═══════════════════════════════════════
  // CASE 25: Paediatric LRTI
  // ═══════════════════════════════════════
  {
    id: 25,
    title: "Paediatric LRTI",
    categories: ["peds", "resp"],
    severity: "high",
    catColor: "cat-peds",
    complaint: "Lower respiratory tract infection in child",
    details: [],
    alerts: [{ type: "warning", text: "EBF indicates neonatal/infant case. Carbapenems are LAST-RESORT — de-escalate based on culture. Monitor respiratory rate and SpO₂." }],
    medications: [
      {
        name: "Syp. Cefuroxime (Clansef)",
        dose: "5mL",
        form: "syrup",
        quantity: "5 mL",
        route: "PO",
        timing: "—",
        frequency: "BD (7 days)",
        drugClass: "2nd-gen Cephalosporin — Cefuroxime Axetil",
        alternatives: "Amoxicillin-Clavulanate, Cefixime, Ceftriaxone (severe)",
        dosing: [
          ["Infant (3–12 mo)", "40–60 mg/kg/day", "PO", "Divided BD", "—"],
          ["Child (1–12y)", "20–30 mg/kg/day", "PO", "Divided BD", "Max 500 mg/dose"]
        ],
        warnings: []
      },
      {
        name: "Syp. Prednisolone (Pedipred)",
        dose: "5mL",
        form: "syrup",
        quantity: "5 mL",
        route: "PO",
        timing: "—",
        frequency: "BD (5 days)",
        drugClass: "Corticosteroid — Prednisolone",
        alternatives: "Dexamethasone, Methylprednisolone",
        dosing: [
          ["Child (acute wheeze)", "1–2 mg/kg/day", "PO", "OD or divided BD", "Max 40 mg/day, 3–5 days"],
          ["Child (croup)", "1 mg/kg", "PO", "Single dose", "—"]
        ],
        warnings: ["Short courses (<7 days) generally don't need tapering."]
      },
      {
        name: "Syp. Pedeamin",
        dose: "5mL",
        form: "syrup",
        quantity: "5 mL",
        route: "PO",
        timing: "—",
        frequency: "BD (7 days)",
        drugClass: "Multivitamin — Paediatric",
        alternatives: "Any paediatric multivitamin",
        dosing: [
          ["Infant", "2.5 mL", "PO", "OD", "—"],
          ["Child (1–5y)", "5 mL", "PO", "OD–BD", "—"]
        ],
        warnings: []
      },
      {
        name: "Syp. Zovia Gold",
        dose: "5mL",
        form: "syrup",
        quantity: "5 mL",
        route: "PO",
        timing: "—",
        frequency: "BD (2 months)",
        drugClass: "Zinc + Multivitamin — Immune Support",
        alternatives: "Zinc sulfate + multivitamin, Zincofer",
        dosing: [
          ["Child (6 mo–5y)", "5 mL", "PO", "OD–BD", "—"]
        ],
        warnings: []
      },
      {
        name: "Tab. Arcokant (Montelukast)",
        dose: "4–5mg",
        form: "tablet",
        quantity: "½–1 tab",
        route: "PO",
        timing: "—",
        frequency: "OD (evening, 2 months)",
        drugClass: "LTRA — Montelukast (Paediatric)",
        alternatives: "Montelukast chewable",
        dosing: [
          ["Child (6 mo–5y)", "4 mg granules/chew", "PO", "OD (evening)", "—"],
          ["Child (6–14y)", "5 mg chewable", "PO", "OD (evening)", "—"]
        ],
        warnings: []
      }
    ]
  },

  // ═══════════════════════════════════════
  // CASE 26: Fever / Dengue Workup
  // ═══════════════════════════════════════
  {
    id: 26,
    title: "Fever / Dengue Workup",
    categories: ["infect"],
    severity: "mod",
    catColor: "cat-infect",
    complaint: "Fever, headache, cough — r/o Dengue",
    details: [
      { label: "Investigations", value: "RT-PCR for Dengue, Urine R/M/E, CXR P/A view" }
    ],
    alerts: [{ type: "warning", text: "AVOID NSAIDs and Aspirin in suspected Dengue — risk of hemorrhage. Use Paracetamol only for fever. Monitor platelet count." }],
    medications: [
      {
        name: "Tab. Cefuroxime",
        dose: "500mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "BD (7 days)",
        drugClass: "2nd-gen Cephalosporin — Cefuroxime Axetil",
        alternatives: "Amoxicillin-Clavulanate, Azithromycin, Cefixime",
        dosing: [
          ["Child", "20–30 mg/kg/day", "PO", "Divided BD", "Max 500 mg/dose"],
          ["Adult", "250–500 mg", "PO", "BD", "—"]
        ],
        warnings: []
      },
      {
        name: "Cap. Finix",
        dose: "20mg",
        form: "capsule",
        quantity: "1 cap",
        route: "PO",
        timing: "Before meal",
        frequency: "OD (20 days)",
        drugClass: "PPI — Omeprazole/Esomeprazole",
        alternatives: "Omeprazole, Pantoprazole, Rabeprazole",
        dosing: [["See Case 20", "Full dosing table", "—", "—", "—"]],
        crossRef: 20, warnings: []
      },
      {
        name: "Tab. Tofen",
        dose: "—",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "OD (7 days)",
        drugClass: "Antihistamine + Decongestant Combo",
        alternatives: "Fexofenadine, Cetirizine + Pseudoephedrine",
        dosing: [
          ["Adult", "1 tab", "PO", "OD", "—"]
        ],
        warnings: []
      }
    ]
  },

  // ═══════════════════════════════════════
  // CASE 27: Infected Scabies
  // ═══════════════════════════════════════
  {
    id: 27,
    title: "Infected Scabies",
    categories: ["derm", "infect"],
    severity: "mod",
    catColor: "cat-derm",
    complaint: "Scabies with secondary bacterial infection",
    details: [],
    alerts: [{ type: "info", text: "Treat ALL household contacts simultaneously. Wash all bedding/clothing in hot water. Ivermectin on empty stomach with water only — avoid food 2h before/after." }],
    medications: [
      {
        name: "Tab. Rupin",
        dose: "10mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "OD (20 days)",
        drugClass: "2nd-gen Antihistamine — Rupatadine",
        alternatives: "Fexofenadine, Cetirizine, Loratadine",
        dosing: [["See Case 20", "Full dosing table", "—", "—", "—"]],
        crossRef: 20, warnings: []
      },
      {
        name: "Cap. A-Flox",
        dose: "500mg",
        form: "capsule",
        quantity: "1 cap",
        route: "PO",
        timing: "After meal",
        frequency: "QDS",
        drugClass: "Penicillinase-resistant Penicillin — Flucloxacillin",
        alternatives: "Flucloxacillin, Amoxicillin-Clavulanate, Cefuroxime",
        dosing: [["See Case 7", "Full dosing table", "—", "—", "—"]],
        crossRef: 7, warnings: []
      },
      {
        name: "Cap. Finix",
        dose: "20mg",
        form: "capsule",
        quantity: "1 cap",
        route: "PO",
        timing: "—",
        frequency: "OD (7 days)",
        drugClass: "PPI — Omeprazole",
        alternatives: "Omeprazole, Pantoprazole, Rabeprazole",
        dosing: [["See Case 20", "Full dosing table", "—", "—", "—"]],
        crossRef: 20, warnings: []
      },
      {
        name: "Tab. Ivera",
        dose: "12mg",
        form: "tablet",
        quantity: "2 tabs",
        route: "PO",
        timing: "Empty stomach",
        frequency: "Day 1 + repeat Day 8",
        drugClass: "Antiparasitic — Ivermectin",
        alternatives: "Permethrin 5% cream (topical alternative)",
        dosing: [
          ["Child (>15 kg)", "200 mcg/kg", "PO", "Single dose, repeat Day 8", "—"],
          ["Adult", "200 mcg/kg (~12 mg for 60 kg)", "PO", "Single dose, repeat Day 8", "—"]
        ],
        warnings: ["Take on empty stomach with water only. Avoid food 2h before and after. Contraindicated in pregnancy."]
      }
    ]
  },

  // ═══════════════════════════════════════
  // CASE 28: Allergic Rhinitis
  // ═══════════════════════════════════════
  {
    id: 28,
    title: "Allergic Rhinitis",
    categories: ["resp", "derm"],
    severity: "low",
    catColor: "cat-resp",
    complaint: "Sneezing, allergic rhinitis",
    details: [
      { label: "Investigations", value: "Urine R/M/E" }
    ],
    alerts: [{ type: "tip", text: "Intranasal corticosteroids (Beclomethasone) are first-line for persistent allergic rhinitis. 2nd-gen antihistamines preferred (less sedation)." }],
    medications: [
      {
        name: "Tab. Monas",
        dose: "10mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "OD (2 months)",
        drugClass: "LTRA — Montelukast",
        alternatives: "Zafirlukast",
        dosing: [["See Case 4", "Full dosing table", "—", "—", "—"]],
        crossRef: 4, warnings: []
      },
      {
        name: "Tab. Ebastin",
        dose: "10mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "OD (20 days)",
        drugClass: "2nd-gen Antihistamine — Ebastine",
        alternatives: "Fexofenadine, Cetirizine, Loratadine, Bilastine",
        dosing: [
          ["Child (6–11y)", "5 mg", "PO", "OD", "—"],
          ["Adolescent/Adult", "10–20 mg", "PO", "OD", "—"]
        ],
        warnings: []
      },
      {
        name: "Becospray",
        dose: "50mcg/spray",
        form: "inhaler",
        quantity: "2 puffs per nostril",
        route: "Intranasal",
        timing: "—",
        frequency: "BD (2 months)",
        drugClass: "Intranasal Corticosteroid — Beclomethasone",
        alternatives: "Fluticasone nasal, Mometasone nasal, Budesonide nasal",
        dosing: [
          ["Child (6–12y)", "1 spray each nostril", "Intranasal", "BD", "—"],
          ["Adult", "2 sprays each nostril", "Intranasal", "BD (reduce to OD when controlled)", "—"]
        ],
        warnings: []
      },
      {
        name: "Cap. Finix",
        dose: "20mg",
        form: "capsule",
        quantity: "1 cap",
        route: "PO",
        timing: "Before meal",
        frequency: "OD (20 days)",
        drugClass: "PPI — Omeprazole",
        alternatives: "Omeprazole, Pantoprazole",
        dosing: [["See Case 20", "Full dosing table", "—", "—", "—"]],
        crossRef: 20, warnings: []
      }
    ]
  },

  // ═══════════════════════════════════════
  // CASE 29: Lichen Simplex / Dermatitis
  // ═══════════════════════════════════════
  {
    id: 29,
    title: "Lichen Simplex / Dermatitis",
    categories: ["derm"],
    severity: "low",
    catColor: "cat-derm",
    complaint: "Itchy black thickened area (~2×1 cm, Rt leg), headache",
    details: [],
    alerts: [],
    medications: [
      {
        name: "Tab. Fexo",
        dose: "120mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "OD (20 days)",
        drugClass: "2nd-gen Antihistamine — Fexofenadine",
        alternatives: "Cetirizine, Loratadine, Levocetirizine",
        dosing: [["See Case 18", "Full dosing table", "—", "—", "—"]],
        crossRef: 18, warnings: []
      },
      {
        name: "Deremasol-N Cream",
        dose: "—",
        form: "cream",
        quantity: "Thin layer",
        route: "Topical",
        timing: "—",
        frequency: "BD (2 months)",
        drugClass: "Topical Corticosteroid + Antifungal + Antibacterial",
        alternatives: "Betamethasone + Neomycin + Clotrimazole, Quadriderm",
        dosing: [
          ["Adult", "Thin layer to affected area", "Topical", "BD", "Max 2–4 weeks"]
        ],
        warnings: ["Triple-combination creams should not be used long-term. Risk of skin atrophy and resistance."]
      },
      {
        name: "Cap. Rabe",
        dose: "20mg",
        form: "capsule",
        quantity: "1 cap",
        route: "PO",
        timing: "Before meal",
        frequency: "OD (20 days)",
        drugClass: "PPI — Rabeprazole",
        alternatives: "Omeprazole, Pantoprazole, Esomeprazole",
        dosing: [["See Case 18", "Full dosing table", "—", "—", "—"]],
        crossRef: 18, warnings: []
      },
      {
        name: "Tab. Napa Extend",
        dose: "665mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "TDS (6 days)",
        drugClass: "Analgesic — Paracetamol Extended-Release",
        alternatives: "Paracetamol 500mg, Ibuprofen",
        dosing: [
          ["Adult", "665 mg (1 tab)", "PO", "TDS", "Max 3990 mg/day, do not crush"],
          ["Elderly", "665 mg", "PO", "BD", "Max 2 g/day if liver impairment"]
        ],
        warnings: ["Do NOT crush/split extended-release tabs — risk of dose dumping."]
      }
    ]
  },

  // ═══════════════════════════════════════
  // CASE 30: Pneumonia (Inpatient)
  // ═══════════════════════════════════════
  {
    id: 30,
    title: "Pneumonia (Inpatient)",
    categories: ["resp", "emergency"],
    severity: "high",
    catColor: "cat-resp",
    complaint: "Fever, breathlessness, chest tightness, ronchi",
    details: [
      { label: "Diet", value: "Liquid diet" },
      { label: "Intervention", value: "O₂ inhalation 2–3 L/min" }
    ],
    alerts: [{ type: "danger", text: "Monitor SpO₂ closely. If SpO₂ <92% on O₂ or worsening dyspnea → consider ICU. Assess CURB-65 score for severity." }],
    medications: [
      {
        name: "Inj. Ceftriaxone",
        dose: "1gm",
        form: "vial",
        quantity: "1 vial",
        route: "I/V",
        timing: "Stat",
        frequency: "BD",
        drugClass: "3rd-gen Cephalosporin",
        alternatives: "Cefotaxime, Levofloxacin, Azithromycin",
        dosing: [["See Case 1", "Full dosing table", "—", "—", "—"]],
        crossRef: 1, warnings: []
      },
      {
        name: "Inj. Pantonix",
        dose: "20mg",
        form: "vial",
        quantity: "1 vial",
        route: "I/V",
        timing: "Stat",
        frequency: "BD",
        drugClass: "PPI — Pantoprazole",
        alternatives: "Omeprazole, Esomeprazole",
        dosing: [["See Case 3", "Full dosing table", "—", "—", "—"]],
        crossRef: 3, warnings: []
      },
      {
        name: "Tab. Monas",
        dose: "10mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "OD (20 days)",
        drugClass: "LTRA — Montelukast",
        alternatives: "Zafirlukast",
        dosing: [["See Case 4", "Full dosing table", "—", "—", "—"]],
        crossRef: 4, warnings: []
      },
      {
        name: "Tab. P/C (Paracetamol)",
        dose: "500mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "q6h PRN",
        drugClass: "Antipyretic / Analgesic",
        alternatives: "Paracetamol suppository, Ibuprofen",
        dosing: [["See Case 1", "Full dosing table", "—", "—", "—"]],
        crossRef: 1, warnings: []
      },
      {
        name: "Napa Suppository",
        dose: "500mg",
        form: "suppository",
        quantity: "1 stick",
        route: "P/R",
        timing: "—",
        frequency: "SOS",
        drugClass: "Antipyretic — Paracetamol Rectal",
        alternatives: "Paracetamol oral, Ibuprofen",
        dosing: [
          ["Child (1–5y)", "125–250 mg", "PR", "q6h", "60 mg/kg/day"],
          ["Child (6–12y)", "250–500 mg", "PR", "q6h", "—"],
          ["Adult", "500 mg–1 g", "PR", "q6h", "Max 4 g/day"]
        ],
        warnings: ["Do not dissolve in water. Insert rectally only."]
      }
    ]
  },

  // ═══════════════════════════════════════
  // CASE 31: Mechanical Low Back Pain
  // ═══════════════════════════════════════
  {
    id: 31,
    title: "Mechanical Low Back Pain",
    categories: ["trauma"],
    severity: "mod",
    catColor: "cat-trauma",
    complaint: "Low back pain — mechanical origin",
    details: [],
    alerts: [{ type: "tip", text: "Red flags: night pain, weight loss, fever, bladder/bowel dysfunction, progressive neurological deficit → urgent investigation (MRI)." }],
    medications: [
      {
        name: "Tab. Flamex",
        dose: "400mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "TDS (20 days)",
        drugClass: "NSAID — Ibuprofen",
        alternatives: "Naproxen, Diclofenac, Etoricoxib, Paracetamol",
        dosing: [["See Case 16", "Full dosing table", "—", "—", "—"]],
        crossRef: 16, warnings: []
      },
      {
        name: "Tab. Reservix (Aceclofenac)",
        dose: "100mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "After meal",
        frequency: "BD (20 days)",
        drugClass: "NSAID — Aceclofenac",
        alternatives: "Diclofenac, Naproxen, Etoricoxib, Piroxicam",
        dosing: [
          ["Adult", "100 mg", "PO", "BD", "After meals"],
          ["Elderly", "100 mg", "PO", "OD–BD", "Lowest effective dose"]
        ],
        warnings: ["Co-prescribe PPI. Avoid in renal impairment."]
      },
      {
        name: "Cap. Maxpro",
        dose: "20mg",
        form: "capsule",
        quantity: "1 cap",
        route: "PO",
        timing: "Before meal",
        frequency: "OD (20 days)",
        drugClass: "PPI — Esomeprazole",
        alternatives: "Omeprazole, Pantoprazole, Rabeprazole",
        dosing: [["See Case 20", "Full dosing table", "—", "—", "—"]],
        crossRef: 20, warnings: []
      },
      {
        name: "Tab. Neuro-B",
        dose: "—",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "OD (2 months)",
        drugClass: "Vitamin B Complex — Neurotropic",
        alternatives: "Methylcobalamin, Neurobion, B1+B6+B12 combo",
        dosing: [
          ["Adult", "1 tab", "PO", "OD", "—"]
        ],
        warnings: []
      },
      {
        name: "Tab. Algecal-DX",
        dose: "—",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "OD (2 months)",
        drugClass: "Calcium + Vitamin D3 Supplement",
        alternatives: "Calcium Carbonate + Cholecalciferol, Oscal-D",
        dosing: [
          ["Adult", "1 tab", "PO", "OD–BD", "After meals"]
        ],
        warnings: []
      },
      {
        name: "Tab. Beklo",
        dose: "5mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "OD (20 days)",
        drugClass: "Muscle Relaxant — Baclofen",
        alternatives: "Tizanidine, Chlorzoxazone, Methocarbamol, Diazepam",
        dosing: [
          ["Child (>1y)", "0.75–2 mg/kg/day", "PO", "Divided TDS", "Max 40 mg/day (>8y)"],
          ["Adult", "5 mg TDS → titrate to 20 mg TDS", "PO", "TDS", "Max 80 mg/day"],
          ["Elderly", "5 mg", "PO", "OD–BD", "Start low, sedation risk"]
        ],
        warnings: ["Do NOT stop abruptly — risk of withdrawal seizures. Taper over 1–2 weeks."]
      }
    ]
  },

  // ═══════════════════════════════════════
  // CASE 32: Acute Appendicitis (Inpatient)
  // ═══════════════════════════════════════
  {
    id: 32,
    title: "Acute Appendicitis (Inpatient)",
    categories: ["gi", "surgical", "emergency"],
    severity: "high",
    catColor: "cat-surgical",
    complaint: "Abdominal pain, fever, nausea, vomiting — appendicitis",
    details: [
      { label: "Diet", value: "NPO / TFO" },
      { label: "IV Fluids", value: "Inf. 5% DNS (1L) + 5% DA (1L) + H/S (1L) with Actrapid 10 units" }
    ],
    alerts: [{ type: "danger", text: "Surgical emergency. NPO mandatory — prepare for appendectomy. Alvarado score ≥7 → surgery. CT/USG for confirmation." }],
    medications: [
      {
        name: "Inj. Ceftriaxone",
        dose: "2gm",
        form: "vial",
        quantity: "1 vial",
        route: "I/V",
        timing: "Stat",
        frequency: "BD",
        drugClass: "3rd-gen Cephalosporin",
        alternatives: "Cefotaxime, Cefuroxime",
        dosing: [["See Case 1", "Full dosing table", "—", "—", "—"]],
        crossRef: 1, warnings: []
      },
      {
        name: "Inj. Metro",
        dose: "400mg",
        form: "vial",
        quantity: "1 bottle",
        route: "I/V",
        timing: "Stat",
        frequency: "TDS",
        drugClass: "Nitroimidazole — Metronidazole",
        alternatives: "Tinidazole, Ornidazole",
        dosing: [["See Case 9", "Full dosing table", "—", "—", "—"]],
        crossRef: 9, warnings: []
      },
      {
        name: "Inj. Pantonix",
        dose: "40mg",
        form: "vial",
        quantity: "1 vial",
        route: "I/V",
        timing: "Stat",
        frequency: "BD",
        drugClass: "PPI — Pantoprazole",
        alternatives: "Omeprazole, Esomeprazole",
        dosing: [["See Case 3", "Full dosing table", "—", "—", "—"]],
        crossRef: 3, warnings: []
      },
      {
        name: "Inj. Viset",
        dose: "5mg",
        form: "ampule",
        quantity: "1 amp",
        route: "I/V",
        timing: "Stat",
        frequency: "—",
        drugClass: "Antispasmodic / Analgesic — Hyoscine Butylbromide",
        alternatives: "Hyoscine Butylbromide, Drotaverine, Dicyclomine",
        dosing: [["See Case 1", "Full dosing table", "—", "—", "—"]],
        crossRef: 1, warnings: []
      }
    ]
  },

  // ═══════════════════════════════════════
  // CASE 33: Paed Fever / Rhinitis
  // ═══════════════════════════════════════
  {
    id: 33,
    title: "Paediatric Fever & Rhinitis",
    categories: ["peds"],
    severity: "low",
    catColor: "cat-peds",
    complaint: "Fever, runny nose in child",
    details: [],
    alerts: [],
    medications: [
      {
        name: "Tab. P/C (Paracetamol)",
        dose: "500mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "QDS (5 days)",
        drugClass: "Antipyretic / Analgesic — Paracetamol",
        alternatives: "Paracetamol syrup, Ibuprofen",
        dosing: [["See Case 1", "Full dosing table", "—", "—", "—"]],
        crossRef: 1, warnings: []
      },
      {
        name: "Tab. Fexo",
        dose: "120mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "OD (20 days)",
        drugClass: "2nd-gen Antihistamine — Fexofenadine",
        alternatives: "Cetirizine, Loratadine, Levocetirizine",
        dosing: [["See Case 18", "Full dosing table", "—", "—", "—"]],
        crossRef: 18, warnings: []
      },
      {
        name: "Syp. Deras",
        dose: "10mL",
        form: "syrup",
        quantity: "2 tsp",
        route: "PO",
        timing: "—",
        frequency: "TDS",
        drugClass: "Antihistamine + Decongestant Syrup",
        alternatives: "Desloratadine syrup, Cetirizine syrup, Loratadine syrup",
        dosing: [
          ["Child (2–5y)", "2.5 mL", "PO", "OD", "—"],
          ["Child (6–12y)", "5 mL", "PO", "OD–BD", "—"],
          ["Adult", "10 mL", "PO", "BD–TDS", "—"]
        ],
        warnings: []
      }
    ]
  },

  // ═══════════════════════════════════════
  // CASE 34: AFI — Candida Intertrigo
  // ═══════════════════════════════════════
  {
    id: 34,
    title: "AFI — Candida Intertrigo",
    categories: ["derm", "infect"],
    severity: "low",
    catColor: "cat-derm",
    complaint: "Acute febrile illness with candida skin infection (intertrigo)",
    details: [],
    alerts: [{ type: "tip", text: "Keep skin folds dry. Loose clothing. Antifungal cream + oral azole if widespread." }],
    medications: [
      {
        name: "Tab. Zimax",
        dose: "500mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "OD (7 days)",
        drugClass: "Macrolide — Azithromycin",
        alternatives: "Azithromycin, Clarithromycin, Amoxicillin",
        dosing: [["See Case 16", "Full dosing table", "—", "—", "—"]],
        crossRef: 16, warnings: []
      },
      {
        name: "Tab. Napa",
        dose: "500mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "TDS (6 days)",
        drugClass: "Antipyretic — Paracetamol",
        alternatives: "Generic Paracetamol, Ibuprofen",
        dosing: [["See Case 1", "Full dosing table", "—", "—", "—"]],
        crossRef: 1, warnings: []
      },
      {
        name: "Tab. Histacin",
        dose: "4mg",
        form: "tablet",
        quantity: "1 tab",
        route: "PO",
        timing: "—",
        frequency: "OD (7 days)",
        drugClass: "1st-gen Antihistamine — Chlorpheniramine",
        alternatives: "Fexofenadine, Cetirizine, Loratadine (less sedating alternatives)",
        dosing: [
          ["Child (1–5y)", "1 mg", "PO", "BD–TDS", "—"],
          ["Child (6–12y)", "2 mg", "PO", "TDS", "—"],
          ["Adult", "4 mg", "PO", "TDS", "Max 24 mg/day"]
        ],
        warnings: ["1st-gen: causes sedation. Use 2nd-gen antihistamines as preferred alternative."]
      },
      {
        name: "X-Bin Cream",
        dose: "—",
        form: "cream",
        quantity: "Apply to affected area",
        route: "Topical",
        timing: "—",
        frequency: "TDS",
        drugClass: "Topical Antifungal — Clotrimazole / Miconazole",
        alternatives: "Clotrimazole, Miconazole, Nystatin cream",
        dosing: [
          ["All ages", "Apply thin layer to affected area", "Topical", "BD–TDS", "2–4 weeks"]
        ],
        warnings: []
      }
    ]
  },

  // ═══════════════════════════════════════
  // CASE 35: Paed Urticaria / Allergy
  // ═══════════════════════════════════════
  {
    id: 35,
    title: "Paediatric Urticaria / Allergy",
    categories: ["peds", "derm"],
    severity: "mod",
    catColor: "cat-peds",
    complaint: "Urticaria / allergic reaction in child",
    details: [],
    alerts: [{ type: "warning", text: "If urticaria with lip/tongue swelling, stridor, or hypotension → ANAPHYLAXIS — give IM Adrenaline immediately." }],
    medications: [
      {
        name: "Syp. Urtimex",
        dose: "5mL",
        form: "syrup",
        quantity: "2 tsp",
        route: "PO",
        timing: "—",
        frequency: "BD (14 days)",
        drugClass: "2nd-gen Antihistamine Syrup — Levocetirizine/Desloratadine",
        alternatives: "Cetirizine syrup, Loratadine syrup, Fexofenadine syrup",
        dosing: [
          ["Child (6 mo–5y)", "1.25–2.5 mL", "PO", "OD", "—"],
          ["Child (6–12y)", "2.5–5 mL", "PO", "OD–BD", "—"]
        ],
        warnings: []
      },
      {
        name: "Syp. Famotak",
        dose: "0.5mL",
        form: "syrup",
        quantity: "0.5 mL",
        route: "PO",
        timing: "—",
        frequency: "BD (14 days)",
        drugClass: "H2 Blocker — Famotidine Syrup",
        alternatives: "Ranitidine syrup, Cimetidine (avoid in peds)",
        dosing: [
          ["Infant/Child", "0.5–1 mg/kg", "PO", "BD", "—"],
          ["Adolescent", "10–20 mg", "PO", "BD", "—"]
        ],
        warnings: []
      },
      {
        name: "Syp. Preedil",
        dose: "5mL",
        form: "syrup",
        quantity: "2 tsp",
        route: "PO",
        timing: "—",
        frequency: "TDS (7 days)",
        drugClass: "Corticosteroid — Prednisolone Syrup",
        alternatives: "Dexamethasone, Methylprednisolone",
        dosing: [
          ["Child (acute)", "1–2 mg/kg/day", "PO", "Divided BD–TDS", "Max 40 mg/day, 3–5 days"]
        ],
        warnings: ["Short courses (<7 days) generally don't need tapering."]
      },
      {
        name: "Calamine Lotion",
        dose: "—",
        form: "lotion",
        quantity: "Apply to itchy areas",
        route: "Topical",
        timing: "—",
        frequency: "BD (7 days)",
        drugClass: "Topical Anti-pruritic",
        alternatives: "Menthol cream, Crotamiton",
        dosing: [["See Case 18", "Full dosing table", "—", "—", "—"]],
        crossRef: 18, warnings: []
      }
    ]
  }
];

// ─── QUICK REFERENCE DATA ───
const QUICK_REF = [
  {
    title: "Drugs to AVOID by Age",
    headerClass: "header-danger",
    icon: ICONS.ban,
    headers: ["Drug", "Avoid In", "Reason"],
    rows: [
      ["Aspirin", "<16 years", "Reye's Syndrome"],
      ["Fluoroquinolones", "Children/Adolescents", "Cartilage/tendon damage"],
      ["Ketorolac", "<2 years", "Renal/GI risk"],
      ["Metoclopramide", "<1 year", "Extrapyramidal symptoms"],
      ["Codeine", "<12 years", "Respiratory depression"],
      ["Tetracyclines", "<8 years, Pregnancy", "Teeth staining, bone growth"],
      ["Theophylline", "Neonates", "Narrow index, toxicity"],
      ["Clonazepam", "Neonates", "Respiratory depression"],
      ["Potent topical steroids", "Infants (prolonged)", "Skin atrophy"],
      ["Metamizole", "All ages (many countries)", "Agranulocytosis"],
      ["Promethazine", "<2 years", "Fatal respiratory depression"],
      ["Ceftriaxone", "Neonates on IV calcium", "Fatal precipitates"]
    ]
  },
  {
    title: "Renal Dose Adjustments",
    headerClass: "header-warning",
    icon: ICONS.alert,
    headers: ["Drug", "CrCl 30–50", "CrCl 10–30", "CrCl <10"],
    rows: [
      ["Ceftriaxone", "No change", "No change", "Max 2 g"],
      ["Cefuroxime", "No change", "q12h", "q24h"],
      ["Meropenem", "Full q12h", "50% q12h", "50% q24h"],
      ["Ciprofloxacin", "250–500 mg q12h", "250–500 mg q18h", "250 mg q24h"],
      ["Metronidazole", "No change", "No change", "50% dose"],
      ["Enoxaparin", "No change", "No change", "1 mg/kg OD"],
      ["Famotidine", "No change", "50% dose", "25% dose"],
      ["Ketorolac", "AVOID", "CONTRAINDICATED", "CONTRAINDICATED"]
    ]
  },
  {
    title: "Emergency Resuscitation Doses",
    headerClass: "header-info",
    icon: ICONS.zap,
    headers: ["Drug", "Pediatric", "Adult", "Route"],
    rows: [
      ["Adrenaline (Cardiac)", "0.01 mg/kg (1:10,000)", "1 mg (1:10,000)", "IV q3–5 min"],
      ["Adrenaline (Anaphylaxis)", "0.01 mg/kg (1:1000)", "0.3–0.5 mg (1:1000)", "IM thigh"],
      ["Atropine", "0.02 mg/kg (min 0.1 mg)", "0.5–1 mg", "IV q3–5 min"],
      ["Amiodarone", "5 mg/kg", "300 mg → 150 mg", "IV bolus"],
      ["Dextrose (Hypo)", "2–4 mL/kg of 10%", "25–50 mL of 50%", "IV"],
      ["Naloxone", "0.1 mg/kg", "0.4–2 mg", "IV/IM q2–3 min"],
      ["Diazepam (Seizure)", "0.2–0.5 mg/kg", "5–10 mg", "IV (max 5 mg/min)"],
      ["Midazolam (Seizure)", "0.15 mg/kg", "5–10 mg", "IM/buccal"],
      ["MgSO₄ (Eclampsia)", "—", "4 g IV over 20 min + 5 g IM each buttock", "IV + IM"],
      ["Ca Gluconate 10%", "0.5 mL/kg", "10–20 mL", "IV slow (5–10 min)"]
    ]
  },
  {
    title: "Age Group Definitions",
    headerClass: "header-success",
    icon: ICONS.info,
    headers: ["Category", "Age Range", "Approx Weight"],
    rows: [
      ["Neonate", "0–28 days", "2.5–4 kg"],
      ["Infant", "1–12 months", "4–10 kg"],
      ["Toddler", "1–3 years", "10–15 kg"],
      ["Child", "4–12 years", "15–40 kg"],
      ["Adolescent", "13–17 years", "40–60 kg"],
      ["Adult", "≥18 years", "50–80 kg"],
      ["Elderly", "≥65 years", "Dose reduction often needed"]
    ]
  },
  {
    title: "Gestational Age Classification",
    headerClass: "header-warning",
    icon: ICONS.heart,
    headers: ["Weeks", "Classification", "Notes"],
    rows: [
      ["<28 weeks", "Abortion (Miscarriage)", "Non-viable"],
      ["28–37 weeks", "Premature / Preterm", "NICU may be needed"],
      [">37 weeks", "Term Pregnancy", "Normal delivery expected"],
      [">40 weeks", "Post-Term", "Induction may be needed"]
    ]
  },
  {
    title: "Paediatric Daily Fluid Requirement",
    headerClass: "header-info",
    icon: ICONS.info,
    headers: ["Day / Age", "Volume", "Notes"],
    rows: [
      ["Day 1", "60 mL/kg", "Neonate"],
      ["Day 2", "80 mL/kg", "Neonate"],
      ["Day 3", "100 mL/kg", "Neonate"],
      ["Day 4", "120 mL/kg", "Neonate"],
      ["Day 5", "140 mL/kg", "Neonate"],
      ["Day 6+", "150 mL/kg", "Neonate"],
      ["7 days – 2 yrs", "150 mL/kg/day", "Holliday-Segar"],
      ["2 – 4 yrs", "120 mL/kg/day", "Holliday-Segar"],
      ["4 – 8 yrs", "100 mL/kg/day", "Holliday-Segar"]
    ]
  }
];


// ──────────────────────────────────────
// RENDERING
// ──────────────────────────────────────

function renderCases() {
  const grid = document.getElementById('casesGrid');
  grid.innerHTML = CASES.map(c => renderCaseCard(c)).join('');
  // Trigger animations
  requestAnimationFrame(() => {
    document.querySelectorAll('.case-card').forEach((card, i) => {
      setTimeout(() => card.classList.add('visible'), i * 60);
    });
  });
  updateResultsCount(CASES.length);
}

function renderCaseCard(c) {
  const severityTag = c.severity === 'high' ? '<span class="tag tag-severity-high">High Priority</span>' :
                      c.severity === 'mod'  ? '<span class="tag tag-severity-mod">Moderate</span>' :
                                               '<span class="tag tag-severity-low">Routine</span>';
  const catTags = c.categories.map(cat => `<span class="tag tag-category">${cat}</span>`).join('');

  const detailsHTML = c.details.length ? `
    <div class="clinical-section">
      <div class="clinical-section-title">
        ${ICONS.clipboard} Clinical Details
      </div>
      <div class="clinical-detail">
        ${c.details.map(d => `
          <div class="detail-card">
            <div class="detail-label">${d.label}</div>
            <div class="detail-value">${d.value}</div>
          </div>
        `).join('')}
      </div>
    </div>` : '';

  const alertsHTML = c.alerts.map(a => `
    <div class="alert alert-${a.type}">
      ${a.type === 'danger' ? ICONS.alert : a.type === 'warning' ? ICONS.alert : a.type === 'tip' ? ICONS.heart : ICONS.info}
      <div>${a.text}</div>
    </div>
  `).join('');

  const medsHTML = c.medications.map(m => renderMedication(m)).join('');

  return `
    <div class="case-card" data-id="${c.id}" data-categories="${c.categories.join(',')}" data-search="${(c.title + ' ' + c.complaint + ' ' + c.medications.map(m=>m.name + ' ' + m.drugClass + ' ' + m.alternatives + ' ' + (m.form || '')).join(' ')).toLowerCase()}">
      <div class="case-header" onclick="toggleCase(${c.id})">
        <div class="case-number ${c.catColor}">${c.id}</div>
        <div class="case-info">
          <div class="case-title">${c.title}</div>
          <div class="case-tags">${catTags} ${severityTag}</div>
        </div>
        <div class="case-toggle">${ICONS.chevron}</div>
      </div>
      <div class="case-body" id="caseBody${c.id}">
        <div class="case-body-inner">
          <p style="color:var(--text-secondary);font-size:0.9rem;margin-top:1rem;"><strong>Chief Complaint:</strong> ${c.complaint}</p>
          ${alertsHTML}
          ${detailsHTML}
          <div class="clinical-section">
            <div class="clinical-section-title">
              ${ICONS.pill} Medications & Age-Wise Dosing
            </div>
            ${medsHTML}
          </div>
        </div>
      </div>
    </div>`;
}

function renderMedication(m) {
  const formInfo = FORM_CONFIG[m.form] || { icon: '💊', label: m.form || 'Unknown' };
  const crossRefHTML = m.crossRef ? `<span class="cross-ref" onclick="scrollToCase(${m.crossRef})">↗ See Case ${m.crossRef} for full dosing</span>` : '';
  const isCrossRef = m.crossRef && m.dosing.length === 1 && m.dosing[0][0].startsWith('See');

  const warningsHTML = m.warnings.map(w => `
    <div class="alert alert-warning" style="margin:0.5rem 0;padding:0.6rem 1rem;font-size:0.8rem;">
      ${ICONS.alert}
      <div>${w}</div>
    </div>
  `).join('');

  // Build prescription pipeline steps
  const pipelineSteps = [];
  if (m.quantity && m.quantity !== '—') {
    pipelineSteps.push(`<div class="rx-step rx-step-container"><span class="rx-step-label">Qty</span><span class="rx-step-value">${m.quantity}</span></div>`);
  }
  if (m.route && m.route !== '—') {
    pipelineSteps.push(`<div class="rx-step rx-step-route"><span class="rx-step-label">Route</span><span class="rx-step-value">${m.route}</span></div>`);
  }
  if (m.timing && m.timing !== '—') {
    pipelineSteps.push(`<div class="rx-step rx-step-timing"><span class="rx-step-label">When</span><span class="rx-step-value">${m.timing}</span></div>`);
  }
  if (m.frequency && m.frequency !== '—') {
    pipelineSteps.push(`<div class="rx-step rx-step-frequency"><span class="rx-step-label">Freq</span><span class="rx-step-value">${m.frequency}</span></div>`);
  }
  const pipelineHTML = pipelineSteps.length ? `<div class="rx-pipeline">${pipelineSteps.join('<span class="rx-arrow">→</span>')}</div>` : '';

  // Cross-ref compact card
  if (isCrossRef) {
    return `
      <div class="med-card-crossref">
        <div>
          <span class="med-form-badge badge-${m.form}"><span class="form-icon">${formInfo.icon}</span> ${formInfo.label}</span>
          <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
            <span class="med-card-title">${m.name}</span>
            ${m.dose && m.dose !== '—' ? `<span class="med-card-dose">${m.dose}</span>` : ''}
          </div>
          <div class="med-card-class">${m.drugClass}</div>
          ${pipelineHTML}
          ${m.alternatives ? `<div class="med-card-alt"><strong>Alt: </strong>${m.alternatives}</div>` : ''}
        </div>
        ${crossRefHTML}
        ${warningsHTML}
      </div>`;
  }

  // Full medication card
  const headers = ['Age Group', 'Dose', 'Route', 'Frequency', 'Max / Notes'];
  return `
    <div class="med-card" data-form="${m.form}">
      <span class="med-form-badge badge-${m.form}"><span class="form-icon">${formInfo.icon}</span> ${formInfo.label}</span>
      <div class="med-card-header">
        <div class="med-card-title">${m.name}</div>
        ${m.dose && m.dose !== '—' ? `<div class="med-card-dose">${m.dose}</div>` : ''}
      </div>
      <div class="med-card-class">${m.drugClass}</div>
      ${pipelineHTML}
      ${m.alternatives ? `<div class="med-card-alt"><strong>Alternatives: </strong>${m.alternatives}</div>` : ''}
      ${crossRefHTML}
      <div class="med-table-wrapper">
        <table class="med-table">
          <thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
          <tbody>${m.dosing.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
        </table>
      </div>
      ${warningsHTML}
    </div>`;
}

function renderQuickRef() {
  const container = document.getElementById('refCards');
  container.innerHTML = QUICK_REF.map(ref => `
    <div class="ref-card">
      <div class="ref-card-header ${ref.headerClass}">
        ${ref.icon} ${ref.title}
      </div>
      <div class="ref-card-body">
        <div class="med-table-wrapper" style="border:none;border-radius:0;">
          <table class="med-table">
            <thead><tr>${ref.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
            <tbody>${ref.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
          </table>
        </div>
      </div>
    </div>
  `).join('');
}


// ──────────────────────────────────────
// INTERACTIVITY
// ──────────────────────────────────────

function toggleCase(id) {
  const card = document.querySelector(`.case-card[data-id="${id}"]`);
  const body = document.getElementById(`caseBody${id}`);
  const isExpanded = card.classList.contains('expanded');

  // Close all other open cases first
  document.querySelectorAll('.case-card.expanded').forEach(openCard => {
    if (openCard !== card) {
      const openId = openCard.dataset.id;
      const openBody = document.getElementById(`caseBody${openId}`);
      openBody.style.maxHeight = '0';
      openCard.classList.remove('expanded');
    }
  });

  if (isExpanded) {
    body.style.maxHeight = '0';
    card.classList.remove('expanded');
  } else {
    body.style.maxHeight = body.scrollHeight + 'px';
    card.classList.add('expanded');
    // Recalculate after transition for nested content
    setTimeout(() => {
      if (card.classList.contains('expanded')) {
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    }, 300);
    // Smooth scroll to the opened case
    setTimeout(() => {
      card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
  }
}

function scrollToCase(id) {
  const card = document.querySelector(`.case-card[data-id="${id}"]`);
  if (!card) return;
  // Expand it
  if (!card.classList.contains('expanded')) {
    toggleCase(id);
  }
  // Scroll
  setTimeout(() => {
    card.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

function updateResultsCount(count) {
  document.getElementById('resultsCount').innerHTML = `Showing <strong>${count}</strong> of ${CASES.length} cases`;
}

// Search
document.getElementById('searchInput').addEventListener('input', function() {
  const query = this.value.toLowerCase().trim();
  filterCases(query, activeFilter);
});

// Filters
let activeFilter = 'all';
document.getElementById('filterBar').addEventListener('click', function(e) {
  if (!e.target.classList.contains('filter-btn')) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  activeFilter = e.target.dataset.filter;
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  filterCases(query, activeFilter);
});

function filterCases(query, category) {
  const cards = document.querySelectorAll('.case-card');
  let visibleCount = 0;

  cards.forEach(card => {
    const matchesSearch = !query || card.dataset.search.includes(query);
    const matchesFilter = category === 'all' || card.dataset.categories.includes(category);
    const show = matchesSearch && matchesFilter;
    card.style.display = show ? '' : 'none';
    if (show) visibleCount++;
  });

  updateResultsCount(visibleCount);
  document.getElementById('noResults').classList.toggle('visible', visibleCount === 0);
}

// Header scroll effect
window.addEventListener('scroll', () => {
  document.getElementById('siteHeader').classList.toggle('scrolled', window.scrollY > 10);
  document.getElementById('backToTop').classList.toggle('visible', window.scrollY > 400);
});

// Modal
function toggleModal(id) {
  const modal = document.getElementById(id);
  const overlay = document.getElementById('abbrOverlay');
  const isOpen = modal.classList.contains('open');
  modal.classList.toggle('open', !isOpen);
  overlay.classList.toggle('open', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

// Keyboard shortcut — Escape to close modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const modal = document.getElementById('abbrModal');
    if (modal.classList.contains('open')) toggleModal('abbrModal');
  }
  // Ctrl+K or / to focus search
  if ((e.key === '/' && !e.ctrlKey) || (e.key === 'k' && (e.ctrlKey || e.metaKey))) {
    e.preventDefault();
    document.getElementById('searchInput').focus();
  }
});


// ──────────────────────────────────────
// INIT
// ──────────────────────────────────────
renderCases();
renderQuickRef();

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
        name: "Inj. Ceftriaxone 1gm",
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
        name: "Inj. Algin 5mg",
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
        name: "Inj. Rolac 30mg",
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
        name: "Inj. Paracetamol (Extra Alternative)",
        drugClass: "Analgesic / Antipyretic",
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
        name: "Tab. Xinc 20mg",
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
        name: "Inj. Emistat 8mg",
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
        name: "Inj. T.T. 1 amp",
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
        name: "Cap. Flex 500mg",
        drugClass: "1st-gen Cephalosporin — Cephalexin",
        alternatives: "Cephalexin, Amoxicillin-Clavulanate, Cefadroxil, Clindamycin (penicillin allergy)",
        dosing: [
          ["Child", "25–50 mg/kg/day", "PO", "Divided q6–8h", "100 mg/kg/day"],
          ["Adult", "250–500 mg", "PO", "q6h", "4 g/day"]
        ],
        warnings: []
      },
      {
        name: "Tab. Rolac 10mg",
        drugClass: "NSAID — Ketorolac (Oral)",
        alternatives: "Ibuprofen, Naproxen, Diclofenac, Paracetamol",
        dosing: [
          ["Adolescent (>16y)/Adult", "10 mg", "PO", "q4–6h", "≤5 days; 40 mg/day PO"],
          ["Elderly", "10 mg", "PO", "q6–8h", "≤5 days; 40 mg/day"]
        ],
        warnings: ["Max 5 days total (including IV + PO). Co-prescribe PPI."]
      },
      {
        name: "Cap. OP 20mg / Dextac 30mg",
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
        name: "Tab. Cevit / Vasco 250mg",
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
        name: "Trego / Bactrocin Ointment",
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
        name: "Inj. Ceftriaxone 1gm",
        drugClass: "3rd-gen Cephalosporin",
        alternatives: "Levofloxacin, Azithromycin, Cefotaxime, Amoxicillin-Clavulanate",
        dosing: [["See Case 1", "Full dosing table", "—", "—", "—"]],
        warnings: [],
        crossRef: 1
      },
      {
        name: "Inj. Cortson 100mg",
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
        name: "Tab. Monas 10mg",
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
        name: "Tab. Docopa 200mg",
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
        name: "Inj. OP 40mg",
        drugClass: "PPI — Pantoprazole IV",
        alternatives: "Inj. Pantoprazole 40mg, Omeprazole, Esomeprazole",
        dosing: [["See Case 3", "Full dosing table", "—", "—", "—"]],
        warnings: [],
        crossRef: 3
      },
      {
        name: "Inj. Lasix",
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
        name: "Nebulization with Windel Plus",
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
        name: "Ecosprin 75mg",
        drugClass: "Antiplatelet — Aspirin",
        alternatives: "Generic Aspirin, any Acetylsalicylic Acid",
        dosing: [
          ["Adult (ACS loading)", "300 mg chew", "PO", "Stat, then 75–150 mg OD", "Lifelong"],
          ["Elderly", "75 mg", "PO", "OD", "Higher bleeding risk"]
        ],
        warnings: ["NEVER in children <16 years — Reye's Syndrome risk."]
      },
      {
        name: "Clopid 75mg",
        drugClass: "Antiplatelet — P2Y12 Inhibitor (Clopidogrel)",
        alternatives: "Ticagrelor (180 mg load → 90 mg BD), Prasugrel (60 mg load → 10 mg OD)",
        dosing: [
          ["Adult (ACS loading)", "300–600 mg", "PO", "Stat", "—"],
          ["Adult (maintenance)", "75 mg", "PO", "OD", "—"]
        ],
        warnings: []
      },
      {
        name: "Inj. Ceftriaxone 1g",
        drugClass: "3rd-gen Cephalosporin",
        alternatives: "Cefotaxime",
        dosing: [["See Case 1", "Full dosing table", "—", "—", "—"]],
        warnings: [],
        crossRef: 1
      },
      {
        name: "Atovar 80mg",
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
        name: "Inj. Cortson 100mg",
        drugClass: "Corticosteroid — Hydrocortisone",
        alternatives: "Hydrocortisone, Methylprednisolone, Dexamethasone",
        dosing: [["See Case 4", "Full dosing table", "—", "—", "—"]],
        warnings: [],
        crossRef: 4
      },
      {
        name: "Tab. Doxiva 200mg",
        drugClass: "Bronchodilator — Doxofylline",
        alternatives: "Doxofylline, Theophylline, Aminophylline",
        dosing: [["See Case 4", "Full dosing table", "—", "—", "—"]],
        warnings: [],
        crossRef: 4
      },
      {
        name: "Tab. Monas 10mg",
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
        name: "Inj. Moxin 500mg",
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
        name: "Inj. Traxyl 500mg",
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
        name: "Inj. Algin 5mg",
        drugClass: "Antispasmodic — Hyoscine Butylbromide",
        alternatives: "Hyoscine Butylbromide, Drotaverine",
        dosing: [["See Case 1", "Full dosing table", "—", "—", "—"]],
        crossRef: 1, warnings: []
      },
      {
        name: "Inj. Emistat 8mg",
        drugClass: "Antiemetic — Ondansetron",
        alternatives: "Ondansetron, Granisetron",
        dosing: [["See Case 2", "Full dosing table", "—", "—", "—"]],
        crossRef: 2, warnings: []
      },
      {
        name: "Inj. OP 40mg",
        drugClass: "PPI — Omeprazole",
        alternatives: "Omeprazole, Pantoprazole, Esomeprazole",
        dosing: [["See Case 3", "Full dosing table", "—", "—", "—"]],
        crossRef: 3, warnings: []
      },
      {
        name: "Inj. Oxytocin (Extra Alternative)",
        drugClass: "Uterotonic — For postpartum hemorrhage if applicable",
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
        name: "Rabies Immunoglobulin (RIG) — Cat III",
        drugClass: "Passive Immunization",
        alternatives: "Human RIG (HRIG), Equine RIG (ERIG)",
        dosing: [
          ["Human RIG (HRIG)", "20 IU/kg", "Infiltrate wound + IM", "Stat", "—"],
          ["Equine RIG (ERIG)", "40 IU/kg", "Infiltrate wound + IM", "Stat", "—"]
        ],
        warnings: ["Skin test before ERIG administration. Observe 30 min for anaphylaxis."]
      },
      {
        name: "Inj. T.T Vaccine 1 amp",
        drugClass: "Vaccine — Standard Tetanus Toxoid",
        alternatives: "Standard Tetanus Toxoid, TIG for high-risk wounds",
        dosing: [["See Case 3", "Full dosing table", "—", "—", "—"]],
        crossRef: 3, warnings: []
      },
      {
        name: "Cap. Fluclox 500/250mg",
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
        name: "Tab. Rolac / Flamex 20mg",
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
        name: "Inj. Ceftriaxone 1gm",
        drugClass: "3rd-gen Cephalosporin",
        alternatives: "Cefixime, Azithromycin, Ciprofloxacin (adults)",
        dosing: [["See Case 1", "Full dosing table", "—", "—", "—"]],
        crossRef: 1, warnings: []
      },
      {
        name: "Tab. Famotack",
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
        drugClass: "Micronutrient — Zinc Sulfate",
        alternatives: "Any Zinc Sulfate supplement",
        dosing: [["See Case 2", "Full dosing table", "—", "—", "—"]],
        crossRef: 2, warnings: []
      },
      {
        name: "Inj. Emistat 8mg",
        drugClass: "Antiemetic — Ondansetron",
        alternatives: "Ondansetron, Granisetron, Domperidone",
        dosing: [["See Case 2", "Full dosing table", "—", "—", "—"]],
        crossRef: 2, warnings: []
      },
      {
        name: "ORS + IV Ringer's Lactate (Extra Alternative)",
        drugClass: "Fluid & Electrolyte Replacement",
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
        name: "Inj. Cipro 200mg",
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
        name: "Inj. Metro 500mg",
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
        name: "Tab. Enterogermina oral solution",
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
        name: "Inj. Todol 30mg",
        drugClass: "NSAID — Ketorolac (analgesic)",
        alternatives: "Ketorolac, Diclofenac, Paracetamol IV, Tramadol, Morphine (severe pain)",
        dosing: [["See Case 1", "Full dosing table", "—", "—", "—"]],
        crossRef: 1, warnings: []
      },
      {
        name: "Inj. Mampred",
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
        name: "Inj. Xilmex 750mg",
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
        name: "Inj. Meropen 500mg",
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
        name: "Syp. Paracetamol (Extra Alternative)",
        drugClass: "Antipyretic / Analgesic",
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
        name: "Inj. Ceftriaxone 1gm",
        drugClass: "3rd-gen Cephalosporin",
        alternatives: "Cefotaxime, Cefuroxime, Meropenem (if meningitis suspected)",
        dosing: [["See Case 1", "Full dosing table", "—", "—", "—"]],
        crossRef: 1, warnings: []
      },
      {
        name: "Inj. Oradexon 30mg",
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
        drugClass: "PPI — Pantoprazole",
        alternatives: "Pantoprazole, Omeprazole",
        dosing: [["See Case 3", "Full dosing table", "—", "—", "—"]],
        crossRef: 3, warnings: []
      },
      {
        name: "Inj. Mannitol 20% (Extra Alternative)",
        drugClass: "Osmotic Diuretic — For raised ICP",
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
        name: "Inj. Ceftriaxone 1gm",
        drugClass: "3rd-gen Cephalosporin",
        alternatives: "Cefotaxime, Cefuroxime",
        dosing: [["See Case 1", "Full dosing table", "—", "—", "—"]],
        crossRef: 1, warnings: []
      },
      {
        name: "Inj. Algin 50mg",
        drugClass: "Antispasmodic / Analgesic",
        alternatives: "Hyoscine Butylbromide, Drotaverine, Paracetamol",
        dosing: [
          ["Child (>3 mo, >5 kg)", "10–15 mg/kg", "IV/IM", "q6–8h", "60 mg/kg/day"],
          ["Adult", "500–1000 mg", "IV/IM/PO", "q6–8h", "4 g/day"]
        ],
        warnings: ["If Metamizole (Dipyrone): risk of agranulocytosis — banned in some countries. Monitor blood counts if used >7 days."]
      },
      {
        name: "Inj. Metro 400mg",
        drugClass: "Nitroimidazole — Metronidazole",
        alternatives: "Tinidazole, Ornidazole",
        dosing: [["See Case 9", "Full dosing table", "—", "—", "—"]],
        crossRef: 9, warnings: []
      },
      {
        name: "Inj. OP 40mg",
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
        drugClass: "Vaccine — Tetanus Toxoid",
        alternatives: "Tetanus Toxoid, TIG for high-risk",
        dosing: [["See Case 3", "Full dosing table", "—", "—", "—"]],
        crossRef: 3, warnings: []
      },
      {
        name: "Inj. Fluclox 500mg",
        drugClass: "Penicillin — Flucloxacillin",
        alternatives: "Amoxicillin-Clavulanate, Cefuroxime, Doxycycline",
        dosing: [["See Case 7", "Full dosing table", "—", "—", "—"]],
        crossRef: 7, warnings: []
      },
      {
        name: "Inj. Rolac 10mg",
        drugClass: "NSAID — Ketorolac",
        alternatives: "Ketorolac, Diclofenac, Ibuprofen, Paracetamol",
        dosing: [["See Case 1", "Full dosing table", "—", "—", "—"]],
        crossRef: 1, warnings: []
      },
      {
        name: "Inj. Ceftriaxone 1gm",
        drugClass: "3rd-gen Cephalosporin",
        alternatives: "Cefuroxime, Cefotaxime, Amoxicillin-Clavulanate",
        dosing: [["See Case 1", "Full dosing table", "—", "—", "—"]],
        crossRef: 1, warnings: []
      },
      {
        name: "Inj. Pantonix 40mg",
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
        name: "Inj. Ceftriaxone 1gm",
        drugClass: "3rd-gen Cephalosporin",
        alternatives: "Levofloxacin, Azithromycin, Amoxicillin-Clavulanate",
        dosing: [["See Case 1", "Full dosing table", "—", "—", "—"]],
        crossRef: 1, warnings: []
      },
      {
        name: "Tab. Bizoran 5/20mg",
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
        name: "Tab. Monas 10mg",
        drugClass: "LTRA — Montelukast",
        alternatives: "Zafirlukast",
        dosing: [["See Case 4", "Full dosing table", "—", "—", "—"]],
        crossRef: 4, warnings: []
      },
      {
        name: "Tab. Docopa 200mg",
        drugClass: "Bronchodilator — Doxofylline",
        alternatives: "Doxofylline, Theophylline, Aminophylline",
        dosing: [["See Case 4", "Full dosing table", "—", "—", "—"]],
        crossRef: 4, warnings: []
      },
      {
        name: "Azmasol / Bexitrol Inhaler",
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
        name: "Mucomyst DT 600mg",
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
        name: "Tab. Az 500mg",
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
        drugClass: "Topical Anti-haemorrhoidal — Hydrocortisone + Lidocaine",
        alternatives: "Hydrocortisone + Lidocaine cream, Preparation H, Proctosedyl",
        dosing: [
          ["Adult", "Apply peri-anally", "Topical", "BD–TDS", "Max 7 days"]
        ],
        warnings: ["Do not use >7 days — risk of skin atrophy."]
      },
      {
        name: "Daflon 500mg",
        drugClass: "Venoprotective — Diosmin + Hesperidin",
        alternatives: "Diosmin + Hesperidin, Troxerutin, Rutosides",
        dosing: [
          ["Adult (acute attack)", "1000 mg (3 tabs)", "PO", "TDS ×4d → BD ×3d", "Loading"],
          ["Adult (maintenance)", "500 mg", "PO", "BD", "Long-term"]
        ],
        warnings: []
      },
      {
        name: "Ciprocin 500mg",
        drugClass: "Fluoroquinolone — Ciprofloxacin",
        alternatives: "Ciprofloxacin, Levofloxacin, Metronidazole",
        dosing: [["See Case 9", "PO: 250–500 mg BD", "—", "—", "—"]],
        crossRef: 9, warnings: []
      },
      {
        name: "Flamex 400mg",
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
        drugClass: "PPI — Pantoprazole / Omeprazole",
        alternatives: "Pantoprazole, Omeprazole, Rabeprazole",
        dosing: [["See Case 3", "Full dosing table", "—", "—", "—"]],
        crossRef: 3, warnings: []
      },
      {
        name: "Sitz Bath + Stool Softener (Extra Alternative)",
        drugClass: "Non-pharmacological + Lactulose",
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
        name: "Tab. Clopid 75mg",
        drugClass: "Antiplatelet — Clopidogrel",
        alternatives: "Ticagrelor, Prasugrel",
        dosing: [["See Case 5", "Full dosing table", "—", "—", "—"]],
        crossRef: 5, warnings: []
      },
      {
        name: "Tab. Colostat 10mg",
        drugClass: "Statin — Atorvastatin",
        alternatives: "Rosuvastatin, Atorvastatin, Simvastatin, Pitavastatin",
        dosing: [["See Case 5", "Full dosing table", "—", "—", "—"]],
        crossRef: 5, warnings: []
      },
      {
        name: "Cap. OP",
        drugClass: "PPI — Omeprazole",
        alternatives: "Omeprazole, Pantoprazole",
        dosing: [["See Case 3", "Full dosing table", "—", "—", "—"]],
        crossRef: 3, warnings: []
      },
      {
        name: "Tab. Bizoran 5/40mg",
        drugClass: "CCB + ARB — Amlodipine + Valsartan",
        alternatives: "Amlodipine + Valsartan, Amlodipine + Telmisartan, Losartan + Amlodipine",
        dosing: [
          ["Adult", "5/80 to 10/320 mg", "PO", "OD", "—"],
          ["Elderly", "Start 5/80 mg", "PO", "OD", "Monitor hypotension"]
        ],
        warnings: []
      },
      {
        name: "Inj. Cardinex 60mg",
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
        name: "Tab. Pase 0.5mg",
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
        name: "Inj. Morphine (Extra Alternative — MONA Protocol)",
        drugClass: "Opioid Analgesic",
        alternatives: "Fentanyl (50–100 mcg IV), Pethidine (avoid in MI)",
        dosing: [
          ["Adult", "2–4 mg IV", "IV slow", "q5–15 min PRN", "Max 10–15 mg"],
          ["Elderly", "1–2 mg IV", "IV slow", "q10–15 min", "Lower doses, monitor closely"]
        ],
        warnings: ["Monitor respiratory rate. Have Naloxone ready. Can cause hypotension and bradycardia."]
      },
      {
        name: "Tab. GTN / Nitroglycerin (Extra Alternative — MONA Protocol)",
        drugClass: "Nitrate Vasodilator",
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
        name: "Tab. Fexofast 120mg",
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
        name: "Tab. Toramax 10mg",
        drugClass: "NSAID — Ketorolac",
        alternatives: "Ketorolac, Ibuprofen, Diclofenac, Naproxen, Paracetamol",
        dosing: [["See Case 3", "PO: 10 mg q4–6h, max 40 mg/day", "—", "—", "—"]],
        crossRef: 3, warnings: []
      },
      {
        name: "Tab. Xorel 20mg",
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
        drugClass: "Topical Corticosteroid — Betamethasone",
        alternatives: "Betamethasone cream, Mometasone, Clobetasol, Hydrocortisone (milder)",
        dosing: [
          ["Child (>1y)", "Thin layer to affected area", "Topical", "BD, max 5–7 days", "Avoid face/flexures"],
          ["Adult", "Thin layer to affected area", "Topical", "BD, 2–4 weeks max", "Taper to weaker"]
        ],
        warnings: ["Potent topical steroids: Avoid face, groin, axillae. Prolonged use → skin atrophy, striae, adrenal suppression (esp. children). Use FTU dosing."]
      },
      {
        name: "Calamine Lotion (Extra Alternative)",
        drugClass: "Topical Anti-pruritic",
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
        name: "Inj. OP 40mg",
        drugClass: "PPI — Pantoprazole",
        alternatives: "Pantoprazole, Omeprazole",
        dosing: [["See Case 3", "Full dosing table", "—", "—", "—"]],
        crossRef: 3, warnings: []
      },
      {
        name: "Inj. T.T.",
        drugClass: "Vaccine — Tetanus Toxoid",
        alternatives: "Tetanus Toxoid, TIG for high-risk",
        dosing: [["See Case 3", "Full dosing table", "—", "—", "—"]],
        crossRef: 3, warnings: []
      },
      {
        name: "Inj. Adrenaline (Extra — Anaphylaxis Kit)",
        drugClass: "Sympathomimetic — Epinephrine",
        alternatives: "No substitute for anaphylaxis",
        dosing: [
          ["Child (anaphylaxis)", "0.01 mg/kg (1:1000)", "IM (anterolateral thigh)", "q5–15 min PRN", "Max 0.3 mg/dose"],
          ["Adult (anaphylaxis)", "0.3–0.5 mg (1:1000)", "IM (anterolateral thigh)", "q5–15 min PRN", "—"],
          ["Adult (ASV pre-med)", "0.25 mg", "SC", "Stat before ASV", "—"]
        ],
        warnings: ["Always have Adrenaline ready during ASV infusion. IM preferred over SC for anaphylaxis (faster absorption)."]
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
    <div class="case-card" data-id="${c.id}" data-categories="${c.categories.join(',')}" data-search="${(c.title + ' ' + c.complaint + ' ' + c.medications.map(m=>m.name + ' ' + m.drugClass + ' ' + m.alternatives).join(' ')).toLowerCase()}">
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
  const crossRefHTML = m.crossRef ? `<span class="cross-ref" onclick="scrollToCase(${m.crossRef})">↗ See Case ${m.crossRef} for full dosing</span>` : '';
  const isCrossRef = m.crossRef && m.dosing.length === 1 && m.dosing[0][0].startsWith('See');

  const warningsHTML = m.warnings.map(w => `
    <div class="alert alert-warning" style="margin:0.5rem 0;padding:0.6rem 1rem;font-size:0.8rem;">
      ${ICONS.alert}
      <div>${w}</div>
    </div>
  `).join('');

  if (isCrossRef) {
    return `
      <div style="margin-bottom:1rem;padding:0.75rem 1rem;background:var(--bg-warm);border-radius:var(--radius-sm);border-left:3px solid var(--primary);">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:8px;">
          <div>
            <span class="med-name">${m.name}</span>
            <span class="med-class" style="margin-left:8px;">${m.drugClass}</span>
            ${m.alternatives ? `<div class="med-alt"><strong>Alt:</strong> ${m.alternatives}</div>` : ''}
          </div>
          ${crossRefHTML}
        </div>
        ${warningsHTML}
      </div>`;
  }

  const headers = ['Age Group', 'Dose', 'Route', 'Frequency', 'Max / Notes'];
  return `
    <div style="margin-bottom:1.25rem;">
      <div style="margin-bottom:0.5rem;">
        <span class="med-name">${m.name}</span>
        <span class="med-class" style="margin-left:8px;">${m.drugClass}</span>
        ${m.alternatives ? `<div class="med-alt"><strong>Alternatives:</strong> ${m.alternatives}</div>` : ''}
        ${crossRefHTML}
      </div>
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

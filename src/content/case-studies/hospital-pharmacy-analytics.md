---
title: 'Hospital Pharmacy Analytics in Power BI'
description: 'A Power BI dashboard over Kenyan hospital visit records: which diseases, departments, and age groups drive pharmacy revenue — and why visit counts do not.'
pubDate: 2026-10-13
order: 1
tools: ['Power BI', 'Power Query', 'DAX']
projectUrl: 'https://github.com/EWanjau/hospital_pharmacy_data_analysis'
status: draft
---

## The problem

A hospital's pharmacy is where clinical activity becomes money: every diagnosis turns into
a prescription, and every prescription into revenue. But activity and revenue are not the
same thing — and management decisions made on visit counts alone can misfire.

Using a dataset of hospital visit records, patient demographics, diagnoses, and pharmacy
transactions, I set out to answer: **what actually drives pharmacy revenue** — disease
patterns, departments, patient age, or length of stay?

## The approach

The whole analysis lives in Power BI, in three layers:

1. **Transformation (Power Query)** — standardizing categorical fields (county, diagnosis,
   department, drug category, age group), validating identifiers across the patient, visit,
   and pharmacy tables, bucketing ages into bands, and rolling dates into monthly periods.
2. **Measures (DAX)** — the KPI layer: total visits, total pharmacy revenue, and average
   length of stay, plus grouped measures for revenue by department, drug category, and visit.
3. **Presentation** — a KPI dashboard for the headline numbers and a set of EDA visuals for
   the comparisons underneath.

**Headline KPIs**: 300 visits · 176K total pharmacy revenue · 1.41 average length of stay.

## What the data said

![Dashboard overview](/images/case-studies/hospital-pharmacy/dashboard.png)

**Disease patterns are seasonal and local.** Flu, pneumonia, and typhoid are the top three
diagnoses across the counties, with diagnosis counts peaking around **March and August** —
stocking decisions should follow the calendar, not a flat average.

![Diseases by county](/images/case-studies/hospital-pharmacy/common_diseases_across_counties.png)

**Malaria drugs lead revenue.** Cold & Flu, Diabetes, Antibiotics, Painkillers, and
Hypertension treatments follow. Revenue concentrates in the **Emergency** department, ahead
of Inpatient and Outpatient.

**Older patients carry the medication burden.** Patients aged 61+ consume the most medicine —
a signal for medicine availability planning around chronic care.

## The counterintuitive finding

The most useful result is a *negative* one. Pharmacy revenue is **unevenly distributed across
visits** — a small number of visits generate most of the revenue — and longer stays show only
a **marginal** revenue increase. Higher visit volume does not mean higher pharmacy revenue.

Treating visits, revenue, disease trends, and length of stay as the same indicator would have
led to the wrong resourcing decision; keeping them as separate-but-connected measures is the
point of the dashboard.

<!-- OUTCOME (verify before publishing): what happened because of this analysis?
     e.g. "presented to [audience], informed [decision]" — one sentence here. -->

## What I'd do next

With raw transaction-level access I'd move the repeat-visit revenue question into SQL or
Python and test it formally — the Power BI report flags the pattern but can't establish it.

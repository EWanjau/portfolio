---
title: 'Water Points in Tanzania: Statistical Foundations'
description: 'Cleaning and statistically profiling 59,400 Tanzanian water points — with Kruskal-Wallis tests deciding which features earn a place in a future functionality classifier.'
pubDate: 2026-10-13
order: 3
tools: ['Python', 'pandas', 'scipy', 'seaborn']
projectUrl: 'https://github.com/EWanjau/Tanzania_Water_Pump_Functionality'
status: draft
---

## The problem

Across rural Tanzania, thousands of public water points recorded by the ministry are
functional, some need repair, and some have failed outright. The classic machine-learning
task is a 3-class classifier: given a water point's characteristics, predict its
`status_group`.

But a classifier built on unexamined data is a guess with a confidence interval. This
project is the **foundation** work: clean the data, understand it, and let statistics —
not vibes — decide which features are worth modeling.

## The approach

The notebook works through 59,400 water points (features + labels merged on `id`):

1. **Pre-cleaning EDA** — shape, duplicates, null summaries, and distribution of the target
2. **Cleaning to explicit rules** — a stated null policy (≤35% fillable by median/mean by
   distribution shape; columns beyond the threshold dropped, which removed
   `scheme_management` and `permit`), plus category standardization
3. **Feature engineering** — `age` (year recorded minus construction year) and
   `month_recorded` derived from dates; a curated 15-column feature set
4. **Univariate, bivariate, and multivariate analysis** — target distributions, age and
   GPS-height histograms, payment-type vs status, and a correlation heatmap

## The statistics

The core of the project: **Kruskal-Wallis H tests** for every numerical feature against the
three status groups — the non-parametric answer to "does this feature's distribution
actually differ across classes?"

The results were unambiguous:

| Feature | Test statistic | p-value | Verdict |
| --- | --- | --- | --- |
| `amount_tsh` | 2974.7 | 0.0 | Reject H₀ — keep |
| `gps_height` | 597.4 | 1.87e−130 | Reject H₀ — keep |
| `population` | — | — | *see notebook* |

`amount_tsh` and `gps_height` differ across status groups with p-values far below any
conventional alpha — they carry real signal about pump condition, and the null hypothesis
of "no difference" is rejected decisively.

<!-- VERIFICATION (before publishing): re-check the population + age rows in the notebook
     output and complete the table; the notebook also has a stray dict demo cell (42) that
     could be removed before you share the repo link. -->

## Why this matters

The next step in this repo is the classifier itself. What this notebook buys is a
defensible feature set: every column that enters the model will have earned its place with
a test, and the ones that didn't were dropped for stated reasons. When a stakeholder asks
"why does the model use GPS height?", the answer is a p-value, not a shrug.

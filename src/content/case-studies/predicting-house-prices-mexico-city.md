---
title: 'Predicting Apartment Prices in Mexico City'
description: 'An end-to-end scikit-learn pipeline — extract, clean, model, visualize — that predicts Mexico City apartment prices and beats a mean-price baseline.'
pubDate: 2026-10-13
order: 2
tools: ['Python', 'pandas', 'scikit-learn', 'category_encoders']
projectUrl: 'https://github.com/EWanjau/house_prices_prediction_mexico_city'
status: draft
---

## The problem

Apartment listings are noisy: duplicates, outliers, mixed formats, and prices that reflect
one-off quirks rather than what a home is worth. The task: build a model that predicts an
apartment's price in USD from its size, location, and borough — and be able to explain what
drives the prediction.

I ran this project for **Mexico City** and then repeated the pattern for
[Buenos Aires](https://github.com/EWanjau/house_price_prediction_Buenos_aires) and
[Brazil](https://github.com/EWanjau/house_prices_prediction_brazil_case) — the same pipeline
against different markets.

## The pipeline

The repo is deliberately modular — one script per stage, run end-to-end by `main.py`:

- `extract.py` — a `wrangle()` function per source file: filters to apartments in Distrito
  Federal under USD 100,000, splits `lat-lon` strings into numeric columns, and trims the
  top and bottom 10% of surface areas to remove listing outliers
- `clean.py` — inspection checks before anything is modeled
- `model.py` — a `make_pipeline` of `OneHotEncoder → SimpleImputer → Ridge`, fit against a
  **mean-price baseline** (`Baseline MAE` is printed before training, so "did the model
  actually learn anything?" has a number, not an opinion)
- `visualize.py` — price distribution, area-vs-price scatter, correlation heatmap, a
  mapbox map of apartments colored by price, and the model's feature importances

## What the data said

![Price vs area scatter](/images/case-studies/house-prices/price-vs-area.png)

Size is the obvious driver, but the scatter shows it isn't the whole story — at the same
area, price varies widely, which is where borough (one-hot encoded) and coordinates earn
their place in the feature matrix.

![Feature importance](/images/case-studies/house-prices/feature-importance.png)

The feature-importance plot makes the model explainable: the largest coefficients are tied
to specific boroughs, not just surface area.

<!-- OUTCOME (verify before publishing): add the actual baseline MAE vs model MAE numbers
     from your last run (model.py prints both), e.g. "baseline MAE X, model MAE Y". -->

## What this project demonstrates

A real-estate model is easy to *write* and easy to *get wrong*. The parts that matter here
are unglamorous: outlier filtering by quantile, a baseline evaluated before modeling, and a
pipeline that reruns on a new city by swapping the data directory.

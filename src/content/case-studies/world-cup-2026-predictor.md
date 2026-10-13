---
title: 'World Cup 2026 Predictor'
description: 'A CatBoost model on 1,068 historical World Cup matches with Elo ratings and form features — wrapped in a Streamlit app that Monte-Carlo simulates the whole 2026 tournament.'
pubDate: 2026-10-13
order: 4
tools: ['Python', 'CatBoost', 'scikit-learn', 'Streamlit']
projectUrl: 'https://github.com/EWanjau/worldcup_2026_predictor'
status: draft
---

## The problem

Who wins the 2026 World Cup? Betting markets and punditry give opinions; I wanted a
pipeline that gives **probabilities** — built from historical tournament data, evaluated
honestly, and packaged so anyone can explore it.

## The model

The core is a **CatBoost classifier** predicting home win / draw / away win from **29
features** across four groups:

- **Elo ratings** — pre-match Elo for both teams, plus the Elo difference
- **Rolling form** — win rate, goals scored/conceded, and goal difference over each team's
  last 5 matches
- **Head-to-head** — total matchups, historical win rate, cumulative goal difference
- **Historical pedigree** — titles won, knockout/semi-final/final rates, average finish,
  total appearances

The split is **time-based** (train on older tournaments, test on recent ones) — random
splits would leak the future into training and flatter the model. Evaluation computes
accuracy, balanced accuracy, precision, recall, F1, and a confusion matrix at training time.

## The simulation

A single match prediction is interesting; a tournament is what fans want. The app runs
**10,000 Monte Carlo simulations** of the full 2026 bracket — group stage through knockout
to the final — sampling match outcomes from the model's probabilities and counting how
often each team lifts the trophy. Championship probability becomes an empirical frequency
instead of a gut feeling.

## The app

A three-page Streamlit application turns the model into a product:

- **Match Predictor** — pick any two teams, get win/draw/loss probabilities
- **Tournament Simulator** — run the bracket simulation, see championship probabilities
- **Model Insights** — feature importances and evaluation diagnostics

<!-- DEMO + VERIFICATION (before publishing): add your Streamlit Community Cloud URL as
     demoUrl in the frontmatter, and paste the accuracy/balanced-accuracy numbers from
     `python main.py train` into a short "Results" paragraph here. -->

## What this project demonstrates

The gap between a notebook and a product is engineering: API-backed data preparation,
feature pipelines with leakage-aware splits, model artifacts exported for reuse, and an
interface a non-technical fan can use in ten seconds. This project closes that gap — and
it made the group-stage predictions fun to argue about.

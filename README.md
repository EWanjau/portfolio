# Lunch Orders

A simple repo for tracking team lunch orders — who wants what, from where, and when.

## Purpose

- Collect everyone's lunch order in one place instead of scattered chats
- Keep a record of past orders (useful for repeat favourites and splitting costs)
- Make the daily "what are we eating?" decision easier

## Suggested structure

```
lunch_orders/
├── README.md
├── orders/          # One file per day, e.g. 2026-10-13.md
└── restaurants.md   # List of go-to spots, menus, and delivery details
```

## How to add an order

1. Create (or open) today's file in `orders/`, named with the date: `YYYY-MM-DD.md`
2. Add your order under the restaurant heading for the day:

```markdown
# Lunch — 2026-10-13

**Ordering from:** Mama Oliech's

| Name     | Order                    | Price |
| -------- | ------------------------ | ----- |
| Wanjau   | Fish fillet + ugali      | 450   |
| Alice    | Chicken curry + chapati  | 400   |
```

3. Commit your change: `git add orders/ && git commit -m "Add orders for 2026-10-13"`

## Conventions

- One file per day, in `orders/`, named `YYYY-MM-DD.md`
- Include the restaurant name and the person placing the order
- Update your entry before the daily cutoff if you change your mind

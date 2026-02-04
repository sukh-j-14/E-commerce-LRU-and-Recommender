# ShopSmart — E-Commerce Recommendation System

ShopSmart is a full-stack e-commerce application built to demonstrate core **Data Structures & Algorithms**, backend integration, and frontend UI concepts.  
The project implements a **Top-K Recommendation Engine using Heap** and an **LRU Cache** for optimization.

---

## Features

- Top-K product recommendations using **Max Heap**
- Recommendation score based on product ratings
- LRU cache for recently viewed products
- C++ recommendation engine integrated with Node.js
- React frontend with modern e-commerce UI
- Recently viewed products panel
- Clickable recommendations that scroll and highlight products
- Product images support

---

## Tech Stack

### Frontend
- React (Vite)
- JavaScript
- CSS (inline styling)

### Backend
- Node.js
- Express.js
- C++

### Data Structures Used
- Heap (Priority Queue)
- Hash Map
- Doubly Linked List

---

## Recommendation Logic

Each product is ranked using the following formula:
score = avgRating × log(numRatings + 1)

### Workflow

Steps:
1. Products are loaded from `products.json`
2. A max heap is built using the score
3. Top-K products are extracted
4. C++ returns `{ id, score }`
5. Node.js enriches results with full product details

---

## Project Structure

ecommerce-recommender/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   │   ├── products.js
│   │   └── recommendations.js
│   ├── services/
│   │   └── cppRunner.js
│   ├── cpp/
│   │   └── recommend.cpp
│   └── data/
│       └── products.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── services/
│   └── public/
│       └── images/
│
└── README.md


---

## Time & Space Complexity

### Recommendation Engine
- Heap construction: **O(N)**
- Extract Top-K: **O(K log N)**
- Space: **O(N)**

### LRU Cache
- Get operation: **O(1)**
- Put operation: **O(1)**
- Space: **O(capacity)**

---


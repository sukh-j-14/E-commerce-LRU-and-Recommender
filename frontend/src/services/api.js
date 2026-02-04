const BASE_URL = "https://e-commerce-lru-and-recommender.onrender.com";

export async function fetchProducts() {
  const res = await fetch(`${BASE_URL}/products`);
  return res.json();
}

export async function fetchRecommendations(k = 5) {
  const res = await fetch(`${BASE_URL}/recommendations?k=${k}`);
  return res.json();
}

export async function fetchRecentlyViewed() {
  const res = await fetch(`${BASE_URL}/recently-viewed`);
  return res.json();
}

export async function fetchProductById(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return res.json();
}

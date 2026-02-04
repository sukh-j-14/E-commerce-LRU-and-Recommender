#include <bits/stdc++.h>
#include "lib/json.hpp"

using namespace std;
using json = nlohmann::json;

// ---------------- PRODUCT ----------------
struct Product {
    int id;
    string name;
    double price;
    double avgRating;
    int numRatings;

    double score() const {
        return avgRating * log(numRatings + 1);
    }
};

// ------------- COMPARATOR FOR HEAP -------------
struct CompareProduct {
    bool operator()(const Product& a, const Product& b) {
        return a.score() < b.score(); // max heap
    }
};

// ------------- LOAD PRODUCTS FROM JSON -------------
vector<Product> loadProducts(const string& filePath) {
    vector<Product> products;

    ifstream file(filePath);
    if (!file.is_open()) {
        cerr << "Failed to open products.json\n";
        return products;
    }

    json data;
    file >> data;

    for (auto& item : data) {
        Product p;
        p.id = item["id"];
        p.name = item["name"];
        p.price = item["price"];
        p.avgRating = item["avgRating"];
        p.numRatings = item["numRatings"];

        products.push_back(p);
    }

    return products;
}

// ------------- MAIN ----------------
int main(int argc, char* argv[]) {

    if (argc < 2) {
        cout << "[]";
        return 0;
    }

    int k = stoi(argv[1]);

    // 🔥 Load from JSON dynamically
    vector<Product> products = loadProducts("data/products.json");

    priority_queue<Product, vector<Product>, CompareProduct> maxHeap;

    for (auto &p : products) {
        maxHeap.push(p);
    }

    vector<Product> result;

    for (int i = 0; i < k && !maxHeap.empty(); i++) {
        result.push_back(maxHeap.top());
        maxHeap.pop();
    }

    // ---------- PRINT JSON ----------
    // ---------- PRINT JSON (ONLY ID + SCORE) ----------
    cout << "[";
    for (int i = 0; i < result.size(); i++) {
        cout << "{";
        cout << "\"id\":" << result[i].id << ",";
        cout << "\"score\":" << result[i].score();
        cout << "}";
        if (i != result.size() - 1) cout << ",";
    }
    cout << "]";


    return 0;
}

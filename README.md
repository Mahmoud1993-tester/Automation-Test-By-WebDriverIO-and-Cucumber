# 🛒 Automation Project With WebDriverIO and Cucumber framework in JavaScript 

This project automates the main feature of an e-commerce platform using **WebDriverIO** and the **Cucumber BDD framework** with **JavaScript**.

---

## 💡 Overview

- ✅ Built with WebDriverIO + CucumberJS
- ✅ Page Object Model (POM) design
- ✅ Covers both **valid** and **invalid** product search scenarios
- ✅ Runs in **headless mode** by default for faster execution

## 🛠️ Tech Stack

| Tool         | Description                              |
|--------------|------------------------------------------|
| WebDriverIO  | Test automation framework                |
| Cucumber.js  | BDD test framework (Given/When/Then)     |
| Chai         | Assertion library                        |
| Node.js      | JavaScript runtime                       |


## 🧪 Test Scenario Covered

**Feature:** Product Search  
_As a user, I want to search for products from the homepage so that I can find items I’m interested in.

**Feature:** Add Product to Cart 
_As a user , I want to add products to my cart easily without any problems.

**Feature:** Apply coupon code
_As a user , I want to add cupon code so that the website decrease my product cost.

**Feature:** Change quantity or remove from cart
_As a user , I want to change or remove product from cart easily.

## 🚀 How to Run the Project



1️⃣ **Clone the Repo**
git clone https://github.com/Mahmoud1993-tester/Automation-Test-By-WebDriverIO-and-Cucumber.git
git push -u origin main


2️⃣ **Install Dependencies**
npm install
               
3️⃣ **Run Tests**
npx wdio run wdio.conf.js


🧱 **Project Structure**
.
project-root/
│
├── features/
│   ├── step-definitions/
│   └── *.feature
│   └── pageobjects/
│       └── HomePage.js, ProductPage.js ...
│
├── node_modules
│
├── wdio.conf.js
├── README.md

👤 **Author**
**Mahmoud Saber**
**Junior Software Test Engineer**
Passionate about automation, quality assurance, and building clean test architecture.

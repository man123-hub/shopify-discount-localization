# shopify-discount-localization

# Shopify Automatic Discount and Content Localization

## Overview

This Shopify theme extension implements an automatic discount system and content localization based on the customer's country. The system applies discounts before checkout and dynamically switches product content such as descriptions and images, providing a personalized shopping experience.

## Setup Instructions

## 1. Automatic Discount System

1. **Add the `automatic-discount.liquid` Snippet:**
   - Navigate to your Shopify theme's `snippets` directory.
   - Create a new file named `automatic-discount.liquid`.
   - Paste the following code into `automatic-discount.liquid`:
     ```liquid
     {% assign discount_percentage = 10 %}
     {% if customer.country == 'United States' %}
       {% assign discount_percentage = 15 %}
     {% elsif customer.country == 'Canada' %}
       {% assign discount_percentage = 12 %}
     {% endif %}
     <!-- Apply discount logic here -->
     ```
   - Customize the discount percentages as needed.

2. **Update the `product.liquid` Template:**
   - Open the `product.liquid` file in your theme's main directory.
   - Add the following line to include the `automatic-discount` snippet:
     ```liquid
     {% render 'automatic-discount' %}
     ```
   - This will apply the discount logic on the product page.

### 2. Content Localization

1. **Add the `localized-content.liquid` Snippet:**
   - In the `snippets` directory, create a new file named `localized-content.liquid`.
   - Add code to dynamically load content based on the customer's country:
     ```liquid
     {% if customer.country == 'United States' %}
       {{ product.metafields.custom.us_description }}
     {% elsif customer.country == 'Canada' %}
       {{ product.metafields.custom.ca_description }}
     {% endif %}
     <!-- Add logic for images or other content as needed -->
     ```

2. **Update the `product.liquid` Template:**
 - Add the `localized-content.liquid` snippet to your `snippets` directory.
   - Update the `product.liquid` file to include the `localized-content` snippet.
   - Ensure that the country-specific metafields (e.g., `us_description`, `ca_description`) are added to your products.

### 3. JavaScript for Real-Time Discounts

1. **Add the `discount.js` Script:**
   - Upload the `discount.js` file to your theme's `assets` directory.
   - This script will manage real-time discount updates on the product page.

2. **Load the Script in `product.liquid`:**
   - In the `product.liquid` file, include the script with this line:
     ```liquid
     <script src="{{ 'discount.js' | asset_url }}" defer></script>
     ```

### 4. Admin Configuration

1. **Country-Specific Metafields:**
   - In your Shopify Admin, go to **Settings > Metafields**.
   - Create metafields such as `us_description`, `us_image`, etc., for each country.
   - Populate these metafields with the content you want to display for different countries.

2. **Discount Configuration:**
   - Open the `automatic-discount.liquid` snippet.
   - Modify the discount percentages for each country in the logic provided.
   - Example:
     ```liquid
     {% assign discount_percentage = 10 %}
     {% if customer.country == 'United States' %}
       {% assign discount_percentage = 15 %}
     {% endif %}
     ```

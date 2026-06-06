import csv
import requests
from bs4 import BeautifulSoup
import time

# შევქმნათ Excel (CSV) ფაილი და ჩავწეროთ სათაურები
with open("books_data.csv", mode="w", newline="", encoding="utf-8") as file:
    writer = csv.writer(file)
    writer.writerow(["Book Title", "Price"])
    
    # ციკლი, რომელიც გადავა 1-დან 5 გვერდამდე (შეგიძლიათ შეცვალოთ 50-მდე)
    for page in range(1, 6):
        # დინამიური ბმული, სადაც გვერდის ნომერი ავტომატურად იცვლება
        URL = f"http://books.toscrape.com/catalogue/page-{page}.html"
        
        response = requests.get(URL)
        soup = BeautifulSoup(response.text, "html.parser")
        books = soup.find_all("article", class_="product_pod")
        
        for book in books:
            title = book.h3.a["title"]
            price = book.find("p", class_="price_color").text
            writer.writerow([title, price])
        
        print(f"გვერდი {page} წარმატებით დამუშავდა.")
        time.sleep(1) # 1 წამიანი პაუზა, რომ საიტმა ბოტად არ ჩაგვთვალოს და არ დაგვბლოკოს

print("სრული სამუშაო დასრულებულია! ყველა გვერდის მონაცემები შენახულია.")
import os
from flask import Flask, render_template

app = Flask(__name__)

IMG_DIR = os.path.join(app.static_folder, "img")

@app.route("/")
def home():
    images = sorted(f for f in os.listdir(IMG_DIR) if f.lower().endswith((".jpg", ".jpeg", ".png", ".webp")))
    return render_template("index.html", images=images)

if __name__ == "__main__":
    app.run(debug=True)

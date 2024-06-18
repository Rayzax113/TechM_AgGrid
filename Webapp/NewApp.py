from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")  # You can return the rendered HTML template here

if __name__ == '__main__':
    app.run(debug=True)

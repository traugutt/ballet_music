from flask import Flask, render_template, send_file

app = Flask(__name__)


@app.route('/001-poklon-razogrev.mp3')
def track():
    return send_file('./static/audio/001-poklon-razogrev.mp3', attachment_filename='001-poklon-razogrev.mp3')

@app.route("/")
def hello_world(name=None):
    return render_template('home.html', name=name)

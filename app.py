from flask import Flask,render_template,jsonify,request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")
@app.route("/about")
def about():
    return render_template("about.html")
@app.route("/courses")
def courses():
    return render_template("courses.html")
@app.route("/trainer")
def trainer():
    return render_template("trainer.html")  
@app.route("/contact")
def contact():
    return render_template("contact.html")  
@app.route("/register",methods=["post","get"])
def register():
    if request.method=="post":
        name=request.form["name"]
        email=request.form["email"] 
        password=request.form["password"]
        dob=request.form["dob"]
        gender=request.form["gender"]
        courses=request.form["courses"]
        return render_template("register.html")            


if __name__ == '__main__':
    app.run(debug=True)
from flask import Flask, request, jsonify
from flask_cors import CORS
import APIs as apis


app = Flask(__name__)
CORS(app)

# The specific email to verify
TARGET_EMAIL = 'email@gmail.com'

@app.route('/verify-email', methods=['POST'])
def verify_email():
    data = request.json
    email = data.get('email')

    if not email:
        return jsonify({"error": "Email is required"}), 400
    if email == TARGET_EMAIL:
        return jsonify({"status": "valid"})
    else:
        return jsonify({"status": "invalid"})


#Get current temperature
@app.route('/get-temp', methods=['GET'])
def get_temp():
    temp = apis.getTemp()
    return jsonify({"number": temp})


#Set temperature
@app.route('/set-temp', methods=['POST'])
def set_temp():
    data = request.json
    temp = data.get('number')
    if temp is not None:
        apis.setTemp(temp)
        return jsonify({"status": "success", "submitted_number": temp}), 200
    else:
        return jsonify({"error": "No number provided"}), 400


if __name__ == '__main__':
    app.run(debug=True)

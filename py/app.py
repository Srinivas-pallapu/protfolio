from flask import Flask, jsonify
import subprocess

app = Flask(__name__)

@app.route('/run_svm', methods=['GET'])
def run_svm():
    try:
        result = subprocess.check_output(['python', 'C:\Users\mrsri\Desktop\one\py\8svm.py'], text=True)
        return jsonify({"output": result})
    except subprocess.CalledProcessError as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)

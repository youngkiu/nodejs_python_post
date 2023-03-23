from flask import Flask, render_template, request, Response, redirect

app = Flask(__name__)


@app.route('/')
def get_input():
    return render_template('index.html', title='Title')


@app.route('/build', methods=['POST'])
def post_build():
    req_data = request.form.to_dict()
    print(req_data)
    return Response(status=200)  # redirect('/')


if __name__ == '__main__':
    app.run()

<head>
  <meata charset="utf-8">
  <style media="screen">
    body{
      padding: 0px;
      margin: 0px;
    }
    a{
      text-decoration: none;
      color: #000000;
    }
    .header{
      background-color: #000000;
      border-bottom: 1px solid gray;
      padding-top: 5px;
      padding-bottom: 15px;
    }
    .head-title{
      font-size: 40px;
      color: #FE6949;
      fond-weight: bold;
      padding-top: 30px;
      padding-left: 15px;
    }
    .body{
      margin-top: 20px;
      text-align: center;
    }
  </style>
</head>
<body>
  <nav class="header">
    <a href="main.html" class="head-title">Download</a>
  </nav>

  <div class="body">
    파일 주소 :  <input type="text" id="input_Youtrl" width="30"><br><br>
    파일 이름 :  <input type="text" id="input_FileName" width="30"><br><br>
    <button class="but_Convert" onclick="sendURL()">보내기</button>
  </div>

  <script type="text/javascript">
    function sendURL(){
      var url = document.getElementById("input_Youtrl").value;
      var fileName = document.getElementById("input_FileName").value;
      var testUrl = 'http://localhost:4000/'
      var downUrl = 'https://jaemp3down.herokuapp.com/'
      window.location.href = downUrl + `download?url=${url}&fileName=${fileName}`;
    }
  </script>
</body>

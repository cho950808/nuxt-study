const db = require("../../../config/mysql"); //db설정 호출
const conn = db.init(); //db 연결

exports.list = (req, res) => {
  //리스트 모듈 router 에서 호출
  conn.query("select * from tb_board", (err, row) => {
    //쿼리 실행
    if (err) throw err;
    res.send({ success: true, data: row });
  });
};

exports.add = (req, res) => {
  body = req.body; //전송된 데이터를 받는다.
  sql =
    " INSERT INTO  tb_board (board_code, subject, cont, id, regdate) values (?, ?, ?, ?,now()) ";
  conn.query(
    sql,
    [body.board_code, body.subject, body.cont, body.id],
    (err, result) => {
      if (err) throw err;

      res.send({ success: true });
    }
  );
};

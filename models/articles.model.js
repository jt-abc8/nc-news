const db = require("../db/connection");

exports.selectArticleByID = (article_id) => {
    return db
        .query("SELECT * FROM articles WHERE article_id = $1", [article_id])
        .then(({ rows }) => {
            return rows.length > 0
                ? rows[0]
                : Promise.reject({ status: 404, msg: "404 Not Found" });
        });
};
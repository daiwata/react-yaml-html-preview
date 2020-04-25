function obj2html(obj) {
    let body = `<div class="doc-struct"><table>`;
    body += convert(obj)
    body += `</table></div>`
    return body
}
exports.obj2html = obj2html;

function convert(item, body = "") {

    // 文字列の場合は何もしない
    if (isString(item)) {
        return body;
    }

    // 配列の場合
    if (item instanceof Array) {
        let itemVal = item[0];
        // 値がオブジェクトの場合
        if (itemVal instanceof Object) {
            body = createlistTable(item, body);
        }
        else {
            // 値が文字列要素の場合
            body += `<ul>`
            for (let idx in item) {
                body += `<li>${item[idx]}</li>`.replace(/\r?\n/g, "<br>");
            }
            body += `</ul>`
        }
    } else {
        for (let itemKey in item) {
            let itemVal = item[itemKey];
            // 値がオブジェクト・配列の場合
            if (itemVal instanceof Object || itemVal instanceof Array) {
                body += `<tr><th>${itemKey}</th><td><table>`;
                body = convert(itemVal, body);
                body += `</table></td></tr>`;
            }
            else {
                // 値が文字列要素の場合
                body += `<tr><th>${itemKey}</th>`;
                body += `<td>${itemVal}</td></tr>`.replace("\n", "<br>");
            }
        }
    }
    return body;
}
exports.convert = convert;

// Hash の List については一覧表を作る
function createlistTable(item, body) {

    // 重複しないキーのリストを作成
    var childKeyList = [];
    for (let idx in item) {
        let itemVal = item[idx];
        if (isString(itemVal)) {
            break;
        }
        let child = itemVal;
        for (let childKey in child) {
            if (childKeyList.indexOf(childKey) === -1) {
                childKeyList.push(childKey);
            }
        }
    }

    body += `<tr>`;

    // テーブルヘッダ部
    for (let idx in childKeyList) {
        body += `<th>${childKeyList[idx]}</th>`;
    }
    body += "</tr>";

    // テーブルデータ部
    for (let idx in item) {
        let childHash = item[idx];
        body += "<tr>";
        for (let idx in childKeyList) {
            let childVal = childHash[childKeyList[idx]];
            body += "<td>"
            // 子階層がオブジェクトの場合は再帰呼び出し
            if (childVal instanceof Object) {
                body += `<table>`;
                body = convert(childVal, body);
                body += `</table>`;
            }
            // 子階層がArrayの場合は再帰呼び出し
            else if (childVal instanceof Object) {
                body += `<table>`;
                body = createlistTable(childVal, body);
                body += `</table>`;
            }
            else {
                body += `${childVal}`;
            }
            body += "</td>"
        }
        body += `</tr>`;
    }
    return body;
}
exports.createlistTable = createlistTable;

function isString(obj) {
    return typeof (obj) == "string" || obj instanceof String;
};
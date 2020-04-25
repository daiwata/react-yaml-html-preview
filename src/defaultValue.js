
export const defaultValue = {
    題名: "XX情報",
    内容: [
        {
            項目名: "ID",
            備考: [
                "半角英数字と\n _（アンダーバー）のみ",
                "～～～"]
        },
        {
            項目名: "項目A",
            備考: '<a href="//google.com" target="_blank">Google</a>'
        },
        {
            項目名: "項目B",
            備考: [
                {
                    "item1": "value1-1",
                    "item2": "value2-1",
                },
                {
                    "item1": "value1-2",
                    "item2": "value2-2",
                }
            ]
        },
        {
            項目名: "項目C",
            備考:
            {
                アイテム1: "値1",
                アイテム2: [
                    {
                        "title1": "aaa",
                        "title2": "bbb",
                    },
                    {
                        "title1":
                            [
                                "～～",
                                "～～"
                            ],
                        "title2": "ccc",
                    }
                ]
            }
        },
    ]
}
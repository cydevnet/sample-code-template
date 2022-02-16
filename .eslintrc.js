module.exports = {
  // --------------------------------
  // 呼び出したいルール（パッケージ）
  // --------------------------------
  // ES5 & kintone の場合
  // extends: ["./es5.js"],

  // ES6以上 & kintone の場合
  // extends: ["./es6.js"],
  // アロー関数を許可しない場合は、以下のコメントを外す
  // rules: {
  //   'prefer-arrow-callback': ['off']
  // },

  // node & kintone の場合
  // extends: ["@cybozu/eslint-config/presets/node", "@cybozu/eslint-config/globals/kintone"],

  // --------------------------------
  // グローバル変数の定義
  // --------------------------------
  globals: {
    garoon: "readonly"
  },

  // --------------------------------
  //  ルール
  // --------------------------------
  rules: {
  //   quotes: ["error", "single"]
  }
};

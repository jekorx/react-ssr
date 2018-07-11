# react-ssr
react-ssr（react 16 + react-router4 + mobx）

### EsLint with Aribnb rules
```js
"rules": {
  // EsLint
  // 方法名、括号、头函数 前后必须包含一个空格
  "space-before-function-paren": [
    "error",
    "always"
  ],
  // Airbnb
  // 结尾分号，关闭
  "semi": "off",
  // {} 最后一个加逗号，关闭
  "comma-dangle": 0,
  // 非require的propTypes必须制定默认值，关闭
  "react/require-default-props": 0
  // 只能在.jsx文件中写jsx代码，关闭
  "react/jsx-filename-extension": 0,
  // JSX中每行限制一个表达式，关闭
  "react/jsx-one-expression-per-line": 0,
  // 规则强制在组件中一致使用解构赋值，关闭
  "react/destructuring-assignment": 0,
  // 强制无状态React组件作为纯函数写入，关闭
  "react/prefer-stateless-function": 0,
  // "react/jsx-uses-react": "error", // 防止React被错误地标记为未使用
  // "react/jsx-uses-vars": "error", // 防止在JSX中使用的变量被错误地标记为未使用
  // "react/no-danger":"error", // 防止在jsx中使用危险的属性
  // "react/no-deprecated":"error", // 防止使用废弃的方法
  // "react/no-did-mount-set-state":"error", // 防止在didmount时setState
  // "react/no-did-update-set-state":"error", // 防止在didupdate时setState
  // "react/no-multi-comp":"error", // 防止一个文件内定义多个组件
  // "react/prefer-stateless-function":"error", // 强制无状态React组件作为纯函数写入
  // "react/react-in-jsx-scope":"error", // 使用JSX时防止丢失React
  // "react/require-render-return":"error", // 强制ES5或ES6类在render函数中返回值
  // "react/sort-comp":"error", // 强制组件方法排序，
  // "react/void-dom-elements-no-children":"error", // 闭合标签不能接受子元素
  // "react/jsx-closing-bracket-location":"error", // 在JSX中验证关闭括号位置（可修复）
  // "react/jsx-curly-spacing":["error","never"], // 禁止在花括号前后使用空格
  // "react/jsx-equals-spacing":["error","always"], // 等号前后必须要空格
}
```

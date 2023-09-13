module.exports = {
	// 一行最多多少個字
	printWidth: 80,
	// 指定每個縮排級別的空格數
	tabWidth: 2,
	// 使用制表符而不是空格缩进行
	useTabs: true,
	// 在語末句尾是否加上分號
	semi: true,
	// 是否使用單引號
	singleQuote: true,
	// 更改引用對象屬性的時間 可選值"<as-needed|consistent|preserve>"
	quoteProps: 'as-needed',
	// 多行時盡可能打印尾隨逗號。（例如，單行數組永遠不會出現逗號结尾。） 可選值"<none|es5|all>"，默認 none
	trailingComma: 'es5',
	// 在對象文字中的括號之間打印空格
	bracketSpacing: true,
	// 在單獨的箭頭函數參數周圍包括括号 always：(x) => x \ avoid：x => x
	arrowParens: 'always',
	// 這兩個選項可用於格式化以给定字符偏移量（分别包括和不包括）開始何結束的代碼
	rangeStart: 0,
	rangeEnd: Infinity,
	// 指定要使用的解析器，不需要寫文件開頭的 @prettier
	requirePragma: false,
	// 不需要自動在文件開頭插入 @prettier
	insertPragma: false,
	// 使用默認的折行標準 always\never\preserve
	proseWrap: 'preserve',
	// 指定 HTML 文件的全局空格敏感度 css\strict\ignore
	htmlWhitespaceSensitivity: 'css',
	// Vue文件腳本和樣式標籤縮進
	vueIndentScriptAndStyle: false,
	//在 windows 操作系统中換行符通常是回車 (CR) 加換行分隔符 (LF)，也就是回車換行(CRLF)，
	//然而在 Linux 和 Unix 中只使用簡單的換行分隔符 (LF)。
	//對應的控制字符為 "\n" (LF) 和 "\r\n"(CRLF)。auto 意為保持現有的行尾
	//換行符使用 lf 结尾是 可選值"<auto|lf|crlf|cr>"
	endOfLine: 'auto',
	plugins: ['prettier-plugin-tailwindcss'],
};

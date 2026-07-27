export type CodeTokenType = "comment" | "string" | "number" | "keyword" | "type" | "plain";

export interface CodeToken {
  text: string;
  type: CodeTokenType;
}

const KEYWORDS = new Set([
  "const", "let", "var", "function", "class", "interface", "extends", "implements",
  "new", "return", "if", "else", "for", "while", "this", "import", "export", "from",
  "default", "private", "public", "readonly", "protected", "abstract", "type", "void",
  "async", "await", "static", "get", "set", "as", "in", "of", "try", "catch", "throw",
  "instanceof", "switch", "case", "break", "continue", "typeof",
]);

const TOKEN_REGEX =
  /(\/\/[^\n]*)|(\/\*[\s\S]*?\*\/)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)|(\b\d+(?:\.\d+)?\b)|([A-Za-z_$][A-Za-z0-9_$]*)/g;

export function tokenizeCode(code: string): CodeToken[] {
  const tokens: CodeToken[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  TOKEN_REGEX.lastIndex = 0;
  while ((match = TOKEN_REGEX.exec(code)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ text: code.slice(lastIndex, match.index), type: "plain" });
    }

    const [full, comment, blockComment, str, num, word] = match;
    if (comment || blockComment) {
      tokens.push({ text: full, type: "comment" });
    } else if (str) {
      tokens.push({ text: full, type: "string" });
    } else if (num) {
      tokens.push({ text: full, type: "number" });
    } else if (word) {
      if (KEYWORDS.has(word)) {
        tokens.push({ text: full, type: "keyword" });
      } else if (/^[A-Z]/.test(word)) {
        tokens.push({ text: full, type: "type" });
      } else {
        tokens.push({ text: full, type: "plain" });
      }
    }

    lastIndex = match.index + full.length;
  }

  if (lastIndex < code.length) {
    tokens.push({ text: code.slice(lastIndex), type: "plain" });
  }

  return tokens;
}

export function tokenizeLines(code: string): CodeToken[][] {
  const tokens = tokenizeCode(code);
  const lines: CodeToken[][] = [[]];

  for (const token of tokens) {
    const parts = token.text.split("\n");
    parts.forEach((part, idx) => {
      if (idx > 0) lines.push([]);
      if (part.length > 0) lines[lines.length - 1].push({ text: part, type: token.type });
    });
  }

  return lines;
}

export const CODE_TOKEN_CLASSES: Record<CodeTokenType, string> = {
  comment: "text-white/40 italic",
  string: "text-emerald-300",
  number: "text-cyan-300",
  keyword: "text-lime-300",
  type: "text-cyan-200",
  plain: "text-white/85",
};

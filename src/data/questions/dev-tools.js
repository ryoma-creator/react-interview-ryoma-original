// src/data/questions/dev-tools.js
export const devToolsQuestions = [
    {
      id: 'code-syntax-highlighting',
      category: 'dev-tools-libraries',
      titleEn: 'How can you add color highlighting to code in a React application?',
      titleJa: 'Reactアプリでコードに色をつけて見やすくするにはどうすればいいですか？',
      answerEn: 'Use libraries like prism-react-renderer or react-syntax-highlighter. They automatically color different parts of your code (like keywords, strings, and variables) to make it more readable. Just import the component and pass your code as a prop.',
      answerJa: 'prism-react-rendererやreact-syntax-highlighterというライブラリを使います。これらは自動的にコードの各部分（キーワード、文字列、変数など）に色をつけて読みやすくします。コンポーネントをインポートして、コードを渡すだけで使えます。',
      codeExample: {
        en: `// 1. Install the library
  npm install prism-react-renderer
  
  // 2. Create a component (src/components/CodeBlock.js)
  import { Highlight, themes } from 'prism-react-renderer';
  
  export default function CodeBlock({ code, language = 'javascript' }) {
    return (
      <Highlight theme={themes.vsDark} code={code} language={language}>
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre style={{ ...style, padding: '1rem', borderRadius: '0.5rem' }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    );
  }
  
  // 3. Use it anywhere - that's it!
  import CodeBlock from '@/components/CodeBlock';
  
  function MyComponent() {
    return (
      <CodeBlock 
        code="const hello = 'world';" 
        language="javascript" 
      />
    );
  }`,
        ja: `// 1. ライブラリをインストール
  npm install prism-react-renderer
  
  // 2. コンポーネントを作成 (src/components/CodeBlock.js)
  import { Highlight, themes } from 'prism-react-renderer';
  
  export default function CodeBlock({ code, language = 'javascript' }) {
    return (
      <Highlight theme={themes.vsDark} code={code} language={language}>
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre style={{ ...style, padding: '1rem', borderRadius: '0.5rem' }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    );
  }
  
  // 3. どこでも使える - これだけでOK!
  import CodeBlock from '@/components/CodeBlock';
  
  function MyComponent() {
    return (
      <CodeBlock 
        code="const hello = 'world';" 
        language="javascript" 
      />
    );
  }`
      },
      references: [
        'https://github.com/FormidableLabs/prism-react-renderer'
      ]
    }
  ];
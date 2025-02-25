// src/components/CodeBlock.js
'use client';

import { Highlight, themes } from 'prism-react-renderer';

export default function CodeBlock({ code, language = 'javascript' }) {
  return (
    <Highlight
      theme={themes.vsDark}
      code={code}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className="rounded-lg overflow-auto p-4" style={{ ...style, backgroundColor: '#1e1e1e' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
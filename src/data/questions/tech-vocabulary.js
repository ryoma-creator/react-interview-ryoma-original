export const techVocabularyQuestions = [
    {
      id: 'term-state',
      category: 'tech-vocabulary',
      titleEn: 'State',
      titleJa: 'ステート',
      answerEn: 'In React, state is a JavaScript object that stores component data that might change over time. When state is updated, the component re-renders.\n\nExample phrase: "The component uses state to track user input."',
      answerJa: 'Reactでは、stateはコンポーネントの変更可能なデータを格納するJavaScriptオブジェクトです。stateが更新されると、コンポーネントは再レンダリングされます。\n\n例文: "そのコンポーネントはユーザー入力を追跡するためにstateを使用しています。"',
      codeExample: {
        en: `const [count, setCount] = useState(0);
        
  // Updating state
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };`,
        ja: `const [count, setCount] = useState(0);
        
  // stateの更新
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };`
      }
    },
    // Add more terms here
// In your tech-vocabulary questions
{
    id: 'term-useeffect',
    category: 'tech-vocabulary',
    titleEn: 'useEffect',
    titleJa: 'useEffect',
    answerEn: 'A React Hook that lets you synchronize a component with an external system. Used for side effects like data fetching, subscriptions, or manually changing the DOM.',
    answerJa: 'Reactコンポーネントを外部システムと同期させるためのHookです。データ取得、サブスクリプション、またはDOMの手動変更などの副作用に使用されます。',
    codeExample: {
      en: `useEffect(() => {
    // This runs after every render
    document.title = \`Count: \${count}\`;
    
    return () => {
      // Cleanup function runs before next effect
      console.log('Cleaning up');
    };
  }, [count]); // Only re-run if count changes`,
      ja: `useEffect(() => {
    // これはレンダー後に毎回実行されます
    document.title = \`カウント: \${count}\`;
    
    return () => {
      // クリーンアップ関数は次のエフェクト前に実行されます
      console.log('クリーンアップ中');
    };
  }, [count]); // countが変更された時だけ再実行`
    },
    interviewPhrases: {
      en: [
        "In my component, I used useEffect to fetch data when the component mounts.",
        "The dependency array controls when the effect runs again.",
        "I added a cleanup function to prevent memory leaks in my useEffect.",
        "The empty dependency array means the effect runs only once after mounting."
      ],
      ja: [
        "コンポーネントでは、マウント時にデータを取得するためにuseEffectを使用しました。",
        "依存配列はエフェクトが再実行されるタイミングを制御します。",
        "useEffectにクリーンアップ関数を追加してメモリリークを防止しました。",
        "空の依存配列は、マウント後に一度だけエフェクトが実行されることを意味します。"
      ]
    }
  },
  {
    id: 'term-jsx',
    category: 'tech-vocabulary',
    titleEn: 'JSX',
    titleJa: 'JSX',
    answerEn: 'JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML. It allows you to write HTML-like code in your JavaScript files, making it easier to describe what the UI should look like.\n\nExample in interview: "I use JSX to define the component structure in a more readable way."',
    answerJa: 'JSX（JavaScript XML）はHTMLに似たJavaScriptの構文拡張です。JavaScriptファイルにHTML風のコードを書くことができ、UIがどのように見えるべきかを簡単に記述できます。\n\n面接での例: "私はコンポーネント構造をより読みやすく定義するためにJSXを使用しています。"',
    codeExample: {
      en: `// JSX syntax
const element = <h1>Hello, world!</h1>;

// Compared to without JSX
const element = React.createElement(
  'h1',
  null,
  'Hello, world!'
);`,
      ja: `// JSX構文
const element = <h1>こんにちは、世界！</h1>;

// JSXを使わない場合との比較
const element = React.createElement(
  'h1',
  null,
  'こんにちは、世界！'
);`
    }
  },    
  ];
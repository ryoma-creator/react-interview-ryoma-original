// src/data/questions.js

// 技術グループ
export const techGroups = [
    { id: 'javascript', nameEn: 'JavaScript', nameJa: 'JavaScript' },
    { id: 'react', nameEn: 'React', nameJa: 'React' },
    { id: 'nextjs', nameEn: 'Next.js', nameJa: 'Next.js' }
  ];
  
  // カテゴリー（技術グループに属する）
  export const categories = [
    { id: 'js-basics', techGroup: 'javascript', nameEn: 'JavaScript Basics', nameJa: 'JavaScript基礎' },
    { id: 'js-advanced', techGroup: 'javascript', nameEn: 'JavaScript Advanced', nameJa: 'JavaScript応用' },
    
    { id: 'react-basic-concepts', techGroup: 'react', nameEn: 'Basic Concepts', nameJa: '基本概念' },
    { id: 'react-state-management', techGroup: 'react', nameEn: 'State Management', nameJa: '状態管理' },
    { id: 'react-lifecycle', techGroup: 'react', nameEn: 'Component Lifecycle', nameJa: 'コンポーネントライフサイクル' },
    { id: 'react-hooks', techGroup: 'react', nameEn: 'Hooks', nameJa: 'フック' },
    { id: 'react-performance', techGroup: 'react', nameEn: 'Performance Optimization', nameJa: 'パフォーマンス最適化' },
    
    { id: 'nextjs-basics', techGroup: 'nextjs', nameEn: 'Next.js Basics', nameJa: 'Next.js基礎' },
    { id: 'nextjs-routing', techGroup: 'nextjs', nameEn: 'Routing', nameJa: 'ルーティング' },
    { id: 'nextjs-data-fetching', techGroup: 'nextjs', nameEn: 'Data Fetching', nameJa: 'データ取得' },
  ];
  
  // src/data/questions.js - 一部抜粋
export const questions = [
    {
      id: 'js-object-array',
      category: 'js-basics',
      titleEn: 'How do you access JavaScript objects and arrays?',
      titleJa: 'JavaScriptのオブジェクトと配列へのアクセス方法の違いは？',
      basicAnswerEn: 'Objects use key-value pairs, accessed with dot notation (object.key) or bracket notation (object["key"]). Arrays are ordered lists accessed by index (array[0]).',
      basicAnswerJa: 'オブジェクトはキーと値のペアで、ドット記法（object.key）かブラケット記法（object["key"]）でアクセスします。配列は順序付きリストで、インデックス（array[0]）を使ってアクセスします。',
      detailedAnswerEn: '...',
      detailedAnswerJa: '...',
      // 例示コードを追加
      codeExample: {
        en: `// Object access examples
  const person = { name: "John", age: 30 };
  console.log(person.name);    // Output: "John" (dot notation)
  console.log(person["name"]); // Output: "John" (bracket notation)
  
  // Advantages of bracket notation:
  const key = "name";
  console.log(person[key]);    // Output: "John" (using variable)
  
  // Array access examples
  const colors = ["red", "green", "blue"];
  console.log(colors[0]);      // Output: "red"
  console.log(colors[1]);      // Output: "green"
  
  // Combining objects and arrays
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ];
  console.log(users[0].name);  // Output: "Alice"`,
        ja: `// オブジェクトアクセスの例
  const person = { name: "John", age: 30 };
  console.log(person.name);    // 出力: "John" (ドット記法)
  console.log(person["name"]); // 出力: "John" (ブラケット記法)
  
  // ブラケット記法の利点:
  const key = "name";
  console.log(person[key]);    // 出力: "John" (変数を使用)
  
  // 配列アクセスの例
  const colors = ["red", "green", "blue"];
  console.log(colors[0]);      // 出力: "red"
  console.log(colors[1]);      // 出力: "green"
  
  // オブジェクトと配列の組み合わせ
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ];
  console.log(users[0].name);  // 出力: "Alice"`
      },
      references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array'],
    },
    // 他の質問も同様に...
  ];
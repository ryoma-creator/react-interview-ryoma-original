export const javascriptQuestions = [
    {
      id: 'js-object-array',
      category: 'js-basics',
      titleEn: 'How do you access JavaScript objects and arrays?',
      titleJa: 'JavaScriptのオブジェクトと配列へのアクセス方法の違いは？',
      answerEn: 'Objects use key-value pairs, accessed with dot notation (object.key) or bracket notation (object["key"]). Arrays are ordered lists accessed by index (array[0]).',
      answerJa: 'オブジェクトはキーと値のペアで、ドット記法（object.key）かブラケット記法（object["key"]）でアクセスします。配列は順序付きリストで、インデックス（array[0]）を使ってアクセスします。',
      codeExample: {
        en: `/* Objects */
  const person = { name: "John", age: 30 };
  console.log(person.name);    // "John" (dot notation)
  console.log(person["name"]); // "John" (bracket notation)
  
  /* Using variables with objects */
  const key = "name";
  console.log(person[key]);    // "John" (using variable)
  
  /* Arrays */
  const colors = ["red", "green", "blue"];
  console.log(colors[0]);      // "red"
  console.log(colors[1]);      // "green"`,
        ja: `/* オブジェクト */
  const person = { name: "John", age: 30 };
  console.log(person.name);    // "John" (ドット記法)
  console.log(person["name"]); // "John" (ブラケット記法)
  
  /* 変数を使ったアクセス */
  const key = "name";
  console.log(person[key]);    // "John" (変数を使用)
  
  /* 配列 */
  const colors = ["red", "green", "blue"];
  console.log(colors[0]);      // "red"
  console.log(colors[1]);      // "green"`
      },
      references: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array'],
    },
    {
      id: 'js-dynamic-object-keys',
      category: 'js-advanced',
      titleEn: 'What are Computed Property Names in JavaScript?',
      titleJa: 'JavaScriptの動的オブジェクトキーとは何か？',
      answerEn: 'Computed Property Names allow you to use expressions or variables as object keys, enabling dynamic key creation.',
      answerJa: '動的オブジェクトキーは、式や変数をオブジェクトのキーとして使用し、動的なキー生成を可能にする機能です。',
      codeExample: {
        en: `/* Basic Computed Property Name */
  const key = 'username';
  const user = {
    [key]: 'JohnDoe'  // { username: 'JohnDoe' }
  };
  
  /* Dynamic Key Generation */
  function createUserObject(role) {
    return {
      [\`\${role}Role\`]: true
    };
  }
  
  const adminUser = createUserObject('admin');
  // { adminRole: true }
  
  /* Advanced Example */
  const fieldName = 'preferences';
  const userSettings = {
    [fieldName]: {
      theme: 'dark',
      notifications: true
    }
  };
  // { preferences: { theme: 'dark', notifications: true } }`,
        ja: `/* 基本的な動的オブジェクトキー */
  const key = 'username';
  const user = {
    [key]: 'JohnDoe'  // { username: 'JohnDoe' }
  };
  
  /* 動的キー生成 */
  function createUserObject(role) {
    return {
      [\`\${role}Role\`]: true
    };
  }
  
  const adminUser = createUserObject('admin');
  // { adminRole: true }
  
  /* 高度な例 */
  const fieldName = 'preferences';
  const userSettings = {
    [fieldName]: {
      theme: 'dark',
      notifications: true
    }
  };
  // { preferences: { theme: 'dark', notifications: true } }`
      },
      references: [
        'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names',
        'https://javascript.info/object#computed-properties'
      ]
    },
    {
      id: 'js-destructuring',
      category: 'js-advanced',
      titleEn: 'How does Destructuring Assignment Work in JavaScript?',
      titleJa: 'JavaScriptの分割代入の仕組みは？',
      answerEn: 'Destructuring allows extracting values from arrays or properties from objects into distinct variables in a more concise way.',
      answerJa: '分割代入は、配列やオブジェクトから値を抽出し、より簡潔な方法で個別の変数に代入する機能です。',
      codeExample: {
        en: `/* Object Destructuring */
  const person = { name: 'John', age: 30, city: 'New York' };
  const { name, age } = person;
  // name = 'John', age = 30
  
  /* Nested Object Destructuring */
  const user = {
    id: 123,
    details: {
      username: 'johndoe',
      email: 'john@example.com'
    }
  };
  const { id, details: { username } } = user;
  // id = 123, username = 'johndoe'
  
  /* Array Destructuring */
  const colors = ['red', 'green', 'blue'];
  const [first, second, third] = colors;
  // first = 'red', second = 'green', third = 'blue'
  
  /* Rest Operator with Destructuring */
  const numbers = [1, 2, 3, 4, 5];
  const [head, ...rest] = numbers;
  // head = 1, rest = [2, 3, 4, 5]`,
        ja: `/* オブジェクトの分割代入 */
  const person = { name: 'John', age: 30, city: 'New York' };
  const { name, age } = person;
  // name = 'John', age = 30
  
  /* ネストしたオブジェクトの分割代入 */
  const user = {
    id: 123,
    details: {
      username: 'johndoe',
      email: 'john@example.com'
    }
  };
  const { id, details: { username } } = user;
  // id = 123, username = 'johndoe'
  
  /* 配列の分割代入 */
  const colors = ['red', 'green', 'blue'];
  const [first, second, third] = colors;
  // first = 'red', second = 'green', third = 'blue'
  
  /* レストオペレータを使った分割代入 */
  const numbers = [1, 2, 3, 4, 5];
  const [head, ...rest] = numbers;
  // head = 1, rest = [2, 3, 4, 5]`
      },
      references: [
        'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment',
        'https://javascript.info/destructuring-assignment'
      ]
    },
      {
        id: 'react-computed-property-names',
        category: 'react-state',
        titleEn: 'Why do we use [name] in React form handling?',
        titleJa: 'Reactのフォーム処理で[name]を使用する理由は？',
        answerEn: 'In React form handling, [name] is a computed property name that allows us to dynamically update the correct field in our state object based on which input was changed.',
        answerJa: 'Reactのフォーム処理で[name]は計算されたプロパティ名であり、どの入力が変更されたかに基づいて状態オブジェクトの正しいフィールドを動的に更新することができます。',
        codeExample: {
          en: `// Form handling with computed property names
    const [formData, setFormData] = useState({
      name: '',
      email: ''
    });
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      
      // Without computed property name - WRONG
      // This creates a property literally called "name"
      setFormData({
        ...formData,
        name: value // Always updates the "name" field
      });
      
      // With computed property name - CORRECT
      // This uses the value of the "name" variable as the property
      setFormData({
        ...formData,
        [name]: value // Updates "name" or "email" depending on which input changed
      });
    }`,
          ja: `// 計算されたプロパティ名を使ったフォーム処理
    const [formData, setFormData] = useState({
      name: '',
      email: ''
    });
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      
      // 計算されたプロパティ名なし - 間違い
      // これは文字通り "name" という名前のプロパティを作成します
      setFormData({
        ...formData,
        name: value // 常に "name" フィールドを更新
      });
      
      // 計算されたプロパティ名あり - 正解
      // これは "name" 変数の値をプロパティとして使用します
      setFormData({
        ...formData,
        [name]: value // どの入力が変更されたかに応じて "name" または "email" を更新
      });
    }`
        },
        references: [
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names',
          'https://reactjs.org/docs/forms.html'
        ]
      }
    
  ];
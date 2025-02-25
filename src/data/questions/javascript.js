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
    }
  ];
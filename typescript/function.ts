// 函数重载
function hello(word: string | number): string;
function hello(word: string[]): string;

function hello(word): string {
  return 'line 5'
}

console.log(
 hello('line 9')
)

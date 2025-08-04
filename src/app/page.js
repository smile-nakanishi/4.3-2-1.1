// app/page.js
import TodoList from './components/TodoList'; // 作成したTodoListコンポーネントをインポート

export default function HomePage() {
  return (
    <div>
      {/* ページ全体に中央揃えや基本スタイルを適用したい場合 */}
      <main style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f2f5', minHeight: '100vh', padding: '20px 0' }}>
        <TodoList /> {/* TodoListコンポーネントを配置 */}
      </main>
    </div>
  );
}
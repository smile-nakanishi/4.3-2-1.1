// app/components/TodoList.js
"use client"; // クライアントコンポーネントであることを宣言

import React, { useState } from 'react';
import styles from './TodoList.module.css'; // CSS Modulesをインポート

// TodoListコンポーネントを定義
const TodoList = () => {
  // タスクのリストを管理するステート。各タスクは { id, title, completed } の形式。
  const [tasks, setTasks] = useState([]);
  // 新しいタスクの入力値を管理するステート
  const [newTaskTitle, setNewTaskTitle] = useState('');

  // タスクを追加する関数
  const addTask = (e) => {
    e.preventDefault(); // フォームのデフォルト送信（ページリロード）を防ぐ
    if (newTaskTitle.trim() === '') {
      // 入力値が空の場合は何もしない
      alert('タスクタイトルを入力してください。');
      return;
    }

    // 新しいタスクオブジェクトを作成
    const newTask = {
      // ユニークなIDを生成（簡易的にタイムスタンプを使用）
      id: Date.now(),
      title: newTaskTitle,
      completed: false, // 初期状態は未完了
    };

    // 既存のタスクリストに新しいタスクを追加し、ステートを更新
    setTasks([...tasks, newTask]);
    setNewTaskTitle(''); // 入力フィールドをクリア
  };

  // タスクの完了状態を切り替える関数
  const toggleTaskCompletion = (id) => {
    // 指定されたIDのタスクのcompleted状態を反転させる
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // タスクを削除する関数
  const deleteTask = (id) => {
    // 指定されたID以外のタスクで新しいリストを作成し、ステートを更新
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>シンプルなTodoリスト</h1>

      {/* タスク追加フォーム */}
      <form onSubmit={addTask} className={styles.addForm}>
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="新しいタスクを追加..."
          className={styles.taskInput}
        />
        <button type="submit" className={styles.addButton}>追加</button>
      </form>

      {/* タスクリスト */}
      {tasks.length === 0 ? (
        <p className={styles.noTasksMessage}>まだタスクはありません。追加してみましょう！</p>
      ) : (
        <ul className={styles.taskList}>
          {tasks.map(task => (
            <li key={task.id} className={`${styles.taskItem} ${task.completed ? styles.completed : ''}`}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
                className={styles.checkbox}
              />
              <span className={styles.taskTitle}>{task.title}</span>
              <button onClick={() => deleteTask(task.id)} className={styles.deleteButton}>削除</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
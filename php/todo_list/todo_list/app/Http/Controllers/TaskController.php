<?php

namespace App\Http\Controllers;

use App\Folder;
use App\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
  public function index(int $id)
  {
    // Folderモデルのallクラスメソッドで全てのフォルダデータ取得
    $folders = Folder::all();

    // 選ばれたフォルダを取得
    $current_folder = Folder::find($id);

    // 選ばれたフォルダに紐づくタスクを取得
    $tasks = $current_folder->tasks()->get();
    // $tasks = Task::Where('folder_id', $current_folder->id)->get();

    // view(テンプレートファイル名, 配列[テンプレート側で参照する際の変数名(key)) => $foldersの値])
    return view('tasks/index', [
      'folders' => $folders,
      'current_folder_id' => $id,
      'tasks' => $tasks,
    ]);
  }

  public function showCreateForm(int $id)
  {
      return view('tasks/create', [
          'folder_id' => $id,
      ]);
  }
}

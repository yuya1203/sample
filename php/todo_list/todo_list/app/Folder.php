<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Folder extends Model
{
    //モデル名の複数形のテーブルに自動的に対応
    public function tasks()
    {   //$this->hasMany('App\Task', 'folder_id', 'id');の省略   （テーブル名単数形_id, idの場合にのみ省略可能)
        //hasMany(関連するモデル名, 関連するテーブルの外部キーカラム名, hasManyを定義している側のテーブルの外部キーカラム名)
        return $this->hasMany('App\Task');
    }
}

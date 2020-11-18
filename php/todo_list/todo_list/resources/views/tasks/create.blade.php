@extends('layout')
{{-- <!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>ToDo App</title> --}}
@section('styles')
        {{-- flatpickrのデフォルトスタイルシート --}}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
        {{-- flatpickrのブルーテーマ追加スタイルシート --}}
        <link rel="stylesheet" href="https://npmcdn.com/flatpickr/dist/themes/material_blue.css">

        {{-- <link rel="stylesheet" href="/css/styles.css"> --}}
@endsection

@section('content')
    {{-- </head>
    <body>
        <header>
            <nav class="my-navbar">
                <a class="my-navbar-brand" href="/">ToDo App</a>
            </nav>
        </header>
        <main> --}}
            <div class="container">
                <div class="row">
                    <div class="col col-md-offset-3 col-md-6">
                        <nav class="panel panel-default">
                            <div class="panel-heading">タスクを追加する</div>
                            <div class="panel-body">
                                @if($errors->any())
                                    <div class="alert alert-danger">
                                        @foreach($errors->all() as $message)
                                            <p>{{ $message }}</p>
                                        @endforeach
                                    </div>
                                @endif
                                <form action="{{ route('tasks.create', ['id' => $folder_id]) }}" method="POST">
                                    @csrf
                                    <div class="form-group">
                                        <label for="title">タイトル</label>
                                        <input type="text" class="form-control" name="title" id="title" value="{{old('title') }}" />
                                    </div>
                                    <div class="form-group">
                                        <label for="due_date">期限</label>
                                        <input type="text" class="form-control" name="due_date" id="due_date" value="{{ old('due_date') }}" />
                                    </div>
                                    <div class="text-right">
                                        <button type="submit" class="btn btn-primary">送信</button>
                                    </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        {{-- </main> --}}
@endsection
@section('scripts')
        {{-- 月刊カレンダー表示のjsランブラリ(日付選択機能) --}}
        {{-- flatpickrスクリプト --}}
        <script src="https://npmcdn.com/flatpickr/dist/flatpickr.min.js"></script>
        {{-- flatpickrの日本語化のためのスクリプト --}}
        <script src="https://npmcdn.com/flatpickr/dist/l10n/ja.js"></script>
        <script>
            flatpickr(document.getElementById('due_date'), {
                locale: 'ja',    //言語設定
                dateFormat: "Y/m/d",    //日付表記フォーマット
                minDate: new Date()    //過去のデータ入力不可
            });
        </script>
@endsection
    {{-- </body>
</html> --}}

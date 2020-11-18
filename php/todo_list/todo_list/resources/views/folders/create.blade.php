@extends('layout')
{{-- <!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="id=edge">
        <title>ToDo App</title>
        <link rel="stylesheet" href="/css/styles.css">
    </head>
    <body>
        <header>
            <nav class="my-navbar">
                <a class="my-navbar-brand" href="/">ToDo App</a>
            </nav>
        </header> --}}
@section('content')
        {{-- <main> --}}
            <div class="container">
                <div class="row">
                    <div class="col col-md-offset-3 col-md-6">
                        <nav class="panel panel-default">
                            <div class="panel-heading">フォルダを追加する</div>
                            <div class="panel-body">
                                {{-- エラ〜メッセージ　　エラーが何かあったか --}}
                                @if($errors->any())
                                    <div class="alert alert-danger">
                                        <ul>
                                            @foreach($errors->all() as $message)
                                                <li>{{ $message }}</li>
                                            @endforeach
                                        </ul>
                                    </div>
                                @endif
                                <form action="{{ route('folders.create') }}" method="post">
                                    {{-- csrfトークン発行しセッションに保存してhidden,input要素に埋め込む->同じトークンを持っているpostリクエストしか受け取らなくなる(不正なリクエストは弾く) --}}
                                    @csrf
                                    <div class="form-group">
                                        <label for="title">フォルダ名</label>
                                        {{-- old()  postリクエストされたセッション値を取得 --}}
                                        <input type="text" class="form-control" name="title" id="title" value="{{ old('title') }}" />
                                    </div>
                                    <div class="text-right">
                                        <button type="submit" class="btn btn-primary">送信</button>
                                    </div>
                                </form>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </main>
@endsection
    {{-- </body>
</html> --}}

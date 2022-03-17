@extends('layaouts/base')

@section('body')
    <div class="row">
        <div class="col-mx-auto">
            <h1 class="text-center">Bienvenue sur votre site de gestion de contacts</h1>
        </div>

        <script>
            docReady( function(){
            listerAllContact()
         })
        </script>
    </div>

@endsection

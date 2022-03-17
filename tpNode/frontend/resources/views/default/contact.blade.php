@extends('layaouts/base')

@section('body')

    <div class="row">
        <div class="col-6-mx-auto">
            <h1 class="text-center">Ajoute d'un Contact</h1>
        </div>
    </div>

    <div class="row-my-5">
        <div class="col-6-my-auto">
            <form action="" method="POST" enctype="multipart/form-data">

                @csrf

                   <div class="row my-5">
                       <div class="col-6 mx-auto">
                           <div class="form-group">
                               <label for="title" class="form-label">Nom</label>
                               <input type="text"
                                      id="nom"
                                      name="nom"
                                      value=""
                                      placeholder="TOTO"
                                      class="form-control">
                           </div>

                           <div class="form-group">
                                <label for="title" class="form-label">Prenom</label>
                                <input type="text"
                                   id="prenom"
                                   name="prenom"
                                   value=""
                                   placeholder="TOTO"
                                   class="form-control">
                            </div>


                            <div class="form-group">
                                <label for="title" class="form-label">Adresse</label>
                                <input type="text"
                                   id="prenom"
                                   name="prenom"
                                   value=""
                                   placeholder="TOTO"
                                   class="form-control">
                            </div>

                            <div class="form-group">
                                <label for="title" class="form-label">E-mail</label>
                                <input type="text"
                                   id="prenom"
                                   name="prenom"
                                   value=""
                                   placeholder="TOTO"
                                   class="form-control">
                            </div>

                            <div class="form-group">
                                <label for="title" class="form-label">Téléphone</label>
                                <input type="text"
                                   id="telephone"
                                   name="telephone"
                                   value=""
                                   placeholder="+33(0) 0 00 00 00 00"
                                   class="form-control">
                            </div>






                           <button type="submit" class="btn btn-primary mt-5 d-block mx-auto">Valider</button>

                       </div>
                   </div>

               </form>

        </div>
    </div>



@endsection

/*
* Program : Liste des catégories
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/services/categorie.service';
import { ProduitService } from 'src/services/produit.service';
import { IProduit } from 'src/interfaces/produit';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/classes/categorie';
import { FileUpload } from 'src/classes/fileUpload';
import { ICategorie } from 'src/interfaces/categorie';
import { Regex } from 'src/classes/regex';

@Component({
  selector: 'app-categorie',
  templateUrl: './detail.component.html',
  styles: [`
              #categorieDetail .row
              {
                  margin: 0 0 5px 0;
              }
          `]
})

export class DetailCategorieComponent implements OnInit {

  public model:Categorie;
  public nodigitPattern:string = Regex.NoDigitPattern();
  public uploadStatus:boolean = false;
  public titre:string;
  private file:string;
  private id:string;
  public fileToUpload:FileUpload = new FileUpload();

  constructor(private _categorieService:CategorieService,
              private _produitService:ProduitService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit()
  {
      this.id = this.route.snapshot.params.id;
      this.model = new Categorie();
      this.titre = "Ajouter";
      if(this.id)
      {
          this.titre = "Modifier";
          this._categorieService.getCategorieById(this.id).subscribe(data => this.response(this,data));
      }
  }
  response(obj,data):void
  {
      obj.model._id = data._id;
      obj.model.nom = data.nom;
      obj.model.description = data.description;
      obj.model.photo = data.photo;
      obj.model.active = data.active;
  }
  onSubmit():void
  {
      if(this.id)
      {
          this._categorieService.updateCategorie(this.id,this.model)
                                .subscribe(data => this.responseSaveCategorie(this,data,this.model));
      }else{
          this._categorieService.saveCategorie(this.model)
                                .subscribe(data => data?this.router.navigateByUrl('/admin/categorie'):"");
      }
   }
   responseSaveCategorie(obj:DetailCategorieComponent,OldCategorie:ICategorie,NewCategorie:ICategorie):void
   {
        let that:DetailCategorieComponent = obj;
        obj._produitService.getProduitList()
                            .subscribe(function(produits){
                                  that.router.navigateByUrl('/admin/categorie');
                                  let produitBD:IProduit[] = produits.filter(data => data.category[0]._id == OldCategorie._id);
                                  if(produitBD.length > 0)
                                      that.updateProduit(that,produitBD,NewCategorie);
                            });
   }
   updateProduit(obj:DetailCategorieComponent,produits:IProduit[],categorie:ICategorie):void
   {
       produits.forEach(function(produit)
       {
            produit.category[0] = categorie;
            obj._produitService.updateProduit(produit._id,produit)
                               .subscribe(data => data);
       });
   }
}

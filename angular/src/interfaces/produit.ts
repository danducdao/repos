/*
* Program : Interface IProduit
* Écrit par : Dan Duc Dao
*/

import { ICategorie } from '../interfaces/categorie';

export interface IProduit{
    _id:string,
    nom:string,
    category:ICategorie[],
    fournisseur:any,
    quantite:number,
    prix:number,
    quantiteRestante:number,
    quantiteCommande:number,
    reapprovisionnement:number,
    discontinue:boolean,
    active:boolean
}

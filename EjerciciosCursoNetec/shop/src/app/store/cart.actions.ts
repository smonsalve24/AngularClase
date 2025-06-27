import { createAction, props } from "@ngrx/store";
import { Item } from "../services/item.service";

// se define las acciones (métodos) que se usarán para modificar el estado 
// name [source] Event, propiedades

export const addToCart = createAction(
    '[cart] Add To Cart', 
    props<{item: Item}>()
)

export const removeFromCart = createAction(
    '[cart] Remove To Cart', 
    props<{idItem: number}>()
)
export const clearCart = createAction(
    '[cart] Clear Cart'
)
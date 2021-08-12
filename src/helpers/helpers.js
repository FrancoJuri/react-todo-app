import { types } from "../types/types";

export const handleToggle = (id, dispatch) => {
    dispatch({
        type: types.toggle,
        payload: id,
    })
}

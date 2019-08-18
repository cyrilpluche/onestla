import * as fromUser from "./reducers/user.reducer";

export interface State {
    user: fromUser.UserState
}

export const getUser = (state: State) => state.user
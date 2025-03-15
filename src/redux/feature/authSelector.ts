import { RootState } from "../store";

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

export const selectUser = (state: RootState) => state.auth.user;

export const selectError = (state: RootState) => state.auth.error;

export const selectLoading = (state: RootState) => state.auth.loading;

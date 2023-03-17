export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter;

export const selectLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectIsLogin = state => state.auth.isLogin;

export const selectUser = state => state.auth.user;

export const selectUserName = state => state.auth.user.name;

export const selectRefreshUser = state => state.auth.isRefresh;
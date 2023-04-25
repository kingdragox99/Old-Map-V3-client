import { defineStore } from 'pinia';
import { UserCompany, Company, Notification } from '@/core';

export const useStorage = defineStore('storage', {
  state: () => ({
    user: {} as UserCompany,
    company: null as Company | null,
    notifications: [] as Notification[],
  }),
  getters: {
    currentCompany(state) {
      if (state.company) return state.company;

      if (!state.user.companies) {
        return;
      }

      state.company = state.user.companies[0];
      return state.company;
    },
  },
  actions: {
    async fetch() {
      const {
        auth: { isAuthenticated },
        notification,
      } = useAPI();
      try {
        const [{ data: user }, { data: notifications }] = await Promise.all([
          isAuthenticated(),
          notification.list(),
        ]);
        this.user = user.value!;
        this.notifications = notifications.value!;
        if (user.value!.companies.length === 0) {
          return showError({
            statusCode: 401,
            message: 'error.no_companies',
          });
        }
      } catch (err) {
        console.log(err);
      }
    },
    changeCompany(id: string) {
      this.company = this.user.companies!.find(
        (company) => company.app_company_id === id,
      )!;
    },
  },
  persist: true,
});

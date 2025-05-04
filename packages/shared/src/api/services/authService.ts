import apiClient from "../client";

export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignInResponse {
  userId: string;
  accessToken: string;
  refreshToken?: string;
  expired?: number;
}

export const authService = {
  signIn: async (credentials: SignInRequest): Promise<SignInResponse> => {
    const response = await apiClient.post<SignInResponse>(
      "/auth/sign-in",
      credentials
    );

    if (typeof window !== "undefined" && response.accessToken) {
      localStorage.setItem("auth-token", response.accessToken);

      if (response.refreshToken) {
        localStorage.setItem("refresh-token", response.refreshToken);
      }
    }

    return response;
  },

  signOut: async (): Promise<void> => {
    try {
      await apiClient.post("/auth/sign-out");
    } catch (error) {
      console.error("Sign out error:", error);
    }

    if (typeof window !== "undefined") {
      localStorage.removeItem("auth-token");
      localStorage.removeItem("refresh-token");
    }
  },

  isAuthenticated: (): boolean => {
    if (typeof window !== "undefined") {
      return !!localStorage.getItem("auth-token");
    }
    return false;
  },
};

declare namespace Res {
  interface Basic {
    status: string;
    message: string;
  }

  export interface SignUp extends Basic {
    data: { userId: number };
  }

  export interface Upload extends Basic {
    data: {
      userId: number;
      diagnosis: string;
      confidence: number;
    };
  }
}
